

// // export default function MemberPayments() {
// //   return (
// //     <div className="space-y-8">

// //       <h1 className="text-3xl font-bold text-gray-900">
// //         Payments & Membership
// //       </h1>

// //       {/* MEMBERSHIP STATUS */}
// //       <div className="bg-white rounded-2xl border p-6 shadow-sm">

// //         <h2 className="text-2xl font-bold mb-6">
// //           Membership Status
// //         </h2>

// //         <div className="bg-green-50 border border-green-100 rounded-2xl p-6">

// //           <p className="text-gray-500">
// //             Current Plan
// //           </p>

// //           <h3 className="text-4xl font-bold text-green-700 mt-2">
// //             Premium
// //           </h3>

// //           <p className="text-gray-600 mt-4">
// //             Active until December 2026
// //           </p>

// //           <div className="mt-5 w-full bg-green-100 rounded-full h-3">
// //             <div className="bg-green-600 h-3 rounded-full w-[75%]"></div>
// //           </div>

// //           <p className="text-sm text-gray-500 mt-2">
// //             75% Membership Remaining
// //           </p>

// //         </div>
// //       </div>

// //       {/* PAYMENT HISTORY */}
// //       <div className="bg-white rounded-2xl border p-6 shadow-sm">

// //         <h2 className="text-2xl font-bold mb-6">
// //           Payment History
// //         </h2>

// //         <div className="space-y-4">

// //           <div className="flex items-center justify-between border-b pb-4">
// //             <div>
// //               <h3 className="font-semibold">
// //                 Premium Membership
// //               </h3>

// //               <p className="text-gray-500 text-sm">
// //                 May 2026
// //               </p>
// //             </div>

// //             <p className="font-bold text-green-600">
// //               ₹2,999
// //             </p>
// //           </div>

// //           <div className="flex items-center justify-between">
// //             <div>
// //               <h3 className="font-semibold">
// //                 Yoga Classes
// //               </h3>

// //               <p className="text-gray-500 text-sm">
// //                 April 2026
// //               </p>
// //             </div>

// //             <p className="font-bold text-green-600">
// //               ₹999
// //             </p>
// //           </div>

// //         </div>
// //       </div>

// //     </div>
// //   )
// // }

// export default function MemberPayments() {
//   return (
//     <div className="space-y-8">

//       {/* HEADER */}
//       <div>
//         <h1 className="text-4xl font-bold text-gray-900">
//           Payments & Membership
//         </h1>

//         <p className="text-gray-500 mt-2 text-lg">
//           Manage your membership and billing details
//         </p>
//       </div>

//       {/* MEMBERSHIP STATUS */}
//       <div className="bg-white rounded-3xl border p-8 shadow-sm">

//         <div className="flex items-center justify-between mb-8">

//           <div>
//             <h2 className="text-3xl font-bold">
//               Membership Status
//             </h2>

//             <p className="text-gray-500 mt-2">
//               Your current active membership
//             </p>
//           </div>

//           <span className="bg-green-100 text-green-700 px-5 py-2 rounded-full font-semibold">
//             Active
//           </span>

//         </div>

//         <div className="bg-green-50 border border-green-100 rounded-3xl p-8">

//           <p className="text-gray-500 text-lg">
//             Current Plan
//           </p>

//           <h3 className="text-5xl font-bold text-green-700 mt-3">
//             Premium Membership
//           </h3>

//           <p className="text-gray-600 mt-5 text-lg">
//             Active until December 2026
//           </p>

//           {/* PROGRESS BAR */}
//           <div className="mt-6 w-full bg-green-100 rounded-full h-4">
//             <div className="bg-green-600 h-4 rounded-full w-[75%]"></div>
//           </div>

//           <p className="text-sm text-gray-500 mt-3">
//             75% Membership Remaining
//           </p>

//           {/* BUTTONS */}
//           <div className="flex flex-wrap gap-4 mt-8">

//             <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-2xl font-semibold transition">
//               Renew Membership
//             </button>

//             <button className="border border-gray-300 hover:bg-gray-100 px-6 py-3 rounded-2xl font-semibold transition">
//               Download Invoice
//             </button>

//             <button className="text-red-500 hover:text-red-600 font-semibold">
//               Cancel Membership
//             </button>

