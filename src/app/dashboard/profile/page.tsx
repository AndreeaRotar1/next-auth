import { auth } from '@/auth'
import React from 'react'

const page = async () => {
  const session = await auth()

  return (
    <>
      <div>profile</div>
      <div>{JSON.stringify(session)}</div>
    </>
  )
}

export default page
