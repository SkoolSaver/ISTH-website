// src/pages/courses.js
import React from 'react';
import CoursesHero from "./components/CoursesHero";
import CoursesList from './components/CoursesList';
import { palette } from '../../constants/palette';

// courses.js
export default function courses() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: palette.base200 }}>
      <CoursesHero />
      {/* 🛑 FIX: This is the required container to match CoursesHero's inner alignment */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col gap-6">
        <h1 className="text-3xl font-bold text-center" style={{ color: palette.text }}>
          Available Courses
        </h1>
        <CoursesList />
      </div>
    </main>
  )
}