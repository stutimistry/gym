export default function TrainerMembers() {
  const members = [
    'Rahul Sharma',
    'Priya Patel',
    'Amit Kumar',
  ]

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        Members
      </h1>

      <div className="space-y-4">
        {members.map((item, index) => (
          <div
            key={index}
            className="bg-white border rounded-2xl p-5 shadow-sm"
          >
            <h2 className="text-xl font-semibold text-gray-900">
              {item}
            </h2>
          </div>
        ))}
      </div>
    </div>
  )
}