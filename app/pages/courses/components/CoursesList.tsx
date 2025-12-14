import React from 'react';
import { courses } from './CoursesData';
import { appPalette } from '@/theme/palette'; 

export default function CoursesList() {
    
    const { background, text, border, active, inactive } = appPalette;
    
    const cardAccent = active.accent; // Golden/Amber for tags/highlights
    const cardPrimary = active.main; // Dark gray/charcoal for button backgrounds
    const cardTextLight = text.secondary; // Medium gray for descriptions and metadata
    const cardLightBackground = background.main; // White for card interior
    const cardBorderColor = border.main; // Light gray for card border

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-8 pt-2">
      {courses.map((course) => (
        <div 
            key={course.id} 
            className="col-span-1 card w-full shadow-xl border" 
            // Card background uses White, Border uses Light Gray border color
            style={{ backgroundColor: cardLightBackground, borderColor: cardBorderColor }}
        >
          <figure className="relative">
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-48 object-cover"
            />
            {/* Overlay using a darker color (active.main/primary) and light text (active.light) */}
            <div 
              className="absolute inset-0 flex flex-col justify-center p-4 opacity-90"
              style={{ backgroundColor: cardPrimary, color: active.light }} // Dark background, White text
            >
               <h3 className="font-bold text-lg">{course.title.split(':')[0]}</h3>
               <p className="text-sm mt-2 line-clamp-3">{course.title.split(':')[1]}</p>
            </div>
          </figure>
          <div className="card-body p-6" style={{ color: text.main }}>
            <h2 className="card-title text-xl font-bold leading-tight mb-2">
              {course.title}
            </h2>
            
            <div className="text-sm mb-4" style={{ color: cardTextLight }}>
              <p>
                <span className="font-semibold" style={{ color: text.main }}>Date :</span> {course.date} 
                <span className="font-semibold" style={{ color: text.main }}> Time :</span> {course.time}
              </p>
            </div>

            <div className="mb-4">
                <h3 className="font-semibold text-lg">{course.instructor}</h3>
                <p className="text-sm" style={{ color: cardTextLight }}>{course.role}</p>
            </div>

            <p className="text-sm mb-4 line-clamp-2" style={{ color: cardTextLight }}>{course.description}</p>

            <div className="flex gap-2 mb-4">
                {course.tags.map((tag, index) => (
                    <div 
                        key={index} 
                        className="badge badge-outline" 
                        // Accent color for both border and text of the tag (Golden/Amber)
                        style={{ borderColor: cardAccent, color: cardAccent }}
                    >
                        {tag}
                    </div>
                ))}
            </div>

            <div className="card-actions justify-between items-center mt-auto pt-4">
              <div className="text-sm font-medium" style={{ color: cardTextLight }}>
                Seats Left: 
                {/* Secondary color for emphasis, using active.accent (Golden/Amber) */}
                <span className="font-bold" style={{ color: cardAccent }}>{course.seatsLeft}</span>
              </div>
              <div className="flex gap-2 items-center">
                  <a 
                        href="#" 
                        className="link text-xs font-bold no-underline hover:underline" 
                        style={{ color: cardPrimary }} // Dark gray/charcoal for link
                    >
                        Download Curriculum
                    </a>
                  <button 
                        className="btn btn-sm font-bold border-none" 
                        // Button uses active.accent (Golden/Amber) for background, White for text
                        style={{ backgroundColor: cardAccent, color: active.light }}
                    >
                        Register Now
                    </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}