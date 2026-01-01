'use client'

export default function ContactsHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-dark via-secondary-dark to-primary-dark text-white rounded-b-lg">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute -top-28 -left-28 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 -right-28 w-96 h-96 bg-accent-light/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-10 lg:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-14 items-start">
          {/* Left: Contact Details */}
          <div>
            <span className="inline-block mb-4 px-4 py-1 rounded-full bg-white/10 text-xs sm:text-sm tracking-wide">
              Contact Us
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold leading-tight mb-4 sm:mb-6">
              Let&apos;s Start a <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-light to-accent">
                Conversation
              </span>
            </h1>

            <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-xl mb-6 sm:mb-8">
              Have questions about courses, events, or the ISTH community? Reach out to us —
              we&apos;re here to help you move forward with confidence.
            </p>

            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 shadow-2xl space-y-4 sm:space-y-6">
              <div>
                <h3 className="font-bold text-base sm:text-lg mb-2">Address</h3>
                <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
                  Anu Tech Solutions LLC <br />
                  300 E Royal Ln STE 230 <br />
                  Irving, TX 75039
                </p>
              </div>

              <div>
                <h3 className="font-bold text-base sm:text-lg mb-2">Call</h3>
                <p className="text-gray-200 text-sm sm:text-base">
                  <a href="tel:+14143995568" className="hover:underline">
                    +1 (414) 399-5568
                  </a>
                </p>
              </div>

              <div>
                <h3 className="font-bold text-base sm:text-lg mb-2">Email</h3>
                <p className="text-gray-200 text-sm sm:text-base">
                  <a href="mailto:events@skoolsaverclub.in" className="hover:underline">
                    events@skoolsaverclub.in
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="relative mt-4 lg:mt-0">
            <div className="bg-white text-gray-900 rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 shadow-2xl">
              <h2 className="text-xl sm:text-2xl font-bold mb-2 text-accent-dark">Get in Touch</h2>
              <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6">
                Fill out the form below and we&apos;ll get back to you as soon as possible.
              </p>

              <form className="space-y-4 sm:space-y-5">
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-xl border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-accent-dark focus:border-accent-dark outline-none transition-all text-sm sm:text-base"
                  required
                />

                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-xl border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-accent-dark focus:border-accent-dark outline-none transition-all text-sm sm:text-base"
                  required
                />

                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-xl border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-accent-dark focus:border-accent-dark outline-none transition-all text-sm sm:text-base"
                  required
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                  <input
                    type="text"
                    placeholder="Enter your country"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-xl border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-accent-dark focus:border-accent-dark outline-none transition-all text-sm sm:text-base"
                    required
                  />

                  <input
                    type="text"
                    placeholder="Enter your city"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-xl border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-accent-dark focus:border-accent-dark outline-none transition-all text-sm sm:text-base"
                    required
                  />
                </div>

                <select
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-xl border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-accent-dark focus:border-accent-dark outline-none transition-all text-sm sm:text-base"
                  required
                >
                  <option value="">Select a topic</option>
                  <option>Courses & Programs</option>
                  <option>Events & Hackathons</option>
                  <option>Community Membership</option>
                  <option>Partnerships</option>
                  <option>General Inquiry</option>
                </select>

                <textarea
                  rows={4}
                  placeholder="Write your message"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-xl border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-accent-dark focus:border-accent-dark outline-none transition-all text-sm sm:text-base resize-none"
                  required
                ></textarea>

                <button
                  type="submit"
                  className="w-full px-4 sm:px-6 py-2 sm:py-3 rounded-xl bg-gradient-to-r from-accent to-accent-dark hover:opacity-90 transition font-bold text-white shadow-lg text-sm sm:text-base"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
