'use client'

import React, { useState } from 'react';
import useSWR from 'swr';
import { ContactService, ContactFormData } from '@/lib/services/ContactServices';
import { appPalette } from '@/theme/palette';
import { coursesFetcher } from '@/lib/swr/fetchers';
import { SkeletonCard } from '@/components/common/ui';
import LeadCaptureModal from './CoursesLeadsCapture';

export default function CoursesList() {
  const { data: courses = [], error, isLoading } = useSWR('courses', coursesFetcher);
  const [registeringCourses, setRegisteringCourses] = useState<Set<string>>(new Set());
  
  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pendingAction, setPendingAction] = useState<{ 
    type: 'register' | 'curriculum', 
    url: string, 
    courseTitle: string 
  } | null>(null);

  const handleActionClick = (type: 'register' | 'curriculum', url: string | undefined, courseTitle: string) => {
    if (!url) return;
    setPendingAction({ type, url, courseTitle });
    setIsModalOpen(true);
  };

  const handleModalSubmit = async (formData: any) => {
    console.log('Lead Captured:', formData);
    
    // Prepare data for API
    const payload: ContactFormData = {
      fullName: formData.name, // Mapped from 'name'
      email: formData.email,
      phone: {
        countryCode: formData.countryCode,
        number: formData.phone
      },
      formType: pendingAction?.type === 'curriculum' ? 'DOWNLOAD_CURRICULUM' : 'REGISTER_INTEREST',
      topic: pendingAction?.courseTitle || 'General Inquiry',
      message: 'Lead captured from Courses page',
      country: undefined,
      city: undefined,
      consent: {
        sms: formData.consent,
        whatsapp: formData.consent,
        email: formData.consent
      }
    };

    try {
      // Send to database
      await ContactService.submitContactForm(payload);
    } catch (error) {
      console.error('Failed to save lead:', error);
      // We proceed with the action even if saving fails, to not block the user
    }
    
    setIsModalOpen(false);

    if (pendingAction) {
      const { type, url } = pendingAction;
      
      if (type === 'register') {
        setRegisteringCourses(prev => new Set(prev).add(url));
        try {
          window.open(url, '_blank');
          await new Promise(resolve => setTimeout(resolve, 500));
        } catch (error) {
          console.error('Registration failed:', error);
          alert('Failed to open registration page. Please try again.');
        } finally {
          setRegisteringCourses(prev => {
            const newSet = new Set(prev);
            newSet.delete(url);
            return newSet;
          });
        }
      } else if (type === 'curriculum') {
        window.open(url, '_blank');
      }
      
      setPendingAction(null);
    }
  }

  if (error) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8 pb-4 sm:pb-6 md:pb-8 pt-2">
        <div 
          className="col-span-full text-center py-8"
          style={{ color: appPalette.active.accent }}
        >
          {error instanceof Error ? error.message : 'Failed to fetch courses. Please try again later.'}
        </div>
      </div>
    )
  }

  const gridClasses = 'grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8 pb-4 sm:pb-6 md:pb-8 pt-2 w-full overflow-x-hidden px-sm'

  return (
    <div className={gridClasses}>
      {isLoading ? (
        Array.from({ length: 6 }).map((_, i) => (
          <SkeletonCard key={i} variant="course" />
        ))
      ) : courses.length === 0 ? (
        <div
          className="col-span-full text-center py-8"
          style={{ color: appPalette.text.secondary }}
        >
          No courses available at the moment.
        </div>
      ) : (
      courses.map((course) => {
        const isRegistering = course.enrollUrl ? registeringCourses.has(course.enrollUrl) : false;
        
        return (
          <div 
            key={course._id ? String(course._id) : course.slug} 
            className="col-span-1 card w-full max-w-full shadow-xl border rounded-lg overflow-hidden"
            style={{ backgroundColor: appPalette.background.main, borderColor: appPalette.border.main }}
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
              <div 
                className="absolute inset-0 flex flex-col justify-center p-3 sm:p-4 opacity-90"
                style={{ backgroundColor: appPalette.active.main, color: appPalette.active.light }}
              >
                <h6 className="font-bold text-base sm:text-lg md:text-xl line-clamp-2">{course.title}</h6>
                <p className="text-xs sm:text-sm mt-1 sm:mt-2 line-clamp-1 gap-md">{course.slug}</p>

                <div className="text-xs sm:text-sm font-medium whitespace-nowrap mt-lg" style={{ color: appPalette.text.secondary }}>
                  {/* <span className="font-semibold text-text">Status: </span> */}
                  <span 
                    className="font-bold capitalize px-sm py-2 rounded-lg bg-accent-dark"
                    style={{ color: appPalette.active.light}}
                  >
                    {course.status}
                  </span>
                </div>
              </div>
            </figure>

            <div className="card-body p-2 sm:p-3 md:p-4" style={{ color: appPalette.text.main }}>
              <h2 className="text-md sm:text-base md:text-lg font-bold mb-2">
                {course.shortDescription}
              </h2>
              
              <div className="text-xs sm:text-sm mb-2" style={{ color: appPalette.text.secondary }}>
                
                <p className="mt-1">
                  <span className="font-semibold" style={{ color: appPalette.text.main }}>Duration: </span> {course.duration}
                  <span className="font-semibold ml-2" style={{ color: appPalette.text.main }}>Level: </span> {course.level}
                </p>
              </div>

              <p className="text-xs sm:text-sm mb-2 sm:mb-3 line-clamp-2" style={{ color: appPalette.text.secondary }}>{course.description}</p>

              <div className="flex flex-wrap gap-2 mb-2 sm:mb-3">
                {course.tags && course.tags.map((tag, index) => (
                  <div 
                    key={index} 
                    className="px-3 py-1 outline outline-1 rounded-lg text-xs sm:text-sm"
                    style={{ outlineColor: appPalette.border.main, color: appPalette.active.accent }}
                  >
                    {tag}
                  </div>
                ))}
              </div>
              <div 
                className="card-actions flex flex-row items-center justify-between sm:justify-start md:justify-evenly lg:justify-between px-sm gap-1 sm:gap-3 w-full max-w-full border-t pt-3 flex-wrap"
                style={{ borderColor: appPalette.border.main }}
              >

              
                
                {course.curriculumPdfUrl && (
                  <button 
                    onClick={() => handleActionClick('curriculum', course.curriculumPdfUrl, course.title)}
                    className="bg-gray-100 px-md py-2 rounded-lg text-xs sm:text-sm font-bold no-underline flex items-center gap-1 whitespace-nowrap transition-colors flex-shrink-0"
                    style={{ color: appPalette.active.main }}
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
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => handleActionClick('register', course.enrollUrl, course.title)}
                  disabled={isRegistering || !course.enrollUrl}
                  className={`px-2 sm:px-sm py-2 sm:py-sm text-xs sm:text-sm font-semibold rounded-lg transition-all hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap flex-shrink-0`}
                  style={{
                    backgroundColor: isRegistering ? appPalette.inactive.main : appPalette.active.accent,
                    color: appPalette.active.light
                  }}
                >
                  {isRegistering ? 'Opening...' : 'Register Now'}
                </button>
              </div>
            </div>
          </div>
        )
      })
      )}
      
      <LeadCaptureModal 
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setPendingAction(null);
        }}
        onSubmit={handleModalSubmit}
        courseTitle={pendingAction?.courseTitle || ''}
        actionType={pendingAction?.type || 'register'}
      />
    </div>
  )
}
