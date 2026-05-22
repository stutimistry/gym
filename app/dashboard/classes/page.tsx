
'use client'

import { useEffect, useState } from 'react'

import { supabase } from '../../lib/supabase'

import {
  Calendar,
  Clock,
  Users,
} from 'lucide-react'

interface GymClass {
  id: string
  title: string
  trainer: string
  date: string
  start_time: string
  end_time: string
  seats: string
}

export default function ClassesPage() {
  const [classes, setClasses] =
    useState<GymClass[]>([])

  const [showModal, setShowModal] =
    useState(false)

  const [editingClass, setEditingClass] =
    useState<GymClass | null>(null)

  const [form, setForm] = useState({
    title: '',
    trainer: '',
    date: '',
    start_time: '',
    end_time: '',
    seats: '',
  })

  // FETCH CLASSES
  useEffect(() => {
    fetchClasses()
  }, [])

  const fetchClasses = async () => {
    const { data, error } =
      await supabase
        .from('classes')
        .select('*')
        .order('created_at', {
          ascending: false,
        })

    if (data) {
      setClasses(data)
    }

    if (error) {
      console.log(error)
    }
  }

  // OPEN ADD
  const openAdd = () => {
    setEditingClass(null)

    setForm({
      title: '',
      trainer: '',
      date: '',
      start_time: '',
      end_time: '',
      seats: '',
    })

    setShowModal(true)
  }

  // OPEN EDIT
  const openEdit = (
    item: GymClass
  ) => {
    setEditingClass(item)

    setForm({
      title: item.title,
      trainer: item.trainer,
      date: item.date,
      start_time: item.start_time,
      end_time: item.end_time,
      seats: item.seats,
    })

    setShowModal(true)
  }

  // DELETE CLASS
  const deleteClass = async (
    id: string
  ) => {
    const confirmDelete = confirm(
      'Delete this class?'
    )

    if (!confirmDelete) return

    const { error } =
      await supabase
        .from('classes')
        .delete()
        .eq('id', id)

    if (!error) {
      fetchClasses()
    }

    if (error) {
      console.log(error)
    }
  }

  // SAVE CLASS
  const saveClass = async () => {
    if (
      !form.title ||
      !form.trainer ||
      !form.date ||
      !form.start_time ||
      !form.end_time ||
      !form.seats
    ) {
      alert('Please fill all fields')
      return
    }

    // UPDATE
    if (editingClass) {
      const { error } =
        await supabase
          .from('classes')
          .update({
            title: form.title,
            trainer:
              form.trainer,
            date: form.date,
            start_time:
              form.start_time,
            end_time:
              form.end_time,
            seats: form.seats,
          })
          .eq(
            'id',
            editingClass.id
          )

      if (!error) {
        fetchClasses()
      }

      if (error) {
        console.log(error)
      }
    }

    // ADD
    else {
      const { error } =
        await supabase
          .from('classes')
          .insert([
            {
              title: form.title,
              trainer:
                form.trainer,
              date: form.date,
              start_time:
                form.start_time,
              end_time:
                form.end_time,
              seats: form.seats,
            },
          ])

      if (!error) {
        fetchClasses()
      }

      if (error) {
        console.log(error)
      }
    }

    setShowModal(false)
  }

  return (
    <div className="p-6">
      {/* TOP */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Classes
          </h1>

          <p className="text-gray-500 mt-1">
            Manage gym classes
          </p>
        </div>

        <button
          onClick={openAdd}
          className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-xl font-medium transition"
        >
          + Add New Class
        </button>
      </div>

      {/* CLASSES */}
      <div className="space-y-5">
        {classes.map(item => (
          <div
            key={item.id}
            className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm"
          >
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              {/* LEFT */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <h2 className="text-2xl font-bold text-gray-900">
                    {item.title}
                  </h2>

                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                    Active
                  </span>
                </div>

                <div className="flex flex-wrap gap-5 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {item.date}
                  </div>

                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {item.start_time} -
                    {item.end_time}
                  </div>

                  <div>
                    Trainer:{' '}
                    {item.trainer}
                  </div>

                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    {item.seats} Seats
                  </div>
                </div>
              </div>

              {/* BUTTONS */}
              <div className="flex gap-3">
                <button
                  onClick={() =>
                    openEdit(item)
                  }
                  className="border border-green-600 text-green-700 hover:bg-green-50 px-5 py-2 rounded-xl font-medium transition"
                >
                  Edit
                </button>

                <button
                  onClick={() =>
                    deleteClass(
                      item.id
                    )
                  }
                  className="border border-red-300 text-red-600 hover:bg-red-50 px-5 py-2 rounded-xl font-medium transition"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center p-4 z-50">
          <div className="bg-white w-full max-w-lg rounded-2xl p-6 shadow-xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {editingClass
                ? 'Edit Class'
                : 'Add New Class'}
            </h2>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Class Name"
                value={form.title}
                onChange={e =>
                  setForm({
                    ...form,
                    title:
                      e.target.value,
                  })
                }
                className="w-full border border-gray-200 rounded-xl px-4 py-3"
              />

              <input
                type="text"
                placeholder="Trainer Name"
                value={form.trainer}
                onChange={e =>
                  setForm({
                    ...form,
                    trainer:
                      e.target.value,
                  })
                }
                className="w-full border border-gray-200 rounded-xl px-4 py-3"
              />

              <input
                type="date"
                value={form.date}
                onChange={e =>
                  setForm({
                    ...form,
                    date:
                      e.target.value,
                  })
                }
                className="w-full border border-gray-200 rounded-xl px-4 py-3"
              />

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="time"
                  value={
                    form.start_time
                  }
                  onChange={e =>
                    setForm({
                      ...form,
                      start_time:
                        e.target
                          .value,
                    })
                  }
                  className="w-full border border-gray-200 rounded-xl px-4 py-3"
                />

                <input
                  type="time"
                  value={
                    form.end_time
                  }
                  onChange={e =>
                    setForm({
                      ...form,
                      end_time:
                        e.target
                          .value,
                    })
                  }
                  className="w-full border border-gray-200 rounded-xl px-4 py-3"
                />
              </div>

              <input
                type="number"
                placeholder="Seats"
                value={form.seats}
                onChange={e =>
                  setForm({
                    ...form,
                    seats:
                      e.target.value,
                  })
                }
                className="w-full border border-gray-200 rounded-xl px-4 py-3"
              />
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() =>
                  setShowModal(false)
                }
                className="border border-gray-300 px-5 py-2 rounded-xl"
              >
                Cancel
              </button>

              <button
                onClick={saveClass}
                className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-xl"
              >
                {editingClass
                  ? 'Update Class'
                  : 'Save Class'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}