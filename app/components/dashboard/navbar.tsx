export default function Navbar() {
  return (
    <header className="bg-white border-b border-gray-200 h-20 flex items-center justify-between px-6">
      <input
        placeholder="Search..."
        className="border rounded-xl px-4 py-2 w-72"
      />

      <div className="w-10 h-10 rounded-full bg-green-600" />
    </header>
  )
}