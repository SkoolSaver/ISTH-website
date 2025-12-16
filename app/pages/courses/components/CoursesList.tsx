'use client'

import React, { useState } from 'react';
import { courses } from './CoursesData';

export default function CoursesList() {
  const [registeringCourses, setRegisteringCourses] = useState<Set<number>>(new Set());

  const handleRegister = async (courseId: number) => {
    setRegisteringCourses(prev => new Set(prev).add(courseId));
    
    // Simulate registration API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Registered for course:', courseId);
      // TODO: Add actual registration logic here
      alert('Registration successful!');
    } catch (error) {
      console.error('Registration failed:', error);
      alert('Registration failed. Please try again.');
    } finally {
      setRegisteringCourses(prev => {
        const newSet = new Set(prev);
        newSet.delete(courseId);
        return newSet;
      });
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8 pb-4 sm:pb-6 md:pb-8 pt-2">
      {courses.map((course) => {
        const isRegistering = registeringCourses.has(course.id);
        
        return (
        <div 
          key={course.id} 
          className="col-span-1 card w-full shadow-xl border bg-background rounded-lg overflow-hidden"
        >
          <figure className="relative">
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-40 sm:h-44 md:h-48 object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-center p-3 sm:p-4 opacity-90 bg-primary-dark text-white">
              <h6 className="font-bold text-base sm:text-lg md:text-xl">{course.title.split(':')[0]}</h6>
              <p className="text-xs sm:text-sm mt-1 sm:mt-2 line-clamp-2 sm:line-clamp-3">{course.title.split(':')[1]} with</p>
        

            <div className="mt-2">
              <h3 className="font-bold text-text-primary text-lg sm:text-lg md:text-xl">{course.instructor}</h3>
              <p className="text-xs sm:text-sm text-gray-200">{course.role}</p>
            </div>
            </div>
          </figure>


          <div className="card-body p-2 sm:p-3 md:p-4 text-text">
            <h2 className="text-md sm:text-md md:text-md lg:text-md font-bold mb-2 sm:mb-2">
              {course.title}
            </h2>
            
            <div className="text-xs sm:text-sm text-text-secondary">
              <p>
                <span className="font-semibold text-text">Date :</span> {course.date} 
                <span className="font-semibold text-text"> Time :</span> {course.time}
              </p>
            </div>

          

            <p className="text-xs sm:text-sm mb-2 sm:mb-2 line-clamp-2 text-text-secondary">{course.description}</p>


            <div className="flex gap-2">
              {course.tags.map((tag, index) => (
                <div 
                  key={index} 
                  className="px-3 py-1 outline outline-1 outline-border rounded-lg text-accent-dark text-xs sm:text-sm"
                >
                  {tag}
                </div>
              ))}
            </div>
            

            <div className="card-actions flex flex-row items-center justify-evenly sm:justify-start md:justify-evenly lg:justify-evenly gap-1 sm:gap-3 w-full border-t border-border pt-2">
              <div className="text-xs sm:text-sm font-medium text-text-secondary whitespace-nowrap">
                Seats Left: 
                <span className="font-bold text-text ml-1">{course.seatsLeft}</span>
              </div>
              <a 
                href="#" 
                className="link text-xs sm:text-sm font-bold no-underline hover:underline text-primary-dark flex items-center gap-1 whitespace-nowrap"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                Curriculum
              </a>
              <button
                type="button"
                onClick={() => handleRegister(course.id)}
                disabled={isRegistering}
                className={`px-2 sm:px-lg py-2 sm:py-sm text-xs sm:text-sm font-semibold rounded-lg transition-all hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed text-white whitespace-nowrap ${
                  isRegistering ? 'bg-secondary-light' : 'bg-accent-dark hover:opacity-90 transition-opacity'
                }`}
              >
                {isRegistering ? 'Registering...' : 'Register Now'}
              </button>
            </div>
          </div>
        </div>
        );
      })}
    </div>
  )
}