import { z } from 'zod'

export const RegisterSchema = z.object({
  email: z
    .string()
    .min(1, 'Email is required.')
    .email({ message: 'Please enter a valid email address (e.g., example@domain.com)' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters long.' }),
  name: z.string().min(1, { message: 'Name is required' })
})
export const SignInSchema = z.object({
  email: z
    .string()
    .min(1, 'Email is required.')
    .email({ message: 'Please enter a valid email address (e.g., example@domain.com)' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters long.' })
})
