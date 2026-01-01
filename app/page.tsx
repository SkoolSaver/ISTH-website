import { Metadata } from 'next'
import HeroBanner from './pages/hero/components/HeroBanner'
import ScrollingNote from './pages/hero/components/ScrollingNote'
import HeroFeatures from './pages/hero/components/HeroFeatures'
import CommunityTeaser from './pages/hero/components/CommunityTeaser'
import Statistics from './pages/hero/components/Statistics'
import { generateMetadata as generateSEOMetadata } from '@/lib/seo/metadata'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'

export const metadata: Metadata = generateSEOMetadata({
  title: 'International Students Talent Hub (ISTH) – Learn, Connect, Grow',
  description:
    'Accelerate your career as an international student with ISTH. Learn skills, join events, and get hired. Join 1000+ students helping each other succeed globally.',
  path: '/',
})

export default function Home() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: '/' }]} />
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
