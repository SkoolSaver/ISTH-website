import Link from 'next/link'
import { Button } from '@/components/common/ui'

const COMMUNITY_URL = 'https://nas.io/international-students-talent-hub/community'

export default function CommunityFinalCTA() {
  return (
    <section className="bg-primary-dark py-3xl px-md">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-lg">
          {/* Headline */}
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white">
            Ready to find your people?
          </h2>

          {/* CTA Button */}
          <div className="flex justify-center pt-md">
            <Link
              href={COMMUNITY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button
                variant="accent"
                size="lg"
                className="bg-accent-dark text-white hover:opacity-90 rounded-lg font-semibold"
              >
                Join the Nas.io Community Free
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
