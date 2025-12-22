'use client'

import { useState, useEffect } from 'react'
import EventsHero from './components/EventsHero'
import EventsList from './components/EventsList'
import EventsCalender from './components/EventsCalender'
import EventsDetails from './components/EventsDetails'
import { appPalette } from '@/theme/palette'
import { EventsService } from '@/lib/services/EventsServices'
import { IEvent } from '@/lib/models/EventsModel'
import EventsFilter from './components/EventsFilter'

export default function Events() {
  const [selectedDay, setSelectedDay] = useState<number | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [dateRange, setDateRange] = useState<string[]>([])
  const now = new Date()
  const [currentYear, setCurrentYear] = useState(now.getUTCFullYear())
  const [currentMonth, setCurrentMonth] = useState(now.getUTCMonth())
  const [events, setEvents] = useState<IEvent[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await EventsService.getAll()
        if (response.success && response.data) {
          setEvents(response.data)
        }
      } catch (error) {
        console.error('Failed to fetch events:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchEvents()
  }, [])

  return (
    <main className="min-h-screen">
      {/* Top Hero Section */}
      <EventsHero />

      {/* Content section under banner */}
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
            {/* LEFT: Calendar - Takes 55% width on large screens */}
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

            {/* RIGHT: Events list - Takes 1 column on large screens */}
            <div className="flex flex-col gap-4 sm:gap-6 md:gap-lg">
              <EventsList
                events={events}
                selectedDay={selectedDay}
                currentYear={currentYear}
                currentMonth={currentMonth}
                onResetSelection={() => setSelectedDay(null)}
                selectedCategory={selectedCategory}
                dateRange={dateRange}
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