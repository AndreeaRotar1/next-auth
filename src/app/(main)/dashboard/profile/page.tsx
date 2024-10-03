import React from 'react'

import { auth } from '@/auth'

const page = async () => {
  const session = await auth()

  return (
    <>
      <h1 className="text-2xl mb-3">Profile</h1>
      <p>User name: {session?.user?.name}</p>
      <p>User email: {session?.user?.email}</p>
    </>
  )
}

export default page
