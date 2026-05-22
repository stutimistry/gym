export default function SettingsPage() {
  return (
    <div className="max-w-2xl">
      <h1 className="text-3xl font-bold mb-8">
        Settings
      </h1>

      <div className="bg-white rounded-2xl border p-6">
        <div className="space-y-5">
          <div>
            <label className="block mb-2 font-medium">
              Full Name
            </label>

            <input
              type="text"
              defaultValue="Admin"
              className="w-full border rounded-xl px-4 py-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Email
            </label>

            <input
              type="email"
              defaultValue="admin@gmail.com"
              className="w-full border rounded-xl px-4 py-3"
            />
          </div>

          <button className="bg-green-600 text-white px-5 py-3 rounded-xl">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  )
}