'use client';

import React from 'react';


const SecurityManagerDashboard = () => {
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>User Roles</span>
            </a>
            <a href="#" className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span>SSO Integrations</span>
            </a>
            <a href="#" className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Access Logs</span>
            </a>
            <a href="#" className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <span>Security Alerts</span>
            </a>
            <a href="#" className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
              </svg>
              <span>Admin Tools</span>
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
            <div>
              <h1 className="text-xl font-semibold text-gray-900">Security & Role-Based Access Control</h1>
              <p className="text-sm text-gray-600 mt-1">
                Manage user permissions, security settings, and access controls
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-600 flex items-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                <span>ADD NEW USER</span>
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
          {/* Header with Date */}
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Dashboard</h2>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>14 Feb 2025</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-8">
            {/* Left Column - Access Control Logs */}
            <div className="col-span-2">
              <div className="bg-white rounded-lg shadow-sm">
                <div className="p-6 border-b">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-gray-900">Access Control Logs</h3>
                    <div className="flex space-x-3">
                      <div className="relative">
                        <select className="appearance-none bg-white border border-gray-300 rounded-md px-4 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                          <option>All Logs</option>
                          <option>Failed Attempts</option>
                          <option>Successful Logins</option>
                        </select>
                        <svg className="w-4 h-4 absolute right-2 top-3 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                      <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-md text-sm hover:bg-gray-50">
                        <span>Export Logs</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="text-left py-3 px-6 text-sm font-medium text-gray-500">Timestamp</th>
                        <th className="text-left py-3 px-6 text-sm font-medium text-gray-500">User</th>
                        <th className="text-left py-3 px-6 text-sm font-medium text-gray-500">Action</th>
                        <th className="text-left py-3 px-6 text-sm font-medium text-gray-500">IP Address</th>
                        <th className="text-left py-3 px-6 text-sm font-medium text-gray-500">Result</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t hover:bg-gray-50">
                        <td className="py-4 px-6 text-sm text-gray-600">
                          <div>May 12, 2025</div>
                          <div className="text-xs text-gray-500">10:12 AM</div>
                        </td>
                        <td className="py-4 px-6 text-sm text-gray-900">Sarah Blake</td>
                        <td className="py-4 px-6 text-sm text-gray-600">Speaker → Admin</td>
                        <td className="py-4 px-6 text-sm text-gray-600">192.168.3.15</td>
                        <td className="py-4 px-6">
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            • Success
                          </span>
                        </td>
                      </tr>
                      <tr className="border-t hover:bg-gray-50">
                        <td className="py-4 px-6 text-sm text-gray-600">
                          <div>May 12, 2025</div>
                          <div className="text-xs text-gray-500">10:12 AM</div>
                        </td>
                        <td className="py-4 px-6 text-sm text-gray-900">James Benn</td>
                        <td className="py-4 px-6 text-sm text-gray-600">Logged In Via SSO</td>
                        <td className="py-4 px-6 text-sm text-gray-600">192.168.3.15</td>
                        <td className="py-4 px-6">
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            • Success
                          </span>
                        </td>
                      </tr>
                      <tr className="border-t hover:bg-gray-50">
                        <td className="py-4 px-6 text-sm text-gray-600">
                          <div>May 12, 2025</div>
                          <div className="text-xs text-gray-500">10:12 AM</div>
                        </td>
                        <td className="py-4 px-6 text-sm text-gray-900">Sarah Blake</td>
                        <td className="py-4 px-6 text-sm text-gray-600">Failed Login Attempt</td>
                        <td className="py-4 px-6 text-sm text-gray-600">192.168.3.15</td>
                        <td className="py-4 px-6">
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                            • Failed
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Right Column - Security Alerts */}
            <div className="col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Security Alerts & Insights</h3>

                <div className="space-y-4">
                  {/* Alert 1 */}
                  <div className="flex items-start space-x-3 p-4 bg-red-50 rounded-lg">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-900 font-medium">3 failed login attempts from unrecognized IPs in the last 24 hrs</p>
                    </div>
                  </div>

                  {/* Alert 2 */}
                  <div className="flex items-start space-x-3 p-4 bg-orange-50 rounded-lg">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-900 font-medium">Speaker account &quot;Maria Lopez&quot; still inactive after 5 days</p>
                    </div>
                  </div>

                  {/* Alert 3 */}
                  <div className="flex items-start space-x-3 p-4 bg-purple-50 rounded-lg">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-900 font-medium">All admin accounts are MFA-compliant</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Authentication & Login Security Section */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Authentication & Login Security</h3>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="grid grid-cols-12 gap-6">
                {/* Multi-Factor Authentication - Left side */}
                <div className="col-span-4">
                  <h4 className="text-lg font-semibold text-gray-900 mb-6 text-center">Multi-Factor Authentication</h4>

                  <div className="flex items-center justify-center mb-6">
                    <div className="relative">
                      <svg width="160" height="160" viewBox="0 0 160 160" className="transform -rotate-90">
                        <circle
                          cx="80"
                          cy="80"
                          r="60"
                          fill="none"
                          stroke="#bfdbfe"
                          strokeWidth="18"
                        />
                        <circle
                          cx="80"
                          cy="80"
                          r="60"
                          fill="none"
                          stroke="#2563eb"
                          strokeWidth="18"
                          strokeDasharray={`${78 * 3.77} 377`}
                          strokeLinecap="round"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-3xl font-bold text-gray-900">78%</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                      <span className="text-sm text-gray-700">Enabled For Users</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-blue-200 rounded-full"></div>
                      <span className="text-sm text-gray-700">Failed MFA Attempts</span>
                    </div>
                    <div className="text-center mt-4">
                      <p className="text-sm text-gray-700">Pending MFA Setup</p>
                    </div>
                  </div>
                </div>

                {/* SSO Integration - Middle */}
                <div className="col-span-4">
                  <h4 className="text-lg font-semibold text-gray-900 mb-6 text-center">SSO Integration</h4>

                  <div className="grid grid-cols-2 gap-6">
                    {/* Google SSO */}
                    <div className="p-12 bg-gray-100 rounded-lg text-center h-55">
                      <div className="w-20 h-20 bg-white rounded-lg shadow-sm flex items-center justify-center mx-auto mb-6">
                        <svg className="w-12 h-12" viewBox="0 0 24 24">
                          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                        </svg>
                      </div>
                      <p className="text-base font-medium text-gray-900 leading-tight">Linked With Google<br />Workspace</p>
                    </div>

                    {/* LinkedIn SSO */}
                    <div className="p-12 bg-gray-100 rounded-lg text-center h-55">
                      <div className="w-20 h-20 bg-white rounded-lg shadow-sm flex items-center justify-center mx-auto mb-6">
                        <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-lg">in</span>
                        </div>
                      </div>
                      <p className="text-base font-medium text-gray-900 leading-tight">LinkedIn SSO<br />Enabled For<br />Exhibitors</p>
                    </div>
                  </div>
                </div>


                {/* Warning Box - Right side */}
                <div className="col-span-4">
                  <div className="p-10 bg-white-100 rounded-lg h-full flex flex-col justify-left">
                    <div className="flex justify-center mb-4">
                      <div className="w-15 h-15 bg-red-600 rounded-full flex items-center justify-center">
                        <svg className="w-10 h-10 text-red" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <p className="text-sm text-gray-900 font-medium text-center mb-4 leading-relaxed">
                      Set a policy deadline for mandatory MFA by May 20, 2025
                    </p>
                    <button className="w-full bg-red-500 text-white py-4 px-6 rounded-lg text-sm font-medium hover:bg-red-600 transition-colors">
                      CONFIGURE AUTHENTICATION SETTINGS
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* User Role Management Table */}
          <div className="mt-8">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-gray-900">User Role Management</h3>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700">
                Add New User
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left py-3 px-6 text-sm font-medium text-gray-500">User Name</th>
                      <th className="text-left py-3 px-6 text-sm font-medium text-gray-500">Email</th>
                      <th className="text-left py-3 px-6 text-sm font-medium text-gray-500">Assigned Role</th>
                      <th className="text-left py-3 px-6 text-sm font-medium text-gray-500">Status</th>
                      <th className="text-left py-3 px-6 text-sm font-medium text-gray-500">Last Login</th>
                      <th className="text-left py-3 px-6 text-sm font-medium text-gray-500">MFA Enabled</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="py-4 px-6 text-sm text-gray-900">Sarah Blake</td>
                      <td className="py-4 px-6 text-sm text-gray-600">sarah@wekalaeventsummit.com</td>
                      <td className="py-4 px-6 text-sm text-gray-600">Admin</td>
                      <td className="py-4 px-6">
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          ● Active
                        </span>
                      </td>
                      <td className="py-4 px-6 text-sm text-gray-600">May 12, 2025 10:12 AM</td>
                      <td className="py-4 px-6">
                        <div className="w-5 h-5 bg-green-500 rounded-full"></div>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="py-4 px-6 text-sm text-gray-900">James Benn</td>
                      <td className="py-4 px-6 text-sm text-gray-600">james@wekalaeventsummit.com</td>
                      <td className="py-4 px-6 text-sm text-gray-600">Exhibitor</td>
                      <td className="py-4 px-6">
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                          ● Pending
                        </span>
                      </td>
                      <td className="py-4 px-6 text-sm text-gray-600">May 12, 2025 10:12 AM</td>
                      <td className="py-4 px-6">
                        <div className="w-5 h-5 bg-red-500 rounded-full"></div>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="py-4 px-6 text-sm text-gray-900">Maria Lopez</td>
                      <td className="py-4 px-6 text-sm text-gray-600">maria@wekalaeventsummit.com</td>
                      <td className="py-4 px-6 text-sm text-gray-600">Speaker</td>
                      <td className="py-4 px-6">
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          ● Active
                        </span>
                      </td>
                      <td className="py-4 px-6 text-sm text-gray-600">May 12, 2025 10:12 AM</td>
                      <td className="py-4 px-6">
                        <div className="w-5 h-5 bg-green-500 rounded-full"></div>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="py-4 px-6 text-sm text-gray-900">John Doe</td>
                      <td className="py-4 px-6 text-sm text-gray-600">john@wekalaeventsummit.com</td>
                      <td className="py-4 px-6 text-sm text-gray-600">Attendee</td>
                      <td className="py-4 px-6">
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                          ● Pending
                        </span>
                      </td>
                      <td className="py-4 px-6 text-sm text-gray-600">May 12, 2025 10:12 AM</td>
                      <td className="py-4 px-6">
                        <div className="w-5 h-5 bg-red-500 rounded-full"></div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Role Permissions Matrix */}
          <div className="mt-8 mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Role Permissions Matrix</h3>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left py-3 px-6 text-sm font-medium text-gray-500">Role</th>
                      <th className="text-center py-3 px-6 text-sm font-medium text-gray-500">View Sessions</th>
                      <th className="text-center py-3 px-6 text-sm font-medium text-gray-500">Edit Booths</th>
                      <th className="text-center py-3 px-6 text-sm font-medium text-gray-500">Submit Presentations</th>
                      <th className="text-center py-3 px-6 text-sm font-medium text-gray-500">Manage Users</th>
                      <th className="text-center py-3 px-6 text-sm font-medium text-gray-500">Access Logs</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="py-4 px-6 text-sm font-medium text-gray-900">Admin</td>
                      <td className="py-4 px-6 text-center">
                        <div className="w-5 h-5 bg-green-500 rounded-full mx-auto"></div>
                      </td>
                      <td className="py-4 px-6 text-center">
                        <div className="w-5 h-5 bg-green-500 rounded-full mx-auto"></div>
                      </td>
                      <td className="py-4 px-6 text-center">
                        <div className="w-5 h-5 bg-green-500 rounded-full mx-auto"></div>
                      </td>
                      <td className="py-4 px-6 text-center">
                        <div className="w-5 h-5 bg-green-500 rounded-full mx-auto"></div>
                      </td>
                      <td className="py-4 px-6 text-center">
                        <div className="w-5 h-5 bg-green-500 rounded-full mx-auto"></div>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="py-4 px-6 text-sm font-medium text-gray-900">Exhibitor</td>
                      <td className="py-4 px-6 text-center">
                        <div className="w-5 h-5 bg-red-500 rounded-full mx-auto"></div>
                      </td>
                      <td className="py-4 px-6 text-center">
                        <div className="w-5 h-5 bg-red-500 rounded-full mx-auto"></div>
                      </td>
                      <td className="py-4 px-6 text-center">
                        <div className="w-5 h-5 bg-red-500 rounded-full mx-auto"></div>
                      </td>
                      <td className="py-4 px-6 text-center">
                        <div className="w-5 h-5 bg-red-500 rounded-full mx-auto"></div>
                      </td>
                      <td className="py-4 px-6 text-center">
                        <div className="w-5 h-5 bg-red-500 rounded-full mx-auto"></div>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="py-4 px-6 text-sm font-medium text-gray-900">Speaker</td>
                      <td className="py-4 px-6 text-center">
                        <div className="w-5 h-5 bg-green-500 rounded-full mx-auto"></div>
                      </td>
                      <td className="py-4 px-6 text-center">
                        <div className="w-5 h-5 bg-green-500 rounded-full mx-auto"></div>
                      </td>
                      <td className="py-4 px-6 text-center">
                        <div className="w-5 h-5 bg-green-500 rounded-full mx-auto"></div>
                      </td>
                      <td className="py-4 px-6 text-center">
                        <div className="w-5 h-5 bg-green-500 rounded-full mx-auto"></div>
                      </td>
                      <td className="py-4 px-6 text-center">
                        <div className="w-5 h-5 bg-green-500 rounded-full mx-auto"></div>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="py-4 px-6 text-sm font-medium text-gray-900">Attendee</td>
                      <td className="py-4 px-6 text-center">
                        <div className="w-5 h-5 bg-red-500 rounded-full mx-auto"></div>
                      </td>
                      <td className="py-4 px-6 text-center">
                        <div className="w-5 h-5 bg-red-500 rounded-full mx-auto"></div>
                      </td>
                      <td className="py-4 px-6 text-center">
                        <div className="w-5 h-5 bg-red-500 rounded-full mx-auto"></div>
                      </td>
                      <td className="py-4 px-6 text-center">
                        <div className="w-5 h-5 bg-red-500 rounded-full mx-auto"></div>
                      </td>
                      <td className="py-4 px-6 text-center">
                        <div className="w-5 h-5 bg-red-500 rounded-full mx-auto"></div>
                      </td>
                    </tr>
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

export default SecurityManagerDashboard;