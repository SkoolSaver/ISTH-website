import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Lead from '@/lib/models/LeadsModal';

export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();

    // Map incoming data to Lead schema
    // Handling potential differences between frontend form state and backend schema
    const leadData = {
      fullName: body.fullName || body.name,
      email: body.email,
      // Handle phone if it comes as a string (legacy) or object (new schema)
      phone:
        typeof body.phone === 'string'
          ? { countryCode: '+91', number: body.phone } // Default fallback, or extract if possible
          : body.phone,
      formType: body.formType || 'CONTACT_US',
      topic: body.topic || body.reason,
      message: body.message,
      country: body.country,
      city: body.city,
      consent: body.consent || {
        sms: false,
        whatsapp: false,
        email: false,
      },
      status: 'new',
    };

    const newLead = await Lead.create(leadData);

    return NextResponse.json(
      { message: 'Contact request submitted successfully', data: newLead },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Error submitting contact form:', error);
    return NextResponse.json(
      { message: 'Failed to submit contact form', error: error.message },
      { status: 500 }
    );
  }
}
