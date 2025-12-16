'use client';
import React, { useEffect, useState } from 'react';
import { appPalette } from '@/theme/palette';
import { CourseService } from '@/lib/services/CourseServices';
import { ICourse } from '@/lib/models/CourseModel';

export default function CoursesList() {
    const [courses, setCourses] = useState<ICourse[]>([]);
    const [loading, setLoading] = useState(true);
    
    const { background, text, border, active, inactive } = appPalette;
    
    const cardAccent = active.accent; // Golden/Amber for tags/highlights
    const cardPrimary = active.main; // Dark gray/charcoal for button backgrounds
    const cardTextLight = text.secondary; // Medium gray for descriptions and metadata
    const cardLightBackground = background.main; // White for card interior
    const cardBorderColor = border.main; // Light gray for card border

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await CourseService.getAll();
                if (response.success && response.data) {
                    setCourses(response.data);
                }
            } catch (error) {
                console.error('Failed to fetch courses:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchCourses();
    }, []);

    if (loading) {
        return <div className="text-center py-10">Loading courses...</div>;
    }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-8 pt-2">
      {courses.map((course, index) => (
        <div 
            key={course._id ? String(course._id) : index} 
            className="col-span-1 card w-full shadow-xl border" 
            style={{ backgroundColor: cardLightBackground, borderColor: cardBorderColor }}
        >
          <figure className="relative">
            <img
              src={course.thumbnailUrl}
              alt={course.title}
              className="w-full h-48 object-cover"
            />
            <div 
              className="absolute inset-0 flex flex-col justify-center p-4 opacity-90"
              style={{ backgroundColor: cardPrimary, color: active.light }}
            >
               <h3 className="font-bold text-lg">{course.title}</h3>
               <p className="text-sm mt-2 line-clamp-3">{course.shortDescription}</p>
            </div>
          </figure>
          <div className="card-body p-6" style={{ color: text.main }}>
            <h2 className="card-title text-xl font-bold leading-tight mb-2">
              {course.title}
            </h2>
            
            <div className="text-sm mb-4" style={{ color: cardTextLight }}>
              <p>
                <span className="font-semibold" style={{ color: text.main }}>Duration :</span> {course.duration} 
                <span className="font-semibold ml-2" style={{ color: text.main }}> Level :</span> {course.level}
              </p>
            </div>

            <div className="mb-4">
                <h3 className="font-semibold text-lg">Price: {course.currency} {course.price}</h3>
                {course.discount > 0 && (
                    <p className="text-sm text-green-600 font-semibold">{course.discount}% OFF</p>
                )}
            </div>

            <p className="text-sm mb-4 line-clamp-2" style={{ color: cardTextLight }}>{course.description}</p>

            <div className="flex gap-2 mb-4 flex-wrap">
                {course.tags.map((tag, index) => (
                    <div 
                        key={index} 
                        className="badge badge-outline" 
                        style={{ borderColor: cardAccent, color: cardAccent }}
                    >
                        {tag}
                    </div>
                ))}
            </div>

            <div className="card-actions justify-between items-center mt-auto pt-4">
              <div className="text-sm font-medium" style={{ color: cardTextLight }}>
                Rating: <span className="font-bold" style={{ color: cardAccent }}>{course.rating} ★</span>
              </div>
              <div className="flex gap-2 items-center">
                  {course.curriculumPdfUrl && (
                      <a 
                            href={course.curriculumPdfUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link text-xs font-bold no-underline hover:underline" 
                            style={{ color: cardPrimary }} 
                        >
                            Curriculum
                        </a>
                  )}
                  {course.enrollUrl && (
                      <a 
                            href={course.enrollUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-sm font-bold border-none" 
                            style={{ backgroundColor: cardAccent, color: active.light }}
                        >
                            Enroll Now
                        </a>
                  )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}