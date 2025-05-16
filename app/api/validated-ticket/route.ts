// app/api/validate-ticket/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { validateTicket } from '@/lib/validatedTicket';
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

export async function POST(request: NextRequest) {
  try {
    // Create a Supabase client for the route handler
    const supabase = createRouteHandlerClient({ cookies });
    
    // Get the current session to ensure the user is authenticated
    const { data: { session } } = await supabase.auth.getSession();
    
    if (!session) {
      return NextResponse.json({ 
        success: false, 
        error: 'Unauthorized'
      }, { status: 401 });
    }
    
    // Parse the request body
    const body = await request.json();
    const { barcode, checkIn = false } = body;
    
    if (!barcode) {
      return NextResponse.json({ 
        success: false, 
        error: 'Barcode is required'
      }, { status: 400 });
    }
    
    // Validate the ticket
    const result = await validateTicket(barcode, checkIn);
    
    return NextResponse.json({
      success: true,
      result
    });
  } catch (error) {
    console.error('Error validating ticket:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Internal server error'
    }, { status: 500 });
  }
}