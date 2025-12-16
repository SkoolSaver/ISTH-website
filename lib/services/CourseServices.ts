import { apiClient } from '@/lib/api/client';
import { ICourse } from '@/lib/models/CourseModel';

export const CourseService = {
  getAll: async () => {
    return await apiClient.get<ICourse[]>('/courses');
  },
};
