// app/api/barcode/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { length = 12 } = await request.json();
    
    // Move the function inside the handler
    function generateBarcodeNumber(length: number = 12): string {
      let result = '';
      for (let i = 0; i < length; i++) {
        result += Math.floor(Math.random() * 10).toString();
      }
      return result;
    }
    
    const barcode = generateBarcodeNumber(length);
    
    return NextResponse.json({
      success: true,
      barcode
    });
  } catch (error) {
    console.error('Error generating barcode:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to generate barcode'
    }, { status: 500 });
  }
}