'use client'

export default function CoursesTopHero() {
  const scrollToCourses = () => {
    const coursesSection = document.getElementById('courses-list-section')
    if (coursesSection) {
      coursesSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-dark via-secondary-dark to-primary-dark text-white rounded-b-lg">
      {/* Background Glow */}
      <div className="absolute inset-0">
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-5 rounded-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          
          {/* Left Content */}
          <div>
            <span className="inline-block mb-4 px-4 py-1 rounded-full bg-white/10 text-xs sm:text-sm tracking-wide">
              Learn • Build • Grow
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold leading-tight mb-4 sm:mb-6">
              Empower Your Future with <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-light to-accent">
                Industry-Ready Courses
              </span>
            </h1>

            <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-xl mb-6 sm:mb-8">
              Explore expertly designed courses for students to gain real-world skills, 
              build strong portfolios, and prepare confidently for internships and careers.
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-4">
              <button 
                onClick={scrollToCourses}
                className="px-4 sm:px-6 py-2 sm:py-3 rounded-xl bg-accent-dark hover:opacity-90 transition font-semibold shadow-lg text-sm sm:text-base"
              >
                Explore Courses
              </button>

              <button className="px-4 sm:px-6 py-2 sm:py-3 rounded-xl border border-white/30 hover:bg-white/10 transition font-semibold text-sm sm:text-base">
                View Learning Paths
              </button>
            </div>
          </div>

          {/* Right Visual Card */}
          <div className="relative mt-4 lg:mt-0">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl">
              <h3 className="text-lg sm:text-xl font-bold mb-4">What You&apos;ll Gain</h3>
              <ul className="space-y-2 sm:space-y-3 text-gray-200 text-sm sm:text-base">
                <li className="flex items-start gap-2">
                  <span className="text-accent-light mt-0.5">✔</span>
                  <span>Hands-on, project-based learning</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-light mt-0.5">✔</span>
                  <span>Mentorship from industry experts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-light mt-0.5">✔</span>
                  <span>Career-focused curriculum</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-light mt-0.5">✔</span>
                  <span>Certificates & portfolio projects</span>
                </li>
              </ul>

              <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="flex -space-x-2">

                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white bg-primary-dark flex items-center justify-center text-white font-bold text-xs sm:text-sm">
                    I
                  </div>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white bg-accent-light flex items-center justify-center text-primary-dark font-bold text-xs sm:text-sm">
                    S
                  </div>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white bg-accent flex items-center justify-center text-white font-bold text-xs sm:text-sm">
                    T
                  </div>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white bg-accent-dark flex items-center justify-center text-white font-bold text-xs sm:text-sm">
                    H
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-gray-300">
                  Join <span className="font-semibold text-white">1,000+</span> students learning with us
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

