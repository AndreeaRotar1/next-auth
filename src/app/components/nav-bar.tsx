'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import clsx from 'clsx'

const NavBar = () => {
  const pathname = usePathname()

  return (
    <div className="gap-3 flex">
      <Link
        href="/dashboard/profile"
        className={clsx('', { 'font-bold': pathname === '/dashboard/profile' })}>
        Profile
      </Link>
      <Link href="/dashboard" className={clsx('', { 'font-bold': pathname === '/dashboard' })}>
        Dashboard
      </Link>
    </div>
  )
}

export default NavBar
