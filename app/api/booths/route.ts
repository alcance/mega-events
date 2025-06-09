// app/api/booths/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

export async function POST(request: NextRequest) {
  try {
    console.log('=== Booths API Called ===');
    
    const body = await request.json();
    console.log('Received body:', body);
    
    // Create Supabase client
    const supabase = createRouteHandlerClient({ cookies });
    
    // Get authentication token from header (since cookies weren't working)
    const authHeader = request.headers.get('authorization');
    console.log('Auth header present:', !!authHeader);
    
    let user = null;
    
    if (authHeader) {
      const token = authHeader.replace('Bearer ', '');
      console.log('Trying to authenticate with token...');
      
      // Use the token to get user
      const { data: { user: tokenUser }, error: tokenError } = await supabase.auth.getUser(token);
      
      if (tokenError) {
        console.error('Token authentication failed:', tokenError);
        return NextResponse.json({ 
          success: false, 
          error: 'Invalid authentication token' 
        }, { status: 401 });
      }
      
      user = tokenUser;
      console.log('Authentication successful for user:', user?.id);
    } else {
      console.error('No authorization header found');
      return NextResponse.json({ 
        success: false, 
        error: 'Authorization header missing' 
      }, { status: 401 });
    }
    
    if (!user) {
      return NextResponse.json({ 
        success: false, 
        error: 'User not found' 
      }, { status: 401 });
    }
    
    // Insert booth data into Supabase
    console.log('Inserting booth data...');
    const { data, error: dbError } = await supabase
      .from('booths')
      .insert({
        user_id: user.id,
        name: body.name,
        description: body.description,
        package_type: body.packageType,
        contact_name: body.contactName,
        contact_email: body.contactEmail,
        contact_phone: body.contactPhone,
        website: body.website,
        interaction_type: body.interactionType,
        status: 'published'
      })
      .select()
      .single();

    if (dbError) {
      console.error('Database error:', dbError);
      return NextResponse.json({ 
        success: false, 
        error: 'Database error: ' + dbError.message 
      }, { status: 500 });
    }

    console.log('Booth created successfully:', data);
    return NextResponse.json({
      success: true,
      message: 'Booth created successfully!',
      booth: data
    });
    
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Internal server error: ' + (error instanceof Error ? error.message : 'Unknown error')
    }, { status: 500 });
  }
}