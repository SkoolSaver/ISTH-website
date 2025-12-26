'use client'

import { useEffect, useRef, useState } from 'react'

interface Testimonial {
  name: string
  role: string
  content: string
  badges: [string, string]
}

export default function AboutTestimonials() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)
  const animationRef = useRef<number | null>(null)
  const scrollPositionRef = useRef<number>(0)

  const testimonials: Testimonial[] = [
    {
      name: 'Ganesh Krishna',
      role: 'Software Engineer at Google',
      content: 'ISTH provided the resources and community support I needed to land my dream job.',
      badges: ['Tech Career', 'Google'],
    },
    {
      name: 'Abhi Ram',
      role: 'Product Manager at Microsoft',
      content: 'The curated learning paths helped me transition from a technical role to product management.',
      badges: ['Product Management', 'Microsoft'],
    },
    {
      name: 'Karthik Vodnala',
      role: 'Data Scientist at Amazon',
      content: 'As an international student, finding opportunities was challenging.',
      badges: ['Data Science', 'Amazon'],
    },
    {
      name: 'Vamshi Krishna',
      role: 'Business Analyst at McKinsey',
      content: 'The workshops and community meetups boosted my confidence and interview skills.',
      badges: ['Business Strategy', 'McKinsey'],
    }
  ]

  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    const scrollSpeed = 0.5

    const animate = () => {
      if (!isPaused && container) {
        scrollPositionRef.current += scrollSpeed
        const maxScroll = container.scrollWidth / 2
        if (scrollPositionRef.current >= maxScroll) {
          scrollPositionRef.current = scrollPositionRef.current - maxScroll
        }
        container.scrollLeft = scrollPositionRef.current
      }
      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isPaused])

  // Duplicate testimonials for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials]

  return (
    <section className="mb-2xl overflow-hidden w-full">
      <h2 className="text-center text-2xl md:text-3xl font-bold mb-lg text-accent-dark">
        Success Stories
      </h2>
      <div className="relative w-full">
        <div
          ref={scrollContainerRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="flex gap-4 md:gap-6 lg:gap-8 overflow-x-hidden scroll-smooth cursor-pointer"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[85%] sm:w-[70%] md:w-[45%] lg:w-[35%] xl:w-[30%] bg-background border-2 rounded-lg p-4 md:p-4"
            >
              <div className="flex flex-col h-full">
                {/* Name */}
                <div className="mb-2 md:mb-1">
                  <div className="font-bold text-base md:text-lg text-accent-dark">
                    {testimonial.name}
                  </div>
                </div>

                {/* Role */}
                <div className="mb-2 md:mb-3">
                  <div className="text-sm md:text-base text-text-secondary">
                    {testimonial.role}
                  </div>
                </div>

                {/* Content */}
                <blockquote className="text-sm md:text-base leading-relaxed mb-3 md:mb-4 text-text-secondary flex-grow">
                  &quot;{testimonial.content}&quot;
                </blockquote>

                {/* Badges */}
                <div className="flex gap-2 md:gap-3 flex-wrap">
                  {testimonial.badges.map((badge, badgeIndex) => (
                    <span
                      key={badgeIndex}
                      className="px-3 py-1 md:px-4 md:py-2 text-xs md:text-sm font-semibold rounded-full text-accent-dark border border-accent-dark"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}
