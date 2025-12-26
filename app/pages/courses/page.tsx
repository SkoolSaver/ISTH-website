import React from 'react';
import CoursesTopHero from "./components/CoursesTopHero";
import CoursesHero from "./components/CoursesHero";
import CoursesList from './components/CoursesList';

export default function courses() {
  return (
    <div className="min-h-screen max-w-8xl mx-auto overflow-x-hidden">
      {/* Top Hero Section */}
      <CoursesTopHero />
      
      {/* Courses Section */}
      <div id="courses-list-section" className="max-w-7xl mx-auto mt-lg flex flex-col gap-3 md:gap-4 w-full">
        <h1 className="text-2xl sm:text-2xl md:text-3xl font-bold text-accent-dark text-center">
          All Courses
        </h1>
        <CoursesList />
      </div>
      
      {/* Hero Section at Bottom */}
      <CoursesHero />
    </div>
  )
}