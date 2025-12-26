import AboutHero from './components/AboutHero'
import AboutWhoAreWe from './components/AboutWhoAreWe'
import AboutOfferings from './components/AboutOfferings'
import AboutMission from './components/AboutMission'
import AboutImpact from './components/AboutImpact'
import AboutVision from './components/OurVision'
import AboutTestimonials from './components/AboutTestimonials'

export default function About() {
  return (
    <main className="min-h-screen">
      <AboutHero />
      <div className="p-md md:p-lg">
        <div className="max-w-7xl mx-auto">
          {/* <AboutWhoAreWe /> */}
          <AboutOfferings />
          <AboutMission />
          <AboutImpact />
          <AboutVision />
          <AboutTestimonials />
        </div>
      </div>
    </main>
  )
}

