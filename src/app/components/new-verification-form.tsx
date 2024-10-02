'use client'

import { useCallback, useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'

import { SIGNIN_ROUTE } from '../constants/login-constants'
import { newVerification } from '../actions/new-verification'

const NewVerificationForm = () => {
  const [error, setError] = useState<string | undefined>()
  const [success, setSuccess] = useState<string | undefined>()

  const searchParams = useSearchParams()

  const token = searchParams.get('token')

  const onSubmit = useCallback(() => {
    if (success ?? error) return

    if (!token) {
      setError('Missing token')
      return
    }

    newVerification(token)
      .then((data) => {
        setSuccess(data.succes)
        setError(data.error)
      })
      .catch(() => {
        setError('Something went wrong!')
      })
  }, [token, success, error])

  useEffect(() => {
    onSubmit()
  }, [onSubmit])

  return (
    <div className="flex flex-col space-y-3 items-start">
      <span>Confirming your verification</span>
      {!success && !error && <div>loading..</div>}
      {!success && <span>{error && error}</span>}
      <span className="text-green-700">{success && success}</span>
      <Link href={SIGNIN_ROUTE} className="border p-2">
        Back to login
      </Link>
    </div>
  )
}

export default NewVerificationForm
