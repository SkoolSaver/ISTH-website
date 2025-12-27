import CommunityTopHero from './components/CommunityTopHero'
import { Metadata } from 'next'
import CommunityHero from './components/CommunityHero'
import CommunityWhyJoin from './components/CommunityWhyJoin'
import CommunityShowcase from './components/CommunityShowcase'
import CommunityFAQ from './components/CommunityFAQ'
import CommunityFinalCTA from './components/CommunityFinalCTA'
import { generateMetadata as generateSEOMetadata } from '@/lib/seo/metadata'

export const metadata: Metadata = generateSEOMetadata({
  title: 'Our Community',
  description:
    'Join 1000+ international students from 20+ countries in our free community. Get exclusive job postings, visa support, housing tips, and peer accountability to succeed.',
  path: '/pages/community',
})

export default function Community() {
  return (
    <main className="min-h-screen">
      <CommunityTopHero />
      {/* <CommunityHero /> */}
      <CommunityWhyJoin />
      <CommunityShowcase />
      <CommunityFAQ />
      <CommunityFinalCTA />
    </main>
  )
}
