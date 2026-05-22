
'use client'

import Link from 'next/link'
import { supabase } from '../lib/supabase'

import {
  usePathname,
  useRouter,
} from 'next/navigation'

import {
  LayoutDashboard,
  Users,
  Package,
  Calendar,
  ClipboardCheck,
  CreditCard,
  Settings,
  LogOut,
} from 'lucide-react'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  const router = useRouter()

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/login')
  }

  const menu = [
    {
      name: 'Dashboard',
      icon: LayoutDashboard,
      path: '/dashboard',
    },
    {
      name: 'Members',
      icon: Users,
      path: '/dashboard/members',
    },
    {
      name: 'Products',
      icon: Package,
      path: '/dashboard/products',
    },
    {
      name: 'Classes',
      icon: Calendar,
      path: '/dashboard/classes',
    },
    {
      name: 'Check-ins',
      icon: ClipboardCheck,
      path: '/dashboard/checkins',
    },
    {
      name: 'Payments',
      icon: CreditCard,
      path: '/dashboard/payments',
    },
    {
      name: 'Settings',
      icon: Settings,
      path: '/dashboard/settings',
    },
  ]

  return (
    <div className="flex h-screen bg-[#f6f8f7]">
      {/* SIDEBAR */}
      <aside className="w-72 bg-white border-r border-gray-100 flex flex-col">
        {/* LOGO */}
        <div className="p-6 border-b border-gray-100">
          <h1 className="text-2xl font-bold text-green-600">
            FitZone Gym
          </h1>

          <p className="text-sm text-gray-500 mt-1">
            Admin Dashboard
          </p>
        </div>

        {/* MENU */}
        <div className="flex-1 p-4 space-y-2">
          {menu.map(item => {
            const Icon = item.icon

            const active =
              pathname === item.path

            return (
              <Link
                key={item.name}
                href={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition ${
                  active
                    ? 'bg-green-100 text-green-700 font-semibold'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Icon className="w-5 h-5" />

                {item.name}
              </Link>
            )
          })}
        </div>

        {/* LOGOUT */}
        <div className="p-4 border-t border-gray-100">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-600 hover:bg-red-50 transition"
          >
            <LogOut className="w-5 h-5" />

            Logout
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 overflow-y-auto p-6">
        {children}
      </main>
    </div>
  )
}
