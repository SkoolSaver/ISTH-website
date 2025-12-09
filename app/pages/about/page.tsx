import AboutMission from './components/AboutMission'
import AboutTeam from './components/AboutTeam'
import AboutValues from './components/AboutValues'

export default function About() {
  return (
    <main className="min-h-screen p-md">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-primary mb-lg">
          About Us
        </h1>
        <p className="text-text-secondary mb-xl text-lg">
          Learn more about our mission, values, and the team behind ISTH.
        </p>
        <AboutMission />
        <AboutValues />
        <AboutTeam />
      </div>
    </main>
  )
}

