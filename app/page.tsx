
'use client'

import Link from 'next/link'

export default function HomePage() {
  const features = [
    {
      title: 'Member Management',
      desc: 'Manage gym members easily with modern dashboard tools.',
    },
    {
      title: 'Class Booking',
      desc: 'Members can book fitness classes online instantly.',
    },
    {
      title: 'QR Check-ins',
      desc: 'Fast and secure QR-based gym check-in system.',
    },
    {
      title: 'Payment Tracking',
      desc: 'Track memberships, invoices, and payments.',
    },
    {
      title: 'Trainer Dashboard',
      desc: 'Dedicated trainer panel with assigned classes.',
    },
    {
      title: 'Analytics',
      desc: 'View revenue, memberships, and gym growth analytics.',
    },
  ]

  const pricing = [
    {
      name: 'Basic',
      price: '₹999/mo',
      features: [
        'Member Management',
        'Class Booking',
        'QR Check-ins',
      ],
    },
    {
      name: 'Premium',
      price: '₹2999/mo',
      features: [
        'Everything in Basic',
        'Analytics Dashboard',
        'Trainer Management',
      ],
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      features: [
        'Unlimited Members',
        'Priority Support',
        'Custom Features',
      ],
    },
  ]

  const testimonials = [
    {
      name: 'Rahul Fitness',
      text: 'This platform completely transformed our gym management.',
    },
    {
      name: 'PowerFit Gym',
      text: 'Easy to use and very professional SaaS dashboard.',
    },
    {
      name: 'Elite Fitness',
      text: 'The QR check-in system is amazing for members.',
    },
  ]

  const faqs = [
    {
      q: 'Can members book classes?',
      a: 'Yes, members can book and manage classes online.',
    },
    {
      q: 'Does it support QR check-ins?',
      a: 'Yes, members get their own unique QR code.',
    },
    {
      q: 'Is the dashboard mobile responsive?',
      a: 'Yes, the entire platform is fully responsive.',
    },
  ]

  return (
    <div className="bg-white text-gray-900">

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          <h1 className="text-2xl font-bold text-green-600">
            GymSaaS
          </h1>

          <div className="hidden md:flex items-center gap-8">
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#faq">FAQ</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="border border-green-600 text-green-600 px-5 py-2 rounded-xl"
            >
              Login
            </Link>

            <Link
              href="/signup"
              className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-xl"
            >
              Get Started
            </Link>
          </div>

        </div>
      </nav>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
              Modern Gym Management SaaS
            </span>

            <h1 className="text-6xl font-bold leading-tight mt-6">
              Manage Your Gym Smarter With GymSaaS
            </h1>

            <p className="text-gray-500 text-lg mt-6 leading-relaxed">
              Powerful all-in-one gym management platform with member management, QR check-ins, class booking, analytics, and trainer dashboards.
            </p>

            <div className="flex gap-4 mt-8">
              <Link
                href="/signup"
                className="bg-green-600 hover:bg-green-700 text-white px-7 py-4 rounded-2xl text-lg font-semibold"
              >
                Start Free Trial
              </Link>

              <Link
                href="/login"
                className="border border-gray-300 px-7 py-4 rounded-2xl text-lg"
              >
                Login
              </Link>
            </div>
          </div>

          <div className="bg-linear-to-br from-green-500 to-green-700 rounded-[40px] p-10 text-white shadow-2xl">
            <div className="space-y-6">

              <div className="bg-white/10 backdrop-blur rounded-2xl p-5">
                <p className="text-green-100">
                  Active Members
                </p>

                <h2 className="text-5xl font-bold mt-2">
                  1,240
                </h2>
              </div>

              <div className="grid grid-cols-2 gap-5">

                <div className="bg-white/10 rounded-2xl p-5">
                  <p className="text-green-100">
                    Revenue
                  </p>

                  <h3 className="text-3xl font-bold mt-2">
                    ₹4.2L
                  </h3>
                </div>

                <div className="bg-white/10 rounded-2xl p-5">
                  <p className="text-green-100">
                    Classes
                  </p>

                  <h3 className="text-3xl font-bold mt-2">
                    85
                  </h3>
                </div>

              </div>

            </div>
          </div>

        </div>

      </section>

      {/* FEATURES */}
      <section
        id="features"
        className="bg-gray-50 py-24"
      >
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold">
              Powerful Features
            </h2>

            <p className="text-gray-500 mt-5 text-lg">
              Everything you need to manage your gym professionally.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

            {features.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 border shadow-sm hover:shadow-lg transition"
              >
                <h3 className="text-2xl font-bold mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* PRICING */}
      <section
        id="pricing"
        className="py-24"
      >
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold">
              Pricing Plans
            </h2>

            <p className="text-gray-500 mt-5 text-lg">
              Flexible plans for gyms of all sizes.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">

            {pricing.map((item, index) => (
              <div
                key={index}
                className="border rounded-3xl p-8 shadow-sm hover:shadow-xl transition"
              >
                <h3 className="text-3xl font-bold">
                  {item.name}
                </h3>

                <p className="text-5xl font-bold text-green-600 mt-6">
                  {item.price}
                </p>

                <div className="space-y-4 mt-8">

                  {item.features.map(
                    (feature, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3"
                      >
                        <div className="w-2 h-2 rounded-full bg-green-600"></div>

                        <p>{feature}</p>
                      </div>
                    )
                  )}

                </div>

                <button className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-2xl mt-10 font-semibold">
                  Choose Plan
                </button>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* TESTIMONIALS */}
      <section
        id="testimonials"
        className="bg-gray-50 py-24"
      >
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold">
              What Gyms Say
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">

            {testimonials.map(
              (item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl p-8 border shadow-sm"
                >
                  <p className="text-gray-600 text-lg leading-relaxed">
                    "{item.text}"
                  </p>

                  <h3 className="mt-8 text-xl font-bold">
                    {item.name}
                  </h3>
                </div>
              )
            )}

          </div>

        </div>
      </section>

      {/* FAQ */}
      <section
        id="faq"
        className="py-24"
      >
        <div className="max-w-4xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">

            {faqs.map((item, index) => (
              <div
                key={index}
                className="border rounded-3xl p-6"
              >
                <h3 className="text-xl font-bold">
                  {item.q}
                </h3>

                <p className="text-gray-500 mt-3 leading-relaxed">
                  {item.a}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="bg-green-600 text-white py-24"
      >
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-5xl font-bold">
            Ready To Grow Your Gym?
          </h2>

          <p className="mt-6 text-green-100 text-lg">
            Start managing your gym professionally today with GymSaaS.
          </p>

          <div className="flex flex-col md:flex-row gap-4 mt-10 justify-center">

            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-4 rounded-2xl text-gray-900 w-full md:w-100"
            />

            <button className="bg-white text-green-700 px-8 py-4 rounded-2xl font-bold">
              Contact Us
            </button>

          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-5">

          <h2 className="text-2xl font-bold text-green-500">
            GymSaaS
          </h2>

          <p className="text-gray-400">
            © 2026 GymSaaS. All rights reserved.
          </p>

        </div>
      </footer>

    </div>
  )
}