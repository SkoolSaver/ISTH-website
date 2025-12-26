import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/common/ui'

const COMMUNITY_URL = 'https://nas.io/international-students-talent-hub/community'

export default function CommunityShowcase() {
  // Member avatars with colored borders (using appPalette colors only)
  const members = [
    { name: 'Jawahar', image: '/Jawahar.png', borderColor: 'border-accent', dotColor: 'bg-accent' },
    { name: 'Gopi', image: '/Gopi.png', borderColor: 'border-accent-light', dotColor: 'bg-accent-light' },
    { name: 'Rishi', image: '/Rishi.png', borderColor: 'border-accent', dotColor: 'bg-accent' },
    { name: 'Stalin', image: '/Stalin.png', borderColor: 'border-accent-light', dotColor: 'bg-accent-light' },
  ]

  return (
    <section className="bg-white py-sm px-md sm:py-xl md:py-xl">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-xl">
          {/* Headline */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-secondary-dark">
            You&apos;re in the right place for a successful career.
          </h2>

          {/* Member Avatars */}
          <div className="flex justify-center items-center gap-5 md:gap-10">
            {members.map((member, index) => (
              <div key={index} className="relative" aria-label={member.name}>
                <div
                  className={`w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full border-2 ${member.borderColor} overflow-hidden shadow-md relative z-10`}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 64px, (max-width: 1024px) 80px, 96px"
                  />
                </div>
                {/* Status dot */}
                <div
                  className={`absolute bottom-0 right-0 w-3 h-3 md:w-4 md:h-4 ${member.dotColor} rounded-full border-2 border-white z-20`}
                />
              </div>
            ))}
          </div>

          {/* Member Count */}
          <p className="text-lg md:text-xl text-text-secondary font-medium">
            Join 1000+ members from 20+ countries
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
                Join the Community
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
