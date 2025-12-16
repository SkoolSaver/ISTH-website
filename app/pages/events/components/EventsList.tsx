import { EventsData, EventItem } from './EventsData'

interface EventsListProps {
  selectedDay: number | null
  currentYear: number
  currentMonth: number
  onResetSelection: () => void
  selectedCategory: string
  dateRange: string[]
}

export default function EventsList({
  selectedDay,
  currentYear,
  currentMonth,
  onResetSelection,
  selectedCategory,
  dateRange,
}: EventsListProps) {
  const now = new Date()
  const today = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate())

  // Filter events by month and year
  let eventsThisMonth = EventsData.filter(
    (event: EventItem) =>
      event.date.getUTCFullYear() === currentYear &&
      event.date.getUTCMonth() === currentMonth,
  )

  // Filter by category
  if (selectedCategory !== 'all') {
    eventsThisMonth = eventsThisMonth.filter(
      (event: EventItem) => event.category === selectedCategory,
    )
  }

  // Filter by date range
  if (dateRange.length > 0) {
    eventsThisMonth = eventsThisMonth.filter((event: EventItem) => {
      const eventDate = new Date(
        event.date.getUTCFullYear(),
        event.date.getUTCMonth(),
        event.date.getUTCDate(),
      )
      const daysDiff = Math.floor((eventDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))

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
    ? eventsThisMonth.filter((event) => event.date.getUTCDate() === selectedDay)
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
        filteredEvents.map((event, index) => (
          <div
            key={event.title + event.date.toISOString()}
            className="collapse collapse-plus rounded-box bg-white border border-border"
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
                <div className="flex-1 min-w-0">
                  <div className="text-sm sm:text-base md:text-lg truncate">{event.title}</div>
                  <div className="text-xs sm:text-sm uppercase font-semibold text-accent-dark">
                    {event.category} • Day {event.date.getUTCDate()}
                  </div>
                </div>
              </div>
            </div>
            <div className="collapse-content text-xs sm:text-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1">
              <div className="flex-1 text-text">{event.description}</div>
              <button className="btn btn-sm sm:btn-md px-3 sm:px-4 py-1 sm:py-2 font-semibold transition-all bg-accent-dark text-white border-none hover:opacity-90 whitespace-nowrap">
                Register
              </button>
            </div>
          </div>
        ))
      ) : (
        <div className="p-4 sm:p-6 text-center text-sm sm:text-base text-text-secondary">
          No events found for the selected filters.
        </div>
      )}
    </div>
  )
}