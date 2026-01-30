'use client'

import { useState } from 'react'
import useSWR from 'swr'
import EventsHero from './components/EventsHero'
import EventsList from './components/EventsList'
import EventsCalender from './components/EventsCalender'
import EventsDetails from './components/EventsDetails'
import { eventsFetcher } from '@/lib/swr/fetchers'
import EventsFilter from './components/EventsFilter'

export default function Events() {
  const [selectedDay, setSelectedDay] = useState<number | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [dateRange, setDateRange] = useState<string[]>([])
  const now = new Date()
  const [currentYear, setCurrentYear] = useState(now.getUTCFullYear())
  const [currentMonth, setCurrentMonth] = useState(now.getUTCMonth())

  const { data: events = [], isLoading } = useSWR('events', eventsFetcher)

  return (
    <main className="min-h-screen">
      {/* Top Hero Section */}
      <EventsHero />

      {/* Content section under banner - always show shell, load data in background */}
      <section id="events-list-section" className="px-4 sm:px-6 md:px-8 lg:px-md">
        <div className="max-w-7xl mx-auto">
          {/* Filter Section - Mobile First */}
          <div className="mb-4 sm:mb-6 md:mb-8">
            <EventsFilter
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-[65%_35%] gap-4 sm:gap-6 md:gap-8 lg:gap-lg items-start">
            {/* LEFT: Calendar */}
            <div className="">
              <EventsCalender
                events={events}
                onDateSelect={setSelectedDay}
                selectedDay={selectedDay}
                onMonthChange={(year, month) => {
                  setCurrentYear(year)
                  setCurrentMonth(month)
                }}
              />
            </div>

            {/* RIGHT: Events list - shows skeleton when loading */}
            <div className="flex flex-col gap-4 sm:gap-6 md:gap-lg">
              <EventsList
                events={events}
                selectedDay={selectedDay}
                currentYear={currentYear}
                currentMonth={currentMonth}
                onResetSelection={() => setSelectedDay(null)}
                selectedCategory={selectedCategory}
                dateRange={dateRange}
                isLoading={isLoading}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Event details section at bottom */}
      <EventsDetails />
    </main>
  )
}