import Link from 'next/link'
import React from 'react'

import { REGISTER_ROUTE, SIGNIN_ROUTE } from '@/app/constants/login-constants'

const page = () => {
  return (
    <div className="flex gap-4 justify-center items-center h-screen w-full">
      <Link href={REGISTER_ROUTE} className="border p-3">
        Register
      </Link>
      <Link href={SIGNIN_ROUTE} className="border p-3">
        Login
      </Link>
    </div>
  )
}

export default page
