
// 'use client'

// import Link from 'next/link'
// import { useRouter } from 'next/navigation'
// import { supabase } from '../lib/supabase'

// export default function MemberLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   const router = useRouter()

//   const handleLogout = async () => {
//     await supabase.auth.signOut()

//     router.push('/login')
//   }

//   return (
//     <div className="flex min-h-screen bg-gray-50">

//       {/* SIDEBAR */}
//       <aside className="w-72 bg-white border-r border-gray-200 p-6 flex flex-col justify-between">

//         <div>

//           {/* LOGO */}
//           <div className="mb-10">
//             <h1 className="text-3xl font-bold text-green-600">
//               Gym SaaS
//             </h1>

//             <p className="text-gray-500 text-sm mt-1">
//               Member Dashboard
//             </p>
//           </div>

//           {/* NAVIGATION */}
//           <nav className="space-y-3">

//             <Link
//               href="/member/dashboard"
//               className="block px-4 py-3 rounded-xl hover:bg-green-50 hover:text-green-700 text-gray-700 font-medium transition"
//             >
//               Dashboard
//             </Link>

//             <Link
//               href="/member/classes"
//               className="block px-4 py-3 rounded-xl hover:bg-green-50 hover:text-green-700 text-gray-700 font-medium transition"
//             >
//               Book Classes
//             </Link>

//             <Link
//               href="/member/payments"
//               className="block px-4 py-3 rounded-xl hover:bg-green-50 hover:text-green-700 text-gray-700 font-medium transition"
//             >
//               Payments
//             </Link>

//             <Link
//               href="/member/profile"
//               className="block px-4 py-3 rounded-xl hover:bg-green-50 hover:text-green-700 text-gray-700 font-medium transition"
//             >
//               My Profile
//             </Link>

//           </nav>
//         </div>

//         {/* BOTTOM */}
//         <div className="space-y-4">

//           {/* MEMBERSHIP CARD */}
//           <div className="bg-green-50 border border-green-100 rounded-2xl p-4">
//             <p className="text-sm text-gray-500">
//               Current Plan
//             </p>

//             <h2 className="text-xl font-bold text-green-700 mt-1">
//               Premium Membership
//             </h2>

//             <p className="text-sm text-gray-500 mt-1">
//               Active until Dec 2026
//             </p>
//           </div>

//           {/* LOGOUT BUTTON */}
//           <button
//             onClick={handleLogout}
//             className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl font-medium transition"
//           >
//             Logout
//           </button>

//         </div>

//       </aside>

//       {/* MAIN CONTENT */}
//       <main className="flex-1 p-6 overflow-y-auto">
//         {children}
//       </main>

//     </div>
//   )
// }

'use client'

import Link from 'next/link'
import {
  usePathname,
  useRouter,
} from 'next/navigation'

import { supabase } from '../lib/supabase'

import {
  LayoutDashboard,
  Calendar,
  CreditCard,
  User,
  LogOut,
} from 'lucide-react'

export default function MemberLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const pathname = usePathname()

  const handleLogout = async () => {
    await supabase.auth.signOut()

    router.push('/login')
  }

  const menuItems = [
    {
      name: 'Dashboard',
      href: '/member/dashboard',
      icon: LayoutDashboard,
    },
    {
      name: 'Book Classes',
      href: '/member/classes',
      icon: Calendar,
    },
    {
      name: 'Payments',
      href: '/member/payments',
      icon: CreditCard,
    },
    {
      name: 'My Profile',
      href: '/member/profile',
      icon: User,
    },
  ]

  return (
    <div className="flex min-h-screen bg-[#f6f8f7]">

      {/* SIDEBAR */}
      <aside className="w-72 bg-white border-r border-gray-100 flex flex-col justify-between">

        <div>

          {/* LOGO */}
          <div className="p-8 border-b border-gray-100">
            <h1 className="text-4xl font-bold text-green-600">
              FitZone Gym
            </h1>

            <p className="text-gray-500 mt-2 text-lg">
              Member Dashboard
            </p>
          </div>

          {/* MENU */}
          <nav className="p-5 space-y-3">

            {menuItems.map((item) => {
              const Icon = item.icon

              const active =
                pathname === item.href

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center gap-4 px-5 py-4 rounded-2xl text-lg font-medium transition-all
                    ${
                      active
                        ? 'bg-green-100 text-green-700'
                        : 'text-gray-600 hover:bg-green-50'
                    }`}
                >
                  <Icon size={24} />

                  {item.name}
                </Link>
              )
            })}

          </nav>
        </div>

        {/* BOTTOM */}
        <div className="p-6 border-t border-gray-100">

          {/* MEMBERSHIP CARD */}
          <div className="bg-green-50 border border-green-100 rounded-2xl p-5 mb-5">

            <p className="text-sm text-gray-500">
              Current Plan
            </p>

            <h2 className="text-2xl font-bold text-green-700 mt-2">
              Premium
            </h2>

            <p className="text-sm text-gray-500 mt-2">
              Active until Dec 2026
            </p>

          </div>

          {/* LOGOUT */}
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-3 bg-red-500 hover:bg-red-600 text-white py-4 rounded-2xl font-semibold transition"
          >
            <LogOut size={20} />

            Logout
          </button>

        </div>

      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-8 overflow-y-auto">
        {children}
      </main>

    </div>
  )
}