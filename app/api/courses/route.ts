import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import CourseModel from '@/lib/models/CourseModel';

export async function GET() {
  try {
    await connectDB();
    const courses = await CourseModel.find({}).sort({ createdAt: -1 });
    return NextResponse.json(
      { success: true, data: courses },
      {
        headers: {
          'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=120',
        },
      }
    );
  } catch (error) {
    console.error('Error fetching courses:', error);
    return NextResponse.json({ success: false, error: 'Failed to fetch courses' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    await connectDB();
    const body = await request.json();
    const course = await CourseModel.create(body);
    return NextResponse.json({ success: true, data: course }, { status: 201 });
  } catch (error) {
    console.error('Error creating course:', error);
    return NextResponse.json({ success: false, error: 'Failed to create course' }, { status: 500 });
  }
}
