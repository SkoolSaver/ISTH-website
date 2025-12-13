'use client'

import { useState, useEffect } from 'react'

interface Testimonial {
  name: string
  role: string
  content: string
  avatar: string
}

export default function AboutTestimonials() {
  const testimonials: Testimonial[] = [
    {
      name: 'Sarah Chen',
      role: 'Software Engineer at Google',
      content:
        'ISTH provided me with the resources and community support I needed to land my dream job. The weekly workshops and networking events were game-changers for my career.',
      avatar: '👩‍💼',
    },
    {
      name: 'Raj Patel',
      role: 'Product Manager at Microsoft',
      content:
        'The curated learning paths helped me transition from a technical role to product management. The community here is incredibly supportive and always willing to help.',
      avatar: '👨‍💻',
    },
    {
      name: 'Maria Garcia',
      role: 'Data Scientist at Amazon',
      content:
        'As an international student, finding opportunities was challenging. ISTH connected me with mentors and opportunities that I wouldn\'t have found otherwise. Forever grateful!',
      avatar: '👩‍🔬',
    },
    {
      name: 'Ahmed Hassan',
      role: 'Business Analyst at McKinsey',
      content:
        'The business planning workshops and community meetups gave me the confidence and skills to excel in my interviews. ISTH truly changed my career trajectory.',
      avatar: '👨‍💼',
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  return (
    <section className="mb-3xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-xl text-center text-primary">
        Student Success Stories
      </h2>
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Testimonial Card */}
          <div className="p-2xl rounded-lg border-2 border-accent relative overflow-hidden bg-background min-h-[300px]">
            <div className="text-center">
              <div className="text-6xl mb-lg">{testimonials[currentIndex].avatar}</div>
              <blockquote className="text-lg md:text-xl leading-relaxed mb-lg text-text-secondary">
                &quot;{testimonials[currentIndex].content}&quot;
              </blockquote>
              <div>
                <div className="font-bold text-xl mb-xs text-primary">
                  {testimonials[currentIndex].name}
                </div>
                <div className="text-base text-accent">
                  {testimonials[currentIndex].role}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-background rounded-full p-md shadow-lg hover:shadow-xl transition-all text-accent border-2 border-accent"
            aria-label="Previous testimonial"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-background rounded-full p-md shadow-lg hover:shadow-xl transition-all text-accent border-2 border-accent"
            aria-label="Next testimonial"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-sm mt-xl">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex
                  ? 'opacity-100 bg-accent'
                  : 'opacity-30 bg-secondary'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}


