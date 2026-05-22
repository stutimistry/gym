
// 'use client'

// import Link from 'next/link'
// import { useRouter } from 'next/navigation'
// import { useState } from 'react'
// import { supabase } from '../lib/supabase'

// export default function LoginPage() {
//   const router = useRouter()

//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const [error, setError] = useState('')
//   const [loading, setLoading] = useState(false)

//   const handleLogin = async () => {
//     setLoading(true)
//     setError('')

//     const { data: authData, error } = await supabase.auth.signInWithPassword({
//       email,
//       password,
//     })

//     if (error) {
//       setError('Invalid email or password')
//       setLoading(false)
//       return
//     }

//     const { data: profile } = await supabase
//       .from('profiles')
//       .select('role')
//       .eq('id', authData.user.id)
//       .single()

//     const role = profile?.role

//     if (role === 'trainer') {
//       router.push('/trainer/dashboard')
//     } else if (role === 'member') {
//       router.push('/member/dashboard')
//     } else {
//       router.push('/dashboard')
//     }
//   }

//   return (
//     <div className="min-h-screen bg-linear-to-br from-white to-green-50 flex items-center justify-center p-6">
//       <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 w-full max-w-md">

//         <h1 className="text-4xl font-bold text-center text-green-600 mb-2">
//           Welcome Back
//         </h1>

//         <p className="text-center text-gray-500 mb-8">
//           Login to continue
//         </p>

//         <div className="space-y-4">

//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full border rounded-xl p-3"
//           />

//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full border rounded-xl p-3"
//           />

//           {error && (
//             <div className="bg-red-100 text-red-600 p-3 rounded-xl text-sm">
//               {error}
//             </div>
//           )}

//           <button
//             onClick={handleLogin}
//             disabled={loading}
//             className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl transition-all"
//           >
//             {loading ? 'Logging in...' : 'Login'}
//           </button>

//         </div>

//         <p className="text-center mt-6 text-gray-500">
//           Don't have an account?{' '}

//           <Link
//             href="/signup"
//             className="text-green-600 font-medium"
//           >
//             Signup
//           </Link>
//         </p>
//       </div>
//     </div>
//   )
// }


'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { supabase } from '../lib/supabase'

export default function LoginPage() {
  const router = useRouter()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleLogin = async () => {
    setLoading(true)
    setError('')

    const {
      data: authData,
      error,
    } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      setError('Invalid email or password')
      setLoading(false)
      return
    }

    const { data: profile } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', authData.user.id)
      .single()

    const role = profile?.role
    const userEmail =
      authData.user.email?.toLowerCase()

    // ADMIN LOGIN
    if (userEmail === 'stuti@gmail.com') {
      router.push('/dashboard')
    }

    // TRAINER LOGIN
    else if (role === 'trainer') {
      router.push('/trainer/dashboard')
    }

    // MEMBER LOGIN
    else {
      router.push('/member/dashboard')
    }

    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-white to-green-50 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 w-full max-w-md">

        {/* HEADING */}
        <h1 className="text-4xl font-bold text-center text-green-600 mb-2">
          Welcome Back
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Login to continue to FitZone Gym
        </p>

        {/* FORM */}
        <div className="space-y-4">

          {/* EMAIL */}
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="w-full border border-gray-200 rounded-xl p-4 outline-none focus:ring-2 focus:ring-green-500"
          />

          {/* PASSWORD */}
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="w-full border border-gray-200 rounded-xl p-4 outline-none focus:ring-2 focus:ring-green-500"
          />

          {/* ERROR */}
          {error && (
            <div className="bg-red-100 text-red-600 p-3 rounded-xl text-sm">
              {error}
            </div>
          )}

          {/* LOGIN BUTTON */}
          <button
            onClick={handleLogin}
            disabled={loading}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl transition-all font-semibold"
          >
            {loading
              ? 'Logging in...'
              : 'Login'}
          </button>

        </div>

        {/* SIGNUP */}
        <p className="text-center mt-6 text-gray-500">
          Don&apos;t have an account?{' '}

          <Link
            href="/signup"
            className="text-green-600 font-semibold"
          >
            Signup
          </Link>
        </p>

      </div>
    </div>
  )
}