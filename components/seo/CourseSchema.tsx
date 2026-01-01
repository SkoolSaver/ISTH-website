export default function CourseSchema() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.isthub.us'

  const courseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'International Students Talent Hub Courses',
    description:
      'Access tailored courses designed to enhance your professional skills and boost your employability as an international student. Learn at your own pace.',
    provider: {
      '@type': 'Organization',
      name: 'International Students Talent Hub',
      url: siteUrl,
    },
    courseCode: 'ISTH',
    educationalLevel: 'Professional Development',
    learningResourceType: 'Online Course',
    url: `${siteUrl}/pages/courses`,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
    />
  )
}
