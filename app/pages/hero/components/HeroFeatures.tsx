import Link from 'next/link'

export default function HeroFeatures() {
  const offerings = [
    {
      title: 'Learn',
      subtitle: '(Courses)',
      description:
        'Access tailored courses designed to enhance your professional skills and boost your employability.',
      href: '/pages/courses',
      icon: (
        <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
    },
    {
      title: 'Connect',
      subtitle: '(Community)',
      description:
        'Join a vibrant network of international students for peer support, mentorship, and collaboration.',
      href: '/pages/community',
      icon: (
        <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
    {
      title: 'Grow',
      subtitle: '(Events)',
      description:
        'Participate in exclusive workshops and networking events to expand your opportunities.',
      href: '/pages/events',
      icon: (
        <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
    },
  ]

  return (
    <section className="mb-xl">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-lg">
          Learn. Connect. Grow with ISTH
        </h2>
        <p className="text-text-secondary text-lg mb-lg">
          International Students Talent Hub (ISTH) helps you succeed through courses, community, and
          events.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
        {offerings.map((offering, index) => (
          <Link
            key={index}
            href={offering.href}
            className="bg-white hover:bg-gray-50 rounded-xl p-md border-2 hover:shadow-md transition-shadow text-center block cursor-pointer"
          >
            {/* Icon */}
            <div className="flex justify-center mb-md">
              <div className="text-accent-light">{offering.icon}</div>
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold text-primary-dark mb-xs">{offering.title}</h3>
            <p className="text-primary-dark font-semibold mb-sm text-lg">{offering.subtitle}</p>

            {/* Description */}
            <p className="text-text-secondary leading-relaxed">{offering.description}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}
