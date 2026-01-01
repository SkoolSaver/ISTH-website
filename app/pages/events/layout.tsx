import { Metadata } from 'next'
import { generateMetadata as generateSEOMetadata } from '@/lib/seo/metadata'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import EventSchema from '@/components/seo/EventSchema'

export const metadata: Metadata = generateSEOMetadata({
  title: 'Events',
  description:
    'Join exclusive events for international students. Network with peers, attend workshops, and participate in career development events to help you succeed.',
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
