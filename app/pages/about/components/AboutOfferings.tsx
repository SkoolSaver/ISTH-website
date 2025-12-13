export default function AboutOfferings() {
  const offerings = [
    {
      title: 'Events',
      description: 'Weekly workshops and meetups.',
      icon: '🎯',
    },
    {
      title: 'Learnings',
      description: 'Curated paths for cutting edge Tech & Business planning.',
      icon: '📚',
    },
    {
      title: 'Community',
      description: 'Meet the fellow international students to share your interests',
      icon: '🤝',
    },
  ]

  return (
    <section className="mb-3xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-xl text-center text-primary">
        Our Offerings
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
        {offerings.map((offering, index) => (
          <div
            key={index}
            className="p-xl rounded-lg border-2 border-accent bg-background-secondary transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            <div className="text-5xl mb-md text-center">{offering.icon}</div>
            <h3 className="text-2xl font-bold mb-md text-center text-primary">
              {offering.title}
            </h3>
            <p className="text-center leading-relaxed text-text-secondary">
              {offering.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}


