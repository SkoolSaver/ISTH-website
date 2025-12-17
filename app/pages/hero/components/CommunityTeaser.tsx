import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/common/ui'

const COMMUNITY_URL = 'https://nas.io/international-students-talent-hub/home'

export default function CommunityTeaser() {
  return (
    <section className="bg-white py-3xl px-md">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl items-center">
          {/* Left Panel - Text Content */}
          <div className="text-center lg:text-left space-y-lg">
            <div className="text-accent text-sm font-semibold mb-sm">Our Community</div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary-dark mb-lg leading-tight">
              Join 500+ students helping each other succeed.
            </h2>

            <ul className="space-y-md text-text-secondary mb-lg">
              <li className="flex items-start gap-sm">
                <span className="text-accent mt-1">•</span>
                <span>Peer accountability to keep you on track with your goals.</span>
              </li>
              <li className="flex items-start gap-sm">
                <span className="text-accent mt-1">•</span>
                <span>Dedicated study groups for various academic disciplines.</span>
              </li>
              <li className="flex items-start gap-sm">
                <span className="text-accent mt-1">•</span>
                <span>Exclusive job referrals and networking opportunities.</span>
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
                  className="bg-accent-light text-white hover:bg-accent-light rounded-lg font-semibold"
                >
                  Go to Community Hub
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Panel - Image with Text Overlay */}
          <div className="hidden lg:block relative w-[90%] h-[450px] ml-auto">
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src="/tech-devices.png"
                alt="Tech devices with community interface"
                width={600}
                height={450}
                className="object-contain w-full h-full"
                priority
              />
              {/* Text Overlay - Channels and Direct Messages */}
              <div className="absolute inset-0 flex flex-col justify-center p-lg space-y-md">
                {/* Channels Section */}
                <div>
                  <div className="text-sm font-semibold text-primary-dark mb-sm">Channels</div>
                  <div className="space-y-xs">
                    <div className="text-accent font-medium">#general</div>
                    <div className="text-secondary font-medium">#job-postings</div>
                    <div className="text-accent font-medium">#study-groups</div>
                    <div className="text-secondary font-medium">#events</div>
                  </div>
                </div>

                {/* Direct Messages Section */}
                <div className="pt-md border-t border-primary-dark/20">
                  <div className="text-sm font-semibold text-primary-dark mb-sm">
                    Direct Messages
                  </div>
                  <div className="space-y-xs">
                    {['Alice Smith', 'John Doe', 'Maria Garcia'].map((name, i) => (
                      <div key={i} className="flex items-center gap-sm">
                        <div className="w-8 h-8 rounded-full bg-primary-dark flex items-center justify-center">
                          <span className="text-white text-xs font-semibold">{name[0]}</span>
                        </div>
                        <span className="text-primary-dark text-sm font-medium">{name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
