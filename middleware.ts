// middleware.ts

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Get the pathname of the request
  const path = request.nextUrl.pathname;

  // Allow login page to work normally
  // Remove any redirects that were interfering with login

  // Continue with the request for all paths
  return NextResponse.next();
}

// Configure which paths this middleware will run on (optional now)
export const config = {
  matcher: [],
};