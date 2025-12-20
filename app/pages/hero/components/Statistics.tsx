export default function Statistics() {
  const stats = [
    { number: '50+', label: 'Events Hosted' },
    { number: '200+', label: 'Students Placed' },
    { number: '1000+', label: 'Members' },
  ]

  return (
    <section className="bg-white py-2xl px-md">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-3 md:grid-cols-3 gap-md text-center">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-sm">
              <div className="text-3xl md:text-6xl font-extrabold text-primary-dark">
                {stat.number}
              </div>
              <div className="text-md text-text-secondary font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
