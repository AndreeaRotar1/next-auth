import React from 'react'

import { auth } from '@/auth'

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
