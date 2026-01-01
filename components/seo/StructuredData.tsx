export default function StructuredData() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.isthub.us'

  // Logo dimensions: Using square format (112x112 minimum for Google)
  // If actual logo is not square, Google will crop it, so we use minimum required size
  // For better results, logo should be at least 112x112px (square preferred)
  const logoImageObject = {
    '@type': 'ImageObject',
    url: `${siteUrl}/ISTH.png`,
    width: 200, // Minimum 112px, using 200px for better quality
    height: 200, // Square format preferred by Google (1:1 ratio)
    contentUrl: `${siteUrl}/ISTH.png`,
  }

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'International Students Talent Hub',
    alternateName: ['ISTH', 'IST-Hub', 'isthub', 'International Students Talent Hub'],
    url: siteUrl,
    logo: logoImageObject,
    image: logoImageObject,
    description:
      'Platform for international student success - learn skills, join events, and get hired.',
    sameAs: [
      // Add your social media URLs here
      // 'https://www.linkedin.com/company/isth',
      // 'https://www.instagram.com/isth',
      // 'https://www.youtube.com/@isth',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      email: 'events@skoolsaverclub.in',
    },
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'International Students Talent Hub',
    alternateName: ['ISTH', 'IST-Hub', 'isthub'],
    url: siteUrl,
    description:
      'Platform for international student success - learn skills, join events, and get hired.',
    logo: logoImageObject,
    publisher: {
      '@type': 'Organization',
      name: 'International Students Talent Hub',
      logo: logoImageObject,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteUrl}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  )
}
