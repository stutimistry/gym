
export default function CheckinsPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">
          Check-ins
        </h1>

        <button className="bg-green-600 text-white px-5 py-3 rounded-xl">
          + Manual Check-in
        </button>
      </div>

      <div className="bg-white rounded-2xl border p-5">
        <div className="space-y-4">
          {[
            'Priya Rathod',
            'Mihir Shah',
            'Aisha Mirza',
          ].map((name, index) => (
            <div
              key={index}
              className="flex items-center justify-between border-b pb-4"
            >
              <div>
                <div className="font-semibold">
                  {name}
                </div>

                <div className="text-sm text-gray-500">
                  09:45 AM
                </div>
              </div>

              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">
                Checked In
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}