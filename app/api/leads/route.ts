import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import LeadsModel from '@/lib/models/LeadsModal';

export async function GET() {
  try {
    await connectDB();
    const leads = await LeadsModel.find({}).sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: leads });
  } catch (error) {
    console.error('Error fetching leads:', error);
    return NextResponse.json({ success: false, error: 'Failed to fetch leads' }, { status: 500 });
  }
}
