import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });
  
  const {
    data: { session },
  } = await supabase.auth.getSession();

  // Paths that are accessible to everyone
  const publicPaths = ['/login', '/register', '/', '/auth/callback'];
  const isPublicPath = publicPaths.includes(req.nextUrl.pathname);
  
  // If user is not signed in and trying to access a protected route
  if (!session && !isPublicPath) {
    return NextResponse.redirect(new URL('/login', req.url));
  }
  
  // If user is signed in and trying to access login/register pages
  if (session && ['/login', '/register'].includes(req.nextUrl.pathname)) {
    return NextResponse.redirect(new URL('/dashboard', req.url));
  }
  
  // All other cases, proceed normally
  return res;
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};