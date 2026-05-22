'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { supabase } from '../lib/supabase'

export default function SignupPage() {
  const router = useRouter()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] =
    useState('')

  const [
    confirmPassword,
    setConfirmPassword,
  ] = useState('')

  const [role, setRole] =
    useState('member')

  const [error, setError] =
    useState('')

  const [loading, setLoading] =
    useState(false)

  const handleSignup = async () => {
    setError('')

    if (
      !name ||
      !email ||
      !password ||
      !confirmPassword
    ) {
      setError('Please fill all fields')
      return
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match')
      return
    }

    if (password.length < 6) {
      setError(
        'Password must be at least 6 characters'
      )
      return
    }

    setLoading(true)

    // CREATE AUTH USER
    const { data, error } =
      await supabase.auth.signUp({
        email,
        password,
      })

    if (error) {
      if (error.message.toLowerCase().includes('rate limit') || error.status === 429) {
        setError('Too many signups. Please wait a few minutes and try again, or disable email confirmation in Supabase.')
      } else {
        setError(error.message)
      }
      setLoading(false)
      return
    }

    const userId = data.user?.id

    if (userId) {
      const { error: profileError } = await supabase
        .from('profiles')
        .insert([{ id: userId, full_name: name, email, role }])

      if (profileError) {
        setError('Account created but profile save failed: ' + profileError.message)
        setLoading(false)
        return
      }
    }

    setLoading(false)
    router.push('/login')
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-white to-green-50 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 w-full max-w-md">

        <h1 className="text-4xl font-bold text-center text-green-600 mb-2">
          Create Account
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Join Gym SaaS Platform
        </p>

        <div className="space-y-4">

          {/* FULL NAME */}
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            className="w-full border rounded-xl p-3 outline-none focus:border-green-500"
          />

          {/* EMAIL */}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="w-full border rounded-xl p-3 outline-none focus:border-green-500"
          />

          {/* ROLE DROPDOWN */}
          <select
            value={role}
            onChange={(e) =>
              setRole(e.target.value)
            }
            className="w-full border rounded-xl p-3 outline-none focus:border-green-500"
          >
            <option value="member">
              Member
            </option>

            <option value="trainer">
              Trainer
            </option>

            <option value="admin">
              Admin
            </option>
          </select>

          {/* PASSWORD */}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="w-full border rounded-xl p-3 outline-none focus:border-green-500"
          />

          {/* CONFIRM PASSWORD */}
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) =>
              setConfirmPassword(
                e.target.value
              )
            }
            className="w-full border rounded-xl p-3 outline-none focus:border-green-500"
          />

          {/* ERROR */}
          {error && (
            <div className="bg-red-100 text-red-600 p-3 rounded-xl text-sm">
              {error}
            </div>
          )}

          {/* BUTTON */}
          <button
            onClick={handleSignup}
            disabled={loading}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl transition-all duration-300 disabled:opacity-50"
          >
            {loading
              ? 'Creating Account...'
              : 'Create Account'}
          </button>

        </div>

        <p className="text-center mt-6 text-gray-500">
          Already have an account?{' '}

          <Link
            href="/login"
            className="text-green-600 font-medium"
          >
            Login
          </Link>

        </p>
      </div>
    </div>
  )
}