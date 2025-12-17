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
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      const eventDateOnly = new Date(eventDate)
      eventDateOnly.setHours(0, 0, 0, 0)
      const daysDiff = Math.floor((eventDateOnly.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))

      if (dateRange.includes('thisWeek')) {
        if (daysDiff >= 0 && daysDiff <= 7) return true
      }
      if (dateRange.includes('thisMonth')) {
        if (
          eventDate.getUTCFullYear() === today.getUTCFullYear() &&
          eventDate.getUTCMonth() === today.getUTCMonth()
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
    <div className="max-w-6xl space-y-3 sm:space-y-4 md:space-y-md">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-4 mb-2 sm:mb-3">
        <div className="text-sm sm:text-base md:text-md font-semibold tracking-wide text-text-secondary">
          {selectedDay
            ? `Events on Day ${selectedDay}`
            : `All Events in ${currentMonthLabel}`}
        </div>
        {selectedDay !== null && (
          <button
            className="btn btn-sm px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm font-semibold transition-all bg-white text-primary-dark border-none hover:opacity-90"
            onClick={onResetSelection}
          >
            Show all events
          </button>
        )}
      </div>

      {filteredEvents.length > 0 ? (
        filteredEvents.map((event, index) => {
          const eventDate = new Date(event.eventDate)
          return (
          <div
            key={event._id as unknown as string}
            className="collapse collapse-plus rounded-box"
            style={{
              backgroundColor: appPalette.background.main,
              border: `1px solid ${appPalette.border.main}`,
            }}
          >
            <input
              type="radio"
              name="events-accordion"
              defaultChecked={index === 0}
            />
            <div className="collapse-title font-semibold p-3 sm:p-4">
              <div className="flex items-center gap-2 sm:gap-3 md:gap-md">
                <span className="text-xl sm:text-2xl font-thin tabular-nums text-primary-dark">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <div>{event.title}</div>
                  <div
                    className="text-xs uppercase font-semibold"
                    style={{ color: appPalette.active.accent }}
                  >
                    {event.category} • Day {eventDate.getUTCDate()}
                  </div>
                </div>
              </div>
            </div>
            <div className="collapse-content text-sm flex items-start justify-between gap-md">
              <div style={{ color: appPalette.text.main }}>
                {event.description}
              </div>
              <a
                href={event.nasioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-md px-2 font-semibold transition-all text-white bg-accent-dark border-none hover:opacity-90">
                Register
              </a>
            </div>
          </div>
        )})
      ) : (
        <div className="p-4 sm:p-6 text-center text-sm sm:text-base text-text-secondary">
          No events found for the selected filters.
        </div>
      )}
    </div>
  )
}