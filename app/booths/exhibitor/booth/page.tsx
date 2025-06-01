// app/dashboard-selection/page.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import { withAuth } from '@/lib/protected-route';

const DashboardSelectionPage = () => {

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
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome!</h2>
          <p className="text-gray-600">Coming soon...</p>
        </div>

        <div className="text-center mt-8">
        </div>
      </main>
    </div>
  );
};

export default withAuth(DashboardSelectionPage);