// export default function PaymentsPage() {
//   return (
//     <div>
//       <div className="flex items-center justify-between mb-8">
//         <h1 className="text-3xl font-bold">
//           Payments
//         </h1>

//         <button className="bg-green-600 text-white px-5 py-3 rounded-xl">
//           Export CSV
//         </button>
//       </div>

//       <div className="bg-white rounded-2xl border overflow-hidden">
//         <table className="w-full">
//           <thead>
//             <tr className="border-b">
//               <th className="text-left px-5 py-4">
//                 Member
//               </th>

//               <th className="text-left px-5 py-4">
//                 Amount
//               </th>

//               <th className="text-left px-5 py-4">
//                 Status
//               </th>
//             </tr>
//           </thead>

//           <tbody>
//             <tr className="border-b">
//               <td className="px-5 py-4">
//                 Priya Rathod
//               </td>

//               <td className="px-5 py-4">
//                 $79.99
//               </td>

//               <td className="px-5 py-4">
//                 <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">
//                   Paid
//                 </span>
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </div>
//   )
// }

export default function PaymentsPage() {
  const payments = [
    {
      name: 'Priya Rathod',
      plan: 'Premium Plan',
      amount: '₹2,999',
      status: 'Paid',
      method: 'Card',
      date: '22 May 2026',
    },
    {
      name: 'Rishabh',
      plan: 'Basic Plan',
      amount: '₹999',
      status: 'Pending',
      method: 'UPI',
      date: '20 May 2026',
    },
    {
      name: 'Amit Shah',
      plan: 'Annual Plan',
      amount: '₹9,999',
      status: 'Paid',
      method: 'Net Banking',
      date: '18 May 2026',
    },
  ]

  return (
    <div className="space-y-8">

      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold">
            Payments
          </h1>

          <p className="text-gray-500 mt-2">
            Manage member payments and subscriptions
          </p>
        </div>

        <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-2xl font-semibold">
          Export CSV
        </button>
      </div>

      {/* STATS */}
      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-white rounded-2xl border p-6 shadow-sm">
          <p className="text-gray-500">
            Total Revenue
          </p>

          <h2 className="text-4xl font-bold text-green-600 mt-3">
            ₹4.2L
          </h2>
        </div>

        <div className="bg-white rounded-2xl border p-6 shadow-sm">
          <p className="text-gray-500">
            Active Subscriptions
          </p>

          <h2 className="text-4xl font-bold text-blue-600 mt-3">
            126
          </h2>
        </div>

        <div className="bg-white rounded-2xl border p-6 shadow-sm">
          <p className="text-gray-500">
            Pending Payments
          </p>

          <h2 className="text-4xl font-bold text-red-500 mt-3">
            12
          </h2>
        </div>

      </div>

      {/* TABLE */}
      <div className="bg-white rounded-2xl border shadow-sm overflow-hidden">

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="bg-gray-50 border-b">

              <tr>
                <th className="text-left px-6 py-4">
                  Member
                </th>

                <th className="text-left px-6 py-4">
                  Plan
                </th>

                <th className="text-left px-6 py-4">
                  Amount
                </th>

                <th className="text-left px-6 py-4">
                  Method
                </th>

                <th className="text-left px-6 py-4">
                  Status
                </th>

                <th className="text-left px-6 py-4">
                  Date
                </th>
              </tr>

            </thead>

            <tbody>

              {payments.map((payment, index) => (

                <tr
                  key={index}
                  className="border-b last:border-none"
                >

                  <td className="px-6 py-5 font-medium">
                    {payment.name}
                  </td>

                  <td className="px-6 py-5">
                    {payment.plan}
                  </td>

                  <td className="px-6 py-5 font-semibold text-green-600">
                    {payment.amount}
                  </td>

                  <td className="px-6 py-5">
                    {payment.method}
                  </td>

                  <td className="px-6 py-5">

                    <span
                      className={`px-4 py-2 rounded-full text-sm font-semibold ${
                        payment.status === 'Paid'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-red-100 text-red-600'
                      }`}
                    >
                      {payment.status}
                    </span>

                  </td>

                  <td className="px-6 py-5 text-gray-500">
                    {payment.date}
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  )
}