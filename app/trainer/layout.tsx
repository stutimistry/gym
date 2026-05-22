'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { supabase } from '../lib/supabase'

export default function TrainerLayout({
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
          <h1 className="text-2xl font-bold text-green-600 mb-10">
            Trainer Panel
          </h1>

          <nav className="space-y-3">
            <Link
              href="/trainer/dashboard"
              className="block px-4 py-3 rounded-xl hover:bg-green-50 text-gray-700 font-medium"
            >
              Dashboard
            </Link>

            <Link
              href="/trainer/classes"
              className="block px-4 py-3 rounded-xl hover:bg-green-50 text-gray-700 font-medium"
            >
              My Classes
            </Link>

            <Link
              href="/trainer/calendar"
              className="block px-4 py-3 rounded-xl hover:bg-green-50 text-gray-700 font-medium"
            >
              Calendar
            </Link>

            <Link
              href="/trainer/members"
              className="block px-4 py-3 rounded-xl hover:bg-green-50 text-gray-700 font-medium"
            >
              Members
            </Link>

            <Link
              href="/trainer/settings"
              className="block px-4 py-3 rounded-xl hover:bg-green-50 text-gray-700 font-medium"
            >
              Settings
            </Link>
          </nav>
        </div>

        <button
          onClick={handleLogout}
          className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl font-medium transition"
        >
          Logout
        </button>
      </aside>

      {/* CONTENT */}
      <main className="flex-1 p-6">
        {children}
      </main>
    </div>
  )
}