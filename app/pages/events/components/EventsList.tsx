import { appPalette } from '@/theme/palette'
import { IEvent } from '@/lib/models/EventsModel'

interface EventsListProps {
  events: IEvent[]
  selectedDay: number | null
  currentYear: number
  currentMonth: number
  onResetSelection: () => void
  selectedCategory: string
  dateRange: string[]
}

export default function EventsList({ events, selectedDay, currentYear, currentMonth, onResetSelection, selectedCategory, dateRange }: EventsListProps) {

  let eventsThisMonth = events.filter(
    (event: IEvent) => {
      const eventDate = new Date(event.eventDate)
      return (
        eventDate.getUTCFullYear() === currentYear &&
        eventDate.getUTCMonth() === currentMonth
      )
    }
  )

  // Filter by category
  if (selectedCategory !== 'all' && selectedCategory !== undefined) {
    eventsThisMonth = eventsThisMonth.filter(
      (event: IEvent) => event.category === selectedCategory,
    )
  }

  // Filter by date range
  if (dateRange.length > 0) {
    eventsThisMonth = eventsThisMonth.filter((event: IEvent) => {
      const eventDate = new Date(event.eventDate)
      const now = new Date()
      
      // Normalize both dates to UTC midnight for accurate day difference calculation
      const todayUtc = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()))
      const eventDateUtc = new Date(Date.UTC(eventDate.getUTCFullYear(), eventDate.getUTCMonth(), eventDate.getUTCDate()))
      
      const daysDiff = Math.floor((eventDateUtc.getTime() - todayUtc.getTime()) / (1000 * 60 * 60 * 24))

      if (dateRange.includes('thisWeek')) {
        if (daysDiff >= 0 && daysDiff <= 7) return true
      }
      if (dateRange.includes('thisMonth')) {
        if (
          eventDate.getUTCFullYear() === now.getUTCFullYear() &&
          eventDate.getUTCMonth() === now.getUTCMonth()
        )
          return true
      }
      if (dateRange.includes('upcoming')) {
        if (daysDiff > 0) return true
      }
      return false
    })
  }

  // Filter events based on selected day within current month
  const filteredEvents = selectedDay
    ? eventsThisMonth.filter(event => {
        const eventDate = new Date(event.eventDate)
        return eventDate.getUTCDate() === selectedDay
      })
    : eventsThisMonth

  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  const currentMonthLabel = `${monthNames[currentMonth]} ${currentYear}`

  return (
    <div className="max-w-6xl space-y-3 sm:space-y-4 md:space-y-md mb-lg">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-4 mb-2 sm:mb-3">
        <div className="text-sm sm:text-base md:text-md font-semibold tracking-wide" style={{ color: appPalette.text.secondary }}>
          {selectedDay
            ? `Events on Day ${selectedDay}`
            : `All Events in ${currentMonthLabel}`}
        </div>
        {selectedDay !== null && (
          <button
            className="btn btn-sm px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm font-semibold transition-all border-none hover:opacity-90"
            style={{ backgroundColor: appPalette.background.light, color: appPalette.text.main }}
            onClick={onResetSelection}
          >
            Show all events
          </button>
        )}
      </div>

      {filteredEvents.length > 0 ? (
        filteredEvents.map((event, index) => {
          const eventDate = new Date(event.eventDate)
          
          const now = new Date()
          const todayUtc = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()))
          const eventDateUtc = new Date(Date.UTC(eventDate.getUTCFullYear(), eventDate.getUTCMonth(), eventDate.getUTCDate()))
          const isPast = eventDateUtc < todayUtc

          return (
          <div
            key={event._id as unknown as string}
            className="collapse collapse-plus rounded-box bg-gray-50 border-2 border-gray-300"
            // style={{
            //   backgroundColor: appPalette.background.secondary,
            //   border: `1px solid ${appPalette.border.main}`,
            // }}
          >
            <input
              type="radio"
              name="events-accordion"
              defaultChecked={index === 0}
            />
            <div className="collapse-title font-semibold p-3 sm:p-4">
              <div className="flex items-center gap-2 sm:gap-3 md:gap-md">
                <span className="text-xl sm:text-2xl font-thin tabular-nums" style={{ color: appPalette.text.main }}>
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <div style={{ color: appPalette.text.main }}>{event.title}</div>
                  <div
                    className="text-xs uppercase font-semibold"
                    style={{ color: appPalette.active.accent }}
                  >
                    {event.category} • Day {eventDate.getUTCDate()}
                  </div>
                </div>
              </div>
            </div>
            <div className="collapse-content text-sm flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row items-start justify-between gap-md">
                <div style={{ color: appPalette.text.main }}>
                  {event.description}
                </div>
                {isPast ? (
                  <button
                    disabled
                    className="btn btn-md px-4 font-semibold transition-all border-none whitespace-nowrap cursor-not-allowed opacity-50"
                    style={{ backgroundColor: appPalette.inactive.main, color: appPalette.text.muted }}
                  >
                    Event Ended
                  </button>
                ) : (
                  <a
                    href={event.nasioUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-md px-4 font-semibold transition-all border-none hover:opacity-90 whitespace-nowrap"
                    style={{ backgroundColor: appPalette.active.accent, color: appPalette.active.light }}
                  >
                    Register
                  </a>
                )}
              </div>
            </div>
          </div>
        )})
      ) : (
        <div className="p-4 sm:p-6 text-center text-sm sm:text-base" style={{ color: appPalette.text.secondary }}>
          No events found for the selected filters.
        </div>
      )}
    </div>
  )
}