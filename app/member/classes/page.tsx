
'use client'

import { useState } from 'react'

export default function MemberClasses() {
  const [bookedClasses, setBookedClasses] =
    useState<number[]>([])

  const classes = [
    {
      id: 1,
      name: 'Morning Yoga',
    },
    {
      id: 2,
      name: 'Zumba Dance',
    },
    {
      id: 3,
      name: 'HIIT Workout',
    },
  ]

  const handleBook = (id: number) => {
    if (bookedClasses.includes(id)) {
      return
    }

    setBookedClasses([
      ...bookedClasses,
      id,
    ])
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        Book Classes
      </h1>

      <div className="space-y-5">
        {classes.map(item => (
          <div
            key={item.id}
            className="bg-white rounded-2xl border p-6 shadow-sm flex items-center justify-between"
          >
            <div>
              <h2 className="text-xl font-semibold">
                {item.name}
              </h2>

              {bookedClasses.includes(
                item.id
              ) && (
                <p className="text-green-600 text-sm mt-2 font-medium">
                  Successfully Booked
                </p>
              )}
            </div>

            <button
              onClick={() =>
                handleBook(item.id)
              }
              disabled={bookedClasses.includes(
                item.id
              )}
              className={`px-5 py-2 rounded-xl text-white transition ${
                bookedClasses.includes(
                  item.id
                )
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-green-600 hover:bg-green-700'
              }`}
            >
              {bookedClasses.includes(
                item.id
              )
                ? 'Booked'
                : 'Book Now'}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}