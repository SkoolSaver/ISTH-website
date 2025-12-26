'use client'

import { useState } from 'react'

export default function AboutMission() {
  const [isExpanded, setIsExpanded] = useState(false)

  const missionText = `Our mission is to empower international students to succeed in the global workforce by providing a structured ecosystem for skill development, professional networking, and career readiness.`

  const bulletPoints = [
    'A supportive international student community focused on accountability and growth',
    'Curated courses and learning paths in tech and business',
    'Interview preparation, resume support, and career-building resources',
    'Mentorship and peer support to reduce confusion and increase consistency',
    'Events, workshops, and industry exposure to help members build real connections',
  ]

  const additionalText = `ISTH is built for students who want more than motivation. It is for students who want a clear path, real practice, and a network that helps them move forward.`

  return (
    <section className="mb-2xl rounded-xl">
      <div className="max-w-7xl">
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-lg text-accent-dark">
          Our Mission
        </h2>
        <div className="text-md md:text-lg text-text-secondary">
          <p className="mb-md">✓ {missionText}</p>
          
          <p className="mb-sm font-semibold text-text">We do this by offering:</p>
          
          <ul className="space-y-sm mb-md">
            {bulletPoints.map((point, index) => (
              <li key={index} className="flex items-start gap-sm">
                <span className="text-accent-dark mt-1 flex-shrink-0">●</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>

          {isExpanded && (
            <p className="mb-md">✓ {additionalText}</p>
          )}

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-accent-dark hover:underline transition-colors inline-block"
          >
            {isExpanded ? 'Read less' : 'Read more'}
          </button>
        </div>
      </div>
    </section>
  )
}
