import { appPalette } from '@/lib/theme/palette'
import { EventsData, EventItem } from './EventsData'

interface EventsListProps {
  selectedDay: number | null
  currentYear: number
  currentMonth: number
  onResetSelection: () => void
}

export default function EventsList({ selectedDay, currentYear, currentMonth, onResetSelection }: EventsListProps) {

  const eventsThisMonth = EventsData.filter(
    (event: EventItem) =>
      event.date.getUTCFullYear() === currentYear &&
      event.date.getUTCMonth() === currentMonth,
  )

  // Filter events based on selected day within current month
  const filteredEvents = selectedDay
    ? eventsThisMonth.filter(event => event.date.getUTCDate() === selectedDay)
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
    <div className="space-y-md">
      <div className="flex items-center justify-between mb-2">
        <div
          className="text-md font-semibold tracking-wide"
          style={{ color: appPalette.text.secondary }}
        >
          {selectedDay
            ? `Events on Day ${selectedDay}`
            : `All Events in ${currentMonthLabel}`}
        </div>
        {selectedDay !== null && (
          <button
            className="btn btn-sm px-3 font-semibold transition-all"
            onClick={onResetSelection}
            style={{
              backgroundColor: appPalette.active.accent,
              color: appPalette.active.main,
              border: 'none',
            }}
          >
            Show all events
          </button>
        )}
      </div>

      {filteredEvents.length > 0 ? (
        filteredEvents.map((event, index) => (
          <div
            key={event.title + event.date.toISOString()}
            className="collapse collapse-plus rounded-box"
            style={{
              backgroundColor: appPalette.background.secondary,
              border: `1px solid ${appPalette.border.main}`,
            }}
          >
            <input
              type="radio"
              name="events-accordion"
              defaultChecked={index === 0}
            />
            <div className="collapse-title font-semibold">
              <div className="flex items-center gap-md">
                <span
                  className="text-2xl font-thin tabular-nums"
                  style={{ color: appPalette.active.main }}
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <div>{event.title}</div>
                  <div
                    className="text-xs uppercase font-semibold"
                    style={{ color: appPalette.active.accent }}
                  >
                    {event.category} • Day {event.date.getUTCDate()}
                  </div>
                </div>
              </div>
            </div>
            <div className="collapse-content text-sm flex items-start justify-between gap-md">
              <div style={{ color: appPalette.text.main }}>
                {event.description}
              </div>
              <button
                className="btn btn-md px-2 font-semibold transition-all"
                style={{
                  backgroundColor: appPalette.active.accent,
                  color: appPalette.active.main,
                  border: 'none',
                }}
              >
                Register
              </button>
            </div>
          </div>
        ))
      ) : (
        <div className="p-4 text-center text-sm" style={{ color: appPalette.text.secondary }}>
          No events found for the selected month.
        </div>
      )}
    </div>
  )
}