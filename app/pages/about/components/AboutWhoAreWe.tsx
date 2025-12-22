'use client'

import { useState } from 'react'

export default function AboutWhoAreWe() {
  const [isExpanded, setIsExpanded] = useState(false)

  const paragraphs = [
    `International Students Talent Hub (ISTH) is a community-first platform built to help international students learn, connect, and grow into strong careers in technology and business. We bring together students, mentors, and industry-focused resources in one place so members can build skills, gain confidence, and move faster toward real outcomes like internships, full-time roles, and entrepreneurial opportunities.`,
    `International students often have the talent and the drive, but the career path can feel unclear. Between coursework, adapting to a new environment, and preparing for the job market, many students struggle to find consistent guidance, relevant learning, and the right network.`,
    `ISTH exists to close that gap through a supportive community, structured learning, and career growth opportunities designed specifically for international student needs.`
  ]

  const fullText = paragraphs.join(' ')
  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text
    const truncated = text.slice(0, maxLength)
    const lastSpace = truncated.lastIndexOf(' ')
    return lastSpace > 0 ? truncated.slice(0, lastSpace) + '...' : truncated + '...'
  }

  const truncatedText = truncateText(fullText, 500)
  const shouldShowButton = fullText.length > 500

  return (
    <section className="mb-xl rounded-xl">
      <div className="max-w-7xl">
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-lg text-accent-dark">
          Who Are We
        </h2>
        <div className="text-md md:text-lg leading-relaxed text-text-secondary">
          {isExpanded ? (
            <>
              {paragraphs.map((paragraph, index) => (
                <p key={index} className="mb-md last:mb-0">
                  {paragraph}
                </p>
              ))}
            </>
          ) : (
            <p>{truncatedText}</p>
          )}
          {shouldShowButton && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-md text-accent-dark hover:underline transition-colors inline-block"
            >
              {isExpanded ? 'Read less' : 'Read more'}
            </button>
          )}
        </div>
      </div>
    </section>
  )
}


