import { apiClient } from '@/lib/api/client';
import { ICourse } from '@/lib/models/CourseModel';

export const CourseService = {
  getAll: async () => {
    return await apiClient.get<ICourse[]>('/courses');
  },

  create: async (data: Partial<ICourse>) => {
    return await apiClient.post<ICourse>('/courses', data);
  },

  update: async (id: string, data: Partial<ICourse>) => {
    return await apiClient.put<ICourse>(`/courses/${id}`, data);
  },

  delete: async (id: string) => {
    return await apiClient.delete<void>(`/courses/${id}`);
  }
};
