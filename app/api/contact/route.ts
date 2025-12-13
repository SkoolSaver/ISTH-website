import {
  createSuccessResponse,
  createErrorResponse,
  handleApiError,
  parseRequestBody,
} from '@/lib/api'

/**
 * Contact API Route
 * Handles contact form submissions
 *
 * Endpoint: /api/contact
 */

interface ContactFormData {
  name: string
  email: string
  phone?: string
  country?: string
  city?: string
  reason?: string
  message: string
}

export async function POST(request: Request) {
  try {
    const body = await parseRequestBody<ContactFormData>(request)

    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return createErrorResponse(
        'Missing required fields',
        400,
        'Name, email, and message are required'
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return createErrorResponse('Invalid email format', 400)
    }

    // TODO: Process contact form submission
    // - Send email to admin
    // - Store in database
    // - Send confirmation email to user

    const submissionData = {
      id: `contact-${Date.now()}`,
      ...body,
      submittedAt: new Date().toISOString(),
    }

    return createSuccessResponse(
      { submissionId: submissionData.id },
      'Contact form submitted successfully',
      201
    )
  } catch (error) {
    return handleApiError(error)
  }
}

export async function GET() {
  try {
    // Example: Get contact information or submissions
    // This would typically require authentication
    return createSuccessResponse(
      {
        message: 'Contact API endpoint',
        info: 'Use POST to submit contact forms',
      },
      'Contact endpoint information'
    )
  } catch (error) {
    return handleApiError(error)
  }
}
