export default function AboutValues() {
  const values = [
    {
      title: 'Innovation',
      description: 'We constantly explore new technologies and methodologies to stay ahead.',
      icon: '💡',
    },
    {
      title: 'Quality',
      description: 'We maintain the highest standards in everything we build.',
      icon: '⭐',
    },
    {
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and open communication.',
      icon: '🤝',
    },
    {
      title: 'Growth',
      description: 'We invest in continuous learning and personal development.',
      icon: '📈',
    },
  ]

  return (
    <section className="mb-2xl">
      <h2 className="text-center text-2xl md:text-3xl font-bold mb-lg text-accent-dark">Our Values</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-lg">
        {values.map((value, index) => (
          <div
            key={index}
            className="p-lg rounded-lg border border-border text-center"
          >
            <div className="text-4xl mb-md">{value.icon}</div>
            <h3 className="text-lg font-semibold text-accent-dark mb-sm">{value.title}</h3>
            <p className="text-text-secondary text-sm">{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

