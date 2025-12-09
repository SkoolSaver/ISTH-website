/**
 * Shared Type Definitions
 * Central export point for all shared TypeScript types
 */

// Common utility types
export type Nullable<T> = T | null
export type Optional<T> = T | undefined
export type Maybe<T> = T | null | undefined

// Common component props
export interface BaseComponentProps {
  className?: string
  children?: React.ReactNode
}

// API types
export interface PaginationParams {
  page: number
  limit: number
}

export interface PaginatedResponse<T> {
  data: T[]
  total: number
  page: number
  limit: number
  totalPages: number
}

// Add more shared types as needed

