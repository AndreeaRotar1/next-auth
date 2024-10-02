'use client'

import { type z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { clsx } from 'clsx'
import { useSearchParams } from 'next/navigation'

import { login } from '../actions/login'
import { SignInSchema } from '../schemas'

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

const FIELD_NAME = {
  EMAIL: 'email',
  PASSWORD: 'password'
} as const

const FIELD_LABEL = {
  EMAIL: 'Email *',
  PASSWORD: 'Password'
} as const

type FormType = z.infer<typeof SignInSchema>

export const SigninForm = (props: CredentialsFormProps) => {
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
    resolver: zodResolver(SignInSchema),
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
    <div>
      <form onSubmit={handleSubmit(submitHandler)} className="w-full">
        <div className="flex flex-col flex-wrap justify-between text-14px font-500 leading-16px md:flex-row lg:leading-20px">
          {fieldInputs.map((fieldInput: InputField) => {
            return (
              <React.Fragment key={fieldInput.name}>
                {fieldInput.type === 'input' && (
                  <div className="w-full flex flex-col">
                    <label htmlFor={fieldInput.name}>{fieldInput.label}</label>

                    <input
                      id={fieldInput.name}
                      placeholder={fieldInput.placeholder}
                      type="text"
                      {...register(fieldInput.name)}
                      className={clsx('p-3 text-14px leading-16px lg:leading-20px border', {
                        'border-red-500': errors[fieldInput.name]
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

        <div className="mt-5 flex flex-col gap-5 md:mt-6 lg:mt-7 items-start">
          {urlError && <p>{urlError}</p>}
          {errors && <p>{errors.root?.message}</p>}

          <button className="border p-3">Sign in</button>
        </div>
      </form>
    </div>
  )
}
