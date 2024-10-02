import { Suspense } from 'react'

import GithubProvider from '../../components/github-provider'
import GoogleProvider from '../../components/google-provider'
import { SigninForm } from '../../components/signin-form'

export default async function SignIn() {
  return (
    <div className="flex flex-col w-1/2 mx-auto">
      <h1 className="text-2xl">Sign In</h1>
      <div className="flex">
        <GoogleProvider />
        <GithubProvider />
      </div>

      <span className="text-2xl font-semibold text-white text-center mt-8">Or</span>
      <Suspense fallback={<div>Loading..</div>}>
        <SigninForm />
      </Suspense>

      <div>
        Do not have an account?{' '}
        <a href="/auth/register" className="hover:pointer">
          Register
        </a>
      </div>
    </div>
  )
}
