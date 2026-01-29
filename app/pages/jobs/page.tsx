import { Metadata } from 'next'
import JobsHero from './components/JobsHero'
import JobsList from './components/JobsList'
import { generateMetadata as generateSEOMetadata } from '@/lib/seo/metadata'

export const metadata: Metadata = generateSEOMetadata({
  title: 'Jobs Board – International Students Talent Hub (ISTH)',
  description:
    'Discover career opportunities for international students. Browse internships, full-time and part-time roles from employers who value global talent.',
  path: '/pages/jobs',
})

export default function JobsPage() {
  return (
    <div className="min-h-screen max-w-8xl mx-auto overflow-x-hidden">
      <JobsHero />
      <div
        id="jobs-list-section"
        className="max-w-7xl mx-auto mt-lg flex flex-col gap-3 md:gap-4 w-full px-4 sm:px-6 lg:px-8 pb-xl"
      >
        <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold text-accent-dark text-center">
          Open Positions
        </h2>
        <JobsList />
      </div>
    </div>
  )
}
