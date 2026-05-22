'use client'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-20 px-6">

      <div className="max-w-6xl mx-auto">

        {/* TOP */}
        <div className="text-center mb-16">

          <h1 className="text-5xl font-bold text-gray-900">
            Contact Us
          </h1>

          <p className="text-gray-500 mt-5 text-lg">
            Have questions? We'd love to help you.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* LEFT */}
          <div className="bg-white rounded-3xl p-10 shadow-sm border">

            <h2 className="text-3xl font-bold mb-8">
              Send Message
            </h2>

            <div className="space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full border rounded-2xl px-5 py-4 outline-none focus:border-green-500"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full border rounded-2xl px-5 py-4 outline-none focus:border-green-500"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full border rounded-2xl px-5 py-4 outline-none focus:border-green-500"
              />

              <textarea
                placeholder="Your Message"
                rows={6}
                className="w-full border rounded-2xl px-5 py-4 outline-none focus:border-green-500"
              ></textarea>

              <button className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-2xl text-lg font-semibold">
                Send Message
              </button>

            </div>

          </div>

          {/* RIGHT */}
          <div className="space-y-8">

            <div className="bg-white rounded-3xl p-8 shadow-sm border">
              <h3 className="text-2xl font-bold mb-4">
                Office Address
              </h3>

              <p className="text-gray-500 leading-relaxed">
                21 Fitness Street,
                Surat, Gujarat, India
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm border">
              <h3 className="text-2xl font-bold mb-4">
                Contact Info
              </h3>

              <div className="space-y-3 text-gray-500">
                <p>Email: support@gymsaas.com</p>
                <p>Phone: +91 9876543210</p>
                <p>Mon - Sat: 6AM - 10PM</p>
              </div>
            </div>

            <div className="bg-linear-to-br from-green-600 to-green-500 rounded-3xl p-8 text-white">
              <h3 className="text-3xl font-bold mb-4">
                Start Your Gym Journey
              </h3>

              <p className="text-green-100 leading-relaxed">
                Manage members, trainers, classes, and payments with one powerful SaaS platform.
              </p>

              <button className="bg-white text-green-700 px-6 py-3 rounded-2xl font-bold mt-6">
                Get Started
              </button>
            </div>

          </div>

        </div>

      </div>

    </div>
  )
}