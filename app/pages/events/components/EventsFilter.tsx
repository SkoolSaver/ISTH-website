'use client'

import { useState } from 'react'

export default function EventsFilter() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const categories = [
    { id: 'all', label: 'All Events' },
    { id: 'conference', label: 'Conferences' },
    { id: 'workshop', label: 'Workshops' },
    { id: 'meetup', label: 'Meetups' },
    { id: 'webinar', label: 'Webinars' },
  ]

  return (
    <div className="bg-background-secondary p-lg rounded-lg border border-border">
      <h2 className="text-lg font-semibold text-primary mb-md">Filter Events</h2>
      <div className="space-y-xs">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`w-full text-left px-md py-sm rounded-md transition-colors ${
              selectedCategory === category.id
                ? 'bg-primary text-white'
                : 'text-text hover:bg-background'
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>
      <div className="mt-lg pt-lg border-t border-border">
        <h3 className="text-sm font-medium text-text mb-sm">Date Range</h3>
        <div className="space-y-xs">
          <label className="flex items-center gap-xs text-sm text-text-secondary">
            <input type="checkbox" className="rounded" />
            This Week
          </label>
          <label className="flex items-center gap-xs text-sm text-text-secondary">
            <input type="checkbox" className="rounded" />
            This Month
          </label>
          <label className="flex items-center gap-xs text-sm text-text-secondary">
            <input type="checkbox" className="rounded" />
            Upcoming
          </label>
        </div>
      </div>
    </div>
  )
}

