import { z } from 'zod'

export const RegisterSchema = z.object({
  email: z
    .string()
    .min(1, 'Email is required.')
    .email({ message: 'Please enter a valid email address (e.g., example@domain.com)' }),
  password: z
    .string()
    .min(6, { message: 'Password must be at least 6 characters long.' })
    .regex(/[a-z]/, { message: 'Password must contain at least one lowercase letter' }) // Lowercase letter
    .regex(/[A-Z]/, { message: 'Password must contain at least one uppercase letter' }) // Uppercase letter
    .regex(/\d/, { message: 'Password must contain at least one number' }) // Number
    .regex(/[\W_]/, { message: 'Password must contain at least one special character' }), // Special character
  name: z.string().min(1, { message: 'Name is required' })
})
export const SignInSchema = z.object({
  email: z
    .string()
    .min(1, 'Email is required.')
    .email({ message: 'Please enter a valid email address (e.g., example@domain.com)' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters long.' })
})
