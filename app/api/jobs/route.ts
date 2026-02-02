import { NextResponse } from 'next/server'
import connectDB from '@/lib/db'
import { Job } from '@/lib/models/JobModel'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const limit = parseInt(searchParams.get('limit') || '50')
    const offset = parseInt(searchParams.get('offset') || '0')

    await connectDB()

    const jobs = await Job.find({})
      .sort({ date_posted: -1 })
      .skip(offset)
      .limit(limit)
      .lean()

    return NextResponse.json({ success: true, data: jobs })
  } catch (error) {
    console.error('Error fetching jobs:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch jobs' },
      { status: 500 }
    )
  }
}
