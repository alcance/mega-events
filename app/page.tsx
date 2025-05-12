'use client';

import React from 'react';
import { useAuth } from '@/lib/auth';
import { withAuth } from '@/lib/protected-route';
import Image from 'next/image';

function Home() {
  const { user, signOut } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center mr-3">
              <Image 
                src="/main-logo.svg" 
                alt="Logo" 
                width={20} 
                height={20}
              />
            </div>
            <h1 className="text-xl font-semibold">Mega Events</h1>
          </div>
          <button
            onClick={signOut}
            className="px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-md hover:bg-red-600"
          >
            Sign Out
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Registration Complete!</h2>
          <p className="text-gray-600 mb-4">
            Thank you for registering with Mega Events, {user?.user_metadata?.full_name || 'valued guest'}!
          </p>
          
          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-3">Your Ticket Information</h3>
            <div className="space-y-2">
              <p><span className="font-medium">Email:</span> {user?.email}</p>
              <p><span className="font-medium">Name:</span> {user?.user_metadata?.full_name || 'Not provided'}</p>
              <p><span className="font-medium">Ticket Type:</span> {user?.user_metadata?.ticket_type || 'Standard'}</p>
              <p><span className="font-medium">Quantity:</span> {user?.user_metadata?.ticket_quantity || 1}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="border rounded-lg overflow-hidden">
                <div className="h-48 bg-gray-200 relative">
                  {/* Placeholder for event image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-gray-500">Event Image {i}</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-1">Sample Event {i}</h3>
                  <p className="text-sm text-gray-600 mb-2">June {10 + i}, 2025</p>
                  <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

// Wrap the Home component with the withAuth HOC to protect this route
export default withAuth(Home);