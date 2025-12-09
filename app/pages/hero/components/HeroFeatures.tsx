export default function HeroFeatures() {
  const features = [
    {
      title: 'Fast & Reliable',
      description: 'Lightning-fast performance with reliable infrastructure.',
      icon: '⚡',
    },
    {
      title: 'Modern Design',
      description: 'Beautiful, responsive designs that work on all devices.',
      icon: '🎨',
    },
    {
      title: 'Developer Friendly',
      description: 'Built with best practices and developer experience in mind.',
      icon: '👨‍💻',
    },
  ]

  return (
    <section className="mb-3xl">
      <h2 className="text-3xl font-bold text-primary text-center mb-xl">
        Why Choose Us
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-background-secondary p-lg rounded-lg border border-border text-center"
          >
            <div className="text-4xl mb-md">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-primary mb-sm">
              {feature.title}
            </h3>
            <p className="text-text-secondary">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

