import CommunityTopHero from './components/CommunityTopHero'
import { Metadata } from 'next'
import CommunityHero from './components/CommunityHero'
import CommunityWhyJoin from './components/CommunityWhyJoin'
import CommunityShowcase from './components/CommunityShowcase'
import CommunityFAQ from './components/CommunityFAQ'
import CommunityFinalCTA from './components/CommunityFinalCTA'
import { generateMetadata as generateSEOMetadata } from '@/lib/seo/metadata'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'

export const metadata: Metadata = generateSEOMetadata({
  title: 'Community – International Students Talent Hub (ISTH)',
  description:
    'Join 1000+ international students from 20+ countries in our free community. Get exclusive job postings, visa support, housing tips, and peer accountability.',
  path: '/pages/community',
})

export default function Community() {
  return (
    <main className="min-h-screen">
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Our Community', url: '/pages/community' },
        ]}
      />
      <CommunityTopHero />
      {/* <CommunityHero /> */}
      <CommunityWhyJoin />
      <CommunityShowcase />
      <CommunityFAQ />
      <CommunityFinalCTA />
    </main>
  )
}
