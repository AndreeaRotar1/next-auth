import Credentials from 'next-auth/providers/credentials'
import type { NextAuthConfig } from 'next-auth'
import Github from 'next-auth/providers/github'
import Google from 'next-auth/providers/google'

import { SignInSchema } from './app/schemas/index'
import { verifyPassword } from './lib/hash'
import { getUserByEmail } from './app/data/user'

export default {
  providers: [
    Credentials({
      async authorize(credentials) {
        const validatedFields = SignInSchema.safeParse(credentials)

        if (validatedFields.success) {
          const { email, password } = validatedFields.data

          const user = await getUserByEmail(email)
          if (!user?.password) return null // for the cases when user signup with google account

          const arePasswordsMatch = verifyPassword(user.password, password)

          if (arePasswordsMatch) return user
        }
        return null
      }
    }),
    Github({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET
    }),
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET
    })
  ]
} satisfies NextAuthConfig
