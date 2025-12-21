import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/common/ui'

const COMMUNITY_URL = 'https://nas.io/international-students-talent-hub/community'

export default function CommunityHero() {
  return (
    <section className="bg-primary-dark py-3xl px-md mt-xs">
      <div className="max-w-7xl mx-auto">
        <div className="text-center text-white space-y-lg">
          {/* Badge */}
          <div>
            <span className="inline-block bg-accent-dark text-white px-lg py-xs rounded-full text-sm font-semibold">
              Free Community for International Students
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            You Don&apos;t Have to Do This Alone
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl opacity-95 leading-relaxed max-w-3xl mx-auto">
            Join thousands of international students globally in a supportive community designed to
            help you thrive in your academic and professional journey. Get exclusive resources, visa
            support, and career opportunities.
          </p>

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

          {/* Sub-text */}
          <p className="text-white text-sm md:text-base opacity-90">
            Hosted on Nas.io - Free to join
          </p>
        </div>
      </div>
    </section>
  )
}
