// // 'use client'

// // import Link from 'next/link'
// // import { useRouter } from 'next/navigation'
// // import { supabase } from '../lib/supabase'

// // export default function TrainerLayout({
// //   children,
// // }: {
// //   children: React.ReactNode
// // }) {
// //   const router = useRouter()

// //   const handleLogout = async () => {
// //     await supabase.auth.signOut()
// //     router.push('/login')
// //   }

// //   return (
// //     <div className="flex min-h-screen bg-gray-50">
// //       {/* SIDEBAR */}
// //       <aside className="w-72 bg-white border-r border-gray-200 p-6 flex flex-col justify-between">
// //         <div>
// //           <h1 className="text-2xl font-bold text-green-600 mb-10">
// //             Trainer Panel
// //           </h1>

// //           <nav className="space-y-3">
// //             <Link
// //               href="/trainer/dashboard"
// //               className="block px-4 py-3 rounded-xl hover:bg-green-50 text-gray-700 font-medium"
// //             >
// //               Dashboard
// //             </Link>

// //             <Link
// //               href="/trainer/classes"
// //               className="block px-4 py-3 rounded-xl hover:bg-green-50 text-gray-700 font-medium"
// //             >
// //               My Classes
// //             </Link>

// //             <Link
// //               href="/trainer/calendar"
// //               className="block px-4 py-3 rounded-xl hover:bg-green-50 text-gray-700 font-medium"
// //             >
// //               Calendar
// //             </Link>

// //             <Link
// //               href="/trainer/members"
// //               className="block px-4 py-3 rounded-xl hover:bg-green-50 text-gray-700 font-medium"
// //             >
// //               Members
// //             </Link>

// //             <Link
// //               href="/trainer/settings"
// //               className="block px-4 py-3 rounded-xl hover:bg-green-50 text-gray-700 font-medium"
// //             >
// //               Settings
// //             </Link>
// //           </nav>
// //         </div>

// //         <button
// //           onClick={handleLogout}
// //           className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl font-medium transition"
// //         >
// //           Logout
// //         </button>
// //       </aside>

// //       {/* CONTENT */}
// //       <main className="flex-1 p-6">
// //         {children}
// //       </main>
// //     </div>
// //   )
// // }

// 'use client'

// import Link from 'next/link'
// import { usePathname, useRouter } from 'next/navigation'
// import { supabase } from '../lib/supabase'

// import {
//   LayoutDashboard,
//   Calendar,
//   Users,
//   Settings,
//   Dumbbell,
//   LogOut,
// } from 'lucide-react'

// export default function TrainerLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   const router = useRouter()
//   const pathname = usePathname()

//   const handleLogout = async () => {
//     await supabase.auth.signOut()
//     router.push('/login')
//   }

//   const menuItems = [
//     {
//       name: 'Dashboard',
//       href: '/trainer/dashboard',
//       icon: LayoutDashboard,
//     },
//     {
//       name: 'My Classes',
//       href: '/trainer/classes',
//       icon: Calendar,
//     },
//     {
//       name: 'Members',
//       href: '/trainer/members',
//       icon: Users,
//     },
//     {
//       name: 'Workout Plans',
//       href: '/trainer/workouts',
//       icon: Dumbbell,
//     },
//     {
//       name: 'Settings',
//       href: '/trainer/settings',
//       icon: Settings,
//     },
//   ]

//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       {/* Sidebar */}
//       <aside className="w-72 bg-white border-r border-gray-200 flex flex-col justify-between">
//         <div>
//           {/* Logo */}
//           <div className="p-8 border-b border-gray-100">
//             <h1 className="text-4xl font-bold text-green-600">
//               FitZone Gym
//             </h1>

//             <p className="text-gray-500 mt-2 text-lg">
//               Trainer Dashboard
//             </p>
//           </div>

//           {/* Menu */}
//           <nav className="p-6 space-y-3">
//             {menuItems.map((item) => {
//               const Icon = item.icon
//               const active = pathname === item.href

//               return (
//                 <Link
//                   key={item.name}
//                   href={item.href}
//                   className={`flex items-center gap-4 px-5 py-4 rounded-2xl font-medium text-lg transition-all
//                     ${
//                       active
//                         ? 'bg-green-100 text-green-700'
//                         : 'text-gray-600 hover:bg-green-50'
//                     }`}
//                 >
//                   <Icon size={24} />
//                   {item.name}
//                 </Link>
//               )
//             })}
//           </nav>
//         </div>

//         {/* Bottom User */}
//         <div className="p-6 border-t border-gray-100">
//           <button
//             onClick={handleLogout}
//             className="flex items-center gap-3 text-red-500 hover:text-red-600 font-semibold text-lg"
//           >
//             <LogOut size={22} />
//             Logout
//           </button>
//         </div>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 p-8 overflow-y-auto">
//         {children}
//       </main>
//     </div>
//   )
// }


'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { supabase } from '../lib/supabase'

import {
  LayoutDashboard,
  Calendar,
  Users,
  Settings,
  Dumbbell,
  LogOut,
} from 'lucide-react'

export default function TrainerLayout({
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
    { name: 'Dashboard', href: '/trainer/dashboard', icon: LayoutDashboard },
    { name: 'My Classes', href: '/trainer/classes', icon: Calendar },
    { name: 'Members', href: '/trainer/members', icon: Users },
    { name: 'Workout Plans', href: '/trainer/workouts', icon: Dumbbell },
    { name: 'Settings', href: '/trainer/settings', icon: Settings },
  ]

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">

      {/* SIDEBAR */}
      <aside className="w-72 bg-white/70 backdrop-blur-xl border-r border-gray-200 flex flex-col justify-between shadow-xl">

        {/* TOP */}
        <div>

          {/* LOGO */}
          <div className="p-8 border-b border-gray-100">
            <h1 className="text-3xl font-extrabold text-green-600 tracking-tight">
              FitZone
            </h1>
            <p className="text-gray-500 mt-1">
              Trainer Dashboard
            </p>
          </div>

          {/* MENU */}
          <nav className="p-5 space-y-2">

            {menuItems.map((item) => {
              const Icon = item.icon
              const active = pathname === item.href

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative flex items-center gap-4 px-4 py-3 rounded-2xl transition-all duration-200
                    ${
                      active
                        ? 'bg-green-50 text-green-700 shadow-md'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                >

                  {/* Active left bar */}
                  {active && (
                    <span className="absolute left-0 top-2 bottom-2 w-1 bg-green-500 rounded-full"></span>
                  )}

                  <Icon size={22} />
                  <span className="font-medium">{item.name}</span>

                </Link>
              )
            })}

          </nav>
        </div>

        {/* LOGOUT */}
        <div className="p-6 border-t border-gray-100">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 text-red-500 hover:text-red-600 font-semibold transition"
          >
            <LogOut size={20} />
            Logout
          </button>
        </div>

      </aside>

      {/* MAIN */}
      <main className="flex-1 p-10 overflow-y-auto">
        {children}
      </main>

    </div>
  )
}