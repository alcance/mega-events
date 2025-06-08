'use client';

import React, { useState } from 'react';
import { withAuth } from '@/lib/protected-route';

const AttendeeCheckinDashboard = () => {
  const [selectedEvent, setSelectedEvent] = useState('TechExpo 2025');
  const [selectedDate,] = useState('14 Feb 2025');

  // Sample attendee data
  const attendees = [
    {
      id: 1,
      name: 'John Smith',
      time: '9:00 AM',
      status: 'Success',
      avatar: '/api/placeholder/32/32'
    },
    {
      id: 2,
      name: 'Jenifer Welly',
      time: '11:00 AM',
      status: 'Retry',
      avatar: '/api/placeholder/32/32'
    },
    {
      id: 3,
      name: 'John Smith',
      time: '9:00 AM',
      status: 'Success',
      avatar: '/api/placeholder/32/32'
    }
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-white border-b px-6 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-xl font-semibold text-gray-900">Event Check - In Dashboard</h1>
              <p className="text-sm text-gray-600 mt-1">
                Event: TechExpo 2025 | Location: Berlin | Date: May 15, 2025
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <select 
                  value={selectedEvent}
                  onChange={(e) => setSelectedEvent(e.target.value)}
                  className="appearance-none bg-white border border-gray-300 rounded-md px-4 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option>Choose Event</option>
                  <option>TechExpo 2025</option>
                  <option>Innovation Summit</option>
                </select>
                <svg className="w-4 h-4 absolute right-2 top-3 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-sm text-gray-600">{selectedDate}</span>
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-orange-400 rounded-full"></div>
                <span className="font-medium text-sm">John D.</span>
                <span className="text-gray-400">Admin</span>
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="flex-1 p-6 overflow-auto">
          {/* Stats Cards */}
          <div className="grid grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">950</div>
                  <div className="text-sm text-gray-600">Total Attendees</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">500</div>
                  <div className="text-sm text-gray-600">Checked In</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">450</div>
                  <div className="text-sm text-gray-600">Pending</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">496</div>
                  <div className="text-sm text-gray-600">Badge Printing</div>
                </div>
              </div>
            </div>
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-2 gap-8 mb-8">
            {/* Check In Analytics Chart */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Check In Analytics</h3>
              <div className="h-64 relative">
                {/* Custom Bar Chart with SVG */}
                <svg className="w-full h-full" viewBox="0 0 400 200">
                  {/* Grid lines */}
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#f0f0f0" strokeWidth="1"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                  
                  {/* Y-axis labels */}
                  <text x="20" y="25" fontSize="10" fill="#666" textAnchor="end">800</text>
                  <text x="20" y="65" fontSize="10" fill="#666" textAnchor="end">600</text>
                  <text x="20" y="105" fontSize="10" fill="#666" textAnchor="end">400</text>
                  <text x="20" y="145" fontSize="10" fill="#666" textAnchor="end">200</text>
                  <text x="20" y="185" fontSize="10" fill="#666" textAnchor="end">0</text>
                  
                  {/* Bars */}
                  <rect x="40" y="140" width="40" height="40" fill="#60a5fa" rx="2" />
                  <rect x="100" y="125" width="40" height="55" fill="#60a5fa" rx="2" />
                  <rect x="160" y="55" width="40" height="125" fill="#60a5fa" rx="2" />
                  <rect x="220" y="100" width="40" height="80" fill="#60a5fa" rx="2" />
                  <rect x="280" y="95" width="40" height="85" fill="#60a5fa" rx="2" />
                  <rect x="340" y="140" width="40" height="40" fill="#60a5fa" rx="2" />
                  
                  {/* X-axis labels */}
                  <text x="60" y="195" fontSize="10" fill="#666" textAnchor="middle">08:00</text>
                  <text x="120" y="195" fontSize="10" fill="#666" textAnchor="middle">09:00</text>
                  <text x="180" y="195" fontSize="10" fill="#666" textAnchor="middle">10:00</text>
                  <text x="240" y="195" fontSize="10" fill="#666" textAnchor="middle">11:00</text>
                  <text x="300" y="195" fontSize="10" fill="#666" textAnchor="middle">12:00</text>
                  <text x="360" y="195" fontSize="10" fill="#666" textAnchor="middle">01:00</text>
                </svg>
              </div>
            </div>

            {/* Badge Analytics Chart */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Badge Analytics</h3>
              <div className="h-64 flex items-center justify-center">
                <div className="relative">
                  {/* Custom Pie Chart with SVG */}
                  <svg width="160" height="160" viewBox="0 0 160 160" className="transform -rotate-90">
                    {/* Background circle */}
                    <circle
                      cx="80"
                      cy="80"
                      r="60"
                      fill="none"
                      stroke="#e5e7eb"
                      strokeWidth="20"
                    />
                    {/* Printed segment (70%) */}
                    <circle
                      cx="80"
                      cy="80"
                      r="60"
                      fill="none"
                      stroke="#2563eb"
                      strokeWidth="20"
                      strokeDasharray={`${70 * 3.77} 377`}
                      strokeLinecap="round"
                    />
                    {/* Skipped segment (30%) */}
                    <circle
                      cx="80"
                      cy="80"
                      r="60"
                      fill="none"
                      stroke="#93c5fd"
                      strokeWidth="20"
                      strokeDasharray={`${30 * 3.77} 377`}
                      strokeDashoffset={`-${70 * 3.77}`}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-lg font-bold text-gray-900">70%</div>
                    </div>
                  </div>
                </div>
                <div className="ml-8">
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-blue-600 rounded-full mr-2"></div>
                      <span className="text-sm text-gray-600">Printed</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-blue-300 rounded-full mr-2"></div>
                      <span className="text-sm text-gray-600">Skipped</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Attendee Check In Table */}
          <div className="bg-white rounded-lg shadow-sm">
            <div className="p-6 border-b">
              <h3 className="text-lg font-semibold text-gray-900">Attendee&apos;s Check In</h3>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left py-3 px-6 text-sm font-medium text-gray-500">Attendee Name</th>
                    <th className="text-left py-3 px-6 text-sm font-medium text-gray-500">Time</th>
                    <th className="text-left py-3 px-6 text-sm font-medium text-gray-500">Status</th>
                    <th className="text-left py-3 px-6 text-sm font-medium text-gray-500">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {attendees.map((attendee) => (
                    <tr key={attendee.id} className="border-t hover:bg-gray-50">
                      <td className="py-4 px-6">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                          <span className="text-sm text-gray-900">{attendee.name}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-sm text-gray-600">{attendee.time}</td>
                      <td className="py-4 px-6">
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                          attendee.status === 'Success' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-red-100 text-red-800'
                        }`}>
                          • {attendee.status}
                        </span>
                      </td>
                      <td className="py-4 px-6">
                        <button className={`px-3 py-1 rounded text-xs font-medium ${
                          attendee.status === 'Success'
                            ? 'bg-orange-100 text-orange-800'
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {attendee.status === 'Success' ? 'Badge Printed' : 'Retry'}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withAuth(AttendeeCheckinDashboard);