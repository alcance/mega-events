// app/dashboard-selection/page.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { withAuth } from '@/lib/protected-route';

const DashboardSelectionPage = () => {
  const router = useRouter();

  const dashboards = [
    {
      id: 1,
      title: 'ATTENDE',
      route: '/booths/attende/booth',
      color: 'bg-blue-500 hover:bg-blue-600'
    },
    {
      id: 2,
      title: 'EXHIBITOR',
      route: '/booths/exhibitor/booth',
      color: 'bg-green-500 hover:bg-green-600'
    },
    {
      id: 3,
      title: 'CREATE-BOOTH',
      route: '/booths/create-booth',
      color: 'bg-yellow-500 hover:bg-green-600'
    },
]

  const handleDashboardClick = (route: string) => {
    router.push(route);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-center items-center">
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center mr-3">
              <Image 
                src="/main-logo.svg" 
                alt="Logo" 
                width={24} 
                height={24}
              />
            </div>
            <h1 className="text-2xl font-semibold">Select Dashboard</h1>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome!</h2>
          <p className="text-gray-600">Choose a booth to get started</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dashboards.map((dashboard) => (
            <button
              key={dashboard.id}
              onClick={() => handleDashboardClick(dashboard.route)}
              className={`${dashboard.color} text-white p-6 rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105 text-left`}
            >
              <h3 className="text-xl font-bold mb-2">{dashboard.title}</h3>
            </button>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-500 text-sm">
            You can always return to this page to switch between booths
          </p>
        </div>
      </main>
    </div>
  );
};

export default withAuth(DashboardSelectionPage);