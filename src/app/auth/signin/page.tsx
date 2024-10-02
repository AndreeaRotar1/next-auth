import { Suspense } from 'react'

import GithubProvider from '../../components/github-provider'
import GoogleProvider from '../../components/google-provider'
import { SigninForm } from '../../components/signin-form'

export default async function SignIn() {
  return (
    <div className="flex">
      <h1>Sign In</h1>
      <GoogleProvider />
      <GithubProvider />

      <span className="text-2xl font-semibold text-white text-center mt-8">Or</span>
      <Suspense fallback={<div>Loading..</div>}>
        <SigninForm />
      </Suspense>

      <div>
        Do not have an account? <a href="/auth/register">Register</a>
      </div>
    </div>
  )
}
