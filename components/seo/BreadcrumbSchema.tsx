interface BreadcrumbSchemaProps {
  items: Array<{ name: string; url: string }>
}

export default function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.isthub.us'

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.url}`,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
    />
  )
}
