'use client'

import { useState, useEffect } from 'react'
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
    <main className="min-h-screen bg-gray-100">
      {/* Top banner */}
      <section className="w-full py-4 sm:py-8 md:py-7">
        <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-2">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold text-accent-dark">
            Upcoming Events...
          </h1>
        </div>
      </section>

      {/* Content section under banner */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-md">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6 sm:mb-8 md:mb-10 overflow-hidden">
            <div className="relative">
              <div className="flex animate-marquee whitespace-nowrap"> {/* check global.css for more details */}
                <span className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-text-secondary font-bold mx-4 sm:mx-8">
                  Registering for events is highly encouraged. It helps us understand how we&apos;re growing and the impact we&apos;re making.
                </span>
                <span className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-text-secondary font-bold mx-4 sm:mx-8">
                  Registering for events is highly encouraged. It helps us understand how we&apos;re growing and the impact we&apos;re making.
                </span>
              </div>
            </div>
          </div>

          {/* Filter Section - Mobile First */}
          <div className="mb-4 sm:mb-6 md:mb-8">
            <EventsFilter
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              dateRange={dateRange}
              onDateRangeChange={setDateRange}
            />
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-lg items-start">
            {/* LEFT: Calendar - Takes 2 columns on large screens */}
            <div className="lg:col-span-2">
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