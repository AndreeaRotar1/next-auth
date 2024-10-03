import { auth } from '@/auth'

const Page = async () => {
  const session = await auth()
  return (
    <div className="space-y-6">
      <h1 className="text-2xl">Dashboard</h1>
      <p>Logged in as {session?.user?.email}</p>
    </div>
  )
}
export default Page
