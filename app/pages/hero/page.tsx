import HeroBanner from './components/HeroBanner'
import HeroFeatures from './components/HeroFeatures'
import HeroCTA from './components/HeroCTA'

export default function Hero() {
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

