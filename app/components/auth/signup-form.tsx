
'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { supabase } from '../../lib/supabase'

const schema = z
  .object({
    name: z.string().min(2),
    email: z.string().email(),
    password: z.string().min(6),
    confirmPassword: z.string().min(6),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  })

export default function SignupForm() {
  const router = useRouter()

  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: any) => {
    setLoading(true)

    const { error } = await supabase.auth.signUp({
      email: data.email,
      password: data.password,
    })

    if (!error) {
      router.push('/dashboard')
    }

    setLoading(false)
  }

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 w-full max-w-md p-8">
      <h1 className="text-3xl font-bold text-center text-green-600 mb-8">
        Create Account
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <input
            {...register('name')}
            placeholder="Full Name"
            className="w-full border rounded-xl p-3"
          />
        </div>

        <div>
          <input
            {...register('email')}
            placeholder="Email"
            className="w-full border rounded-xl p-3"
          />
        </div>

        <div>
          <input
            type="password"
            {...register('password')}
            placeholder="Password"
            className="w-full border rounded-xl p-3"
          />
        </div>

        <div>
          <input
            type="password"
            {...register('confirmPassword')}
            placeholder="Confirm Password"
            className="w-full border rounded-xl p-3"
          />

          {errors.confirmPassword && (
            <p className="text-red-500 text-sm mt-1">
              {errors.confirmPassword.message as string}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl"
        >
          {loading ? 'Loading...' : 'Create Account'}
        </button>
      </form>
    </div>
  )
}