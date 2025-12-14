import { appPalette } from '@/lib/theme/palette'

export default function EventsDetails() {
	return (
		<section
			className="py-16 md:py-20"
			style={{ backgroundColor: appPalette.background.secondary }}
		>
			<div className="max-w-7xl mx-auto px-6 text-center">
				<h2
					className="text-4xl md:text-5xl font-extrabold tracking-wide mb-4 uppercase"
					style={{ color: appPalette.active.accent }}
				>
					Our Event Series
				</h2>

				<p
					className="max-w-2xl mx-auto text-base md:text-lg mb-16"
					style={{ color: appPalette.text.secondary }}
				>
					We&apos;re all about connecting, collaborating, and celebrating
					outside of the work.
				</p>

				<div className="grid gap-y-10 gap-x-12 md:grid-cols-3 text-left">
					<div>
						<h3
							className="text-xl font-extrabold mb-3 uppercase"
							style={{ color: appPalette.active.main }}
						>
							Founder/Fest
						</h3>
						<p
							className="text-sm md:text-base leading-relaxed"
							style={{ color: appPalette.text.secondary }}
						>
							An experience that brings Midwest startup founders together to
							build a community of support and celebration. Founders come to
							network as well as to hear stories from those who have built,
							scaled, and lost businesses — all in a casual, party-like setting.
						</p>
					</div>

					<div>
						<h3
							className="text-xl font-extrabold mb-3 uppercase"
							style={{ color: appPalette.active.main }}
						>
							Founder Funder Forum
						</h3>
						<p
							className="text-sm md:text-base leading-relaxed"
							style={{ color: appPalette.text.secondary }}
						>
							An exclusive event where founders learn about venture capital and
							network with investors. It provides education, connections, and
							valuable guidance for fundraising while bridging startups and
							capital.
						</p>
					</div>

					<div>
						<h3
							className="text-xl font-extrabold mb-3 uppercase"
							style={{ color: appPalette.active.main }}
						>
							Milwaukee GPT / Hackathon
						</h3>
						<p
							className="text-sm md:text-base leading-relaxed"
							style={{ color: appPalette.text.secondary }}
						>
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
