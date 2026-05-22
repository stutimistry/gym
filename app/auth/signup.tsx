
import Link from 'next/link'

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-3xl shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-green-600 mb-8">
          Create Account
        </h1>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border rounded-xl p-3"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full border rounded-xl p-3"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border rounded-xl p-3"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full border rounded-xl p-3"
          />

          <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl">
            Create Account
          </button>
        </div>

        <p className="text-center mt-6 text-gray-500">
          Already have an account?{' '}
          <Link href="/login" className="text-green-600">
            Login
          </Link>
        </p>
      </div>
    </div>
  )
}