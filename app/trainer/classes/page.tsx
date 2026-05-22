export default function TrainerClasses() {
  const classes = [
    {
      id: 1,
      name: 'Morning Yoga',
      time: '7:00 AM',
    },
    {
      id: 2,
      name: 'Zumba Dance',
      time: '6:00 PM',
    },
  ]

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        My Classes
      </h1>

      <div className="space-y-5">
        {classes.map(item => (
          <div
            key={item.id}
            className="bg-white rounded-2xl p-6 border shadow-sm"
          >
            <h2 className="text-2xl font-bold text-gray-900">
              {item.name}
            </h2>

            <p className="text-gray-500 mt-2">
              {item.time}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}