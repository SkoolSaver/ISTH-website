import { apiClient } from '@/lib/api';
import { ApiResponse } from '@/lib/api/types';

export interface ContactFormData {
  fullName?: string;
  name?: string; // For backward compatibility with ContactForm
  email: string;
  phone:
    | string
    | {
        countryCode: string;
        number: string;
      };
  formType?: 'DOWNLOAD_CURRICULUM' | 'CONTACT_US' | 'REGISTER_INTEREST';
  topic?: string;
  reason?: string; // For backward compatibility with ContactForm
  message?: string;
  country?: string;
  city?: string;
  consent?: {
    sms: boolean;
    whatsapp: boolean;
    email?: boolean;
  };
}

export const ContactService = {
  /**
   * Submit a contact form or lead capture form
   */
  submitContactForm: async (
    data: ContactFormData
  ): Promise<ApiResponse<any>> => {
    return await apiClient.post('/contact', data);
  },
};
