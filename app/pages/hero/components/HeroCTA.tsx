import { Button } from '@/components/common/ui'

export default function HeroCTA() {
  return (
    <section className="bg-accent text-white py-2xl px-md rounded-lg text-center">
      <h2 className="text-3xl font-bold mb-md">Ready to Get Started?</h2>
      <p className="text-lg mb-lg opacity-90">Join us today and experience the difference.</p>
      <Button variant="secondary" size="lg">
        Contact Us
      </Button>
    </section>
  )
}
