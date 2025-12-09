import { Button } from '@/components/common/ui'

export default function ServicesCTA() {
  return (
    <section className="bg-primary text-white p-2xl rounded-lg text-center">
      <h2 className="text-3xl font-bold mb-md">
        Ready to Work Together?
      </h2>
      <p className="text-lg mb-lg opacity-90 max-w-2xl mx-auto">
        Let's discuss how we can help bring your vision to life. Get in touch with us today.
      </p>
      <div className="flex gap-md justify-center">
        <Button variant="secondary" size="lg">
          Get Started
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
        >
          Learn More
        </Button>
      </div>
    </section>
  )
}

