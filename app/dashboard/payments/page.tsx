export default function PaymentsPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">
          Payments
        </h1>

        <button className="bg-green-600 text-white px-5 py-3 rounded-xl">
          Export CSV
        </button>
      </div>

      <div className="bg-white rounded-2xl border overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left px-5 py-4">
                Member
              </th>

              <th className="text-left px-5 py-4">
                Amount
              </th>

              <th className="text-left px-5 py-4">
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b">
              <td className="px-5 py-4">
                Priya Rathod
              </td>

              <td className="px-5 py-4">
                $79.99
              </td>

              <td className="px-5 py-4">
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">
                  Paid
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}