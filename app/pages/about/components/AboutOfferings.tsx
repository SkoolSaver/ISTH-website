import Image from 'next/image'

export default function AboutOfferings() {
  const offerings = [
    {
      title: 'Events',
      description: 'Weekly workshops and meetups.',
      image: '/Event Image.png',
    },
    {
      title: 'Learnings',
      description: 'Curated paths for cutting edge Tech & Business planning.',
      image: '/Learning image.png',
    },
    {
      title: 'Community',
      description: 'Meet the fellow international students to share your interests',
      image: '/Community image.png',
    },
  ]

  return (
    <section className="border-2 bg-gray-100 rounded-xl p-lg md:p-xl lg:p-xl mb-2xl">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-xl text-center text-accent-dark">
        Our Offerings
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
        {offerings.map((offering, index) => (
          <div
            key={index}
            className="p-xl rounded-lg border-2 bg-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            <div className="mb-md flex justify-center">
              <div className="relative w-full h-48 md:h-56 lg:h-64 rounded-lg overflow-hidden">
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
          </div>
        ))}
      </div>
    </section>
  )
}


