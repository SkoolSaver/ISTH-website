import { Metadata } from 'next'

const siteName = 'International Students Talent Hub'
const siteDescription =
  'ISTH platform for international student success - learn skills, join events, and get hired. Join 1000+ students helping each other succeed globally.'
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.isthub.us'
// OG image with fallback
const siteImage = `${siteUrl}/og-image.png`
const defaultImage = `${siteUrl}/ISTH.png` // Fallback to logo if og-image doesn't exist

interface PageMetadataOptions {
  title?: string
  description?: string
  path?: string
  image?: string
  noIndex?: boolean
  additionalKeywords?: string[]
}

export function generateMetadata({
  title,
  description,
  path = '',
  image = siteImage,
  noIndex = false,
  additionalKeywords = [],
}: PageMetadataOptions = {}): Metadata {
  // Smart title generation: check if site name is already in title to avoid duplication
  let fullTitle: string
  if (!title) {
    fullTitle = siteName
  } else {
    // Check if title already contains site name or its variations
    const titleLower = title.toLowerCase()
    const siteNameLower = siteName.toLowerCase()
    const siteNameVariations = ['isth', 'ist-hub', 'isthub', 'international students talent hub']
    const containsSiteName =
      siteNameVariations.some(variation => titleLower.includes(variation)) ||
      titleLower.includes(siteNameLower)

    if (containsSiteName) {
      // Title already includes site name, use as-is but ensure optimal length
      fullTitle = title.length > 60 ? title.substring(0, 57) + '...' : title
    } else {
      // Append site name
      const combined = `${title} | ${siteName}`
      fullTitle = combined.length > 60 ? combined.substring(0, 57) + '...' : combined
    }
  }

  // Optimize description length to 150-160 characters for optimal SERP display
  let fullDescription = description || siteDescription
  if (fullDescription.length > 160) {
    // Truncate to 157 characters and add ellipsis
    fullDescription = fullDescription.substring(0, 157).trim() + '...'
  }
  const fullUrl = `${siteUrl}${path}`

  const baseKeywords = [
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
  ]

  const brandKeywords = [
    'isth',
    'ist-hub',
    'isthub',
    'international students talent hub',
    'ISTH',
    'IST-Hub',
  ]

  const allKeywords = [...baseKeywords, ...brandKeywords, ...additionalKeywords]

  return {
    title: fullTitle,
    description: fullDescription,
    keywords: allKeywords,
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
          url: image || defaultImage,
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
      images: [image || defaultImage],
      creator: '@isth', // Update with your Twitter handle if available
    },
    alternates: {
      canonical: fullUrl,
    },
    metadataBase: new URL(siteUrl),
    icons: {
      icon: [
        { url: '/ISTH.png', sizes: 'any' },
        { url: '/ISTH.png', type: 'image/png' },
      ],
      shortcut: '/ISTH.png',
      apple: '/ISTH.png',
    },
    ...(process.env.GOOGLE_SEARCH_CONSOLE_VERIFICATION && {
      verification: {
        google: process.env.GOOGLE_SEARCH_CONSOLE_VERIFICATION,
      },
      other: {
        'google-site-verification': process.env.GOOGLE_SEARCH_CONSOLE_VERIFICATION,
      },
    }),
  }
}
