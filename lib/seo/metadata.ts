import { Metadata } from 'next'

const siteName = 'International Students Talent Hub'
const siteDescription =
  'Platform for international student success - learn skills, join events, and get hired. Join 1000+ students helping each other succeed globally.'
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.isthub.us'
const siteImage = `${siteUrl}/og-image.png` // You can add this image later

interface PageMetadataOptions {
  title?: string
  description?: string
  path?: string
  image?: string
  noIndex?: boolean
}

export function generateMetadata({
  title,
  description,
  path = '',
  image = siteImage,
  noIndex = false,
}: PageMetadataOptions = {}): Metadata {
  const fullTitle = title ? `${title} | ${siteName}` : siteName
  const fullDescription = description || siteDescription
  const fullUrl = `${siteUrl}${path}`

  return {
    title: fullTitle,
    description: fullDescription,
    keywords: [
      'international students',
      'student community',
      'career development',
      'job opportunities',
      'student events',
      'online courses',
      'student networking',
      'international education',
      'student support',
      'career services',
    ],
    authors: [{ name: 'International Students Talent Hub' }],
    creator: 'International Students Talent Hub',
    publisher: 'International Students Talent Hub',
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
          },
        },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: fullUrl,
      title: fullTitle,
      description: fullDescription,
      siteName: siteName,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: fullDescription,
      images: [image],
      creator: '@isth', // Update with your Twitter handle if available
    },
    alternates: {
      canonical: fullUrl,
    },
    metadataBase: new URL(siteUrl),
  }
}
