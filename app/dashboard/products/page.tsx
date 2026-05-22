
'use client'

import { useState } from 'react'
import {
  Package,
  Calendar,
} from 'lucide-react'

interface Product {
  id: number
  name: string
  category: string
  duration: string
  price: string
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      name: 'Yoga Class',
      category: 'Women Batch',
      duration: 'Monthly',
      price: '1499',
    },
    {
      id: 2,
      name: 'Zumba Fitness',
      category: 'Zumba',
      duration: 'Yearly',
      price: '9999',
    },
    {
      id: 3,
      name: 'One Day Pass',
      category: 'General',
      duration: 'One Day',
      price: '299',
    },
  ])

  const [showModal, setShowModal] =
    useState(false)

  const [editingProduct, setEditingProduct] =
    useState<Product | null>(null)

  const [form, setForm] = useState({
    name: '',
    category: '',
    duration: '',
    price: '',
  })

  // OPEN ADD
  const openAdd = () => {
    setEditingProduct(null)

    setForm({
      name: '',
      category: '',
      duration: '',
      price: '',
    })

    setShowModal(true)
  }

  // OPEN EDIT
  const openEdit = (item: Product) => {
    setEditingProduct(item)

    setForm({
      name: item.name,
      category: item.category,
      duration: item.duration,
      price: item.price,
    })

    setShowModal(true)
  }

  // DELETE
  const deleteProduct = (id: number) => {
    const confirmDelete = confirm(
      'Delete this product?'
    )

    if (!confirmDelete) return

    const updated = products.filter(
      item => item.id !== id
    )

    setProducts(updated)
  }

  // SAVE
  const saveProduct = () => {
    if (
      !form.name ||
      !form.category ||
      !form.duration ||
      !form.price
    ) {
      alert('Please fill all fields')
      return
    }

    if (editingProduct) {
      // UPDATE
      const updatedProducts = products.map(
        item =>
          item.id === editingProduct.id
            ? {
                ...item,
                name: form.name,
                category: form.category,
                duration: form.duration,
                price: form.price,
              }
            : item
      )

      setProducts(updatedProducts)
    } else {
      // ADD
      const newProduct: Product = {
        id: Date.now(),
        name: form.name,
        category: form.category,
        duration: form.duration,
        price: form.price,
      }

      setProducts([
        ...products,
        newProduct,
      ])
    }

    setShowModal(false)
  }

  return (
    <div className="p-6">
      {/* TOP */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Products
          </h1>

          <p className="text-gray-500 mt-1">
            Manage membership products
          </p>
        </div>

        <button
          onClick={openAdd}
          className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-xl font-medium transition"
        >
          + New Product
        </button>
      </div>

      {/* PRODUCTS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {products.map(item => (
          <div
            key={item.id}
            className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm"
          >
            {/* TOP */}
            <div className="flex items-start justify-between mb-5">
              <div>
                <div className="w-12 h-12 rounded-xl bg-green-100 text-green-700 flex items-center justify-center mb-4">
                  <Package className="w-6 h-6" />
                </div>

                <h2 className="text-2xl font-bold text-gray-900">
                  {item.name}
                </h2>

                <p className="text-gray-500 mt-1">
                  {item.category}
                </p>
              </div>

              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                Active
              </span>
            </div>

            {/* DETAILS */}
            <div className="space-y-3 text-sm text-gray-600 mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />

                {item.duration}
              </div>

              <div className="flex items-center gap-2">
                <span className="text-green-600 font-bold text-lg">
                  ₹
                </span>

                <span className="font-semibold text-gray-900">
                  ₹{' '}
                  {Number(
                    item.price
                  ).toLocaleString('en-IN')}
                </span>
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
                  deleteProduct(item.id)
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
              {editingProduct
                ? 'Edit Product'
                : 'Add New Product'}
            </h2>

            <div className="space-y-4">
              {/* PRODUCT NAME */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Product Name
                </label>

                <input
                  type="text"
                  placeholder="Yoga Membership"
                  value={form.name}
                  onChange={e =>
                    setForm({
                      ...form,
                      name: e.target.value,
                    })
                  }
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-green-500"
                />
              </div>

              {/* CATEGORY */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Category
                </label>

                <select
                  value={form.category}
                  onChange={e =>
                    setForm({
                      ...form,
                      category:
                        e.target.value,
                    })
                  }
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-green-500"
                >
                  <option value="">
                    Select Category
                  </option>

                  <option value="Yoga">
                    Yoga
                  </option>

                  <option value="Women Batch">
                    Women Batch
                  </option>

                  <option value="Zumba">
                    Zumba
                  </option>

                  <option value="General">
                    General
                  </option>
                </select>
              </div>

              {/* MEMBERSHIP */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Membership Type
                </label>

                <select
                  value={form.duration}
                  onChange={e =>
                    setForm({
                      ...form,
                      duration:
                        e.target.value,
                    })
                  }
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-green-500"
                >
                  <option value="">
                    Select Plan
                  </option>

                  <option value="One Day">
                    One Day
                  </option>

                  <option value="Monthly">
                    Monthly
                  </option>

                  <option value="Yearly">
                    Yearly
                  </option>
                </select>
              </div>

              {/* PRICE */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Price (₹)
                </label>

                <input
                  type="number"
                  placeholder="1499"
                  value={form.price}
                  onChange={e =>
                    setForm({
                      ...form,
                      price: e.target.value,
                    })
                  }
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-green-500"
                />
              </div>
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
                onClick={saveProduct}
                className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-xl"
              >
                {editingProduct
                  ? 'Update Product'
                  : 'Save Product'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}