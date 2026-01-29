'use client'

export default function JobsHero() {
  const scrollToJobs = () => {
    const jobsSection = document.getElementById('jobs-list-section')
    if (jobsSection) {
      jobsSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-dark via-secondary-dark to-primary-dark text-white rounded-b-lg">
      <div className="absolute inset-0">
        <div className="absolute -top-28 -left-28 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 -right-28 w-96 h-96 bg-accent-light/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-5 rounded-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <span className="inline-block mb-4 px-4 py-1 rounded-full bg-white/10 text-xs sm:text-sm tracking-wide">
              Careers • Opportunities • Growth
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold leading-tight mb-4 sm:mb-6">
              Find Your Next <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-light to-accent">
                Opportunity
              </span>
            </h1>

            <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-xl mb-6 sm:mb-8">
              ISTH helps international students discover career opportunities from employers who
              value global talent. Browse internships, full-time, and part-time roles curated for
              our community.
            </p>

            <button
              onClick={scrollToJobs}
              className="px-4 sm:px-6 py-2 sm:py-3 rounded-xl bg-accent-dark hover:opacity-90 transition font-semibold shadow-lg text-sm sm:text-base"
            >
              Browse Jobs
            </button>
          </div>

          <div className="relative mt-4 lg:mt-0">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl">
              <h3 className="text-lg sm:text-xl font-bold mb-4">Why Use ISTH Jobs Board</h3>
              <ul className="space-y-2 sm:space-y-3 text-gray-200 text-sm sm:text-base">
                <li className="flex items-start gap-2">
                  <span className="text-accent-light mt-0.5">✔</span>
                  <span>Roles from employers open to international talent</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-light mt-0.5">✔</span>
                  <span>Internships, full-time, and part-time positions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-light mt-0.5">✔</span>
                  <span>Curated for international student needs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-light mt-0.5">✔</span>
                  <span>Connect with companies in our network</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
