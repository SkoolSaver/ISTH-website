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

export async function POST(request: Request) {
  try {
    await connectDB();
    const body = await request.json();
    const event = await EventsModel.create(body);
    return NextResponse.json({ success: true, data: event }, { status: 201 });
  } catch (error) {
    console.error('Error creating event:', error);
    return NextResponse.json({ success: false, error: 'Failed to create event' }, { status: 500 });
  }
}
