

export default function MemberPayments() {
  return (
    <div className="space-y-8">

      <h1 className="text-3xl font-bold text-gray-900">
        Payments & Membership
      </h1>

      {/* MEMBERSHIP STATUS */}
      <div className="bg-white rounded-2xl border p-6 shadow-sm">

        <h2 className="text-2xl font-bold mb-6">
          Membership Status
        </h2>

        <div className="bg-green-50 border border-green-100 rounded-2xl p-6">

          <p className="text-gray-500">
            Current Plan
          </p>

          <h3 className="text-4xl font-bold text-green-700 mt-2">
            Premium
          </h3>

          <p className="text-gray-600 mt-4">
            Active until December 2026
          </p>

          <div className="mt-5 w-full bg-green-100 rounded-full h-3">
            <div className="bg-green-600 h-3 rounded-full w-[75%]"></div>
          </div>

          <p className="text-sm text-gray-500 mt-2">
            75% Membership Remaining
          </p>

        </div>
      </div>

      {/* PAYMENT HISTORY */}
      <div className="bg-white rounded-2xl border p-6 shadow-sm">

        <h2 className="text-2xl font-bold mb-6">
          Payment History
        </h2>

        <div className="space-y-4">

          <div className="flex items-center justify-between border-b pb-4">
            <div>
              <h3 className="font-semibold">
                Premium Membership
              </h3>

              <p className="text-gray-500 text-sm">
                May 2026
              </p>
            </div>

            <p className="font-bold text-green-600">
              ₹2,999
            </p>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold">
                Yoga Classes
              </h3>

              <p className="text-gray-500 text-sm">
                April 2026
              </p>
            </div>

            <p className="font-bold text-green-600">
              ₹999
            </p>
          </div>

        </div>
      </div>

    </div>
  )
}