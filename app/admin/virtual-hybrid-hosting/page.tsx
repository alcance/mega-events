'use client';

import { withAuth } from '@/lib/protected-route';

const VirtualHybridDashboard = () => {
  const exhibitorData = [
    {
      booth: 'Tech Zone',
      type: 'Virtual',
      leadsCollected: 35,
      attendees: 210,
      action: 'Visit Booth'
    },
    {
      booth: 'Fin Start',
      type: 'Physical',
      leadsCollected: 12,
      attendees: 48,
      action: 'Visit Booth'
    },
    {
      booth: 'Tech Zone',
      type: 'Virtual',
      leadsCollected: 35,
      attendees: 210,
      action: 'Visit Booth'
    },
    {
      booth: 'Fin Start',
      type: 'Physical',
      leadsCollected: 12,
      attendees: 48,
      action: 'Visit Booth'
    }
  ];

  return (
    <div className="flex h-screen bg-gray-50">
            {/* Sidebar */}
            <div className="w-64 bg-white shadow-sm border-r">
                <div className="p-6">
                    <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                            M
                        </div>
                        <span className="text-xl font-bold text-gray-900">WEKALA</span>
                    </div>
                </div>

                <nav className="mt-6">
                    <div className="px-4 space-y-2">
                        <a href="/dashboard" className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                            <span className="font-medium">Speaker & Agenda</span>
                        </a>
                        <a href="./attendee-checkin" className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            <span>Attendees</span>
                        </a>
                        <a href="./virtual-hybrid-hosting" className="flex items-center space-x-3 px-4 py-3 bg-blue-50 text-blue-600 rounded-lg">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span>My Sessions</span>
                        </a>
                        <a href="/lead" className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                            </svg>
                            <span>CRM Sync Center</span>
                        </a>
                        <a href="/polling-manager" className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                            <span>Q/A Overview</span>
                        </a>
                        <a href="/marketing-manager" className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                            </svg>
                            <span>Marketing Manager</span>
                        </a>

                        <a href="/security-manager" className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                            <span>Security Manager</span>
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

                <div className="absolute bottom-6 left-4 right-4">
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
            <div>
              <h1 className="text-xl font-semibold text-gray-900">Virtual & Hybrid Event Hosting</h1>
              <p className="text-sm text-gray-600 mt-1">
                Event: TechExpo 2025 | Location: Berlin | Date: May 15, 2025
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>14 Feb 2025</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-orange-400 rounded-full"></div>
                <span className="font-medium text-sm">John D.</span>
                <span className="text-xs text-gray-500">Admin</span>
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="flex-1 p-6 overflow-auto">
          {/* Top Row: Video + Right Sidebar */}
          <div className="flex gap-6 mb-6">
            {/* Video Player - 60% width */}
            <div className="w-3/5">
              <div className="relative bg-gradient-to-br from-blue-900 via-slate-800 to-blue-900 rounded-lg overflow-hidden" style={{height: '520px'}}>
                {/* Live indicator */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-medium flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-1 animate-pulse"></div>
                    1:03:34
                  </span>
                </div>
                
                {/* Speaker figure */}
                <div className="w-full h-full flex items-center justify-center relative">
                  <div className="relative">
                    {/* Speaker silhouette */}
                    <div className="flex flex-col items-center">
                      {/* Head */}
                      <div className="w-16 h-16 bg-white rounded-full mb-4"></div>
                      {/* Body with arms up */}
                      <div className="relative">
                        <div className="w-20 h-28 bg-white rounded-t-full"></div>
                        {/* Arms extended */}
                        <div className="absolute -top-2 -left-8 w-12 h-4 bg-white rounded-full transform rotate-45"></div>
                        <div className="absolute -top-2 -right-8 w-12 h-4 bg-white rounded-full transform -rotate-45"></div>
                      </div>
                    </div>
                    {/* Audience dots */}
                    <div className="absolute top-40 left-1/2 transform -translate-x-1/2 flex space-x-2">
                      {[...Array(8)].map((_, i) => (
                        <div key={i} className="w-2 h-2 bg-white bg-opacity-50 rounded-full"></div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Video controls */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/50 to-transparent p-4">
                  {/* Progress bar */}
                  <div className="w-full h-1 bg-white bg-opacity-30 rounded-full mb-4">
                    <div className="h-full w-3/5 bg-blue-500 rounded-full"></div>
                  </div>
                  
                  <div className="flex items-center justify-between text-white">
                    <div className="flex items-center space-x-4">
                      <button className="hover:bg-white hover:bg-opacity-20 p-2 rounded">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </button>
                      <button className="hover:bg-white hover:bg-opacity-20 p-2 rounded">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 14.142m-5.657-2.121a2 2 0 010-2.828" />
                        </svg>
                      </button>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="hover:bg-white hover:bg-opacity-20 p-2 rounded">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Sidebar - 40% width */}
            <div className="w-2/5 space-y-6">
              {/* Q&A Section */}
              <div className="bg-white rounded-lg shadow-sm p-8">
                <div className="text-right mb-4">
                  <button className="bg-red-100 text-red-600 px-4 py-2 rounded text-sm font-medium hover:bg-red-200">
                    Open Chats
                  </button>
                </div>
                <div className="text-center">
                  <h3 className="text-lg text-gray-600 mb-2">Questions In Q&A</h3>
                  <div className="text-4xl font-bold text-gray-900 mb-4">23</div>
                </div>
              </div>

              {/* Engagement Score */}
              <div className="bg-white rounded-lg shadow-sm p-8">
                <h3 className="text-lg text-gray-600 mb-6">Engagement Score</h3>
                <div className="flex justify-center">
                  <div className="relative">
                    <svg width="160" height="160" viewBox="0 0 160 160" className="transform -rotate-90">
                      <circle
                        cx="80"
                        cy="80"
                        r="70"
                        fill="none"
                        stroke="#e5e7eb"
                        strokeWidth="12"
                      />
                      <circle
                        cx="80"
                        cy="80"
                        r="70"
                        fill="none"
                        stroke="#3b82f6"
                        strokeWidth="12"
                        strokeDasharray={`${87 * 4.4} 440`}
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-3xl font-bold text-gray-900">87%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Full Width Networking Lounge */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Networking Lounge</h2>
            
            <div className="grid grid-cols-4 gap-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div className="text-sm text-gray-600 mb-2">Active Rooms</div>
                <div className="text-3xl font-bold text-gray-900">24</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div className="text-sm text-gray-600 mb-2">Participants</div>
                <div className="text-3xl font-bold text-gray-900">400</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div className="text-sm text-gray-600 mb-2">Total Booths</div>
                <div className="text-3xl font-bold text-gray-900">20</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div className="text-sm text-gray-600 mb-2">Leads Collected</div>
                <div className="text-3xl font-bold text-gray-900">147</div>
              </div>
            </div>

            {/* Exhibitors Booth Table */}
            <div className="mt-8">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Exhibitors Booth</h3>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-600">
                  DOWNLOAD LEAD REPORT
                </button>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left py-3 px-6 text-sm font-medium text-gray-500">Booth</th>
                      <th className="text-left py-3 px-6 text-sm font-medium text-gray-500">Type</th>
                      <th className="text-left py-3 px-6 text-sm font-medium text-gray-500">Leads Collected</th>
                      <th className="text-left py-3 px-6 text-sm font-medium text-gray-500">Attendees</th>
                      <th className="text-left py-3 px-6 text-sm font-medium text-gray-500">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {exhibitorData.map((item, index) => (
                      <tr key={index} className="border-t hover:bg-gray-50">
                        <td className="py-4 px-6 text-sm text-gray-900">{item.booth}</td>
                        <td className="py-4 px-6 text-sm text-gray-600">{item.type}</td>
                        <td className="py-4 px-6 text-sm text-gray-600">{item.leadsCollected}</td>
                        <td className="py-4 px-6 text-sm text-gray-600">{item.attendees}</td>
                        <td className="py-4 px-6">
                          <button className="bg-orange-100 text-orange-800 px-3 py-1 rounded text-xs font-medium hover:bg-orange-200">
                            {item.action}
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
    </div>
  );
};

export default withAuth(VirtualHybridDashboard);