'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '../../lib/supabase'

export default function LoginForm() {
  const router = useRouter()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const handleLogin = async () => {
    setLoading(true)

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (!error) {
      router.push('/dashboard')
    }

    setLoading(false)
  }

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 w-full max-w-md p-8">
      <h1 className="text-3xl font-bold text-center text-green-600 mb-8">
        Welcome Back
      </h1>

      <div className="space-y-4">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full border rounded-xl p-3"
        />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full border rounded-xl p-3"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl"
        >
          {loading ? 'Loading...' : 'Login'}
        </button>
      </div>
    </div>
  )
}