'use client'

import { useState } from 'react'

export default function AboutWhoAreWe() {
  const [isExpanded, setIsExpanded] = useState(false)

  const fullText = `ISTH (International Students Talent Hub) was born from a simple yet powerful vision: to create a supportive community where international students can thrive in the world of technology and business. Founded by a group of passionate students who experienced the challenges of navigating a new academic and professional landscape, we understand the unique journey you're on. Our story began when we recognized a gap in resources and support for international students pursuing careers in tech and business. We saw talented individuals struggling to find their footing, missing opportunities, and feeling isolated in their journey. That's when we decided to build something different—a community-driven platform that bridges the gap between ambition and achievement. Today, ISTH stands as a testament to what can be achieved when students come together with a shared purpose. We've grown from a small group of friends into a thriving community of over 1000 members, each contributing to our collective success and supporting one another along the way.`

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text
    const truncated = text.slice(0, maxLength)
    const lastSpace = truncated.lastIndexOf(' ')
    return lastSpace > 0 ? truncated.slice(0, lastSpace) + '...' : truncated + '...'
  }

  const truncatedText = truncateText(fullText, 300)
  const displayText = isExpanded ? fullText : truncatedText
  const shouldShowButton = fullText.length > 300

  return (
    <section className="mb-md">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-md text-primary">
          Who Are We
        </h2>
        <div className="text-lg leading-relaxed text-text-secondary">
          <p className="whitespace-pre-line">{displayText}</p>
          {shouldShowButton && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-sm text-accent font-semibold hover:underline transition-colors"
            >
              {isExpanded ? 'Read less' : 'Read more'}
            </button>
          )}
        </div>
      </div>
    </section>
  )
}


