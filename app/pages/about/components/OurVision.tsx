'use client'

export default function AboutVision() {
  const visionText = `Our vision is to become the most trusted global platform where international students build strong careers by learning the right skills, connecting with the right people, and growing through real opportunities.`

  const bulletPoints = [
    'develop job-ready skills',
    'build a strong professional network',
    'gain practical experience through projects and real-world guidance',
    'grow into leaders, builders, and high-impact professionals.',
  ]

  return (
    <section className="mb-2xl rounded-xl">
      <div className="max-w-7xl">
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-lg text-accent-dark">
          Our Vision
        </h2>
        <div className="text-md md:text-lg leading-relaxed text-text-secondary">
          <p className="mb-md">✓ {visionText}</p>
          
          <p className="mb-sm text-text-secondary">
            We want to create a future where international students do not feel isolated while pursuing tech and business careers. Instead, they should have access to a proven, supportive community that helps them:
          </p>
          
          <ul className="space-y-sm mb-md">
            {bulletPoints.map((point, index) => (
              <li key={index} className="flex items-start gap-sm">
                <span className="text-accent-dark mt-1 flex-shrink-0">●</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

