import { apiClient } from '@/lib/api/client';
import { IEvent } from '@/lib/models/EventsModel';

export const EventsService = {
  getAll: async () => {
    return await apiClient.get<IEvent[]>('/events');
  },
};
