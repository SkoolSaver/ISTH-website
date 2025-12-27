import { MetadataRoute } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.isthub.us'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteUrl

  // Static pages
  const routes = [
    '',
    '/pages/about',
    '/pages/community',
    '/pages/courses',
    '/pages/events',
    '/pages/contacts',
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }))

  return routes
}
