import Link from 'next/link'
import { Button } from '@/components/common/ui'

const COMMUNITY_URL = 'https://nas.io/international-students-talent-hub/community'

export default function CommunityShowcase() {
  // Member avatars with colored borders (using appPalette colors only)
  const members = [
    { name: 'Alice', initial: 'A', borderColor: 'border-accent', dotColor: 'bg-accent' },
    { name: 'Bob', initial: 'B', borderColor: 'border-accent-light', dotColor: 'bg-accent-light' },
    { name: 'Carla', initial: 'C', borderColor: 'border-accent', dotColor: 'bg-accent' },
    {
      name: 'David',
      initial: 'D',
      borderColor: 'border-accent-light',
      dotColor: 'bg-accent-light',
    },
    { name: 'Emma', initial: 'E', borderColor: 'border-accent', dotColor: 'bg-accent' },
  ]

  return (
    <section className="bg-white py-3xl px-md">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-lg">
          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary-dark">
            You'll be in good company.
          </h2>

          {/* Member Avatars */}
          <div className="flex justify-center items-center gap-3 md:gap-4 -ml-2 md:-ml-3">
            {members.map((member, index) => (
              <div key={index} className="relative" aria-label={member.name}>
                <div
                  className={`w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-accent-light to-accent border-2 ${member.borderColor} flex items-center justify-center text-white font-bold text-xl md:text-2xl shadow-md relative z-10`}
                >
                  {member.initial}
                </div>
                {/* Status dot */}
                <div
                  className={`absolute bottom-0 right-0 w-4 h-4 ${member.dotColor} rounded-full border-2 border-white z-20`}
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
                className="bg-accent-light text-white hover:bg-accent-light rounded-lg font-semibold"
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
