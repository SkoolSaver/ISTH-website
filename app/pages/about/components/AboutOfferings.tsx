import Image from 'next/image'
import Link from 'next/link'

export default function AboutOfferings() {
  const offerings = [
    {
      title: 'Events',
      description: 'Weekly workshops and meetups.',
      image: '/Event Image.png',
      href: '/pages/events',
    },
    {
      title: 'Learnings',
      description: 'Curated paths for cutting edge Tech & Business planning.',
      image: '/Learning image.png',
      href: '/pages/courses',
    },
    {
      title: 'Community',
      description: 'Meet the fellow international students to share your interests',
      image: '/Community image.png',
      href: '/pages/community',
    },
  ]

  return (
    <section className="mb-2xl">
      <h2 className="text-center text-2xl md:text-3xl font-bold mb-lg text-accent-dark">
        Our Offerings
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
        {offerings.map((offering, index) => (
          <Link
            key={index}
            href={offering.href}
            className="p-md rounded-lg border-2 bg-white hover:bg-gray-50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 block cursor-pointer"
          >
            <div className="mb-md flex justify-center">
              <div className="relative w-full h-38 md:h-56 lg:h-44 rounded-lg overflow-hidden">
                <Image
                  src={offering.image}
                  alt={offering.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 33vw"
                />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-md text-center text-accent-dark">
              {offering.title}
            </h3>
            <p className="text-center leading-relaxed text-text-secondary">
              {offering.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  )
}


