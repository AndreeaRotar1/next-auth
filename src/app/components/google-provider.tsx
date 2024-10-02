import { DEFAULT_LOGIN_REDIRECT } from '@/routes'

import { signIn } from '../../auth'

export default function GoogleProvider() {
  return (
    <form
      action={async () => {
        'use server'
        await signIn('google', { redirectTo: DEFAULT_LOGIN_REDIRECT })
      }}>
      <button className="border p-1" type="submit">
        Signin with Google
      </button>
    </form>
  )
}
