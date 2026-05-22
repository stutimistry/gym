

// 'use client'

// import Link from 'next/link'
// import { supabase } from '../lib/supabase'

// import {
//   usePathname,
//   useRouter,
// } from 'next/navigation'

// import {
//   LayoutDashboard,
//   User,
//   Calendar,
//   ClipboardCheck,
//   CreditCard,
//   Settings,
//   LogOut,
//   Dumbbell,
// } from 'lucide-react'

// export default function MemberLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   const pathname = usePathname()

//   const router = useRouter()

//   const handleLogout = async () => {
//     await supabase.auth.signOut()
//     router.push('/login')
//   }

//   const menu = [
//     {
//       name: 'Dashboard',
//       icon: LayoutDashboard,
//       path: '/member/dashboard',
//     },
//     {
//       name: 'My Profile',
//       icon: User,
//       path: '/member/profile',
//     },
//     {
//       name: 'My Plan',
//       icon: Dumbbell,
//       path: '/member/plan',
//     },
//     {
//       name: 'My Bookings',
//       icon: Calendar,
//       path: '/member/bookings',
//     },
//     {
//       name: 'My Check-ins',
//       icon: ClipboardCheck,
//       path: '/member/checkins',
//     },
//     {
//       name: 'Payments',
//       icon: CreditCard,
//       path: '/member/payments',
//     },
//     {
//       name: 'Settings',
//       icon: Settings,
//       path: '/member/settings',
//     },
//   ]

//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       {/* SIDEBAR */}
//       <aside className="w-72 bg-white border-r border-gray-200 flex flex-col justify-between">
//         {/* TOP */}
//         <div>
//           {/* LOGO */}
//           <div className="p-8 border-b border-gray-100">
//             <h1 className="text-4xl font-bold text-green-600">
//               FitZone Gym
//             </h1>

//             <p className="text-gray-500 mt-2 text-lg">
//               Member Dashboard
//             </p>
//           </div>

//           {/* MENU */}
//           <nav className="p-5 space-y-3">
//             {menu.map(item => {
//               const Icon = item.icon

//               const active = pathname === item.path

//               return (
//                 <Link
//                   key={item.name}
//                   href={item.path}
//                   className={`flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-200 text-lg font-medium ${
//                     active
//                       ? 'bg-green-100 text-green-700'
//                       : 'text-gray-600 hover:bg-green-50'
//                   }`}
//                 >
//                   <Icon className="w-6 h-6" />

//                   {item.name}
//                 </Link>
//               )
//             })}
//           </nav>
//         </div>

//         {/* BOTTOM */}
//         <div className="p-5 border-t border-gray-100">
//           {/* USER */}
//           <div className="flex items-center gap-3 mb-5">
//             <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center text-white font-bold text-lg">
//               M
//             </div>

//             <div>
//               <h3 className="font-semibold text-gray-800">
//                 Member
//               </h3>

//               <p className="text-sm text-gray-500">
//                 member@fitzone.com
//               </p>
//             </div>
//           </div>

//           {/* LOGOUT */}
//           <button
//             onClick={handleLogout}
//             className="flex items-center gap-3 text-red-500 hover:text-red-600 font-semibold text-lg transition"
//           >
//             <LogOut className="w-5 h-5" />

//             Logout
//           </button>
//         </div>
//       </aside>

//       {/* MAIN CONTENT */}
//       <main className="flex-1 overflow-y-auto p-8">
//         {children}
//       </main>
//     </div>
//   )
// }

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
  Dumbbell,
  CreditCard,
  Settings,
  LogOut,
  Calendar,
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
      name: 'Payments',
      icon: CreditCard,
      path: '/dashboard/payments',
    },
    {
      name: 'Classes',
      icon: Calendar,
      path: '/dashboard/classes',
    },
     {
      name: 'checkins',
      icon: Calendar,
      path: '/dashboard/checkins',
    },
    {
      name: 'Settings',
      icon: Settings,
      path: '/dashboard/settings',
    },
  ]

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* SIDEBAR */}
      <aside className="w-72 bg-white border-r border-gray-200 flex flex-col justify-between">

        {/* TOP */}
        <div>

          {/* LOGO */}
          <div className="p-8 border-b border-gray-100">
            <h1 className="text-4xl font-bold text-green-600">
              FitZone Gym
            </h1>

            <p className="text-gray-500 mt-2 text-lg">
              Admin Dashboard
            </p>
          </div>

          {/* MENU */}
          <nav className="p-5 space-y-3">

            {menu.map(item => {
              const Icon = item.icon

              const active = pathname === item.path

              return (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-200 text-lg font-medium ${
                    active
                      ? 'bg-green-100 text-green-700'
                      : 'text-gray-600 hover:bg-green-50'
                  }`}
                >
                  <Icon className="w-6 h-6" />

                  {item.name}
                </Link>
              )
            })}

          </nav>
        </div>

        {/* BOTTOM */}
        <div className="p-5 border-t border-gray-100">

          {/* ADMIN USER */}
          <div className="flex items-center gap-3 mb-5">

            <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center text-white font-bold text-lg">
              A
            </div>

            <div>
              <h3 className="font-semibold text-gray-800">
                Admin
              </h3>

              <p className="text-sm text-gray-500">
                stuti@gmail.com
              </p>
            </div>

          </div>

          {/* LOGOUT */}
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 text-red-500 hover:text-red-600 font-semibold text-lg transition"
          >
            <LogOut className="w-5 h-5" />

            Logout
          </button>

        </div>

      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 overflow-y-auto p-8">
        {children}
      </main>

    </div>
  )
}