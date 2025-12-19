'use client'

import { appPalette } from '@/theme/palette'

interface EventsFilterProps {
  selectedCategory: string
  onCategoryChange: (category: string) => void
}

export default function EventsFilter({
  selectedCategory,
  onCategoryChange,
}: EventsFilterProps) {
  const categories = [
    { id: 'all', label: 'All Events' },
    { id: 'Course', label: 'Courses' },
    { id: 'Workshop', label: 'Workshops' },
    { id: 'Bootcamp', label: 'Bootcamps' },
    { id: 'Hackathon', label: 'Hackathons' },
    { id: 'Meetup', label: 'Meetups' },
    { id: 'Conference', label: 'Conferences' },
  ]

  return (
    <div 
      className="p-4 sm:p-5 md:p-lg rounded-lg border"
      style={{ backgroundColor: appPalette.background.main, borderColor: appPalette.border.main }}
    >
      <h2 
        className="text-base sm:text-lg md:text-xl font-semibold mb-3 sm:mb-4 md:mb-md"
        style={{ color: appPalette.active.accent }}
      >
        Filter Events
      </h2>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`text-left px-3 sm:px-md py-2 sm:py-sm rounded-md transition-colors text-sm sm:text-base hover:opacity-80`}
            style={{
              backgroundColor: selectedCategory === category.id ? appPalette.active.accent : 'transparent',
              color: selectedCategory === category.id ? appPalette.active.light : appPalette.text.main,
            }}
          >
            {category.label}
          </button>
        ))}
      </div>
    </div>
  )
}

