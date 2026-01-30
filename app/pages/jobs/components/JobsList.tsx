'use client'

import React from 'react'
import useSWR from 'swr'
import { jobsFetcher } from '@/lib/swr/fetchers'
import { SkeletonCard } from '@/components/common/ui'
import { appPalette } from '@/theme/palette'

export default function JobsList() {
  const { data: jobs = [], error, isLoading } = useSWR(['jobs', 50, 0], jobsFetcher)

  if (error) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8 pb-4 sm:pb-6 md:pb-8 pt-2">
        <div
          className="col-span-full text-center py-8"
          style={{ color: appPalette.active.accent }}
        >
          {error instanceof Error ? error.message : 'Failed to fetch jobs. Please try again later.'}
        </div>
      </div>
    )
  }

  const gridClasses = 'grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8 pb-4 sm:pb-6 md:pb-8 pt-2 w-full overflow-x-hidden px-sm'

  return (
    <div className={gridClasses}>
      {isLoading ? (
        Array.from({ length: 6 }).map((_, i) => (
          <SkeletonCard key={i} variant="job" />
        ))
      ) : jobs.length === 0 ? (
        <div
          className="col-span-full text-center py-8"
          style={{ color: appPalette.text.secondary }}
        >
          No jobs available at the moment.
        </div>
      ) : (
      jobs.map(job => (
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
              href={job.applyUrl || '#'}
              target={job.applyUrl ? '_blank' : undefined}
              rel={job.applyUrl ? 'noopener noreferrer' : undefined}
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
      ))
      )}
    </div>
  )
}
