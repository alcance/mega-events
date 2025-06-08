'use client';

import React, { useState } from 'react';

const PollingDashboard = () => {
  const [selectedSession, setSelectedSession] = useState('Select Session');

  // Sample data for the polls
  const pollData = [
    { question: "How familiar are you with AI?", responses: 72, color: "#4A90E2" },
    { question: "What's your biggest challenge?", responses: 68, color: "#8E44AD" },
    { question: "Future of Tech: Optimistic?", responses: 75, color: "#E74C3C" },
    { question: "What's your biggest challenge?", responses: 48, color: "#E67E22" },
    { question: "Future of Tech: Optimistic?", responses: 71, color: "#3498DB" }
  ];

  const maxResponses = Math.max(...pollData.map(poll => poll.responses));

  return (
    <div className="flex h-screen bg-gray-50">
    {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-white border-b px-6 py-4">
          <div className="flex justify-between items-center">
            <div></div>
            <div className="flex items-center space-x-4">
              <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 border">
                START Q/A
              </button>
              <button className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-600">
                CREATE NEW POLL
              </button>
              <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5-5-5h5v-5a7.5 7.5 0 00-15 0v5h5l-5 5-5-5h5V7a9.5 9.5 0 0119 0v10z" />
                </svg>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-orange-400 rounded-full"></div>
                <span className="font-medium">John D.</span>
                <span className="text-gray-400">▼</span>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="flex-1 p-6 overflow-auto">
          {/* Header Section */}
          <div className="mb-8">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 mb-2">Dashboard</h1>
                <p className="text-gray-600">Manage Real-Time Polls, Audience Q&A, And Session Feedback.</p>
              </div>
              <div className="relative">
                <select 
                  value={selectedSession}
                  onChange={(e) => setSelectedSession(e.target.value)}
                  className="appearance-none bg-white border border-gray-300 rounded-md px-4 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option>Select Session</option>
                  <option>Session 1</option>
                  <option>Session 2</option>
                </select>
                <svg className="w-4 h-4 absolute right-2 top-3 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">03</div>
                  <div className="text-sm text-gray-600">Live Polls Created</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">72</div>
                  <div className="text-sm text-gray-600">Total Q&A Submissions</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">12</div>
                  <div className="text-sm text-gray-600">Avg. Question Upvotes</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">65%</div>
                  <div className="text-sm text-gray-600">
                    Feedback Submission Rate
                    <div className="text-xs text-gray-500">of attendees</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-3 gap-8">
            {/* Left Chart - No. Of Responses Per Poll */}
            <div className="col-span-2 bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">No. Of Responses Per Poll</h3>
              <div className="space-y-4">
                {pollData.map((poll, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="w-64 text-right text-sm text-gray-600 pr-4">
                      {poll.question}
                    </div>
                    <div className="flex-1 relative">
                      <div className="bg-gray-200 rounded-full h-12">
                        <div
                          className="h-12 rounded-full flex items-center justify-end pr-4"
                          style={{
                            backgroundColor: poll.color,
                            width: `${(poll.responses / maxResponses) * 100}%`,
                            minWidth: '80px'
                          }}
                        >
                          <span className="text-white text-base font-medium">{poll.responses}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* X-axis */}
              <div className="flex justify-between text-xs text-gray-500 mt-4 ml-64">
                <span>00</span>
                <span>20</span>
                <span>40</span>
                <span>60</span>
                <span>80</span>
                <span>100</span>
              </div>
            </div>

            {/* Right Section - Feedback Summary */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Feedback Summary</h3>
              
              {/* Session Rating */}
              <div className="mb-8">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Avg. Session Rating</div>
                    <div className="text-xl font-bold text-gray-900">4.5 <span className="text-sm font-normal text-gray-500">/ 5</span></div>
                  </div>
                </div>
              </div>

              {/* Feedback Forms */}
              <div className="mb-8">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Feedback Forms Submitted</div>
                    <div className="text-xl font-bold text-gray-900">189</div>
                  </div>
                </div>
              </div>

              {/* Most Requested Improvements */}
              <div className="bg-gradient-to-r from-red-400 to-purple-600 p-4 rounded-lg text-white">
                <div className="text-sm mb-2">Most Requested Improvements</div>
                <div className="space-y-1">
                  <div className="font-medium">&quot;More real examples&quot;</div>
                  <div className="font-medium">&quot;Shorter Q&A&quot;</div>
                </div>
              </div>
            </div>
          </div>

          {/* Polls Overview Section */}
          <div className="mt-8 bg-white rounded-lg shadow-sm">
            <div className="p-6 border-b">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900">Polls Overview</h3>
                <div className="relative">
                  <select className="appearance-none bg-white border border-gray-300 rounded-md px-4 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>All</option>
                  </select>
                  <svg className="w-4 h-4 absolute right-2 top-3 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left py-3 px-6 text-sm font-medium text-gray-700">Poll Question</th>
                    <th className="text-left py-3 px-6 text-sm font-medium text-gray-700">Type</th>
                    <th className="text-left py-3 px-6 text-sm font-medium text-gray-700">Status</th>
                    <th className="text-left py-3 px-6 text-sm font-medium text-gray-700">Responses</th>
                    <th className="text-left py-3 px-6 text-sm font-medium text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t hover:bg-gray-50">
                    <td className="py-4 px-6 text-sm text-gray-900">How familiar are you with AI?</td>
                    <td className="py-4 px-6 text-sm text-gray-600">Multiple Choice</td>
                    <td className="py-4 px-6">
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        • Live
                      </span>
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-900 font-medium">72</td>
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-2">
                        <button className="p-1 text-orange-500 hover:bg-orange-50 rounded">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                          </svg>
                        </button>
                        <button className="px-3 py-1 bg-purple-100 text-purple-700 rounded text-xs font-medium">
                          View
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-t hover:bg-gray-50">
                    <td className="py-4 px-6 text-sm text-gray-900">What&lsquo;s your biggest challenge?</td>
                    <td className="py-4 px-6 text-sm text-gray-600">Word Cloud</td>
                    <td className="py-4 px-6">
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                        Closed
                      </span>
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-900 font-medium">32</td>
                    <td className="py-4 px-6">
                      <button className="px-3 py-1 bg-blue-500 text-white rounded text-xs font-medium">
                        View Results
                      </button>
                    </td>
                  </tr>
                  <tr className="border-t hover:bg-gray-50">
                    <td className="py-4 px-6 text-sm text-gray-900">Future of Tech: Optimistic?</td>
                    <td className="py-4 px-6 text-sm text-gray-600">Yes/No</td>
                    <td className="py-4 px-6">
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        • Live
                      </span>
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-900 font-medium">72</td>
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-2">
                        <button className="p-1 text-orange-500 hover:bg-orange-50 rounded">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                          </svg>
                        </button>
                        <button className="px-3 py-1 bg-purple-100 text-purple-700 rounded text-xs font-medium">
                          View
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-t hover:bg-gray-50">
                    <td className="py-4 px-6 text-sm text-gray-900">What&lsquo;s your biggest challenge?</td>
                    <td className="py-4 px-6 text-sm text-gray-600">Word Cloud</td>
                    <td className="py-4 px-6">
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                        Closed
                      </span>
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-900 font-medium">32</td>
                    <td className="py-4 px-6">
                      <button className="px-3 py-1 bg-blue-500 text-white rounded text-xs font-medium">
                        View Results
                      </button>
                    </td>
                  </tr>
                  <tr className="border-t hover:bg-gray-50">
                    <td className="py-4 px-6 text-sm text-gray-900">Future of Tech: Optimistic?</td>
                    <td className="py-4 px-6 text-sm text-gray-600">Yes/No</td>
                    <td className="py-4 px-6">
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        • Live
                      </span>
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-900 font-medium">72</td>
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-2">
                        <button className="p-1 text-orange-500 hover:bg-orange-50 rounded">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                          </svg>
                        </button>
                        <button className="px-3 py-1 bg-purple-100 text-purple-700 rounded text-xs font-medium">
                          View
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-t hover:bg-gray-50">
                    <td className="py-4 px-6 text-sm text-gray-900">What&lsquo;s your biggest challenge?</td>
                    <td className="py-4 px-6 text-sm text-gray-600">Word Cloud</td>
                    <td className="py-4 px-6">
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                        Closed
                      </span>
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-900 font-medium">45</td>
                    <td className="py-4 px-6">
                      <button className="px-3 py-1 bg-blue-500 text-white rounded text-xs font-medium">
                        View Results
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Q&A Overview Section */}
          <div className="mt-8 bg-white rounded-lg shadow-sm">
            <div className="p-6 border-b">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900">Q&A Overview</h3>
                <div className="relative">
                  <select className="appearance-none bg-white border border-gray-300 rounded-md px-4 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>All</option>
                  </select>
                  <svg className="w-4 h-4 absolute right-2 top-3 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left py-3 px-6 text-sm font-medium text-gray-700">Question</th>
                    <th className="text-left py-3 px-6 text-sm font-medium text-gray-700">Upvotes</th>
                    <th className="text-left py-3 px-6 text-sm font-medium text-gray-700">Status</th>
                    <th className="text-left py-3 px-6 text-sm font-medium text-gray-700">Answered By</th>
                    <th className="text-left py-3 px-6 text-sm font-medium text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t hover:bg-gray-50">
                    <td className="py-4 px-6 text-sm text-gray-900">What does Gen AI mean for daily jobs?</td>
                    <td className="py-4 px-6 text-sm text-gray-900 font-medium">27</td>
                    <td className="py-4 px-6">
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Answered
                      </span>
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-900">Dr. Tran</td>
                    <td className="py-4 px-6">
                      <button className="px-3 py-1 bg-purple-100 text-purple-700 rounded text-xs font-medium">
                        View
                      </button>
                    </td>
                  </tr>
                  <tr className="border-t hover:bg-gray-50">
                    <td className="py-4 px-6 text-sm text-gray-900">Are AI tools being used in marketing already?</td>
                    <td className="py-4 px-6 text-sm text-gray-900 font-medium">62</td>
                    <td className="py-4 px-6">
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                        Pending
                      </span>
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-500">----</td>
                    <td className="py-4 px-6">
                      <button className="px-3 py-1 bg-blue-500 text-white rounded text-xs font-medium">
                        Mark As Answered
                      </button>
                    </td>
                  </tr>
                  <tr className="border-t hover:bg-gray-50">
                    <td className="py-4 px-6 text-sm text-gray-900">How to prevent bias in AI models?</td>
                    <td className="py-4 px-6 text-sm text-gray-900 font-medium">32</td>
                    <td className="py-4 px-6">
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Answered
                      </span>
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-900">Moderator</td>
                    <td className="py-4 px-6">
                      <button className="px-3 py-1 bg-purple-100 text-purple-700 rounded text-xs font-medium">
                        View
                      </button>
                    </td>
                  </tr>
                  <tr className="border-t hover:bg-gray-50">
                    <td className="py-4 px-6 text-sm text-gray-900">Are AI tools being used in marketing already?</td>
                    <td className="py-4 px-6 text-sm text-gray-900 font-medium">62</td>
                    <td className="py-4 px-6">
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                        Pending
                      </span>
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-500">----</td>
                    <td className="py-4 px-6">
                      <button className="px-3 py-1 bg-blue-500 text-white rounded text-xs font-medium">
                        Mark As Answered
                      </button>
                    </td>
                  </tr>
                  <tr className="border-t hover:bg-gray-50">
                    <td className="py-4 px-6 text-sm text-gray-900">How to prevent bias in AI models?</td>
                    <td className="py-4 px-6 text-sm text-gray-900 font-medium">32</td>
                    <td className="py-4 px-6">
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Answered
                      </span>
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-900">Moderator</td>
                    <td className="py-4 px-6">
                      <button className="px-3 py-1 bg-purple-100 text-purple-700 rounded text-xs font-medium">
                        View
                      </button>
                    </td>
                  </tr>
                  <tr className="border-t hover:bg-gray-50">
                    <td className="py-4 px-6 text-sm text-gray-900">Are AI tools being used in marketing already?</td>
                    <td className="py-4 px-6 text-sm text-gray-900 font-medium">62</td>
                    <td className="py-4 px-6">
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                        Pending
                      </span>
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-500">----</td>
                    <td className="py-4 px-6">
                      <button className="px-3 py-1 bg-blue-500 text-white rounded text-xs font-medium">
                        Mark As Answered
                      </button>
                    </td>
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

export default PollingDashboard;