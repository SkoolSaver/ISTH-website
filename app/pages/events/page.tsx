'use client'

import { useState } from 'react'
import EventsList from './components/EventsList'
import EventsCalender from './components/EventsCalender'
import EventsDetails from './components/EventsDetails'
import { appPalette } from '@/theme/palette'

export default function Events() {
  const [selectedDay, setSelectedDay] = useState<number | null>(null)
  const now = new Date()
  const [currentYear, setCurrentYear] = useState(now.getUTCFullYear())
  const [currentMonth, setCurrentMonth] = useState(now.getUTCMonth())

  return (
    <main className="min-h-screen bg-background">
      {/* Top mustard banner */}
      <section
        className="w-full py-24 md:py-32"
        style={{ backgroundColor: appPalette.active.accent }}
      >
        <div className="max-w-7xl mx-auto px-md text-center">
          <h1
            className="text-4xl md:text-6xl font-mono leading-tight uppercase"
            style={{ color: appPalette.text.main }}
          >
            Upcoming Events...
          </h1>
        </div>
      </section>

      {/* Content section under banner */}
      <section className="p-md">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 text-center">
            <p
              className="mt-4 md:text-4xl max-w-xl text-md font-bold mx-auto"
              style={{ color: appPalette.text.secondary }}
            >
              Registering for events is highly encouraged. It helps us understand how we&apos;re growing and the impact we&apos;re making.
            </p>
          </div>

          <div
            className="grid gap-lg items-start"
            style={{ gridTemplateColumns: '60% 40%' }}
          >
            {/* LEFT: Calendar */}
            <div>
              <EventsCalender
                onDateSelect={setSelectedDay}
                selectedDay={selectedDay}
                onMonthChange={(year, month) => {
                  setCurrentYear(year)
                  setCurrentMonth(month)
                }}
              />
            </div>

            {/* RIGHT: Events list */}
            <div className="flex flex-col gap-lg">
              <EventsList
                selectedDay={selectedDay}
                currentYear={currentYear}
                currentMonth={currentMonth}
                onResetSelection={() => setSelectedDay(null)}
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