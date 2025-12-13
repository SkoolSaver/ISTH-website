import AboutWhoAreWe from './components/AboutWhoAreWe'
import AboutOfferings from './components/AboutOfferings'
import AboutImpact from './components/AboutImpact'
import AboutTestimonials from './components/AboutTestimonials'

export default function About() {
  return (
    <main className="min-h-screen p-md md:p-xl">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-lg text-primary">
            About Us
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-text-secondary">
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

