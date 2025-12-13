/**
 * API Helper Functions
 * Utility functions for API routes and client-side API calls
 */

import { NextResponse } from 'next/server'
import type { ApiResponse, ApiErrorResponse } from './types'

/**
 * Creates a success response for Next.js API routes
 */
export function createSuccessResponse<T>(
  data: T,
  message?: string,
  status: number = 200
): NextResponse<ApiResponse<T>> {
  return NextResponse.json(
    {
      success: true,
      data,
      message,
    },
    { status }
  )
}

/**
 * Creates an error response for Next.js API routes
 */
export function createErrorResponse(
  error: string,
  statusCode: number = 500,
  message?: string
): NextResponse<ApiErrorResponse> {
  return NextResponse.json(
    {
      success: false,
      error,
      message,
      statusCode,
    },
    { status: statusCode }
  )
}

/**
 * Handles API errors and returns appropriate response
 */
export function handleApiError(error: unknown): NextResponse<ApiErrorResponse> {
  if (error instanceof Error) {
    // Check if it's an ApiError with status code
    if ('statusCode' in error) {
      return createErrorResponse(error.message, (error as any).statusCode)
    }
    return createErrorResponse(error.message, 500)
  }
  return createErrorResponse('An unexpected error occurred', 500)
}

/**
 * Validates request body
 */
export function validateRequestBody<T>(
  body: unknown,
  validator: (value: unknown) => value is T
): T {
  if (!validator(body)) {
    throw new Error('Invalid request body')
  }
  return body
}

/**
 * Parses JSON request body safely
 */
export async function parseRequestBody<T = unknown>(request: Request): Promise<T> {
  try {
    return await request.json()
  } catch (error) {
    throw new Error('Invalid JSON in request body')
  }
}
