// middleware.ts
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  // Always create a new response - don't reuse the original
  const res = NextResponse.next();
  
  try {
    // Create Supabase client with current request
    const supabase = createMiddlewareClient({ req, res });
    
    // Get the session - this refreshes the session if needed
    const {
      data: { session },
    } = await supabase.auth.getSession();

    // Define public paths that don't require authentication
    const publicPaths = [
      '/login',
      '/register',
      '/',
      '/auth/callback'
    ];
    
    // Check if the current path is public
    const isPublicPath = publicPaths.some(path => 
      req.nextUrl.pathname === path || 
      req.nextUrl.pathname.startsWith('/auth/')
    );
    
    // Is there already a redirect parameter? Avoid loops
    const hasRedirectParam = req.nextUrl.searchParams.has('redirectTo');
    
    // If there's no session and the path is protected
    if (!session && !isPublicPath) {
      // Only redirect if not already in a redirect
      if (!hasRedirectParam) {
        // Create redirect URL to login with the current path as destination
        const redirectUrl = new URL('/login', req.url);
        redirectUrl.searchParams.set('redirectTo', req.nextUrl.pathname);
        return NextResponse.redirect(redirectUrl);
      }
    }
    
    // If there's a session and trying to access login/register
    if (session && ['/login', '/register'].includes(req.nextUrl.pathname)) {
      // If there's a redirectTo parameter, use it, otherwise go to dashboard
      if (hasRedirectParam) {
        const redirectTo = req.nextUrl.searchParams.get('redirectTo') || '/dashboard';
        return NextResponse.redirect(new URL(redirectTo, req.url));
      } else {
        return NextResponse.redirect(new URL('/dashboard', req.url));
      }
    }
    
    // For all other cases, just proceed with the response
    return res;
  } catch (error) {
    console.error('Middleware error:', error);
    // On error, still allow the request to proceed
    return res;
  }
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|api/).*)'],
};