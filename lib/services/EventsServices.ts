import { apiClient } from '@/lib/api/client';
import { IEvent } from '@/lib/models/EventsModel';

export const EventsService = {
  getAll: async () => {
    return await apiClient.get<IEvent[]>('/events');
  },

  create: async (data: Partial<IEvent>) => {
    return await apiClient.post<IEvent>('/events', data);
  },

  update: async (id: string, data: Partial<IEvent>) => {
    return await apiClient.put<IEvent>(`/events/${id}`, data);
  },

  delete: async (id: string) => {
    return await apiClient.delete<void>(`/events/${id}`);
  }
};
