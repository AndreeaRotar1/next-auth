import React, { Suspense } from 'react'

import NewVerificationForm from '@/app/components/new-verification-form'

const NewVerificationPage = () => {
  return (
    <Suspense fallback={<div>Loading..</div>}>
      <NewVerificationForm />
    </Suspense>
  )
}

export default NewVerificationPage
