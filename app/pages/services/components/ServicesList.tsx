export default function ServicesList() {
  const services = [
    {
      title: 'Web Development',
      description: 'Custom web applications built with modern frameworks and best practices.',
      features: ['React & Next.js', 'TypeScript', 'Responsive Design'],
      icon: '🌐',
    },
    {
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive user interfaces that enhance user experience.',
      features: ['User Research', 'Prototyping', 'Design Systems'],
      icon: '🎨',
    },
    {
      title: 'Consulting',
      description: 'Expert advice on technology choices and architecture decisions.',
      features: ['Technical Reviews', 'Architecture Planning', 'Best Practices'],
      icon: '💼',
    },
    {
      title: 'Maintenance & Support',
      description: 'Ongoing support and maintenance to keep your applications running smoothly.',
      features: ['Bug Fixes', 'Updates', 'Performance Optimization'],
      icon: '🔧',
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-lg mb-3xl">
      {services.map((service, index) => (
        <div
          key={index}
          className="bg-background-secondary p-lg rounded-lg border border-border hover:shadow-md transition-shadow"
        >
          <div className="text-4xl mb-md">{service.icon}</div>
          <h2 className="text-xl font-semibold text-primary mb-sm">{service.title}</h2>
          <p className="text-text-secondary mb-md">{service.description}</p>
          <ul className="space-y-xs">
            {service.features.map((feature, idx) => (
              <li key={idx} className="text-sm text-text-secondary flex items-center gap-xs">
                <span className="text-accent">✓</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

