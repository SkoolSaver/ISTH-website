import HeroBanner from './pages/hero/components/HeroBanner'
import HeroFeatures from './pages/hero/components/HeroFeatures'
import CommunityTeaser from './pages/hero/components/CommunityTeaser'
import Statistics from './pages/hero/components/Statistics'

export default function Home() {
  return (
    <>
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
