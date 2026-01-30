import { apiClient } from '@/lib/api/client'
import { IJob, RapidAPIJob, mapRapidAPIJobToJob } from '@/lib/models/JobModel'

export const JobsService = {
  getAll: async (limit = 50, offset = 0): Promise<{ success: boolean; data?: IJob[]; error?: string }> => {
    const response = await apiClient.get<RapidAPIJob[]>(
      `/jobs?limit=${limit}&offset=${offset}&description_type=text`
    )

    if (!response.success || !response.data) {
      return {
        success: false,
        error: response.error || 'Failed to fetch jobs',
      }
    }

    const rawJobs = Array.isArray(response.data) ? response.data : []
    const jobs = rawJobs.map(mapRapidAPIJobToJob)

    return { success: true, data: jobs }
  },
}
