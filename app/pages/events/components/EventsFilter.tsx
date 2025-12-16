'use client'

interface EventsFilterProps {
  selectedCategory: string
  onCategoryChange: (category: string) => void
  dateRange: string[]
  onDateRangeChange: (ranges: string[]) => void
}

export default function EventsFilter({
  selectedCategory,
  onCategoryChange,
  dateRange,
  onDateRangeChange,
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

  const handleDateRangeToggle = (range: string) => {
    if (dateRange.includes(range)) {
      onDateRangeChange(dateRange.filter(r => r !== range))
    } else {
      onDateRangeChange([...dateRange, range])
    }
  }

  return (
    <div className="bg-white p-4 sm:p-5 md:p-lg rounded-lg border border-border">
      <h2 className="text-base sm:text-lg md:text-xl font-semibold text-accent-dark mb-3 sm:mb-4 md:mb-md">Filter Events</h2>
      <div className="space-y-1 sm:space-y-xs">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={` text-left px-3 sm:px-md py-2 sm:py-sm rounded-md transition-colors text-sm sm:text-base ${
              selectedCategory === category.id
                ? 'bg-accent-dark text-white'
                : 'text-text hover:bg-gray-100'
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>
      <div className=" flex flex-row items-center gap-2 sm:gap-md md:gap-lg lg:gap-xl mt-4 sm:mt-6 md:mt-lg pt-4 sm:pt-6 md:pt-lg border-t border-border">
        <h3 className="text-xs sm:text-sm md:text-base font-medium text-text mb- sm:mb-sm">Date Range</h3>
        <div className="flex flex-row items-center justify-between space-x-sm sm:space-x-xl">
          <label className="flex items-center gap-2 text-xs sm:text-sm text-text-secondary cursor-pointer">
            <input
              type="checkbox"
              checked={dateRange.includes('thisWeek')}
              onChange={() => handleDateRangeToggle('thisWeek')}
              className="rounded w-4 h-4 cursor-pointer"
            />
            This Week
          </label>
          <label className="flex items-center gap-2 sm:gap-xs text-xs sm:text-sm text-text-secondary cursor-pointer">
            <input
              type="checkbox"
              checked={dateRange.includes('thisMonth')}
              onChange={() => handleDateRangeToggle('thisMonth')}
              className="rounded w-4 h-4 cursor-pointer"
            />
            This Month
          </label>
          <label className="flex items-center gap-2 sm:gap-xs text-xs sm:text-sm text-text-secondary cursor-pointer">
            <input
              type="checkbox"
              checked={dateRange.includes('upcoming')}
              onChange={() => handleDateRangeToggle('upcoming')}
              className="rounded w-4 h-4 cursor-pointer"
            />
            Upcoming
          </label>
        </div>
      </div>
    </div>
  )
}

