export interface ILead {
  _id: string;
  fullName: string;
  email: string;
  phone: {
    countryCode: string;
    number: string;
  };
  formType: 'DOWNLOAD_CURRICULUM' | 'CONTACT_US' | 'REGISTER_INTEREST';
  topic?: string;
  message?: string;
  country?: string;
  city?: string;
  consent: {
    sms: boolean;
    whatsapp: boolean;
    email?: boolean;
  };
  status: 'new' | 'read' | 'contacted' | 'converted' | 'closed';
  notes?: string;
  createdAt: string | Date; // API might return string
  updatedAt: string | Date;
}
