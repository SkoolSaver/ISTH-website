import { MetadataRoute } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.isthub.us'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteUrl

  // Define routes with tiered priority system
  const routes: Array<{
    route: string
    priority: number
    changeFrequency: 'daily' | 'weekly' | 'monthly' | 'yearly'
  }> = [
    // Homepage - highest priority, changes daily
    { route: '', priority: 1.0, changeFrequency: 'daily' },
    // Main pages - high priority, changes weekly
    { route: '/pages/about', priority: 0.9, changeFrequency: 'weekly' },
    { route: '/pages/community', priority: 0.9, changeFrequency: 'weekly' },
    { route: '/pages/courses', priority: 0.9, changeFrequency: 'weekly' },
    { route: '/pages/events', priority: 0.9, changeFrequency: 'weekly' },
    // Contact page - lower priority, changes monthly
    { route: '/pages/contacts', priority: 0.8, changeFrequency: 'monthly' },
  ]

  return routes.map(({ route, priority, changeFrequency }) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }))
}