//           </div>

//         </div>
//       </div>

//       {/* PAYMENT HISTORY */}
//       <div className="bg-white rounded-3xl border p-8 shadow-sm">

//         <div className="flex items-center justify-between mb-8">

//           <div>
//             <h2 className="text-3xl font-bold">
//               Payment History
//             </h2>

//             <p className="text-gray-500 mt-2">
//               View all your past transactions
//             </p>
//           </div>

//         </div>

//         <div className="space-y-5">

//           {/* PAYMENT 1 */}
//           <div className="flex items-center justify-between border-b pb-5">

//             <div>
//               <h3 className="font-semibold text-lg">
//                 Premium Membership
//               </h3>

//               <p className="text-gray-500 text-sm mt-1">
//                 Paid on May 2026
//               </p>
//             </div>

//             <div className="text-right">

//               <p className="font-bold text-green-600 text-xl">
//                 ₹2,999
//               </p>

//               <span className="inline-block mt-2 bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full">
//                 Paid
//               </span>

//             </div>

//           </div>

//           {/* PAYMENT 2 */}
//           <div className="flex items-center justify-between border-b pb-5">

//             <div>
//               <h3 className="font-semibold text-lg">
//                 Yoga Classes
//               </h3>

//               <p className="text-gray-500 text-sm mt-1">
//                 Paid on April 2026
//               </p>
//             </div>

//             <div className="text-right">

//               <p className="font-bold text-green-600 text-xl">
//                 ₹999
//               </p>

//               <span className="inline-block mt-2 bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full">
//                 Paid
//               </span>

//             </div>

//           </div>

//           {/* PAYMENT 3 */}
//           <div className="flex items-center justify-between">

// //             <div>
// //               <h3 className="font-semibold text-lg">
// //                 Personal Training
// //               </h3>

// //               <p className="text-gray-500 text-sm mt-1">
// //                 Paid on March 2026
// //               </p>
// //             </div>

// //             <div className="text-right">

// //               <p className="font-bold text-green-600 text-xl">
// //                 ₹4,500
// //               </p>

// //               <span className="inline-block mt-2 bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full">
// //                 Paid
// //               </span>

// //             </div>

// //           </div>

// //         </div>
// //       </div>

// //     </div>
// //   )
// // }

// 'use client'

// import { useState } from 'react'

// export default function MemberPayments() {
//   const [loading, setLoading] = useState(false)

//   const handlePayment = async () => {
//     try {
//       setLoading(true)

//       const response = await fetch('/api/payment', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           cardNumber: '4111111111111111',
//           expiry: '2026-12',
//           cvv: '123',
//           amount: 2999,
//         }),
//       })

//       const data = await response.json()

//       console.log(data)

//       if (data.success) {
//         alert('Payment Successful ✅')
//       } else {
//         alert('Payment Failed ❌')
//       }

//       setLoading(false)
//     } catch (error) {
//       console.log(error)

//       alert('Something went wrong')

//       setLoading(false)
//     }
//   }

//   return (
//     <div className="space-y-8">

//       {/* HEADER */}
//       <div>
//         <h1 className="text-4xl font-bold text-gray-900">
//           Payments & Membership
//         </h1>

//         <p className="text-gray-500 mt-2 text-lg">
//           Manage your membership and billing details
//         </p>
//       </div>

//       {/* PAYMENT FORM */}
//       <div className="bg-white rounded-3xl border p-8 shadow-sm">

//         <h2 className="text-3xl font-bold mb-6">
//           Make Payment
//         </h2>

//         <div className="grid md:grid-cols-2 gap-5">

//           <input
//             type="text"
//             placeholder="Card Number"
//             className="border rounded-2xl p-4"
//           />

//           <input
//             type="text"
//             placeholder="Expiry Date"
//             className="border rounded-2xl p-4"
//           />

//           <input
//             type="text"
//             placeholder="CVV"
//             className="border rounded-2xl p-4"
//           />

//           <input
//             type="text"
//             placeholder="Amount"
//             className="border rounded-2xl p-4"
//           />

//         </div>

//         <button
//           onClick={handlePayment}
//           disabled={loading}
//           className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-2xl font-semibold"
//         >
//           {loading ? 'Processing...' : 'Pay Now'}
//         </button>

