export default function EventSchema() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.isthub.us'

  const eventSchema = {
    '@context': 'https://schema.org',
    '@type': 'EventSeries',
    name: 'International Students Talent Hub Events',
    description:
      'Join exclusive events for international students. Network with peers, attend workshops, and participate in career development events designed to help you succeed.',
    url: `${siteUrl}/pages/events`,
    organizer: {
      '@type': 'Organization',
      name: 'International Students Talent Hub',
      url: siteUrl,
    },
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OnlineEventAttendanceMode',
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
    />
  )
}
