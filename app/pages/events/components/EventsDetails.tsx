export default function EventsDetails() {
	return (
		<section className="py-4 sm:py-6 md:py-7 lg:py-10 bg-gray-50 mb-md">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
				<h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-wide mb-3 sm:mb-4 uppercase text-accent-dark">
					Our Event Series
				</h2>

				<p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg mb-4 sm:mb-7 md:mb-7 text-text-secondary">
					We&apos;re all about connecting, collaborating, and celebrating
					outside of the work.
				</p>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12 text-left">
				<div className="bg-white p-4 sm:p-5 md:p-6 rounded-lg border border-gray-300 hover:shadow-lg transition-shadow">
					<h3 className="text-lg sm:text-xl md:text-2xl font-extrabold mb-3 sm:mb-4 uppercase text-secondary-dark">
						Project Showcase & Demo Day
					</h3>
					<p className="text-sm sm:text-base md:text-lg leading-relaxed text-text-secondary">
						Showcase your academic projects, personal portfolios, and innovative solutions to peers and industry professionals. 
						Get valuable feedback, build your portfolio, and connect with potential collaborators. Perfect for students 
						working on capstone projects, research initiatives, or side projects looking to gain visibility and recognition.
					</p>
				</div>

				<div className="bg-white p-4 sm:p-5 md:p-6 rounded-lg border border-gray-300 hover:shadow-lg transition-shadow">
					<h3 className="text-lg sm:text-xl md:text-2xl font-extrabold mb-3 sm:mb-4 uppercase text-secondary-dark">
						Tech Skills Workshop Series
					</h3>
					<p className="text-sm sm:text-base md:text-lg leading-relaxed text-text-secondary">
						Hands-on workshops covering cutting-edge technologies, programming languages, and industry tools. Learn from 
						experienced developers and industry experts through practical sessions on web development, data science, cloud 
						computing, and more. Build real-world projects during workshops and add them to your portfolio.
					</p>
				</div>

				<div className="bg-white p-4 sm:p-5 md:p-6 rounded-lg border border-gray-300 hover:shadow-lg transition-shadow">
					<h3 className="text-lg sm:text-xl md:text-2xl font-extrabold mb-3 sm:mb-4 uppercase text-secondary-dark">
						Career Networking & Mentorship
					</h3>
					<p className="text-sm sm:text-base md:text-lg leading-relaxed text-text-secondary">
						Connect with industry professionals, alumni, and fellow students to expand your network and explore career 
						opportunities. Participate in mentorship sessions, resume reviews, and mock interviews. Get guidance on 
						project presentations, portfolio building, and navigating the job market as an international student.
					</p>
				</div>
			</div>
			</div>
		</section>
	)
}
