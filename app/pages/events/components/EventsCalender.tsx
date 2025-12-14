'use client'

import { useState } from 'react'
import { appPalette } from '@/theme/palette'
import { EventsData, EventItem } from './EventsData'

interface EventsCalenderProps {
  onDateSelect: (day: number | null) => void
  selectedDay: number | null
  onMonthChange?: (year: number, month: number) => void
}

export default function EventsCalender({ onDateSelect, selectedDay, onMonthChange }: EventsCalenderProps) {
  const now = new Date()
  const [currentDate, setCurrentDate] = useState(new Date(Date.UTC(now.getFullYear(), now.getMonth(), 1))) 

  const year = currentDate.getUTCFullYear()
  const month = currentDate.getUTCMonth()
  
  const events = EventsData

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
    return events.filter(
      (event: EventItem) =>
        event.date.getUTCFullYear() === year &&
        event.date.getUTCMonth() === month &&
        event.date.getUTCDate() === day,
    )
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-lg">
      {/* Month Header */}
      <div className="flex justify-between items-center mb-lg">
        <button 
          onClick={handlePreviousMonth}
          className="text-2xl hover:opacity-70 transition"
          style={{ color: appPalette.active.main }}
        >
          ‹
        </button>
        <h2 className="text-2xl font-bold" style={{ color: appPalette.active.main }}>
          {monthName}
        </h2>
        <button 
          onClick={handleNextMonth}
          className="text-2xl hover:opacity-70 transition"
          style={{ color: appPalette.active.main }}
        >
          ›
        </button>
      </div>

      {/* Weekday Headers */}
      <div className="grid grid-cols-7 gap-md mb-md">
        {['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'].map((day) => (
          <div key={day} className="text-center font-semibold text-sm" style={{ color: appPalette.text.secondary }}>
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Days */}
      <div className="grid grid-cols-7 gap-md">
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
              className="aspect-square flex flex-col items-center justify-center rounded-md text-sm cursor-pointer hover:opacity-80 transition relative"
              style={{
                backgroundColor: isSelected
                  ? appPalette.active.accent
                  : day
                    ? appPalette.background.secondary
                    : appPalette.background.main,
                color: isSelected ? appPalette.active.main : appPalette.text.main,
                border: hasEvents ? `2px solid ${appPalette.active.accent}` : 'none',
              }}
              title={dayEvents.map(e => e.title).join(', ')}
            >
              <span className="font-semibold">{day}</span>
              {hasEvents && selectedDay !== null && !isSelected && (
                <div className="flex gap-xs mt-xs">
                  {dayEvents.map((_, i) => (
                    <div
                      key={i}
                      className="w-1.5 h-1.5 rounded-full"
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