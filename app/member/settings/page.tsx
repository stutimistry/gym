export default function MemberSettings() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        Settings
      </h1>

      <div className="bg-white rounded-2xl border p-6 shadow-sm max-w-xl">

        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="font-semibold">
              Email Notifications
            </h2>

            <p className="text-gray-500 text-sm">
              Receive class reminders
            </p>
          </div>

          <input type="checkbox" />
        </div>

        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-semibold">
              SMS Notifications
            </h2>

            <p className="text-gray-500 text-sm">
              Receive SMS updates
            </p>
          </div>

          <input type="checkbox" />
        </div>

      </div>
    </div>
  )
}