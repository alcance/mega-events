// middleware.ts

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Get the pathname of the request
  const path = request.nextUrl.pathname;

  // If someone tries to access /login, redirect them to /register
  if (path === '/login') {
    return NextResponse.redirect(new URL('/register', request.url));
  }

  // Continue with the request for all other paths
  return NextResponse.next();
}

// Configure which paths this middleware will run on
export const config = {
  matcher: ['/login'],
};