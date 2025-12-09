/**
 * API Utilities
 * Shared utilities for API routes (error handling, validation, etc.)
 */

export interface ApiResponse<T = unknown> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

export class ApiError extends Error {
  constructor(
    message: string,
    public statusCode: number = 500
  ) {
    super(message)
    this.name = 'ApiError'
  }
}

/**
 * Creates a success response
 */
export function createSuccessResponse<T>(data: T, message?: string): ApiResponse<T> {
  return {
    success: true,
    data,
    message,
  }
}

/**
 * Creates an error response
 */
export function createErrorResponse(error: string, statusCode: number = 500): ApiResponse {
  return {
    success: false,
    error,
  }
}

/**
 * Validates request body
 */
export function validateRequestBody<T>(
  body: unknown,
  schema: (value: unknown) => value is T
): T {
  if (!schema(body)) {
    throw new ApiError('Invalid request body', 400)
  }
  return body
}

