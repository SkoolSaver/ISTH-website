import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import EventsModel from '@/lib/models/EventsModel';

export async function GET() {
  try {
    await connectDB();
    const events = await EventsModel.find({}).sort({ eventDate: 1 });
    return NextResponse.json({ success: true, data: events });
  } catch (error) {
    console.error('Error fetching events:', error);
    return NextResponse.json({ success: false, error: 'Failed to fetch events' }, { status: 500 });
  }
}
