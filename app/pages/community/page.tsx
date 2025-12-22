import CommunityTopHero from './components/CommunityTopHero'
import CommunityHero from './components/CommunityHero'
import CommunityWhyJoin from './components/CommunityWhyJoin'
import CommunityShowcase from './components/CommunityShowcase'
import CommunityFAQ from './components/CommunityFAQ'
import CommunityFinalCTA from './components/CommunityFinalCTA'

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
