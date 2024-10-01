import { REGISTER_ROUTE, SIGNIN_ROUTE } from '@/app/constants/login-constants'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <Link href={REGISTER_ROUTE}>Register</Link>
      <Link href={SIGNIN_ROUTE}>Login</Link>
    </div>
  )
}

export default page
