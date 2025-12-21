import React from 'react';
import CoursesHero from "./components/CoursesHero";
import CoursesList from './components/CoursesList';

export default function courses() {
  return (
    <div className="min-h-screen max-w-7xl mx-auto overflow-x-hidden">
      {/* Courses Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-3 md:py-4 lg:py-5 flex flex-col gap-3 md:gap-4 w-full">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-accent-dark">
          All Courses
        </h1>
        <CoursesList />
      </div>
      
      {/* Hero Section at Bottom */}
      <CoursesHero />
    </div>
  )
}