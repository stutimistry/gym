export default function MemberProfile() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        My Profile
      </h1>

      <div className="bg-white rounded-2xl border p-8 shadow-sm max-w-2xl">

        <div className="space-y-5">

          <div>
            <label className="block text-sm text-gray-500 mb-1">
              Full Name
            </label>

            <input
              type="text"
              value="Rahul Sharma"
              className="w-full border rounded-xl p-3"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-500 mb-1">
              Email
            </label>

            <input
              type="email"
              value="rahul@gmail.com"
              className="w-full border rounded-xl p-3"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-500 mb-1">
              Phone
            </label>

            <input
              type="text"
              value="9876543210"
              className="w-full border rounded-xl p-3"
            />
          </div>

          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl">
            Save Changes
          </button>

        </div>

      </div>
    </div>
  )
}