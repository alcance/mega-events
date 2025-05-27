'use client';

import React from 'react';
import { withAuth } from '@/lib/protected-route';

const MarketingManagerDashboard = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-sm border-r flex flex-col">
        <div className="p-6">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
              M
            </div>
            <span className="text-xl font-bold text-gray-900">WEKALA</span>
          </div>
        </div>
        
        <nav className="flex-1 mt-6">
          <div className="px-4 space-y-2">
            <a href="#" className="flex items-center space-x-3 px-4 py-3 bg-blue-50 text-blue-600 rounded-lg">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <span className="font-medium">Dashboard</span>
            </a>
            <a href="#" className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>Campaigns</span>
            </a>
            <a href="#" className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <span>Analytics</span>
            </a>
            <a href="#" className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span>Support</span>
            </a>
            <a href="#" className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Settings</span>
            </a>
          </div>
        </nav>

        <div className="p-4">
          <button className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg w-full">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            <span>Log Out</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-white border-b px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
            <div className="flex items-center space-x-4">
              <button className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-600 flex items-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                <span>NEW CAMPAIGN</span>
              </button>
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5-5-5h5v-5a7.5 7.5 0 00-15 0v5h5l-5 5-5-5h5V7a9.5 9.5 0 0119 0v10z" />
                </svg>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-orange-400 rounded-full"></div>
                <span className="font-medium">John D.</span>
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="flex-1 p-6 overflow-auto">
          {/* Campaign Stats */}
          <div className="grid grid-cols-3 gap-8 mb-10">
            {/* Email Campaigns */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Email Campaigns</h3>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-gray-600 mb-2">Open Rate : 46%</div>
                  <div className="text-sm text-gray-600 mb-2">Bounces: 3%</div>
                  <div className="text-sm text-gray-600">CTR : 21%</div>
                </div>
                <div className="w-20 h-20">
                  <svg viewBox="0 0 42 42" className="w-full h-full">
                    {/* Background circle */}
                    <circle
                      cx="21"
                      cy="21"
                      r="15.915"
                      fill="transparent"
                      stroke="#f3f4f6"
                      strokeWidth="10"
                    />
                    {/* Main blue segment (largest) */}
                    <circle
                      cx="21"
                      cy="21"
                      r="15.915"
                      fill="transparent"
                      stroke="#3b82f6"
                      strokeWidth="10"
                      strokeDasharray="60 40"
                      strokeDashoffset="25"
                      transform="rotate(-90 21 21)"
                    />
                    {/* Secondary light blue segment */}
                    <circle
                      cx="21"
                      cy="21"
                      r="15.915"
                      fill="transparent"
                      stroke="#60a5fa"
                      strokeWidth="10"
                      strokeDasharray="35 65"
                      strokeDashoffset="-35"
                      transform="rotate(-90 21 21)"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* SMS Campaigns */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">SMS Campaigns</h3>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-gray-600 mb-2">Delivery Rate : 98%</div>
                  <div className="text-sm text-gray-600 mb-2">Response Rate : 28%</div>
                  <div className="text-sm text-gray-600">CTR : 19%</div>
                </div>
                <div className="w-20 h-20">
                  <svg viewBox="0 0 42 42" className="w-full h-full">
                    {/* Background circle */}
                    <circle
                      cx="21"
                      cy="21"
                      r="15.915"
                      fill="transparent"
                      stroke="#f3f4f6"
                      strokeWidth="10"
                    />
                    {/* Main purple segment (largest) */}
                    <circle
                      cx="21"
                      cy="21"
                      r="15.915"
                      fill="transparent"
                      stroke="#8b5cf6"
                      strokeWidth="10"
                      strokeDasharray="65 35"
                      strokeDashoffset="25"
                      transform="rotate(-90 21 21)"
                    />
                    {/* Secondary light purple segment */}
                    <circle
                      cx="21"
                      cy="21"
                      r="15.915"
                      fill="transparent"
                      stroke="#a78bfa"
                      strokeWidth="10"
                      strokeDasharray="30 70"
                      strokeDashoffset="-40"
                      transform="rotate(-90 21 21)"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Social Media</h3>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-gray-600 mb-2">Total Impressions : 12,000</div>
                  <div className="text-sm text-gray-600 mb-2">Clicks : 720</div>
                  <div className="text-sm text-gray-600">Shares : 105</div>
                </div>
                <div className="w-20 h-20">
                  <svg viewBox="0 0 42 42" className="w-full h-full">
                    {/* Background circle */}
                    <circle
                      cx="21"
                      cy="21"
                      r="15.915"
                      fill="transparent"
                      stroke="#f3f4f6"
                      strokeWidth="10"
                    />
                    {/* Main red segment (largest) */}
                    <circle
                      cx="21"
                      cy="21"
                      r="15.915"
                      fill="transparent"
                      stroke="#ef4444"
                      strokeWidth="10"
                      strokeDasharray="70 30"
                      strokeDashoffset="25"
                      transform="rotate(-90 21 21)"
                    />
                    {/* Secondary light red segment */}
                    <circle
                      cx="21"
                      cy="21"
                      r="15.915"
                      fill="transparent"
                      stroke="#f87171"
                      strokeWidth="10"
                      strokeDasharray="25 75"
                      strokeDashoffset="-45"
                      transform="rotate(-90 21 21)"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-6 gap-6">
            {/* Top Performing Campaigns - Takes 4 columns */}
            <div className="col-span-4 bg-white rounded-lg shadow-sm">
              <div className="p-6 border-b">
                <h3 className="text-lg font-semibold text-gray-900">Top Performing Campaigns</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left py-3 px-6 text-sm font-medium text-gray-500">Campaign Name</th>
                      <th className="text-left py-3 px-6 text-sm font-medium text-gray-500">Engagement Score</th>
                      <th className="text-left py-3 px-6 text-sm font-medium text-gray-500">Registrations</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t hover:bg-gray-50">
                      <td className="py-4 px-6 text-sm text-blue-600 font-medium">Early Bird Email</td>
                      <td className="py-4 px-6 text-sm text-gray-600">92/100</td>
                      <td className="py-4 px-6 text-sm text-gray-600">340</td>
                    </tr>
                    <tr className="border-t hover:bg-gray-50">
                      <td className="py-4 px-6 text-sm text-blue-600 font-medium">Twitter Flash Promo</td>
                      <td className="py-4 px-6 text-sm text-gray-600">88/100</td>
                      <td className="py-4 px-6 text-sm text-gray-600">212</td>
                    </tr>
                    <tr className="border-t hover:bg-gray-50">
                      <td className="py-4 px-6 text-sm text-blue-600 font-medium">LinkedIn Series Tease</td>
                      <td className="py-4 px-6 text-sm text-gray-600">83/100</td>
                      <td className="py-4 px-6 text-sm text-gray-600">298</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Real-Time Notifications - Takes 2 columns, taller and narrower */}
            <div className="col-span-2 bg-white rounded-lg shadow-sm">
              <div className="p-4 border-b">
                <h3 className="text-lg font-semibold text-gray-900">Real-Time Notifications</h3>
              </div>
              <div className="p-4 space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-900 leading-relaxed">
                      <span className="font-medium">120 attendees</span> clicked the{' '}
                      <span className="text-blue-600 font-medium">&quot;Join Liv&quot;</span> button in the past 10 minutes
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-900 leading-relaxed">
                      New registrant from the{' '}
                      <span className="text-purple-600 font-medium">VIP</span> LinkedIn campaign
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-900 leading-relaxed">
                      Survey campaign open rate{' '}
                      <span className="text-blue-600 font-medium">dropped by 8%</span> since last hour
                    </p>
                  </div>
                </div>

                {/* Add some extra content to make it taller */}
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-900 leading-relaxed">
                      Email campaign{' '}
                      <span className="text-green-600 font-medium">delivered successfully</span> to 1,250 recipients
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Upcoming Campaigns - Full width, bigger table */}
          <div className="mt-8 bg-white rounded-lg shadow-sm">
            <div className="p-6 border-b">
              <h3 className="text-lg font-semibold text-gray-900">Upcoming Campaigns</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left py-3 px-6 text-sm font-medium text-gray-500">Campaign Name</th>
                    <th className="text-left py-3 px-6 text-sm font-medium text-gray-500">Channel</th>
                    <th className="text-left py-3 px-6 text-sm font-medium text-gray-500">Audience Segment</th>
                    <th className="text-left py-3 px-6 text-sm font-medium text-gray-500">Status</th>
                    <th className="text-left py-3 px-6 text-sm font-medium text-gray-500">Scheduled Date</th>
                    <th className="text-left py-3 px-6 text-sm font-medium text-gray-500">CTR</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t hover:bg-gray-50">
                    <td className="py-4 px-6 text-sm text-gray-900">Spring Webinar Blast</td>
                    <td className="py-4 px-6 text-sm text-gray-600">Email</td>
                    <td className="py-4 px-6 text-sm text-gray-600">All Registered Users</td>
                    <td className="py-4 px-6">
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        • Scheduled
                      </span>
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-600">May 20, 2025</td>
                    <td className="py-4 px-6 text-sm text-gray-600">---</td>
                  </tr>
                  <tr className="border-t hover:bg-gray-50">
                    <td className="py-4 px-6 text-sm text-gray-900">VIP Invite - NYC Event</td>
                    <td className="py-4 px-6 text-sm text-gray-600">SMS</td>
                    <td className="py-4 px-6 text-sm text-gray-600">VIP Attendees</td>
                    <td className="py-4 px-6">
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        • Sent
                      </span>
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-600">May 22, 2025</td>
                    <td className="py-4 px-6 text-sm text-gray-600">17.3%</td>
                  </tr>
                  <tr className="border-t hover:bg-gray-50">
                    <td className="py-4 px-6 text-sm text-gray-900">LinkedIn Countdown</td>
                    <td className="py-4 px-6 text-sm text-gray-600">LinkedIn</td>
                    <td className="py-4 px-6 text-sm text-gray-600">Industry Professionals</td>
                    <td className="py-4 px-6">
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                        • Active
                      </span>
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-600">May 23, 2025</td>
                    <td className="py-4 px-6 text-sm text-gray-600">4.6%</td>
                  </tr>
                  <tr className="border-t hover:bg-gray-50">
                    <td className="py-4 px-6 text-sm text-gray-900">Feedback Survey</td>
                    <td className="py-4 px-6 text-sm text-gray-600">Email</td>
                    <td className="py-4 px-6 text-sm text-gray-600">Attended Users</td>
                    <td className="py-4 px-6">
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                        • Draft
                      </span>
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-600">May 24, 2025</td>
                    <td className="py-4 px-6 text-sm text-gray-600">---</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withAuth(MarketingManagerDashboard);