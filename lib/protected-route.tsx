// lib/protected-route.tsx

'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from './auth';

// Protected route middleware (HOC)
export function withAuth<P extends object>(Component: React.ComponentType<P>) {
  function ProtectedRoute(props: P) {
    const { user, isLoading } = useAuth();
    const router = useRouter();

    // Effect for redirection - changed from /login to /register
    useEffect(() => {
      if (!isLoading && !user) {
        router.push('/register');
      }
    }, [user, isLoading, router]);

    // Show loading state
    if (isLoading) {
      return <div>Loading...</div>;
    }

    // Render component if authenticated
    return user ? <Component {...props} /> : null;
  }

  return ProtectedRoute;
}