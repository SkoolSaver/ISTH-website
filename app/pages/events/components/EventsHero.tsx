'use client'

export default function EventsHero() {
  const scrollToEvents = () => {
    const eventsSection = document.getElementById('events-list-section')
    if (eventsSection) {
      eventsSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-dark via-secondary-dark to-primary-dark text-white rounded-b-lg mb-lg">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute -top-28 -left-28 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 -right-28 w-96 h-96 bg-accent-light/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-15 lg:py-25">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-14 items-center">

          {/* Left Content */}
          <div>
            <span className="inline-block mb-4 px-4 py-1 rounded-full bg-white/10 text-xs sm:text-sm tracking-wide">
              Learn • Compete • Collaborate
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold leading-tight mb-4 sm:mb-6">
              Discover Inspiring <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-light to-accent">
                Student Events & Experiences
              </span>
            </h1>

            <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-xl mb-6 sm:mb-8">
              Take part in hackathons, hands-on workshops, tech talks, and academic events 
              designed to boost your skills, teamwork, and career readiness.
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-4">
              <button 
                onClick={scrollToEvents}
                className="px-4 sm:px-6 py-2 sm:py-3 rounded-xl bg-accent-dark hover:opacity-90 transition font-semibold shadow-lg text-sm sm:text-base"
              >
                Explore Events
              </button>

              <button className="px-4 sm:px-6 py-2 sm:py-3 rounded-xl border border-white/30 hover:bg-white/10 transition font-semibold text-sm sm:text-base">
                Upcoming Events
              </button>
            </div>
          </div>

          {/* Right Info Card */}
          <div className="relative mt-4 lg:mt-0">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl">
              <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-5">What You Can Expect</h3>

              <ul className="space-y-2 sm:space-y-3 text-gray-200 text-sm sm:text-base">
                <li className="flex items-start gap-2">
                  <span className="text-accent-light mt-0.5">🚀</span>
                  <span>Competitive hackathons & coding challenges</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-light mt-0.5">🛠</span>
                  <span>Skill-based technical & non-technical workshops</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-light mt-0.5">🎤</span>
                  <span>Expert talks & academic seminars</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-light mt-0.5">🤝</span>
                  <span>Team collaboration & networking</span>
                </li>
              </ul>

              <div className="mt-6 sm:mt-7 grid grid-cols-2 gap-3 sm:gap-4 text-center">
                <div className="bg-white/10 rounded-xl py-3 sm:py-4">
                  <p className="text-xl sm:text-2xl font-bold text-white">50+</p>
                  <p className="text-xs sm:text-sm text-gray-300">Events Hosted</p>
                </div>
                <div className="bg-white/10 rounded-xl py-3 sm:py-4">
                  <p className="text-xl sm:text-2xl font-bold text-white">2K+</p>
                  <p className="text-xs sm:text-sm text-gray-300">Students Participated</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

