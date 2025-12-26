import { apiClient } from '@/lib/api/client';
import { ILead } from '@/types/lead';

export const LeadsService = {
  getAll: async () => {
    return await apiClient.get<ILead[]>('/leads');
  },

  update: async (id: string, data: Partial<ILead>) => {
    return await apiClient.put<ILead>(`/leads/${id}`, data);
  },

  delete: async (id: string) => {
    return await apiClient.delete<void>(`/leads/${id}`);
  }
};
