import { signOut } from '@/auth'

import NavBar from '../components/nav-bar'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="w-full border p-3 flex justify-between">
        <NavBar />
        <div>
          <form
            action={async () => {
              'use server'
              await signOut()
            }}>
            <button type="submit" className="border p-1">
              Sign out
            </button>
          </form>
        </div>
      </div>

      <div>{children}</div>
    </div>
  )
}
