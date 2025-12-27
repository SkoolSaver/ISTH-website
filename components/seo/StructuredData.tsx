export default function StructuredData() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.isthub.us'

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'International Students Talent Hub',
    alternateName: 'ISTH',
    url: siteUrl,
    logo: `${siteUrl}/logo.png`, // Update with your actual logo URL
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
      email: 'info@isth.com', // Update with your actual email
    },
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'International Students Talent Hub',
    url: siteUrl,
    description:
      'Platform for international student success - learn skills, join events, and get hired.',
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
