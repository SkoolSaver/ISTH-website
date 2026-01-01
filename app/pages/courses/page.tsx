import { Metadata } from 'next'
import React from 'react'
import CoursesTopHero from './components/CoursesTopHero'
import CoursesHero from './components/CoursesHero'
import CoursesList from './components/CoursesList'
import { generateMetadata as generateSEOMetadata } from '@/lib/seo/metadata'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import CourseSchema from '@/components/seo/CourseSchema'

export const metadata: Metadata = generateSEOMetadata({
  title: 'Professional Courses – International Students Talent Hub (ISTH)',
  description:
    'Access tailored courses to enhance professional skills and boost employability as an international student. Learn at your own pace with ISTH courses.',
  path: '/pages/courses',
})

export default function courses() {
  return (
    <div className="min-h-screen max-w-8xl mx-auto overflow-x-hidden">
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Courses', url: '/pages/courses' },
        ]}
      />
      <CourseSchema />
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
