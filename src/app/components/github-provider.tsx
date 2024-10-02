import { DEFAULT_LOGIN_REDIRECT } from '@/routes'

import { signIn } from '../../auth'

export default function GithubProvider() {
  return (
    <form
      action={async () => {
        'use server'
        await signIn('github', { redirectTo: DEFAULT_LOGIN_REDIRECT })
      }}>
      <button className="border p-1" type="submit">
        Signin with GitHub
      </button>
    </form>
  )
}
