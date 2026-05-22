// export default function TrainerWorkoutsPage() {
//   return (
//     <div>
//       <h1 className="text-4xl font-bold text-gray-900 mb-4">
//         Workout Plans
//       </h1>

//       <p className="text-gray-500 text-lg mb-10">
//         Manage workout plans for gym members.
//       </p>

//       <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
//         <div className="bg-white p-6 rounded-3xl shadow-sm border">
//           <h2 className="text-2xl font-bold">
//             Weight Loss Plan
//           </h2>

//           <p className="text-gray-500 mt-3">
//             Beginner • 6 Weeks
//           </p>

//           <button className="mt-6 bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-2xl transition">
//             View Plan
//           </button>
//         </div>

//         <div className="bg-white p-6 rounded-3xl shadow-sm border">
//           <h2 className="text-2xl font-bold">
//             Muscle Gain Program
//           </h2>

//           <p className="text-gray-500 mt-3">
//             Intermediate • 8 Weeks
//           </p>

//           <button className="mt-6 bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-2xl transition">
//             View Plan
//           </button>
//         </div>

//         <div className="bg-white p-6 rounded-3xl shadow-sm border">
//           <h2 className="text-2xl font-bold">
//             Strength Training
//           </h2>

//           <p className="text-gray-500 mt-3">
//             Advanced • 10 Weeks
//           </p>

//           <button className="mt-6 bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-2xl transition">
//             View Plan
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }


export default function TrainerWorkoutsPage() {
  return (
    <div>

      {/* HEADER */}
      <h1 className="text-4xl font-extrabold text-gray-900">
        Workout Plans
      </h1>

      <p className="text-gray-500 text-lg mt-2 mb-10">
        Manage workout plans for gym members.
      </p>

      {/* CARDS */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

        {[
          {
            title: 'Weight Loss Plan',
            level: 'Beginner',
            weeks: '6 Weeks',
          },
          {
            title: 'Muscle Gain Program',
            level: 'Intermediate',
            weeks: '8 Weeks',
          },
          {
            title: 'Strength Training',
            level: 'Advanced',
            weeks: '10 Weeks',
          },
        ].map((plan, i) => (
          <div
            key={i}
            className="group bg-white/70 backdrop-blur-xl border border-gray-200 rounded-3xl p-7 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >

            <h2 className="text-2xl font-bold text-gray-900 group-hover:text-green-600 transition">
              {plan.title}
            </h2>

            <div className="mt-3 flex gap-2">
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                {plan.level}
              </span>

              <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                {plan.weeks}
              </span>
            </div>

            <button className="mt-6 w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-3 rounded-2xl font-semibold shadow-md transition">
              View Plan
            </button>

          </div>
        ))}

      </div>

    </div>
  )
}