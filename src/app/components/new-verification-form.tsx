'use client'

import { useCallback, useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'

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
    <div className="flex flex-col">
      <span>Confirming your verification</span>
      {!success && !error && <div>loading..</div>}
      {!success && <span>{error && error}</span>}
      <span>{success && success}</span>
      <a href={SIGNIN_ROUTE}>Back to login</a>
    </div>
  )
}

export default NewVerificationForm
