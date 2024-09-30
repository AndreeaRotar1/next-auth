'use server'

import type * as z from 'zod'
import { AuthError } from 'next-auth'

import { DEFAULT_LOGIN_REDIRECT } from '@/routes'
import { generateVerificationToken } from '@/lib/token'
import { sendVerificationEmail } from '@/lib/mail'

import { SignInSchema } from '../schemas'
import { signIn } from '../../auth'
import { getUserByEmail } from '../data/user'

export const login = async (data: z.infer<typeof SignInSchema>) => {
  // Validate the input data
  const validatedFields = SignInSchema.safeParse(data)

  if (!validatedFields.success) {
    return { error: 'Invalid fields!' }
  }

  const { email, password } = validatedFields.data

  const existingUser = await getUserByEmail(email)

  if (!existingUser?.email || !existingUser.password) {
    return { error: 'User does not exist.' }
  }

  try {
    await signIn('credentials', {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT
    })
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin': {
          return { error: 'Invalid credentials' }
        }
        case 'AccessDenied': {
          if (!existingUser.emailVerified) {
            const verificationToken = await generateVerificationToken(existingUser.email)

            await sendVerificationEmail(
              verificationToken.email as string,
              verificationToken.token as string
            )

            return { error: 'We sent a confirmation email. Please confirm your mail.' }
          }
          return { error: 'Access Denied' }
        }
        default:
          return { error: 'Something went wrong' }
      }
    }
    throw error
  }

  return { success: 'User logged in successfully' }
}
