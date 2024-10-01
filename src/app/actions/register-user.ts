'use server'

import { type z } from 'zod'

import { generateVerificationToken } from '@/lib/token'
import { sendVerificationEmail } from '@/lib/mail'

import { type RegisterSchema } from '../schemas'
import { hashUserPassword } from '../../lib/hash'
import { db } from '../../lib/db'
import { getUserByEmail } from '../data/user'

export const registerUser = async (values: z.infer<typeof RegisterSchema>) => {
  const hashedPassword = hashUserPassword(values.password)
  const email = values.email

  const existingUser = await getUserByEmail(email)

  if (existingUser) {
    return {
      errors: {
        email: 'It seems like an account for the chosen email already exists.'
      }
    }
  }

  await db.user.create({
    data: {
      name: values.name,
      email: values.email,
      password: hashedPassword
    }
  })

  const verificationToken = await generateVerificationToken(email)

  await sendVerificationEmail(verificationToken.email, verificationToken.token)

  return { success: 'Confirmation email sent!' }
}
