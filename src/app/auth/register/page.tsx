import { redirect } from 'next/navigation'

import { RegisterForm } from '../../components/register-form'
import { auth } from '../../../auth'
import GoogleProvider from '../../components/google-provider'
import GithubProvider from '../../components/github-provider'

export default async function Register() {
  const session = await auth()

  if (session) return redirect('/dashboard')

  return (
    <div className="flex">
      <h1>Register</h1>

      <GoogleProvider />
      <GithubProvider />

      <span className="text-2xl font-semibold text-white text-center mt-8">Or</span>
      <RegisterForm />
      <div>
        Already have an account? <a href="/auth/signin">Sign in</a>
      </div>
    </div>
  )
}
