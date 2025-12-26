'use client'

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-dark via-secondary-dark to-primary-dark text-white rounded-b-lg mb-lg">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute -top-28 -left-28 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 -right-28 w-96 h-96 bg-accent-light/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 md:py-12 lg:py-13">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-14 items-center">

          {/* Left Content */}
          <div>
            <span className="inline-block mb-4 px-4 py-1 rounded-full bg-white/10 text-xs sm:text-sm tracking-wide">
              About ISTH
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold leading-tight mb-4 sm:mb-6">
              Empowering International Students to <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-light to-accent">
                Learn, Connect & Succeed
              </span>
            </h1>

            <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mb-4 sm:mb-6">
              <strong className="text-white">
                International Students Talent Hub (ISTH)
              </strong>{' '}
              is a community-first platform built to help international students learn, connect, 
              and grow into strong careers in technology and business.
            </p>

            <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl">
              We bring together students, mentors, and industry-focused resources in one place so 
              members can build skills, gain confidence, and move faster toward real outcomes like 
              internships, full-time roles, and entrepreneurial opportunities.
            </p>
          </div>

          {/* Right Info Card */}
          <div className="relative mt-2 lg:mt-0">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl">
              <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-5">What ISTH Exists</h3>

              <p className="text-gray-200 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                International students often have the talent and the drive, but the career path can 
                feel unclear. Between coursework, adapting to a new environment, and preparing for 
                the job market, many struggle to find consistent guidance and the right network.
              </p>

              <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
                ISTH exists to close that gap through a supportive community, structured learning, 
                and career growth opportunities designed specifically for international student needs.
              </p>

              <div className="mt-6 sm:mt-7 grid grid-cols-2 gap-3 sm:gap-4 text-center">
                <div className="bg-white/10 rounded-xl py-3 sm:py-4">
                  <p className="text-xl sm:text-2xl font-bold text-white">Global</p>
                  <p className="text-xs sm:text-sm text-gray-300">Student Community</p>
                </div>
                <div className="bg-white/10 rounded-xl py-3 sm:py-4">
                  <p className="text-xl sm:text-2xl font-bold text-white">Career</p>
                  <p className="text-xs sm:text-sm text-gray-300">Focused Growth</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

