import { Metadata } from 'next'
import { generateMetadata as generateSEOMetadata } from '@/lib/seo/metadata'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import EventSchema from '@/components/seo/EventSchema'

export const metadata: Metadata = generateSEOMetadata({
  title: 'Exclusive Events & Workshops – International Students Talent Hub (ISTH)',
  description:
    'Join 50+ exclusive events for international students. Network with peers, attend workshops, and participate in career development events. 2000+ students participated.',
  path: '/pages/events',
})

export default function EventsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Events', url: '/pages/events' },
        ]}
      />
      <EventSchema />
      {children}
    </>
  )
}
