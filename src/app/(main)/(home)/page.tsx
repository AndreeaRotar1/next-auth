import Link from 'next/link'
import React from 'react'

import { REGISTER_ROUTE, SIGNIN_ROUTE } from '@/app/constants/login-constants'

const page = () => {
  return (
    <div className="flex gap-1">
      <Link href={REGISTER_ROUTE}>Register</Link>
      <Link href={SIGNIN_ROUTE}>Login</Link>
    </div>
  )
}

export default page
