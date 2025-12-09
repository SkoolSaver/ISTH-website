import ServicesList from './components/ServicesList'
import ServicesCTA from './components/ServicesCTA'

export default function Services() {
  return (
    <main className="min-h-screen p-md">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-primary mb-lg">
          Our Services
        </h1>
        <p className="text-text-secondary mb-xl text-lg">
          We offer a wide range of services to help you achieve your goals.
        </p>
        <ServicesList />
        <ServicesCTA />
      </div>
    </main>
  )
}

