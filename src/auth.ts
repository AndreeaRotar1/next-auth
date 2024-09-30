import NextAuth from 'next-auth'
import { PrismaAdapter } from '@auth/prisma-adapter'

import authConfig from './auth.config'
import { db } from './lib/db'
import { getUserById } from './app/data/user'

export const {
  handlers: { GET, POST },
  signIn,
  signOut,
  auth
} = NextAuth({
  events: {
    async linkAccount({ user }) {
      await db.user.update({
        where: { id: user.id },
        data: { emailVerified: new Date() }
      })
    }
  },
  pages: {
    signIn: '/auth/signin',
    error: '/auth/error'
  },
  callbacks: {
    async signIn({ user, account }) {
      // Allow OAuth without email verification
      if (account?.provider !== 'credentials') return true

      if (!user.id) return false

      const existingUser = await getUserById(user.id)

      // Prevent sign in without email verification
      if (!existingUser?.emailVerified) return false

      // TODO: Add 2FA check

      return true
    },
    async session({ token, session }) {
      if (token.sub && session.user) {
        session.user.id = token.sub
      }

      return session
    },
    async jwt({ token }) {
      return token
    }
  },
  adapter: PrismaAdapter(db), // pentru a putea salva in db conturile de la provideri
  session: { strategy: 'jwt' },
  ...authConfig
})
