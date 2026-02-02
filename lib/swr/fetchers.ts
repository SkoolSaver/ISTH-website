/**
 * SWR fetchers for data prefetching and caching.
 * Each fetcher wraps the existing service and unwraps { success, data } for SWR.
 */

import { EventsService } from '@/lib/services/EventsServices'
import { CourseService } from '@/lib/services/CourseServices'
import { JobsService } from '@/lib/services/JobsService'
import { LeadsService } from '@/lib/services/LeadsServices'
import type { IEvent } from '@/lib/models/EventsModel'
import type { ICourse } from '@/lib/models/CourseModel'
import type { IJob } from '@/types/job'
import type { ILead } from '@/types/lead'

export const eventsFetcher = async (): Promise<IEvent[]> => {
  const response = await EventsService.getAll()
  if (!response.success || !response.data) {
    throw new Error(response.error || 'Failed to fetch events')
  }
  return response.data
}

export const coursesFetcher = async (): Promise<ICourse[]> => {
  const response = await CourseService.getAll()
  if (!response.success || !response.data) {
    throw new Error(response.error || 'Failed to fetch courses')
  }
  return response.data
}

export const jobsFetcher = async (): Promise<IJob[]> => {
  const response = await JobsService.getAll(50, 0)
  if (!response.success || !response.data) {
    throw new Error(response.error || 'Failed to fetch jobs')
  }
  return response.data
}

export const leadsFetcher = async (): Promise<ILead[]> => {
  const response = await LeadsService.getAll()
  if (!response.success || !response.data) {
    throw new Error(response.error || 'Failed to fetch leads')
  }
  return response.data
}

/** Map route paths to SWR keys and fetchers for prefetch on hover */
export const PREFETCH_MAP: Record<
  string,
  { key: string; fetcher: () => Promise<unknown> }
> = {
  '/pages/events': { key: 'events', fetcher: eventsFetcher },
  '/pages/courses': { key: 'courses', fetcher: coursesFetcher },
  '/pages/jobs': { key: 'jobs', fetcher: jobsFetcher },
}
