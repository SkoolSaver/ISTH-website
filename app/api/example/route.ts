import { NextResponse } from 'next/server'

/**
 * Example API Route
 * Feature-based API routes: app/api/[feature]/route.ts
 * Each API route is self-contained with its own types and utilities
 */

export async function GET() {
  try {
    // Example API logic
    const data = {
      message: 'This is an example API route',
      timestamp: new Date().toISOString(),
    }

    return NextResponse.json(data, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    // Example POST logic
    return NextResponse.json(
      { message: 'Data received', data: body },
      { status: 201 }
    )
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid request' },
      { status: 400 }
    )
  }
}

