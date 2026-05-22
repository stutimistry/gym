export default function TrainerDashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        Trainer Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm border">
          <h2 className="text-gray-500 text-sm">
            Today's Classes
          </h2>

          <p className="text-3xl font-bold mt-3 text-green-600">
            5
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border">
          <h2 className="text-gray-500 text-sm">
            Total Members
          </h2>

          <p className="text-3xl font-bold mt-3 text-green-600">
            120
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border">
          <h2 className="text-gray-500 text-sm">
            Upcoming Sessions
          </h2>

          <p className="text-3xl font-bold mt-3 text-green-600">
            8
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border">
          <h2 className="text-gray-500 text-sm">
            Attendance
          </h2>

          <p className="text-3xl font-bold mt-3 text-green-600">
            92%
          </p>
        </div>
      </div>
    </div>
  )
}