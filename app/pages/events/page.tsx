import EventsList from './components/EventsList'
import EventsFilter from './components/EventsFilter'

export default function Events() {
  return (
    <main className="min-h-screen p-md">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-primary mb-lg">
          Events
        </h1>
        <p className="text-text-secondary mb-xl">
          Discover upcoming events and join our community.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-lg">
          <div className="lg:col-span-1">
            <EventsFilter />
          </div>
          <div className="lg:col-span-3">
            <EventsList />
          </div>
        </div>
      </div>
    </main>
  )
}

