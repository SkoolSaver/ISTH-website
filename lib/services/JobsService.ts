import { apiClient } from '@/lib/api/client'
  import { IJob, IJobDB, mapDBJobToJob } from '@/types/job'

export const JobsService = {
  getAll: async (
    limit = 50,
    offset = 0
  ): Promise<{ success: boolean; data?: IJob[]; error?: string }> => {
    const response = await apiClient.get<IJobDB[]>(
      `/jobs?limit=${limit}&offset=${offset}`
    )

    if (!response.success || !response.data) {
      return {
        success: false,
        error: response.error || 'Failed to fetch jobs',
      }
    }

    const rawJobs = Array.isArray(response.data) ? response.data : []
    const jobs = rawJobs.map(mapDBJobToJob)

    return { success: true, data: jobs }
  },
}
