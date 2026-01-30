'use client'

import { appPalette } from '@/theme/palette'

interface SkeletonCardProps {
  /** Variant: 'course' for tall card with image area, 'job' for compact card */
  variant?: 'course' | 'job'
  className?: string
}

export default function SkeletonCard({ variant = 'job', className = '' }: SkeletonCardProps) {
  const baseClasses = 'rounded-lg overflow-hidden animate-pulse'
  const cardClasses = `${baseClasses} ${className}`.trim()

  if (variant === 'course') {
    return (
      <div
        className={`card w-full max-w-full shadow-xl border ${cardClasses}`}
        style={{ backgroundColor: appPalette.background.main, borderColor: appPalette.border.light }}
      >
        <div className="h-40 sm:h-44 md:h-48 rounded-t-lg" style={{ backgroundColor: appPalette.border.light }} />
        <div className="card-body p-2 sm:p-3 md:p-4 space-y-2">
          <div className="h-5 w-3/4 rounded" style={{ backgroundColor: appPalette.border.light }} />
          <div className="h-4 w-1/2 rounded" style={{ backgroundColor: appPalette.border.light }} />
          <div className="h-4 w-full rounded" style={{ backgroundColor: appPalette.border.light }} />
          <div className="h-4 w-2/3 rounded" style={{ backgroundColor: appPalette.border.light }} />
          <div className="flex gap-2 pt-2">
            <div className="h-8 w-24 rounded" style={{ backgroundColor: appPalette.border.light }} />
            <div className="h-8 w-28 rounded" style={{ backgroundColor: appPalette.border.light }} />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div
      className={`card w-full max-w-full shadow-xl border ${cardClasses}`}
      style={{ backgroundColor: appPalette.background.main, borderColor: appPalette.border.light }}
    >
      <div className="card-body p-4 sm:p-5 md:p-6 space-y-3">
        <div className="h-6 w-4/5 rounded" style={{ backgroundColor: appPalette.border.light }} />
        <div className="h-4 w-1/3 rounded" style={{ backgroundColor: appPalette.border.light }} />
        <div className="flex gap-2">
          <div className="h-4 w-24 rounded" style={{ backgroundColor: appPalette.border.light }} />
          <div className="h-4 w-20 rounded" style={{ backgroundColor: appPalette.border.light }} />
        </div>
        <div className="space-y-2">
          <div className="h-3 w-full rounded" style={{ backgroundColor: appPalette.border.light }} />
          <div className="h-3 w-full rounded" style={{ backgroundColor: appPalette.border.light }} />
          <div className="h-3 w-2/3 rounded" style={{ backgroundColor: appPalette.border.light }} />
        </div>
        <div className="h-9 w-20 rounded mt-2" style={{ backgroundColor: appPalette.border.light }} />
      </div>
    </div>
  )
}
