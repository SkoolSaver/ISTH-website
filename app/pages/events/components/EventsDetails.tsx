export default function EventsDetails() {
	return (
		<section className="py-4 sm:py-6 md:py-7 lg:py-10 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
				<h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-wide mb-3 sm:mb-4 uppercase text-accent-dark">
					Our Event Series
				</h2>

				<p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg mb-4 sm:mb-7 md:mb-7 text-text-secondary">
					We&apos;re all about connecting, collaborating, and celebrating
					outside of the work.
				</p>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12 text-left">
					<div>
						<h3 className="text-lg sm:text-xl md:text-2xl font-extrabold mb-2 sm:mb-3 uppercase text-primary-dark">
							Founder/Fest
						</h3>
						<p className="text-xs sm:text-sm md:text-base leading-relaxed text-text-secondary">
							An experience that brings Midwest startup founders together to
							build a community of support and celebration. Founders come to
							network as well as to hear stories from those who have built,
							scaled, and lost businesses — all in a casual, party-like setting.
						</p>
					</div>

					<div>
						<h3 className="text-lg sm:text-xl md:text-2xl font-extrabold mb-2 sm:mb-3 uppercase text-primary-dark">
							Founder Funder Forum
						</h3>
						<p className="text-xs sm:text-sm md:text-base leading-relaxed text-text-secondary">
							An exclusive event where founders learn about venture capital and
							network with investors. It provides education, connections, and
							valuable guidance for fundraising while bridging startups and
							capital.
						</p>
					</div>

					<div>
						<h3 className="text-lg sm:text-xl md:text-2xl font-extrabold mb-2 sm:mb-3 uppercase text-primary-dark">
							Milwaukee GPT / Hackathon
						</h3>
						<p className="text-xs sm:text-sm md:text-base leading-relaxed text-text-secondary">
							A meetup group for no-code & low-code founders and aspiring makers
							to build MVPs, plugins, and products using artificial intelligence
							tools such as ChatGPT Responsive, Side headings pyramid.
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}
