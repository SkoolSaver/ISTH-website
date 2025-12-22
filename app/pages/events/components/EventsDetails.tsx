export default function EventsDetails() {
	return (
		<section className="py-4 sm:py-6 md:py-7 lg:py-8 mb-md">
			<div className="max-w-7xl mx-auto text-center p-md md:p-md lg:p-sm">
				<h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-wide mb-3 sm:mb-4 uppercase text-accent-dark">
					Our Event Series
				</h2>

				<p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg mb-4 sm:mb-7 md:mb-7 text-text-secondary">
					We&apos;re all about connecting, collaborating, and celebrating
					outside of the work.
				</p>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-7 text-left">
	<div className="">
		<h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 uppercase text-secondary-dark">
			Project Showcase & Demo Day
		</h3>
		<p className="text-sm sm:text-base md:text-lg leading-relaxed text-text-secondary">
			Showcase your academic and personal projects to peers and industry professionals. 
			Receive expert feedback, strengthen your portfolio, and gain visibility for your work.
		</p>
	</div>

	<div className="">
		<h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 uppercase text-secondary-dark">
			Tech Skills Workshop Series
		</h3>
		<p className="text-sm sm:text-base md:text-lg leading-relaxed text-text-secondary">
			Hands-on workshops on modern technologies and tools. Learn from industry experts, 
			build real-world projects, and enhance your technical skill set.
		</p>
	</div>

	<div className="">
		<h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 uppercase text-secondary-dark">
			Networking & Mentorship
		</h3>
		<p className="text-sm sm:text-base md:text-lg leading-relaxed text-text-secondary">
			Connect with professionals, alumni, and mentors. Get guidance through resume reviews, 
			mock interviews, and career-focused mentorship sessions.
		</p>
	</div>
</div>

			</div>
		</section>
	)
}
