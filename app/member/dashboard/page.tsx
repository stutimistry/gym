
// 'use client'

// export default function MemberDashboard() {
//   const upcomingClasses = [
//     {
//       name: 'Morning Yoga',
//       date: '25 May 2026',
//       time: '7:00 AM',
//     },
//     {
//       name: 'Zumba Dance',
//       date: '27 May 2026',
//       time: '6:00 PM',
//     },
//   ]

//   const notifications = [
//     'Your Yoga class starts tomorrow',
//     'Membership renews in 5 days',
//     'New HIIT batch available',
//   ]

//   const announcements = [
//     'Gym closed on Sunday',
//     'Women-only batch starts Monday',
//     'Protein supplements available now',
//   ]

//   return (
//     <div className="space-y-8">

//       {/* WELCOME */}
//       <div className="bg-linear-to-r from-green-600 to-green-500 rounded-3xl p-8 text-white">
//         <h1 className="text-4xl font-bold">
//           Welcome Back 👋
//         </h1>

//         <p className="mt-3 text-green-100">
//           Ready for today’s workout?
//         </p>
//       </div>

//       {/* STATS */}
//       <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

//         <div className="bg-white rounded-2xl border p-6 shadow-sm">
//           <p className="text-gray-500 text-sm">
//             Active Membership
//           </p>

//           <h2 className="text-3xl font-bold text-green-600 mt-3">
//             Premium
//           </h2>
//         </div>

//         <div className="bg-white rounded-2xl border p-6 shadow-sm">
//           <p className="text-gray-500 text-sm">
//             Classes Booked
//           </p>

//           <h2 className="text-3xl font-bold text-green-600 mt-3">
//             12
//           </h2>
//         </div>

//         <div className="bg-white rounded-2xl border p-6 shadow-sm">
//           <p className="text-gray-500 text-sm">
//             Total Check-ins
//           </p>

//           <h2 className="text-3xl font-bold text-green-600 mt-3">
//             48
//           </h2>
//         </div>

//         <div className="bg-white rounded-2xl border p-6 shadow-sm">
//           <p className="text-gray-500 text-sm">
//             Membership Expiry
//           </p>

//           <h2 className="text-2xl font-bold text-green-600 mt-3">
//             Dec 2026
//           </h2>
//         </div>

//       </div>

//       <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

//         {/* UPCOMING CLASSES */}
//         <div className="xl:col-span-2 bg-white rounded-2xl border p-6 shadow-sm">
//           <div className="flex items-center justify-between mb-6">
//             <h2 className="text-2xl font-bold">
//               Upcoming Classes
//             </h2>

//             <button className="text-green-600 font-medium">
//               View All
//             </button>
//           </div>

//           <div className="space-y-4">

//             {upcomingClasses.map(
//               (item, index) => (
//                 <div
//                   key={index}
//                   className="border rounded-2xl p-5 flex items-center justify-between"
//                 >
//                   <div>
//                     <h3 className="font-bold text-lg">
//                       {item.name}
//                     </h3>

//                     <p className="text-gray-500 mt-1">
//                       {item.date} • {item.time}
//                     </p>
//                   </div>

//                   <span className="bg-green-100 text-green-700 px-4 py-2 rounded-xl text-sm font-semibold">
//                     Booked
//                   </span>
//                 </div>
//               )
//             )}

//           </div>
//         </div>

//         {/* NOTIFICATIONS */}
//         <div className="bg-white rounded-2xl border p-6 shadow-sm">
//           <h2 className="text-2xl font-bold mb-6">
//             Notifications
//           </h2>

//           <div className="space-y-4">

//             {notifications.map(
//               (item, index) => (
//                 <div
//                   key={index}
//                   className="bg-green-50 border border-green-100 p-4 rounded-2xl"
//                 >
//                   <p className="text-gray-700 text-sm">
//                     {item}
//                   </p>
//                 </div>
//               )
//             )}

//           </div>
//         </div>

//       </div>

//       {/* ANNOUNCEMENTS */}
//       <div className="bg-white rounded-2xl border p-6 shadow-sm">
//         <h2 className="text-2xl font-bold mb-6">
//           Announcements
//         </h2>

//         <div className="space-y-4">

//           {announcements.map(
//             (item, index) => (
//               <div
//                 key={index}
//                 className="bg-green-50 border border-green-100 p-4 rounded-2xl"
//               >
//                 <p className="text-gray-700">
//                   {item}
//                 </p>
//               </div>
//             )
//           )}

//         </div>
//       </div>

//     </div>
//   )
// }

export default function MemberDashboard() {
  return (
    <div className="space-y-8">

      {/* HEADER */}
      <div>
        <h1 className="text-5xl font-bold text-gray-900">
          Member Dashboard
        </h1>

        <p className="text-gray-500 mt-3 text-lg">
          Welcome back 👋
        </p>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        <div className="bg-white rounded-3xl border p-6 shadow-sm">
          <p className="text-gray-500 text-lg">
            Membership Plan
          </p>

          <h2 className="text-4xl font-bold text-green-600 mt-4">
            Premium
          </h2>
        </div>

        <div className="bg-white rounded-3xl border p-6 shadow-sm">
          <p className="text-gray-500 text-lg">
            Classes Booked
          </p>

          <h2 className="text-4xl font-bold text-blue-600 mt-4">
            12
          </h2>
        </div>

        <div className="bg-white rounded-3xl border p-6 shadow-sm">
          <p className="text-gray-500 text-lg">
            Check-ins
          </p>

          <h2 className="text-4xl font-bold text-purple-600 mt-4">
            48
          </h2>
        </div>

        <div className="bg-white rounded-3xl border p-6 shadow-sm">
          <p className="text-gray-500 text-lg">
            Expiry
          </p>

          <h2 className="text-4xl font-bold text-orange-500 mt-4">
            Dec 2026
          </h2>
        </div>

      </div>

      {/* UPCOMING CLASSES */}
      <div className="bg-white rounded-3xl border p-8 shadow-sm">

        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">
            Upcoming Classes
          </h2>

          <button className="text-green-600 font-semibold">
            View All
          </button>
        </div>

        <div className="space-y-5">

          <div className="border rounded-2xl p-5 flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold">
                Morning Yoga
              </h3>

              <p className="text-gray-500 mt-2">
                25 May 2026 • 7:00 AM
              </p>
            </div>

            <span className="bg-green-100 text-green-700 px-5 py-2 rounded-full font-semibold">
              Booked
            </span>
          </div>

          <div className="border rounded-2xl p-5 flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold">
                Strength Training
              </h3>

              <p className="text-gray-500 mt-2">
                26 May 2026 • 6:00 PM
              </p>
            </div>

            <span className="bg-blue-100 text-blue-700 px-5 py-2 rounded-full font-semibold">
              Upcoming
            </span>
          </div>

        </div>

      </div>

    </div>
  )
}