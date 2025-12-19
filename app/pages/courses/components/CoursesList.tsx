'use client'

import React, { useState, useEffect } from 'react'

interface Course {
  _id?: string
  title: string
  slug: string
  description: string
  shortDescription: string
  category: string
  level: string
  tags: string[]
  thumbnailUrl: string
  price: number
  discount: number
  currency: string
  status: string
  duration: string
  language: string
  rating: number
  curriculumPdfUrl: string
  enrollUrl: string
  createdAt: string
}

interface ApiResponse {
  success: boolean
  data: Course[]
}

export default function CoursesList() {
  const [courses, setCourses] = useState<Course[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [registeringCourses, setRegisteringCourses] = useState<Set<string>>(new Set())

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true)
        const response = await fetch('http://localhost:3000/api/courses')
        const data: ApiResponse = await response.json()

        if (data.success && data.data) {
          setCourses(data.data)
        } else {
          setError('Failed to fetch courses')
        }
      } catch (err) {
        console.error('Error fetching courses:', err)
        setError('Failed to fetch courses. Please try again later.')
      } finally {
        setLoading(false)
      }
    }

    fetchCourses()
  }, [])

  const handleRegister = async (enrollUrl: string, courseTitle: string) => {
    setRegisteringCourses(prev => new Set(prev).add(enrollUrl))

    try {
      // Open enrollment URL in new tab
      window.open(enrollUrl, '_blank')
      // Simulate a small delay for UX
      await new Promise(resolve => setTimeout(resolve, 500))
    } catch (error) {
      console.error('Registration failed:', error)
      alert('Failed to open registration page. Please try again.')
    } finally {
      setRegisteringCourses(prev => {
        const newSet = new Set(prev)
        newSet.delete(enrollUrl)
        return newSet
      })
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
  }

  const calculatePrice = (price: number, discount: number) => {
    if (discount > 0) {
      return price * (1 - discount / 100)
    }
    return price
  }

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8 pb-4 sm:pb-6 md:pb-8 pt-2">
        <div className="col-span-full flex flex-col items-center justify-center py-12 sm:py-16 md:py-20">
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24">
            {/* Outer spinning ring */}
            <div className="absolute top-0 left-0 w-full h-full border-4 border-accent-dark/30 border-t-accent-dark rounded-full animate-spin"></div>
          </div>
          <p className="mt-6 text-sm sm:text-base md:text-lg text-text-secondary font-semibold animate-pulse">
            Loading courses...
          </p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8 pb-4 sm:pb-6 md:pb-8 pt-2">
        <div className="col-span-full text-center py-8 text-red-500">{error}</div>
      </div>
    )
  }

  if (courses.length === 0) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8 pb-4 sm:pb-6 md:pb-8 pt-2">
        <div className="col-span-full text-center py-8 text-text-secondary">
          No courses available at the moment.
        </div>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-2 md:gap-2 lg:gap-8 pb-4 sm:pb-6 md:pb-8 pt-2">
      {courses.map(course => {
        const isRegistering = registeringCourses.has(course.enrollUrl)
        const finalPrice = calculatePrice(course.price, course.discount)

        return (
          <div
            key={course._id || course.slug}
            className="col-span-1 card w-full shadow-xl border bg-background rounded-lg overflow-hidden"
          >
            <figure className="relative">
              <img
                src={
                  course.thumbnailUrl ||
                  'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp'
                }
                alt={course.title}
                className="w-full h-40 sm:h-44 md:h-48 object-cover"
              />
              <div className="absolute inset-0 flex flex-col justify-center p-3 sm:p-4 opacity-90 bg-primary-dark text-white">
                <h6 className="font-bold text-base sm:text-lg md:text-xl line-clamp-2">
                  {course.title}
                </h6>
                <p className="text-xs sm:text-sm mt-1 sm:mt-2 line-clamp-1">{course.slug}</p>

                <div className="text-xs sm:text-sm font-medium text-text-secondary whitespace-nowrap mt-3">
                  {/* <span className="font-semibold text-text">Status: </span> */}
                  <span className="font-bold text-accent-dark capitalize bg-gray-200 px-sm py-1 rounded-lg">
                    {course.status}
                  </span>
                </div>
              </div>
            </figure>

            <div className="card-body p-2 sm:p-3 md:p-4 text-text">
              <h2 className="text-md sm:text-base md:text-lg font-bold mb-2">
                {course.shortDescription}
              </h2>

              <div className="text-xs sm:text-sm text-text-secondary mb-2">
                <p className="mt-1">
                  <span className="font-semibold text-text">Duration: </span> {course.duration}
                  <span className="font-semibold text-text ml-2">Level: </span> {course.level}
                </p>
              </div>

              <p className="text-xs sm:text-sm mb-2 sm:mb-3 line-clamp-2 text-text-secondary">
                {course.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-2 sm:mb-3">
                {course.tags &&
                  course.tags.map((tag, index) => (
                    <div
                      key={index}
                      className="px-3 py-1 outline outline-1 outline-border rounded-lg text-accent-dark text-xs sm:text-sm"
                    >
                      {tag}
                    </div>
                  ))}
              </div>

              <div className="flex items-center gap-4">
                <div className="text-xs sm:text-sm">
                  <span className="font-semibold text-text">Price: </span>
                  {course.discount > 0 ? (
                    <span>
                      <span className="line-through text-text-secondary mr-2">
                        {course.currency} {course.price}
                      </span>
                      <span className="font-bold text-accent-dark">
                        {course.currency} {finalPrice.toFixed(2)}
                      </span>
                    </span>
                  ) : (
                    <span className="font-bold text-accent-dark">
                      {course.currency} {course.price}
                    </span>
                  )}
                </div>

                <div className="text-xs sm:text-sm">
                  <span className="font-semibold text-text">Rating: </span>
                  <span className="font-bold text-accent-dark">{course.rating} ⭐</span>
                </div>
              </div>
              <div className="text-xs sm:text-sm text-text-secondary">
                <p>
                  <span className="font-semibold text-text">Posted on: </span>{' '}
                  {formatDate(course.createdAt)}
                </p>
              </div>

              <div className="card-actions flex flex-row items-center justify-evenly sm:justify-start md:justify-evenly lg:justify-evenly gap-1 sm:gap-3 w-full border-t border-border pt-3">
                {course.curriculumPdfUrl && (
                  <a
                    href={course.curriculumPdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-200 px-md py-2 hover:bg-gray-300 rounded-lg text-xs sm:text-sm font-bold no-underline text-primary-dark flex items-center gap-1 whitespace-nowrap"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                      />
                    </svg>
                    Curriculum
                  </a>
                )}
                <button
                  type="button"
                  onClick={() => handleRegister(course.enrollUrl, course.title)}
                  disabled={isRegistering || !course.enrollUrl}
                  className={`px-2 sm:px-sm py-2 sm:py-sm text-xs sm:text-sm font-semibold rounded-lg transition-all hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed text-white whitespace-nowrap ${
                    isRegistering
                      ? 'bg-secondary-light'
                      : 'bg-accent-dark hover:opacity-90 transition-opacity'
                  }`}
                >
                  {isRegistering ? 'Opening...' : 'Register Now'}
                </button>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
