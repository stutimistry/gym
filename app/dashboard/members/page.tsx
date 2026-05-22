
'use client'

import { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabase'

import {
  User,
  Phone,
  Mail,
  BadgeCheck,
} from 'lucide-react'

interface Member {
  id: string
  full_name: string
  email: string
  phone: string
  plan: string
  status: string
}

export default function MembersPage() {
  const [members, setMembers] =
    useState<Member[]>([])

  const [showModal, setShowModal] =
    useState(false)

  const [editingMember, setEditingMember] =
    useState<Member | null>(null)

  const [form, setForm] = useState({
    full_name: '',
    email: '',
    phone: '',
    plan: '',
    status: 'Active',
  })

  // FETCH MEMBERS
  useEffect(() => {
    fetchMembers()
  }, [])

  const fetchMembers = async () => {
    const { data, error } =
      await supabase
        .from('member')
        .select('*')
        .order('created_at', {
          ascending: false,
        })

    if (data) {
      setMembers(data)
    }

    if (error) {
      console.log(error)
    }
  }

  // OPEN ADD
  const openAdd = () => {
    setEditingMember(null)

    setForm({
      full_name: '',
      email: '',
      phone: '',
      plan: '',
      status: 'Active',
    })

    setShowModal(true)
  }

  // OPEN EDIT
  const openEdit = (
    item: Member
  ) => {
    setEditingMember(item)

    setForm({
      full_name: item.full_name,
      email: item.email,
      phone: item.phone,
      plan: item.plan,
      status: item.status,
    })

    setShowModal(true)
  }

  // DELETE MEMBER
  const deleteMember = async (
    id: string
  ) => {
    const confirmDelete = confirm(
      'Delete this member?'
    )

    if (!confirmDelete) return

    const { error } =
      await supabase
        .from('member')
        .delete()
        .eq('id', id)

    if (!error) {
      fetchMembers()
    }
  }

  // SAVE MEMBER
  const saveMember = async () => {
    if (
      !form.full_name ||
      !form.email ||
      !form.phone ||
      !form.plan
    ) {
      alert('Please fill all fields')
      return
    }

    if (editingMember) {
      // UPDATE
      const { error } =
        await supabase
          .from('member')
          .update({
            full_name:
              form.full_name,
            email: form.email,
            phone: form.phone,
            plan: form.plan,
            status: form.status,
          })
          .eq(
            'id',
            editingMember.id
          )

      if (!error) {
        fetchMembers()
      }
    } else {
      // ADD
      const { error } =
        await supabase
          .from('member')
          .insert([
            {
              full_name:
                form.full_name,
              email: form.email,
              phone: form.phone,
              plan: form.plan,
              status: form.status,
            },
          ])

      if (!error) {
        fetchMembers()
      }

      if (error) {
        console.log(error)
        alert(error.message)
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
            Members
          </h1>

          <p className="text-gray-500 mt-1">
            Manage gym members
          </p>
        </div>

        <button
          onClick={openAdd}
          className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-xl font-medium transition"
        >
          + Add New Member
        </button>
      </div>

      {/* MEMBERS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {members.map(item => (
          <div
            key={item.id}
            className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm"
          >
            {/* TOP */}
            <div className="flex items-start justify-between mb-5">
              <div>
                <div className="w-12 h-12 rounded-xl bg-green-100 text-green-700 flex items-center justify-center mb-4">
                  <User className="w-6 h-6" />
                </div>

                <h2 className="text-2xl font-bold text-gray-900">
                  {item.full_name}
                </h2>

                <p className="text-gray-500 mt-1">
                  {item.email}
                </p>
              </div>

              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">
                {item.status}
              </span>
            </div>

            {/* DETAILS */}
            <div className="space-y-3 text-sm text-gray-600 mb-6">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                {item.phone}
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                {item.email}
              </div>

              <div className="flex items-center gap-2">
                <BadgeCheck className="w-4 h-4" />
                {item.plan}
              </div>
            </div>

            {/* BUTTONS */}
            <div className="flex gap-3">
              <button
                onClick={() =>
                  openEdit(item)
                }
                className="flex-1 border border-green-600 text-green-700 hover:bg-green-50 px-4 py-2 rounded-xl font-medium transition"
              >
                Edit
              </button>

              <button
                onClick={() =>
                  deleteMember(
                    item.id
                  )
                }
                className="flex-1 border border-red-300 text-red-600 hover:bg-red-50 px-4 py-2 rounded-xl font-medium transition"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center p-4 z-50">
          <div className="bg-white w-full max-w-lg rounded-2xl p-6 shadow-xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {editingMember
                ? 'Edit Member'
                : 'Add New Member'}
            </h2>

            <div className="space-y-4">
              {/* NAME */}
              <input
                type="text"
                placeholder="Full Name"
                value={form.full_name}
                onChange={e =>
                  setForm({
                    ...form,
                    full_name:
                      e.target.value,
                  })
                }
                className="w-full border border-gray-200 rounded-xl px-4 py-3"
              />

              {/* EMAIL */}
              <input
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={e =>
                  setForm({
                    ...form,
                    email:
                      e.target.value,
                  })
                }
                className="w-full border border-gray-200 rounded-xl px-4 py-3"
              />

              {/* PHONE */}
              <input
                type="text"
                placeholder="Phone"
                value={form.phone}
                onChange={e =>
                  setForm({
                    ...form,
                    phone:
                      e.target.value,
                  })
                }
                className="w-full border border-gray-200 rounded-xl px-4 py-3"
              />

              {/* PLAN */}
              <select
                value={form.plan}
                onChange={e =>
                  setForm({
                    ...form,
                    plan:
                      e.target.value,
                  })
                }
                className="w-full border border-gray-200 rounded-xl px-4 py-3"
              >
                <option value="">
                  Select Plan
                </option>

                <option value="Monthly">
                  Monthly
                </option>

                <option value="Yearly">
                  Yearly
                </option>

                <option value="Yoga">
                  Yoga
                </option>

                <option value="Zumba">
                  Zumba
                </option>
              </select>

              {/* STATUS */}
              <select
                value={form.status}
                onChange={e =>
                  setForm({
                    ...form,
                    status:
                      e.target.value,
                  })
                }
                className="w-full border border-gray-200 rounded-xl px-4 py-3"
              >
                <option value="Active">
                  Active
                </option>

                <option value="Inactive">
                  Inactive
                </option>
              </select>
            </div>

            {/* ACTIONS */}
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
                onClick={saveMember}
                className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-xl"
              >
                {editingMember
                  ? 'Update Member'
                  : 'Save Member'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}