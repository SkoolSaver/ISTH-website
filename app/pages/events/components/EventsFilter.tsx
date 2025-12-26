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
      className="mb-sm"
      // style={{ backgroundColor: appPalette.background.main, borderColor: appPalette.border.main }}
    >
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`text-left px-3 sm:px-md py-2 sm:py-sm rounded-full transition-colors text-sm sm:text-base hover:opacity-90`}
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