//       </div>

//       {/* MEMBERSHIP STATUS */}
//       <div className="bg-white rounded-3xl border p-8 shadow-sm">

//         <div className="flex items-center justify-between mb-8">

//           <div>
//             <h2 className="text-3xl font-bold">
//               Membership Status
//             </h2>

//             <p className="text-gray-500 mt-2">
//               Your current active membership
//             </p>
//           </div>

//           <span className="bg-green-100 text-green-700 px-5 py-2 rounded-full font-semibold">
//             Active
//           </span>

//         </div>

//         <div className="bg-green-50 border border-green-100 rounded-3xl p-8">

//           <p className="text-gray-500 text-lg">
//             Current Plan
//           </p>

//           <h3 className="text-5xl font-bold text-green-700 mt-3">
//             Premium Membership
//           </h3>

//           <p className="text-gray-600 mt-5 text-lg">
//             Active until December 2026
//           </p>

//         </div>
//       </div>

//     </div>
//   )
// }


'use client'

import { useState } from 'react'

export default function MemberPayments() {
  const [loading, setLoading] = useState(false)

  // ✅ form state (important)
  const [form, setForm] = useState({
    email: 'rishabh@gmail.com',
    cardNumber: '',
    expiry: '',
    cvv: '',
    amount: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handlePayment = async () => {
    try {
      setLoading(true)

      const response = await fetch('/api/payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: form.email, // ✅ ADDED
          cardNumber: form.cardNumber,
          expiry: form.expiry,
          cvv: form.cvv,
          amount: Number(form.amount),
        }),
      })

      const data = await response.json()

      console.log(data)

      if (data.success) {
        alert('Payment Successful ✅')
      } else {
        alert('Payment Failed ❌')
      }
    } catch (error) {
      console.log(error)
      alert('Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-8">

      {/* HEADER */}
      <div>
        <h1 className="text-4xl font-bold text-gray-900">
          Payments & Membership
        </h1>

        <p className="text-gray-500 mt-2 text-lg">
          Manage your membership and billing details
        </p>
      </div>

      {/* PAYMENT FORM */}
      <div className="bg-white rounded-3xl border p-8 shadow-sm">

        <h2 className="text-3xl font-bold mb-6">
          Make Payment
        </h2>

        <div className="grid md:grid-cols-2 gap-5">

          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            type="email"
            placeholder="Email"
            className="border rounded-2xl p-4"
          />

          <input
            name="cardNumber"
            value={form.cardNumber}
            onChange={handleChange}
            type="text"
            placeholder="Card Number"
            className="border rounded-2xl p-4"
          />

          <input
            name="expiry"
            value={form.expiry}
            onChange={handleChange}
            type="text"
            placeholder="Expiry Date"
            className="border rounded-2xl p-4"
          />

          <input
            name="cvv"
            value={form.cvv}
            onChange={handleChange}
            type="text"
            placeholder="CVV"
            className="border rounded-2xl p-4"
          />

          <input
            name="amount"
            value={form.amount}
            onChange={handleChange}
            type="number"
            placeholder="Amount"
            className="border rounded-2xl p-4"
          />

        </div>

        <button
          onClick={handlePayment}
          disabled={loading}
          className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-2xl font-semibold"
        >
          {loading ? 'Processing...' : 'Pay Now'}
        </button>

      </div>

      {/* MEMBERSHIP STATUS */}
      <div className="bg-white rounded-3xl border p-8 shadow-sm">

        <div className="flex items-center justify-between mb-8">

          <div>
            <h2 className="text-3xl font-bold">
              Membership Status
            </h2>

            <p className="text-gray-500 mt-2">
              Your current active membership
            </p>
          </div>

          <span className="bg-green-100 text-green-700 px-5 py-2 rounded-full font-semibold">
            Active
          </span>

        </div>

        <div className="bg-green-50 border border-green-100 rounded-3xl p-8">

          <p className="text-gray-500 text-lg">
            Current Plan
          </p>

          <h3 className="text-5xl font-bold text-green-700 mt-3">
            Premium Membership
          </h3>

          <p className="text-gray-600 mt-5 text-lg">
            Active until December 2026
          </p>

        </div>
      </div>

    </div>
  )
}