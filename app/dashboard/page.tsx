// app/dashboard/page.tsx - CREATE this simple router
'use client';

import { useAuth } from '@/lib/auth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function DashboardPage() {
  const { user, userRole, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading) {
      if (!user) {
        router.push('/auth/register');
        return;
      }

      // Simple role-based routing
      const dashboardRoutes = {
        admin: '/dashboard/security-manager',
        exhibitor: '/dashboard/exhibitor',
        speaker: '/dashboard/s-a-manager',
        attendee: '/dashboard/admin/attendee-checkin',
        security_manager: '/dashboard/security-manager'
      };

      const targetRoute = userRole ? dashboardRoutes[userRole] : '/dashboard/admin/attendee-checkin';
      
      console.log('🎯 Redirecting to:', targetRoute, 'for role:', userRole);
      router.push(targetRoute);
    }
  }, [user, userRole, isLoading, router]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Redirecting to your dashboard...
        </h2>
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto"></div>
        <p className="mt-4 text-gray-600">
          Role: {userRole || 'Loading...'}
        </p>
      </div>
    </div>
  );
}