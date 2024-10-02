'use client'

import { zodResolver } from '@hookform/resolvers/zod'
// import { redirect } from 'next/navigation'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import clsx from 'clsx'
import { type z } from 'zod'

import { RegisterSchema } from '../schemas'
import { registerUser } from '../actions/register-user'

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
  PASSWORD: 'password',
  NAME: 'name'
} as const

const FIELD_LABEL = {
  EMAIL: 'Email *',
  PASSWORD: 'Password',
  NAME: 'name'
} as const

type FormType = z.infer<typeof RegisterSchema>

export const RegisterForm = (props: CredentialsFormProps) => {
  const [success, setSuccess] = useState('')

  const {
    handleSubmit,
    register,
    setError,
    reset,
    formState: { errors }
  } = useForm<FormType>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: '',
      email: '',
      password: ''
    }
  })

  const submitHandler = async (data: FormType) => {
    try {
      const result = await registerUser(data)
      if (result?.errors) {
        // handle errors, e.g., display error message to user
        if (result.errors.email) {
          setError('email', {
            type: 'manual',
            message: result.errors.email
          })
        }
      } else {
        setSuccess('Verification email sent!')
        reset()
      }
    } catch (error) {
      console.error('An error occurred during registration:', error)
    }
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
    },
    {
      name: FIELD_NAME.NAME,
      label: FIELD_LABEL.NAME,
      width: 'md:w-[48%]',
      type: 'input',
      placeholder: 'name'
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

        {success && <p>{success}</p>}

        <div className="mt-5 flex flex-col-reverse items-start justify-between gap-5 md:mt-6 md:flex-row lg:mt-7">
          <button className="border p-3">Register</button>
        </div>
      </form>
    </div>
  )
}
