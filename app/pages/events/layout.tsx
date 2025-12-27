import { Metadata } from 'next'
import { generateMetadata as generateSEOMetadata } from '@/lib/seo/metadata'

export const metadata: Metadata = generateSEOMetadata({
  title: 'Events',
  description:
    'Join exclusive events for international students. Network with peers, attend workshops, and participate in career development events designed to help you succeed.',
  path: '/pages/events',
})

export default function EventsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
