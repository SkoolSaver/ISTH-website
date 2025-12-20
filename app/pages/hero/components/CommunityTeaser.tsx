import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/common/ui'

const COMMUNITY_URL = 'https://nas.io/international-students-talent-hub/home'

export default function CommunityTeaser() {
  return (
    <section className="bg-white py-xl px-md">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl items-center">
          {/* Left Panel - Image with Text Overlay (Single Responsive Component) */}
          <div className="hidden lg:block relative w-full aspect-[3/2] max-w-[600px] overflow-hidden rounded-lg">
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src="/Community page image.png"
                alt="Tech devices with community interface"
                fill
                className="object-cover"
                priority
              />
              {/* Text Overlay - Channels and Direct Messages */}
              <div className="absolute inset-0 flex flex-col justify-center p-4 sm:p-6 md:p-8 max-h-full overflow-hidden">
                {/* Channels Section */}
                {/* <div className="flex-shrink-0 mb-2 sm:mb-3">
                  <div className="text-[clamp(0.7rem,1.2vw,0.9rem)] font-semibold text-primary-dark mb-1 sm:mb-1.5">
                    Channels
                  </div>
                  <div className="space-y-0.5 sm:space-y-1">
                    <div className="text-accent font-medium text-[clamp(0.65rem,1vw,0.8rem)] truncate">
                      #general
                    </div>
                    <div className="text-secondary font-medium text-[clamp(0.65rem,1vw,0.8rem)] truncate">
                      #job-postings
                    </div>
                    <div className="text-accent font-medium text-[clamp(0.65rem,1vw,0.8rem)] truncate">
                      #study-groups
                    </div>
                    <div className="text-secondary font-medium text-[clamp(0.65rem,1vw,0.8rem)] truncate">
                      #events
                    </div>
                  </div>
                </div> */}

                {/* Direct Messages Section */}
                {/* <div className="flex-shrink-0 pt-2 sm:pt-3 border-t border-primary-dark/20">
                  <div className="text-[clamp(0.7rem,1.2vw,0.9rem)] font-semibold text-primary-dark mb-1 sm:mb-1.5">
                    Direct Messages
                  </div>
                  <div className="space-y-0.5 sm:space-y-1">
                    {['Alice Smith', 'Raj patel', 'Maria Garcia'].map((name, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-1.5 sm:gap-2 min-w-0 max-w-full"
                      >
                        <div className="w-[clamp(1.1rem,2.8vw,1.9rem)] h-[clamp(1.1rem,2.8vw,1.9rem)] rounded-full bg-primary-dark flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-[clamp(0.5rem,0.9vw,0.7rem)] font-semibold">
                            {name[0]}
                          </span>
                        </div>
                        <span className="text-primary-dark text-[clamp(0.65rem,1vw,0.8rem)] font-medium truncate min-w-0 max-w-[calc(100%-2rem)]">
                          {name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div> */}
              </div>
            </div>
          </div>

          {/* Right Panel - Text Content */}
          <div className="text-center lg:text-left space-y-md">
            <div className="text-accent-light text-xl font-semibold mb-sm">Our Community</div>

            <h2 className="text-xl md:text-4xl lg:text-5xl font-bold text-secondary-dark mb-lg">
              Join the community and get the support you need to succeed.
            </h2>

            <ul className="space-y-lg text-text-secondary mb-sm">
              <li className="flex items-start gap-md">
                <span className="text-accent-dark text-xl font-bold mt-0.5 flex-shrink-0">✓</span>
                <span className="text-base leading-relaxed">
                  Peer accountability to keep you on track with your goals and maintain consistent progress.
                </span>
              </li>
              <li className="flex items-start gap-md">
                <span className="text-accent-dark text-xl font-bold mt-0.5 flex-shrink-0">✓</span>
                <span className="text-base leading-relaxed">
                  Dedicated study groups for various academic disciplines and skill development.
                </span>
              </li>
              <li className="flex items-start gap-md">
                <span className="text-accent-dark text-xl font-bold mt-0.5 flex-shrink-0">✓</span>
                <span className="text-base leading-relaxed">
                  Exclusive job referrals and networking opportunities with industry professionals.
                </span>
              </li>
            </ul>

            <div className="flex justify-center lg:justify-start">
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
                  Go to Community Hub
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
