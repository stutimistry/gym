// import {
//   Users,
//   DollarSign,
//   Activity,
//   TrendingUp,
// } from 'lucide-react'

// const stats = [
//   {
//     title: 'Members',
//     value: '248',
//     change: '+12 this month',
//     icon: Users,
//   },
//   {
//     title: 'Active',
//     value: '47',
//     change: '+5 vs yesterday',
//     icon: Activity,
//   },
//   {
//     title: 'Revenue',
//     value: '$14,820',
//     change: '+8.3% MoM',
//     icon: DollarSign,
//   },
//   {
//     title: 'Growth',
//     value: '2.4%',
//     change: '+0.3%',
//     icon: TrendingUp,
//   },
// ]

// const members = [
//   {
//     name: 'Priya Rathod',
//     email: 'priya@email.com',
//     plan: 'Full Access',
//     status: 'Active',
//   },
//   {
//     name: 'Mihir Shah',
//     email: 'mihir@email.com',
//     plan: 'Monthly',
//     status: 'Active',
//   },
//   {
//     name: 'Neha Patel',
//     email: 'neha@email.com',
//     plan: 'Class Pack',
//     status: 'Expiring',
//   },
// ]

// export default function DashboardPage() {
//   return (
//     <div className="p-6">
//       {/* Header */}
//       <div className="flex items-center justify-between mb-8">
//         <div>
//           <h1 className="text-3xl font-bold text-gray-900">
//             Dashboard
//           </h1>

//           <p className="text-gray-500 mt-1">
//             Welcome back 👋
//           </p>
//         </div>

//         <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-xl font-medium transition">
//           + Add Member
//         </button>
//       </div>

//       {/* Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mb-6">
//         {stats.map((item, index) => {
//           const Icon = item.icon

//           return (
//             <div
//               key={index}
//               className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm"
//             >
//               <div className="w-11 h-11 rounded-xl bg-green-100 text-green-700 flex items-center justify-center mb-4">
//                 <Icon className="w-5 h-5" />
//               </div>

//               <p className="text-gray-500 text-sm">
//                 {item.title}
//               </p>

//               <h2 className="text-4xl font-bold text-gray-900 mt-1">
//                 {item.value}
//               </h2>

//               <p className="text-green-600 text-sm mt-2">
//                 {item.change}
//               </p>
//             </div>
//           )
//         })}
//       </div>

//       {/* Bottom */}
//       <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
//         {/* Members */}
//         <div className="xl:col-span-2 bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
//           <div className="p-5 border-b border-gray-100 flex items-center justify-between">
//             <h2 className="text-xl font-semibold text-gray-900">
//               Recent Members
//             </h2>

//             <button className="text-green-600 font-medium">
//               View all →
//             </button>
//           </div>

//           <table className="w-full">
//             <thead>
//               <tr className="text-gray-400 text-sm border-b border-gray-100">
//                 <th className="text-left px-5 py-4">
//                   MEMBER
//                 </th>

//                 <th className="text-left px-5 py-4">
//                   PLAN
//                 </th>

//                 <th className="text-left px-5 py-4">
//                   STATUS
//                 </th>
//               </tr>
//             </thead>

//             <tbody>
//               {members.map((member, index) => (
//                 <tr
//                   key={index}
//                   className="border-b border-gray-100 hover:bg-gray-50"
//                 >
//                   <td className="px-5 py-4">
//                     <div>
//                       <div className="font-semibold text-gray-900">
//                         {member.name}
//                       </div>

//                       <div className="text-sm text-gray-500">
//                         {member.email}
//                       </div>
//                     </div>
//                   </td>

//                   <td className="px-5 py-4 text-gray-700">
//                     {member.plan}
//                   </td>

//                   <td className="px-5 py-4">
//                     <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
//                       {member.status}
//                     </span>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {/* Checkins */}
//         <div className="bg-white border border-gray-100 rounded-2xl shadow-sm">
//           <div className="p-5 border-b border-gray-100 flex items-center justify-between">
//             <h2 className="text-xl font-semibold text-gray-900">
//               Today&apos;s Check-ins
//             </h2>

//             <button className="text-green-600 font-medium">
//               All →
//             </button>
//           </div>

//           <div className="p-5 space-y-5">
//             {[
//               'Priya Rathod',
//               'Mihir Shah',
//               'Aisha Mirza',
//             ].map((name, index) => (
//               <div
//                 key={index}
//                 className="flex items-center justify-between"
//               >
//                 <div className="flex items-center gap-3">
//                   <div className="w-11 h-11 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-semibold">
//                     {name.charAt(0)}
//                   </div>

//                   <div>
//                     <div className="font-medium text-gray-900">
//                       {name}
//                     </div>

//                     <div className="text-sm text-gray-500">
//                       9:42 AM
//                     </div>
//                   </div>
//                 </div>

//                 <div className="w-3 h-3 rounded-full bg-green-500"></div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }


export default function DashboardPage() {
  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-4xl font-bold text-gray-900">
          Admin Dashboard
        </h1>

        <p className="text-gray-500 mt-2">
          Welcome back Stuti 👋
        </p>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

        <div className="bg-white p-6 rounded-3xl border shadow-sm">
          <p className="text-gray-500">
            Total Members
          </p>

          <h2 className="text-4xl font-bold text-green-600 mt-3">
            248
          </h2>
        </div>

        <div className="bg-white p-6 rounded-3xl border shadow-sm">
          <p className="text-gray-500">
            Revenue
          </p>

          <h2 className="text-4xl font-bold text-blue-600 mt-3">
            ₹4.2L
          </h2>
        </div>

        <div className="bg-white p-6 rounded-3xl border shadow-sm">
          <p className="text-gray-500">
            Trainers
          </p>

          <h2 className="text-4xl font-bold text-purple-600 mt-3">
            18
          </h2>
        </div>

        <div className="bg-white p-6 rounded-3xl border shadow-sm">
          <p className="text-gray-500">
            Active Plans
          </p>

          <h2 className="text-4xl font-bold text-orange-500 mt-3">
            97
          </h2>
        </div>

      </div>

    </div>
  )
}