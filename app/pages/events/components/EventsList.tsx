export default function EventsList() {
  const events = [
    {
      id: 1,
      title: 'Tech Conference 2024',
      date: 'March 15, 2024',
      location: 'San Francisco, CA',
      description: 'Join us for an exciting day of talks, workshops, and networking.',
      category: 'Conference',
    },
    {
      id: 2,
      title: 'Web Development Workshop',
      date: 'March 22, 2024',
      location: 'Online',
      description: 'Learn modern web development techniques and best practices.',
      category: 'Workshop',
    },
    {
      id: 3,
      title: 'Community Meetup',
      date: 'April 5, 2024',
      location: 'New York, NY',
      description: 'Monthly community meetup for developers and enthusiasts.',
      category: 'Meetup',
    },
  ]

  return (
    <div className="space-y-md">
      {events.map((event) => (
        <div
          key={event.id}
          className="bg-background-secondary p-lg rounded-lg border border-border hover:shadow-md transition-shadow"
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-md">
            <div className="flex-1">
              <div className="flex items-center gap-md mb-sm">
                <span className="px-sm py-xs bg-primary text-white text-sm rounded-md">
                  {event.category}
                </span>
                <span className="text-text-secondary text-sm">{event.date}</span>
              </div>
              <h2 className="text-xl font-semibold text-primary mb-sm">
                {event.title}
              </h2>
              <p className="text-text-secondary mb-sm">{event.description}</p>
              <p className="text-text-muted text-sm">📍 {event.location}</p>
            </div>
            <button className="px-lg py-sm bg-primary text-white rounded-md hover:bg-primary-dark transition-colors">
              Register
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

