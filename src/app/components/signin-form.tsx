'use client'

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { clsx } from 'clsx'
import { useSearchParams } from 'next/navigation'

import { login } from '../actions/login'

type CredentialsFormProps = {
  csrfToken?: string
}

export type InputField = {
  name: (typeof FIELD_NAME)[keyof typeof FIELD_NAME]
  label: string
  width?: string
  type?: string
  placeholder?: string
}

const schema = z.object({
  email: z
    .string()
    .min(1, 'Email is required.')
    .email({ message: 'Please enter a valid email address (e.g., example@domain.com)' }),
  password: z
    .string()
    .trim()
    .min(1, 'Password is required.')
    .max(50, 'Name cannot exceed 50 characters.')
    .min(2, { message: 'Name must be at least 2 characters long.' })
})

const FIELD_NAME = {
  EMAIL: 'email',
  PASSWORD: 'password'
} as const

const FIELD_LABEL = {
  EMAIL: 'Email *',
  PASSWORD: 'Password'
} as const

type FormType = z.infer<typeof schema>

export const SigninForm = (props: CredentialsFormProps) => {
  const [success, setSuccess] = useState('')
  const searchParams = useSearchParams()
  const urlError =
    searchParams.get('error') === 'OAuthAccountNotLinked'
      ? 'Email already in use with different provider'
      : ''

  const {
    handleSubmit,
    register,
    setError,
    formState: { errors }
  } = useForm<FormType>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const submitHandler = async (data: FormType) => {
    await login(data).then((result) => {
      if (result?.error) {
        setError('root', {
          type: 'value',
          message: result.error
        })
      }
      if (result.success) {
        setSuccess(result.success)
      }
    })
  }

  const fieldInputs: InputField[] = [
    {
      name: FIELD_NAME.EMAIL,
      label: FIELD_LABEL.EMAIL,
      width: 'md:w-[48%]',
      type: 'input',
      placeholder: 'email'
    },
    {
      name: FIELD_NAME.PASSWORD,
      label: FIELD_LABEL.PASSWORD,
      width: 'md:w-[48%]',
      type: 'input',
      placeholder: 'password'
    }
  ]

  return (
    <div className="m-auto">
      <form onSubmit={handleSubmit(submitHandler)} className="w-full">
        <div className="flex flex-col flex-wrap justify-between text-14px font-500 leading-16px md:flex-row lg:leading-20px">
          {fieldInputs.map((fieldInput: InputField) => {
            return (
              <React.Fragment key={fieldInput.name}>
                {fieldInput.type === 'input' && (
                  <div>
                    <label htmlFor={fieldInput.name}>{fieldInput.label}</label>

                    <input
                      id={fieldInput.name}
                      placeholder={fieldInput.placeholder}
                      type="text"
                      {...register(fieldInput.name)}
                      className={clsx('p-3 text-14px leading-16px lg:leading-20px', {
                        'border-error-500': errors[fieldInput.name]
                      })}
                    />

                    {errors[fieldInput.name] && (
                      <p className="font-400">{errors[fieldInput.name]?.message}</p>
                    )}
                  </div>
                )}
              </React.Fragment>
            )
          })}
        </div>

        <div className="mt-5 flex flex-col-reverse items-start justify-between gap-5 md:mt-6 md:flex-row lg:mt-7">
          {urlError && <p>{urlError}</p>}
          {errors && <p>{errors.root?.message}</p>}

          <button>Sign in</button>
        </div>
      </form>
    </div>
  )
}
