import { Metadata } from 'next'
import React from 'react'
import CoursesTopHero from './components/CoursesTopHero'
import CoursesHero from './components/CoursesHero'
import CoursesList from './components/CoursesList'
import { generateMetadata as generateSEOMetadata } from '@/lib/seo/metadata'

export const metadata: Metadata = generateSEOMetadata({
  title: 'Courses',
  description:
    'Access tailored courses designed to enhance your professional skills and boost your employability as an international student. Learn at your own pace.',
  path: '/pages/courses',
})

export default function courses() {
  return (
    <div className="min-h-screen max-w-8xl mx-auto overflow-x-hidden">
      {/* Top Hero Section */}
      <CoursesTopHero />

      {/* Courses Section */}
      <div
        id="courses-list-section"
        className="max-w-7xl mx-auto mt-lg flex flex-col gap-3 md:gap-4 w-full"
      >
        <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold text-accent-dark text-center">
          All Courses
        </h2>
        <CoursesList />
      </div>

      {/* Hero Section at Bottom */}
      <CoursesHero />
    </div>
  )
}
