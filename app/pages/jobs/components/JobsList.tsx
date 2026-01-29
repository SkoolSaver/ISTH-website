'use client'

import React from 'react'
import { appPalette } from '@/theme/palette'

interface DemoJob {
  id: string
  title: string
  company: string
  location: string
  type: 'Full-time' | 'Part-time' | 'Internship'
  description: string
}

const demoJobs: DemoJob[] = [
  {
    id: '1',
    title: 'Software Engineering Intern',
    company: 'TechCorp Solutions',
    location: 'Remote',
    type: 'Internship',
    description:
      'Join our engineering team to build scalable web applications. Ideal for students with experience in React, Node.js, or Python.',
  },
  {
    id: '2',
    title: 'Data Analyst',
    company: 'Global Analytics Inc',
    location: 'New York, NY',
    type: 'Full-time',
    description:
      'Analyze data and create insights for our international client base. SQL and Python experience preferred.',
  },
  {
    id: '3',
    title: 'Marketing Coordinator',
    company: 'EduConnect',
    location: 'Austin, TX',
    type: 'Part-time',
    description:
      'Support marketing campaigns for our education platform. Great for students interested in digital marketing.',
  },
  {
    id: '4',
    title: 'Product Management Intern',
    company: 'StartupXYZ',
    location: 'San Francisco, CA',
    type: 'Internship',
    description:
      'Work with product and engineering teams to define features and user stories. Strong communication skills required.',
  },
  {
    id: '5',
    title: 'Full Stack Developer',
    company: 'Innovate Labs',
    location: 'Remote',
    type: 'Full-time',
    description:
      'Build and maintain full-stack applications. Experience with modern frameworks and cloud services preferred.',
  },
]

export default function JobsList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8 pb-4 sm:pb-6 md:pb-8 pt-2 w-full overflow-x-hidden px-sm">
      {demoJobs.map(job => (
        <div
          key={job.id}
          className="card w-full max-w-full shadow-xl border rounded-lg overflow-hidden"
          style={{
            backgroundColor: appPalette.background.main,
            borderColor: appPalette.border.main,
          }}
        >
          <div
            className="card-body p-4 sm:p-5 md:p-6"
            style={{ color: appPalette.text.main }}
          >
            <h3 className="text-lg sm:text-xl font-bold mb-2">{job.title}</h3>
            <p
              className="text-sm font-semibold mb-1"
              style={{ color: appPalette.active.accent }}
            >
              {job.company}
            </p>
            <div className="flex flex-wrap gap-2 mb-3 text-xs sm:text-sm">
              <span style={{ color: appPalette.text.secondary }}>{job.location}</span>
              <span
                className="px-2 py-1 rounded-lg font-semibold"
                style={{
                  backgroundColor: appPalette.active.accent,
                  color: appPalette.active.light,
                }}
              >
                {job.type}
              </span>
            </div>
            <p
              className="text-sm mb-4 line-clamp-3"
              style={{ color: appPalette.text.secondary }}
            >
              {job.description}
            </p>
            <a
              href="#"
              className="btn btn-sm w-fit px-4 py-2 rounded-lg font-semibold transition-opacity hover:opacity-90"
              style={{
                backgroundColor: appPalette.active.accent,
                color: appPalette.active.light,
              }}
            >
              Apply
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}
