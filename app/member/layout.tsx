
'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { supabase } from '../lib/supabase'

export default function MemberLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()

  const handleLogout = async () => {
    await supabase.auth.signOut()

    router.push('/login')
  }

  return (
    <div className="flex min-h-screen bg-gray-50">

      {/* SIDEBAR */}
      <aside className="w-72 bg-white border-r border-gray-200 p-6 flex flex-col justify-between">

        <div>

          {/* LOGO */}
          <div className="mb-10">
            <h1 className="text-3xl font-bold text-green-600">
              Gym SaaS
            </h1>

            <p className="text-gray-500 text-sm mt-1">
              Member Dashboard
            </p>
          </div>

          {/* NAVIGATION */}
          <nav className="space-y-3">

            <Link
              href="/member/dashboard"
              className="block px-4 py-3 rounded-xl hover:bg-green-50 hover:text-green-700 text-gray-700 font-medium transition"
            >
              Dashboard
            </Link>

            <Link
              href="/member/classes"
              className="block px-4 py-3 rounded-xl hover:bg-green-50 hover:text-green-700 text-gray-700 font-medium transition"
            >
              Book Classes
            </Link>

            <Link
              href="/member/payments"
              className="block px-4 py-3 rounded-xl hover:bg-green-50 hover:text-green-700 text-gray-700 font-medium transition"
            >
              Payments
            </Link>

            <Link
              href="/member/profile"
              className="block px-4 py-3 rounded-xl hover:bg-green-50 hover:text-green-700 text-gray-700 font-medium transition"
            >
              My Profile
            </Link>

          </nav>
        </div>

        {/* BOTTOM */}
        <div className="space-y-4">

          {/* MEMBERSHIP CARD */}
          <div className="bg-green-50 border border-green-100 rounded-2xl p-4">
            <p className="text-sm text-gray-500">
              Current Plan
            </p>

            <h2 className="text-xl font-bold text-green-700 mt-1">
              Premium Membership
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Active until Dec 2026
            </p>
          </div>

          {/* LOGOUT BUTTON */}
          <button
            onClick={handleLogout}
            className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl font-medium transition"
          >
            Logout
          </button>

        </div>

      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-6 overflow-y-auto">
        {children}
      </main>

    </div>
  )
}