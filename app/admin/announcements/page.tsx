'use client'

import { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabase'

interface Announcement {
  id: number
  message: string
}

export default function AnnouncementsPage() {
  const [message, setMessage] = useState('')
  const [announcements, setAnnouncements] = useState<
    Announcement[]
  >([])

  useEffect(() => {
    fetchAnnouncements()
  }, [])

  const fetchAnnouncements = async () => {
    const { data } = await supabase
      .from('announcements')
      .select('*')
      .order('id', { ascending: false })

    if (data) {
      setAnnouncements(data)
    }
  }

  const addAnnouncement = async () => {
    if (!message) return

    await supabase
      .from('announcements')
      .insert([
        {
          message,
        },
      ])

    setMessage('')

    fetchAnnouncements()
  }

  return (
    <div className="p-6 space-y-8">

      <div>
        <h1 className="text-3xl font-bold">
          Announcements
        </h1>

        <p className="text-gray-500 mt-2">
          Send announcements to members
        </p>
      </div>

      {/* ADD */}
      <div className="bg-white border rounded-2xl p-6 shadow-sm space-y-4">

        <textarea
          placeholder="Enter announcement..."
          value={message}
          onChange={e =>
            setMessage(e.target.value)
          }
          className="w-full border rounded-2xl p-4 h-32 outline-none"
        />

        <button
          onClick={addAnnouncement}
          className="bg-green-600 text-white px-6 py-3 rounded-xl"
        >
          Add Announcement
        </button>

      </div>

      {/* LIST */}
      <div className="space-y-4">

        {announcements.map(item => (
          <div
            key={item.id}
            className="bg-white border rounded-2xl p-5 shadow-sm"
          >
            <p className="text-gray-700">
              {item.message}
            </p>
          </div>
        ))}

      </div>

    </div>
  )
}