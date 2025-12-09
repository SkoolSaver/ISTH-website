import HeroBanner from './pages/hero/components/HeroBanner'
import HeroFeatures from './pages/hero/components/HeroFeatures'
import HeroCTA from './pages/hero/components/HeroCTA'

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroBanner />
      <div className="max-w-7xl mx-auto px-md py-xl">
        <HeroFeatures />
        <HeroCTA />
      </div>
    </main>
  )
}

