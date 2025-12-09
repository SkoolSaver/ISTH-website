import { Button } from '@/components/common/ui'

export default function HeroBanner() {
  return (
    <section className="bg-primary text-white py-3xl px-md">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-lg">
          Welcome to ISTH
        </h1>
        <p className="text-xl mb-xl opacity-90 max-w-2xl mx-auto">
          Building amazing experiences with modern technology and innovative solutions.
        </p>
        <div className="flex gap-md justify-center">
          <Button variant="secondary" size="lg">
            Get Started
          </Button>
          <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-primary">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  )
}

