import mongoose, { Schema, Document, Model } from 'mongoose'
import { IJobDB } from '@/types/job'

/**
 * Job Interface for Database (MongoDB) with Mongoose Document
 */
export interface IJobDocument extends IJobDB, Document {}

const JobSchema = new Schema<IJobDocument>(
  {
    id: { type: String, required: true, unique: true },
    date_posted: { type: Date },
    date_created: { type: Date },
    title: { type: String, required: true },
    organization: { type: String, required: true },
    organization_url: { type: String },
    date_validthrough: { type: String },
    locations_raw: { type: [Schema.Types.Mixed] },
    locations_alt_raw: { type: [String] },
    location_type: { type: String },
    location_requirements_raw: { type: String },
    salary_raw: { type: String },
    employment_type: { type: [String] },
    url: { type: String },
    source_type: { type: String },
    source: { type: String },
    source_domain: { type: String },
    organization_logo: { type: String },
    cities_derived: { type: [String] },
    counties_derived: { type: [String] },
    regions_derived: { type: [String] },
    countries_derived: { type: [String] },
    locations_derived: { type: [String] },
    timezones_derived: { type: [String] },
    lats_derived: { type: [Number] },
    lngs_derived: { type: [Number] },
    remote_derived: { type: Boolean },
    domain_derived: { type: String },
    ai_salary_currency: { type: String },
    ai_salary_value: { type: Number },
    ai_salary_minvalue: { type: Number },
    ai_salary_maxvalue: { type: Number },
    ai_salary_unittext: { type: String },
    ai_benefits: { type: [String] },
    ai_experience_level: { type: String },
    ai_work_arrangement: { type: String },
    ai_work_arrangement_office_days: { type: Number },
    ai_remote_location: { type: [String] },
    ai_remote_location_derived: { type: [String] },
    ai_key_skills: { type: [String] },
    ai_hiring_manager_name: { type: String },
    ai_hiring_manager_email_address: { type: String },
    ai_core_responsibilities: { type: String },
    ai_requirements_summary: { type: String },
    ai_working_hours: { type: Number },
    ai_employment_type: { type: [String] },
    ai_job_language: { type: String },
    ai_visa_sponsorship: { type: Boolean },
    ai_keywords: { type: [String] },
    ai_taxonomies_a: { type: [String] },
    ai_education_requirements: { type: [String] },
  },
  { timestamps: true }
)

export const Job =
  (mongoose.models.Job as Model<IJobDocument>) ||
  mongoose.model<IJobDocument>('Job', JobSchema, 'jobs')

