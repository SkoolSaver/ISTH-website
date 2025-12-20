import mongoose, { Schema, Document, Model } from 'mongoose';

export interface ILead extends Document {
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
  status: 'new' | 'contacted' | 'converted' | 'closed';
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

const LeadSchema: Schema<ILead> = new Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phone: {
      countryCode: { type: String, required: true },
      number: { type: String, required: true },
    },
    formType: {
      type: String,
      enum: ['DOWNLOAD_CURRICULUM', 'CONTACT_US', 'REGISTER_INTEREST'],
      required: true,
    },
    topic: { type: String },
    message: { type: String },
    country: { type: String },
    city: { type: String },
    consent: {
      sms: { type: Boolean, default: false },
      whatsapp: { type: Boolean, default: false },
      email: { type: Boolean, default: false },
    },
    status: {
      type: String,
      enum: ['new', 'contacted', 'converted', 'closed'],
      default: 'new',
    },
    notes: { type: String },
  },
  {
    timestamps: true,
  }
);

const Lead: Model<ILead> =
  mongoose.models.Lead || mongoose.model<ILead>('Lead', LeadSchema);

export default Lead;
