
'use client'

import QRCode from 'react-qr-code'

export default function MemberQR() {
  return (
    <div className="space-y-8">

      <h1 className="text-3xl font-bold text-gray-900">
        My QR Code
      </h1>

      <div className="bg-white rounded-2xl border p-10 shadow-sm flex flex-col items-center">

        <div className="bg-white p-5 rounded-2xl border">
          <QRCode
            value="member-rahul-123"
            size={220}
          />
        </div>

        <p className="mt-6 text-gray-500 text-center">
          Scan this QR code at gym check-in entrance
        </p>

        <div className="mt-8 bg-green-50 border border-green-100 rounded-2xl p-5 w-full max-w-md">
          <h2 className="font-bold text-green-700 mb-2">
            Last Check-in
          </h2>

          <p className="text-gray-600">
            21 May 2026 • 7:15 AM
          </p>
        </div>

      </div>

    </div>
  )
}