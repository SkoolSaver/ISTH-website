'use client'

import { useState } from 'react'
import { appPalette } from '@/theme/palette'
import { IEvent } from '@/lib/models/EventsModel'

interface EventsCalenderProps {
  events: IEvent[]
  onDateSelect: (day: number | null) => void
  selectedDay: number | null
  onMonthChange?: (year: number, month: number) => void
}

export default function EventsCalender({ events, onDateSelect, selectedDay, onMonthChange }: EventsCalenderProps) {
  const now = new Date()
  const [currentDate, setCurrentDate] = useState(new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), 1))) 

  const year = currentDate.getUTCFullYear()
  const month = currentDate.getUTCMonth()
  
  const monthNames = [
    'JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE',
    'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'
  ]
  const monthName = `${monthNames[month]} ${year}`
  
  const firstDay = new Date(Date.UTC(year, month, 1)).getUTCDay()
  const daysInMonth = new Date(Date.UTC(year, month + 1, 0)).getUTCDate()

  const days = []
  for (let i = 0; i < firstDay; i++) {
    days.push(null)
  }
  
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i)
  }

  const handlePreviousMonth = () => {
    const newDate = new Date(Date.UTC(year, month - 1, 1))
    setCurrentDate(newDate)
    onMonthChange?.(newDate.getUTCFullYear(), newDate.getUTCMonth())
    onDateSelect(null) // Reset selection when changing months
  }

  const handleNextMonth = () => {
    const newDate = new Date(Date.UTC(year, month + 1, 1))
    setCurrentDate(newDate)
    onMonthChange?.(newDate.getUTCFullYear(), newDate.getUTCMonth())
    onDateSelect(null) // Reset selection when changing months
  }

  const getDayEvents = (day: number | null) => {
    if (day === null) return []
    return events.filter((event: IEvent) => {
      const eventDate = new Date(event.eventDate)
      return (
        eventDate.getUTCFullYear() === year &&
        eventDate.getUTCMonth() === month &&
        eventDate.getUTCDate() === day
      )
    })
  }

  return (
    <div 
      className="bg-gray-100 rounded-lg shadow-lg p-3 sm:p-4 md:p-5 lg:p-2xl mb-xl"
    >
      {/* Month Header */}
      <div className="flex justify-between items-center mb-4 sm:mb-6 md:mb-lg">
        <button 
          onClick={handlePreviousMonth}
          className="text-xl sm:text-2xl md:text-3xl hover:opacity-70 transition-opacity"
          style={{ color: appPalette.text.main }}
        >
          ‹
        </button>
        <h2 
          className="text-lg sm:text-xl md:text-2xl font-bold"
          style={{ color: appPalette.text.main }}
        >
          {monthName}
        </h2>
        <button 
          onClick={handleNextMonth}
          className="text-xl sm:text-2xl md:text-3xl hover:opacity-70 transition-opacity"
          style={{ color: appPalette.text.main }}
        >
          ›
        </button>
      </div>

      {/* Weekday Headers */}
      <div className="grid grid-cols-7 gap-1 sm:gap-2 md:gap-md mb-2 sm:mb-3 md:mb-md">
        {['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'].map((day) => (
          <div 
            key={day} 
            className="text-center font-semibold text-xs sm:text-sm"
            style={{ color: appPalette.text.secondary }}
          >
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Days */}
      <div className="grid grid-cols-7 gap-1 sm:gap-2 md:gap-lg">
        {days.map((day, idx) => {
          const dayEvents = day ? getDayEvents(day) : []
          const hasEvents = dayEvents.length > 0
          const isSelected = selectedDay === day

          return (
            <div
              key={idx}
              onClick={() => {
                if (!day) return
                if (hasEvents) {
                  onDateSelect(day)
                } else {
                  onDateSelect(null)
                }
              }}
              className={`aspect-square flex flex-col items-center justify-center rounded-md text-xs sm:text-sm cursor-pointer hover:opacity-80 transition relative`}
              style={{
                backgroundColor: isSelected 
                  ? appPalette.active.accent 
                  : day 
                    ? appPalette.background.main 
                    : appPalette.inactive.secondary,
                color: isSelected 
                  ? appPalette.active.light 
                  : day 
                    ? appPalette.text.main 
                    : appPalette.text.secondary,
                border: hasEvents ? `2px solid ${appPalette.active.accent}` : 'none'
              }}
              title={dayEvents.map(e => e.title).join(', ')}
            >
              <span className="font-semibold">{day}</span>
              {hasEvents && selectedDay !== null && !isSelected && (
                <div className="flex gap-1 mt-1">
                  {dayEvents.map((_, i) => (
                    <div
                      key={i}
                      className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full"
                      style={{ backgroundColor: appPalette.active.accent }}
                    />
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}