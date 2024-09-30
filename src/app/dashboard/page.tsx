import { auth, signOut } from '@/auth'

const Page = async () => {
  const session = await auth()
  return (
    <>
      <p>Logged in as {session?.user?.email}</p>
      <form
        action={async () => {
          'use server'
          await signOut()
        }}>
        <button type="submit">Sign out</button>
      </form>
    </>
  )
}
export default Page
