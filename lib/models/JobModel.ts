/**
 * Job types and mappers for Active Jobs DB RapidAPI
 */

export interface IJob {
  id: string
  title: string
  company: string
  location: string
  type: string
  description: string
  applyUrl?: string
}

export interface RapidAPIJob {
  id?: string
  title?: string
  organization?: string
  organization_url?: string
  organization_logo?: string
  locations_derived?: Array<{ city?: string; admin?: string; country?: string }>
  locations_raw?: unknown[]
  locations_alt_raw?: string[]
  employment_type?: string[]
  description_text?: string
  url?: string
  [key: string]: unknown
}

const EMPLOYMENT_TYPE_MAP: Record<string, string> = {
  FULL_TIME: 'Full-time',
  PART_TIME: 'Part-time',
  CONTRACTOR: 'Contract',
  TEMPORARY: 'Temporary',
  INTERN: 'Internship',
  VOLUNTEER: 'Volunteer',
  PER_DIEM: 'Per Diem',
  OTHER: 'Other',
}

function formatLocation(job: RapidAPIJob): string {
  const derived = job.locations_derived
  if (derived && Array.isArray(derived) && derived.length > 0) {
    const parts = derived
      .map(loc => [loc.city, loc.admin, loc.country].filter(Boolean).join(', '))
      .filter(Boolean)
    return [...new Set(parts)].join(' | ') || 'Remote'
  }
  const altRaw = job.locations_alt_raw
  if (altRaw && Array.isArray(altRaw) && altRaw.length > 0) {
    return altRaw.join(' | ')
  }
  return 'Remote'
}

function formatEmploymentType(job: RapidAPIJob): string {
  const types = job.employment_type
  if (types && Array.isArray(types) && types.length > 0) {
    const first = types[0].toUpperCase().replace(/\s/g, '_')
    return EMPLOYMENT_TYPE_MAP[first] || types[0] || 'Full-time'
  }
  return 'Full-time'
}

export function mapRapidAPIJobToJob(raw: RapidAPIJob): IJob {
  return {
    id: raw.id || '',
    title: raw.title || 'Untitled',
    company: raw.organization || 'Unknown',
    location: formatLocation(raw),
    type: formatEmploymentType(raw),
    description: raw.description_text || '',
    applyUrl: raw.url,
  }
}
