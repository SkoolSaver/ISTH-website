import mongoose, { Schema, Document, Model } from 'mongoose';

export interface ICourse extends Document {
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  category: string;
  level: string;
  tags: string[];
  thumbnailUrl: string;
  price: number;
  discount: number;
  currency: string;
  status: string;
  duration: string;
  language: string;
  rating: number;
  curriculumPdfUrl?: string;
  enrollUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}

const CourseSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    shortDescription: { type: String, required: true },
    category: { type: String, required: true },
    level: { type: String, required: true },
    tags: { type: [String], default: [] },
    thumbnailUrl: { type: String, required: true },
    price: { type: Number, required: true },
    discount: { type: Number, default: 0 },
    currency: { type: String, default: 'INR' },
    status: { type: String, required: true, default: 'active' },
    duration: { type: String, required: true },
    language: { type: String, default: 'English' },
    rating: { type: Number, default: 0 },
    curriculumPdfUrl: { type: String },
    enrollUrl: { type: String },
  },
  {
    timestamps: true,
  }
);

const CourseModel: Model<ICourse> = mongoose.models.Course || mongoose.model<ICourse>('Course', CourseSchema);

export default CourseModel;
