'use client'

import React, { useState, useEffect } from 'react';
import { CourseService } from '@/lib/services/CourseServices';
import { ContactService, ContactFormData } from '@/lib/services/ContactServices';
import { ICourse } from '@/lib/models/CourseModel';
import { appPalette } from '@/theme/palette';
import LeadCaptureModal from './CoursesLeadsCapture';

export default function CoursesList() {
  const [courses, setCourses] = useState<ICourse[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [registeringCourses, setRegisteringCourses] = useState<Set<string>>(new Set());
  
  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pendingAction, setPendingAction] = useState<{ 
    type: 'register' | 'curriculum', 
    url: string, 
    courseTitle: string 
  } | null>(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true);
        const response = await CourseService.getAll();
        
        if (response.success && response.data) {
          setCourses(response.data);
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

  const formatDate = (dateString: Date | string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

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
            <div 
              className="absolute top-0 left-0 w-full h-full border-4 rounded-full animate-spin"
              style={{ 
                borderColor: `${appPalette.active.accent}4D`, // 30% opacity approx
                borderTopColor: appPalette.active.accent 
              }}
            ></div>
            
          </div>
          <p 
            className="mt-6 text-sm sm:text-base md:text-lg font-semibold animate-pulse"
            style={{ color: appPalette.text.secondary }}
          >
            Loading courses...
          </p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8 pb-4 sm:pb-6 md:pb-8 pt-2">
        <div 
          className="col-span-full text-center py-8"
          style={{ color: appPalette.active.accent }}
        >
          {error}
        </div>
      </div>
    )
  }

  if (courses.length === 0) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8 pb-4 sm:pb-6 md:pb-8 pt-2">
        <div 
          className="col-span-full text-center py-8"
          style={{ color: appPalette.text.secondary }}
        >
          No courses available at the moment.
        </div>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-2 md:gap-2 lg:gap-8 pb-4 sm:pb-6 md:pb-8 pt-2">
      {courses.map((course) => {
        const isRegistering = course.enrollUrl ? registeringCourses.has(course.enrollUrl) : false;
        const finalPrice = calculatePrice(course.price, course.discount);
        
        return (
          <div 
            key={course._id ? String(course._id) : course.slug} 
            className="col-span-1 card w-full shadow-xl border rounded-lg overflow-hidden"
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
                <p className="text-xs sm:text-sm mt-1 sm:mt-2 line-clamp-1">{course.slug}</p>

                <div className="text-xs sm:text-sm font-medium whitespace-nowrap mt-3" style={{ color: appPalette.text.secondary }}>
                  {/* <span className="font-semibold text-text">Status: </span> */}
                  <span 
                    className="font-bold capitalize px-sm py-1 rounded-lg"
                    style={{ color: appPalette.active.accent, backgroundColor: appPalette.background.secondary }}
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

              <div className="flex items-center gap-4">
                <div className="text-xs sm:text-sm">
                  <span className="font-semibold" style={{ color: appPalette.text.main }}>Price: </span>
                  {course.discount > 0 ? (
                    <span>
                      <span className="line-through mr-2" style={{ color: appPalette.text.secondary }}>{course.currency} {course.price}</span>
                      <span className="font-bold" style={{ color: appPalette.active.accent }}>{course.currency} {finalPrice.toFixed(2)}</span>
                    </span>
                  ) : (
                    <span className="font-bold" style={{ color: appPalette.active.accent }}>{course.currency} {course.price}</span>
                  )}
                </div>

                <div className="text-xs sm:text-sm">
                  <span className="font-semibold" style={{ color: appPalette.text.main }}>Rating: </span>
                  <span className="font-bold" style={{ color: appPalette.active.accent }}>{course.rating} ⭐</span>
                </div>  
              </div>
              <div className="text-xs sm:text-sm" style={{ color: appPalette.text.secondary }}>
                <p>
                  <span className="font-semibold" style={{ color: appPalette.text.main }}>Posted on: </span> {formatDate(course.createdAt)}
                </p>
              </div>

              <div 
                className="card-actions flex flex-row items-center justify-evenly sm:justify-start md:justify-evenly lg:justify-evenly gap-1 sm:gap-3 w-full border-t pt-3"
                style={{ borderColor: appPalette.border.main }}
              >

              
                
                {course.curriculumPdfUrl && (
                  <button 
                    onClick={() => handleActionClick('curriculum', course.curriculumPdfUrl, course.title)}
                    className="px-md py-2 rounded-lg text-xs sm:text-sm font-bold no-underline flex items-center gap-1 whitespace-nowrap transition-colors"
                    style={{ backgroundColor: appPalette.background.secondary, color: appPalette.active.main }}
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
                  className={`px-2 sm:px-sm py-2 sm:py-sm text-xs sm:text-sm font-semibold rounded-lg transition-all hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap`}
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
      })}
      
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
