import { Metadata } from 'next'
import HeroBanner from './pages/hero/components/HeroBanner'
import ScrollingNote from './pages/hero/components/ScrollingNote'
import HeroFeatures from './pages/hero/components/HeroFeatures'
import CommunityTeaser from './pages/hero/components/CommunityTeaser'
import Statistics from './pages/hero/components/Statistics'
import { generateMetadata as generateSEOMetadata } from '@/lib/seo/metadata'

export const metadata: Metadata = generateSEOMetadata({
  title: 'ISTH - International Students Talent Hub | Learn, Connect, Grow',
  description:
    'ISTH (International Students Talent Hub) - Accelerate your career as an international student. Join ISTH to learn skills, connect with peers, join events, and get hired. Platform for international student success.',
  path: '/',
})

export default function Home() {
  return (
    <>
      {/* Scrolling Note */}
      <ScrollingNote />

      {/* Hero Section */}
      <HeroBanner />

      {/* Learn. Connect. Grow. Section */}
      <div className="max-w-7xl mx-auto px-md py-xl">
        <HeroFeatures />
      </div>

      {/* Our Community Section */}
      <CommunityTeaser />

      {/* Statistics Section */}
      <Statistics />
    </>
  )
}
