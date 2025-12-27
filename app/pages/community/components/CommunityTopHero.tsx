'use client'

import Link from 'next/link'

const COMMUNITY_URL = 'https://nas.io/international-students-talent-hub/community'

export default function CommunityTopHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-dark via-secondary-dark to-primary-dark text-white rounded-b-lg">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute -top-28 -left-28 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 -right-28 w-96 h-96 bg-accent-light/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 md:py-10 lg:py-13">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-14 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block mb-4 px-4 py-1 rounded-full bg-white/10 text-xs sm:text-sm tracking-wide">
              Learn • Connect • Grow Together
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-5xl font-extrabold leading-tight mb-4 sm:mb-6">
              A Student Community Built for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-light to-accent">
                Learning, Support & Success
              </span>
            </h1>

            <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-xl mb-6 sm:mb-8">
              Join a vibrant student community where learners collaborate, share knowledge, prepare
              for exams, work on projects, and grow together through meaningful connections. Level
              up your skills with our{' '}
              <a href="/pages/courses" className="text-accent-light hover:underline">
                professional courses
              </a>{' '}
              and participate in{' '}
              <a href="/pages/events" className="text-accent-light hover:underline">
                networking events and workshops
              </a>
              .
            </p>

            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              <Link
                href={COMMUNITY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 sm:px-8 py-3 sm:py-4 rounded-2xl bg-gradient-to-r from-accent to-accent-dark hover:opacity-90 transition font-bold text-sm sm:text-lg shadow-xl"
              >
                Join the ISTH Community — Free
              </Link>
            </div>
          </div>

          {/* Right Info Card */}
          <div className="relative mt-2 lg:mt-0">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl">
              <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-5">Why Join Our Community?</h3>

              <ul className="space-y-2 sm:space-y-3 text-gray-200 text-sm sm:text-base">
                <li className="flex items-start gap-2">
                  <span className="text-accent-light mt-0.5">📚</span>
                  <span>Peer-led study groups & discussions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-light mt-0.5">🤝</span>
                  <span>Collaborate on projects & ideas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-light mt-0.5">🎓</span>
                  <span>Guidance from mentors & seniors</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-light mt-0.5">🌱</span>
                  <span>Supportive, inclusive student network</span>
                </li>
              </ul>

              <div className="mt-6 sm:mt-7 grid grid-cols-2 gap-3 sm:gap-4 text-center">
                <div className="bg-white/10 rounded-xl py-3 sm:py-4">
                  <p className="text-xl sm:text-2xl font-extrabold text-white">3K+</p>
                  <p className="text-xs sm:text-sm text-gray-300">Active Students</p>
                </div>
                <div className="bg-white/10 rounded-xl py-3 sm:py-4">
                  <p className="text-xl sm:text-2xl font-extrabold text-white">120+</p>
                  <p className="text-xs sm:text-sm text-gray-300">Study Groups</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 sm:mt-10 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold mb-3 sm:mb-4">
            Be Part of a Community That Grows With You
          </h2>
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto mb-4 sm:mb-6 px-4">
            Join the ISTH Community today and connect with students who are passionate about
            learning, collaboration, and achieving their goals — completely free.
          </p>
        </div>
      </div>
    </section>
  )
}
