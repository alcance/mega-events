'use client';

import React from 'react';
import { useAuth } from '@/lib/auth';
import { withAuth } from '@/lib/protected-route';

function Home() {
  const { user, signOut } = useAuth();

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <nav className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Mega Events</h1>
        <button
          onClick={signOut}
          className="px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none"
        >
          Sign Out
        </button>
      </nav>

      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <div className="mb-8 p-6 bg-blue-50 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">
            Welcome, {user?.user_metadata?.full_name || user?.email || 'User'}
          </h2>
          <p>You are now signed in to your Mega Events account!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 border rounded-lg">
            <h3 className="text-lg font-medium mb-3">Your Profile</h3>
            <p className="text-gray-600 mb-2">
              <span className="font-medium">Email:</span> {user?.email || 'N/A'}
            </p>
            <p className="text-gray-600 mb-2">
              <span className="font-medium">Name:</span> {user?.user_metadata?.full_name || 'Not provided'}
            </p>
            <p className="text-gray-600">
              <span className="font-medium">Account created:</span>{' '}
              {user?.created_at ? new Date(user.created_at).toLocaleDateString() : 'N/A'}
            </p>
          </div>

          <div className="p-6 border rounded-lg">
            <h3 className="text-lg font-medium mb-3">Quick Actions</h3>
            <ul className="space-y-2">
              <li>
                <button className="text-blue-600 hover:text-blue-800">
                  Create New Event
                </button>
              </li>
              <li>
                <button className="text-blue-600 hover:text-blue-800">
                  Browse Events
                </button>
              </li>
              <li>
                <button className="text-blue-600 hover:text-blue-800">
                  Edit Profile
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

// Wrap the Home component with the withAuth HOC to protect this route
export default withAuth(Home);