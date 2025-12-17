import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/common/ui'

const COMMUNITY_URL = 'https://nas.io/international-students-talent-hub/home'

export default function HeroBanner() {
  return (
    <div className="bg-white py-3xl px-md">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl items-center relative">
          {/* Left Panel - Text Content */}
          <div className="bg-primary-dark rounded-xl p-xl text-white space-y-lg relative z-0">
            {/* Badge */}
            <div>
              <span className="inline-block bg-accent-light text-white px-lg py-xs rounded-full text-sm font-semibold">
                For International Students
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              Accelerate Your Career as an International Student with International Students Talent
              Hub.
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl opacity-95 leading-relaxed">
              Platform for international student success - learn skills, join events, and get hired.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-md items-center sm:items-start">
              <Link
                href={COMMUNITY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button
                  variant="accent"
                  size="lg"
                  className="bg-accent-light text-dark hover:bg-accent-light rounded-lg font-semibold"
                >
                  Join the Community
                </Button>
              </Link>
              <Link
                href="/pages/events"
                className="text-white hover:text-accent transition-colors font-medium"
              >
                Browse events &gt;
              </Link>
            </div>
          </div>

          {/* Right Panel - Image */}
          <div className="hidden lg:block relative z-10">
            <div className="relative w-[90%] h-[450px] ml-auto flex items-center justify-center">
              <Image
                src="/hero-students.png"
                alt="Diverse international students collaborating around a table with laptops"
                width={600}
                height={450}
                className="object-contain w-full h-full"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
