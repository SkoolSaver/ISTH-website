import AboutWhoAreWe from './components/AboutWhoAreWe'
import AboutOfferings from './components/AboutOfferings'
import AboutImpact from './components/AboutImpact'
import AboutTestimonials from './components/AboutTestimonials'

export default function About() {
  return (
    <main className="min-h-screen p-md md:p-lg">
      <div className="max-w-7xl mx-auto">
        <div className="mb-xl">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-sm text-accent-dark">
            About Us
          </h1>
          <p className="text-lg md:text-xl lg:text-xl max-w-3xl text-text-secondary">
            Learn more about our mission, values, and the team behind ISTH.
          </p>
        </div>
        <AboutWhoAreWe />
        <AboutOfferings />
        <AboutImpact />
        <AboutTestimonials />
      </div>
    </main>
  )
}

