/**
 * Job Interface for Frontend (Unified)
 */
export interface IJob {
  _id: string
  title: string
  company: string
  location: string
  type: string
  description: string
  applyUrl?: string
  salary?: {
    min?: number
    max?: number
    currency?: string
  }
  skills?: string[]
  benefits?: string[]
  postedDate?: Date
}

/**
 * Job Interface for Database (MongoDB) - Plain Object
 */
export interface IJobDB {
  _id: string
  date_posted?: Date
  date_created?: Date
  title: string
  organization: string
  organization_url?: string | null
  date_validthrough?: string | null
  locations_raw?: any[]
  locations_alt_raw?: string[] | null
  location_type?: string | null
  location_requirements_raw?: string | null
  salary_raw?: string | null
  employment_type?: string[] | null
  url?: string
  source_type?: string
  source?: string
  source_domain?: string
  organization_logo?: string | null
  cities_derived?: string[]
  counties_derived?: string[]
  regions_derived?: string[]
  countries_derived?: string[]
  locations_derived?: string[]
  timezones_derived?: string[]
  lats_derived?: number[]
  lngs_derived?: number[]
  remote_derived?: boolean
  domain_derived?: string
  ai_salary_currency?: string
  ai_salary_value?: number | null
  ai_salary_minvalue?: number | null
  ai_salary_maxvalue?: number | null
  ai_salary_unittext?: string
  ai_benefits?: string[]
  ai_experience_level?: string
  ai_work_arrangement?: string
  ai_work_arrangement_office_days?: number | null
  ai_remote_location?: string[] | null
  ai_remote_location_derived?: string[] | null
  ai_key_skills?: string[]
  ai_hiring_manager_name?: string | null
  ai_hiring_manager_email_address?: string | null
  ai_core_responsibilities?: string
  ai_requirements_summary?: string
  ai_working_hours?: number
  ai_employment_type?: string[]
  ai_job_language?: string
  ai_visa_sponsorship?: boolean
  ai_keywords?: string[]
  ai_taxonomies_a?: string[]
  ai_education_requirements?: string[] | null
  [key: string]: any
}

export function mapDBJobToJob(raw: IJobDB): IJob {
  const responsibilities = raw.ai_core_responsibilities || ''
  const requirements = raw.ai_requirements_summary || ''
  const description = [responsibilities, requirements]
    .filter(Boolean)
    .join('\n\n')

  const type =
    raw.ai_employment_type?.[0]?.replace(/_/g, ' ') ||
    raw.employment_type?.[0] ||
    'Full-time'

  const location =
    raw.locations_derived?.[0] ||
    raw.cities_derived?.join(', ') ||
    raw.locations_alt_raw?.[0] ||
    'Remote'

  const salary =
    raw.ai_salary_minvalue || raw.ai_salary_maxvalue
      ? {
          min: raw.ai_salary_minvalue || undefined,
          max: raw.ai_salary_maxvalue || undefined,
          currency: raw.ai_salary_currency || 'USD',
        }
      : undefined

  return {
    _id: raw._id ? raw._id.toString() : raw.id || '',
    title: raw.title,
    company: raw.organization,
    location: location,
    type: type,
    description: description || 'No description provided.',
    applyUrl: raw.url,
    salary,
    skills: raw.ai_key_skills || [],
    benefits: raw.ai_benefits || [],
    postedDate: raw.date_posted ? new Date(raw.date_posted) : undefined,
  }
}
