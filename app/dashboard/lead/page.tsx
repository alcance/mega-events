'use client';

import React, { useState } from 'react';
import Image from "next/image";

const LeadCaptureCRMDashboard = () => {
  const [selectedDate,] = useState('14 Feb 2025');

  // Sample data
  const leads = [
    {
      id: 1,
      name: 'John Doe',
      company: 'Intel Corp',
      engagementScore: 92,
      lastInteraction: '10 Mins Ago',
      assignedRep: 'Sarah B.',
      status: 'Interested to Interview',
      statusColor: 'bg-green-100 text-green-800'
    },
    {
      id: 2,
      name: 'Jane Smith',
      company: 'TechNova',
      engagementScore: 76,
      lastInteraction: '45 Mins Ago',
      assignedRep: 'Mike R.',
      status: 'Not Synced',
      statusColor: 'bg-red-100 text-red-800'
    },
    {
      id: 3,
      name: 'John Doe',
      company: 'Intel Corp',
      engagementScore: 92,
      lastInteraction: '10 Mins Ago',
      assignedRep: 'Sarah B.',
      status: 'Synced to Hubspot',
      statusColor: 'bg-orange-100 text-orange-800'
    },
    {
      id: 4,
      name: 'Jane Smith',
      company: 'TechNova',
      engagementScore: 76,
      lastInteraction: '45 Mins Ago',
      assignedRep: 'Mike R.',
      status: 'Not Synced',
      statusColor: 'bg-red-100 text-red-800'
    },
    {
      id: 5,
      name: 'John Doe',
      company: 'Intel Corp',
      engagementScore: 92,
      lastInteraction: '10 Mins Ago',
      assignedRep: 'Sarah B.',
      status: 'Synced to Hubspot',
      statusColor: 'bg-green-100 text-green-800'
    }
  ];


  return (
    <div className="flex h-screen bg-gray-50">
<div className="w-64 bg-white shadow-sm border-r flex flex-col">
  <div className="p-6">
    <div className="flex items-center space-x-2">
      <Image
        src="/main-logo.svg"
        alt="Logo"
        width={56}
        height={56}
      />
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
        <span>Campaign Manager</span>
      </a>
      <a href="#" className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        <span>CRM Sync Center</span>
      </a>
      <a href="#" className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
        <span>Analytics</span>
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
            <h1 className="text-xl font-semibold text-gray-900">Dashboard</h1>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>{selectedDate}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-orange-400 rounded-full"></div>
                <span className="font-medium text-sm">John D.</span>
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
            {/* Total Leads Captured */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">Total Leads Captured</div>
                  <div className="text-2xl font-bold text-gray-900">245</div>
                </div>
              </div>
            </div>

            {/* Engaged Attendees */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">Engaged Attendees</div>
                  <div className="text-2xl font-bold text-gray-900">163</div>
                </div>
              </div>
            </div>

            {/* High Intent Leads */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">High Intent Leads</div>
                  <div className="text-2xl font-bold text-gray-900">78</div>
                  <div className="text-xs text-green-600 font-medium">Score {">"} 80%</div>
                </div>
              </div>
            </div>

            {/* Booth Interactions Logged */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">Booth Interactions Logged</div>
                  <div className="text-2xl font-bold text-gray-900">312</div>
                </div>
              </div>
            </div>
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-3 gap-8 mb-8">
            {/* Booth Visits Over Time */}
            <div className="col-span-2 bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Booth Visits Over Time</h3>
              <div className="h-64">
                                  <svg className="w-full h-full" viewBox="0 0 600 200">
                  {/* Grid lines */}
                  <defs>
                    <pattern id="grid" width="50" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 50 0 L 0 0 0 40" fill="none" stroke="#f0f0f0" strokeWidth="1"/>
                    </pattern>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3"/>
                      <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1"/>
                    </linearGradient>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                  
                  {/* Y-axis labels */}
                  <text x="30" y="25" fontSize="12" fill="#666" textAnchor="end">800</text>
                  <text x="30" y="65" fontSize="12" fill="#666" textAnchor="end">600</text>
                  <text x="30" y="105" fontSize="12" fill="#666" textAnchor="end">400</text>
                  <text x="30" y="145" fontSize="12" fill="#666" textAnchor="end">200</text>
                  <text x="30" y="185" fontSize="12" fill="#666" textAnchor="end">0</text>
                  
                  {/* More wavy area chart path */}
                  <path
                    d="M 40 160 
                       C 70 150, 100 145, 130 140
                       C 160 135, 180 130, 210 125
                       C 240 118, 270 105, 300 95
                       C 330 85, 360 80, 390 85
                       C 420 90, 450 100, 480 110
                       C 510 120, 540 125, 560 130
                       L 560 180 L 40 180 Z"
                    fill="url(#gradient)"
                    stroke="#3b82f6"
                    strokeWidth="2"
                  />
                  
                  {/* X-axis labels */}
                  <text x="70" y="195" fontSize="12" fill="#666" textAnchor="middle">08:00</text>
                  <text x="160" y="195" fontSize="12" fill="#666" textAnchor="middle">09:00</text>
                  <text x="250" y="195" fontSize="12" fill="#666" textAnchor="middle">10:00</text>
                  <text x="340" y="195" fontSize="12" fill="#666" textAnchor="middle">11:00</text>
                  <text x="430" y="195" fontSize="12" fill="#666" textAnchor="middle">12:00</text>
                  <text x="520" y="195" fontSize="12" fill="#666" textAnchor="middle">01:00</text>
                </svg>
              </div>
            </div>

            {/* CRM Integration */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">CRM Integration</h3>
              <div className="text-center mb-4">
                <div className="text-sm text-gray-600 mb-2">Connected To</div>
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                    </svg>
                  </div>
                </div>
                <div className="font-semibold text-lg">Salesforce</div>
                <div className="text-sm text-gray-600 mb-2">Last Sync: 10:32 AM</div>
                <div className="text-xs text-green-600 font-medium mb-4">Active</div>
              </div>
              
              <div className="space-y-3">
                <button className="w-full bg-red-500 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-red-600">
                  MANAGE CRM CONNECTIONS
                </button>
                <button className="w-full border border-gray-300 text-gray-700 py-2 px-4 rounded-lg text-sm font-medium hover:bg-gray-50">
                  FORCE SYNC NOW
                </button>
              </div>
            </div>
          </div>

          {/* Second Row Charts */}
          <div className="grid grid-cols-2 gap-8 mb-8">
            {/* Lead Scoring */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Lead Scoring</h3>
              <div className="flex flex-col items-center justify-center h-64">
                <div className="relative mb-6">
                  <svg width="200" height="200" viewBox="0 0 200 200">
                    {/* Background circle */}
                    <circle
                      cx="100"
                      cy="100"
                      r="80"
                      fill="none"
                      stroke="#e5e7eb"
                      strokeWidth="25"
                    />
                    {/* Hot Leads (35%) - Blue */}
                    <circle
                      cx="100"
                      cy="100"
                      r="80"
                      fill="none"
                      stroke="#2563eb"
                      strokeWidth="25"
                      strokeDasharray={`${35 * 5.03} 503`}
                      transform="rotate(-90 100 100)"
                    />
                    {/* Warm Leads (25%) - Medium Blue */}
                    <circle
                      cx="100"
                      cy="100"
                      r="80"
                      fill="none"
                      stroke="#60a5fa"
                      strokeWidth="25"
                      strokeDasharray={`${25 * 5.03} 503`}
                      strokeDashoffset={`-${35 * 5.03}`}
                      transform="rotate(-90 100 100)"
                    />
                    {/* Cold Leads (25%) - Light Blue */}
                    <circle
                      cx="100"
                      cy="100"
                      r="80"
                      fill="none"
                      stroke="#bfdbfe"
                      strokeWidth="25"
                      strokeDasharray={`${25 * 5.03} 503`}
                      strokeDashoffset={`-${60 * 5.03}`}
                      transform="rotate(-90 100 100)"
                    />
                    {/* New Leads (15%) - Very Light Blue */}
                    <circle
                      cx="100"
                      cy="100"
                      r="80"
                      fill="none"
                      stroke="#e0e7ff"
                      strokeWidth="25"
                      strokeDasharray={`${15 * 5.03} 503`}
                      strokeDashoffset={`-${85 * 5.03}`}
                      transform="rotate(-90 100 100)"
                    />
                  </svg>
                </div>
                
                {/* Legend below the circle */}
                <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-blue-600 rounded-full mr-2"></div>
                    <span className="text-sm text-gray-700 font-medium">Hot Leads</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-blue-400 rounded-full mr-2"></div>
                    <span className="text-sm text-gray-700 font-medium">Warm Leads</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-blue-200 rounded-full mr-2"></div>
                    <span className="text-sm text-gray-700 font-medium">Cold Leads</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-indigo-100 rounded-full mr-2"></div>
                    <span className="text-sm text-gray-500 font-medium">New Leads</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Conversion Funnel */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Conversion Funnel</h3>
              <div className="flex items-center justify-center mt-8">
                <div className="relative w-full max-w-2xl">
                  {/* Separated triangle sections with proper colors */}
                  <svg width="600" height="300" viewBox="0 0 600 300" className="w-full">
                    {/* Visited Booth - Top section (darkest blue) */}
                    <polygon
                      points="30,40 400,40 350,85 80,85"
                      fill="#1d4ed8"
                    />
                    <text x="420" y="67" fill="#6b7280" fontSize="16" fontWeight="500">Visited Booth</text>
                    
                    {/* Interacted with Staff - Second section (medium blue) */}
                    <polygon
                      points="80,95 350,95 300,140 130,140"
                      fill="#3b82f6"
                    />
                    <text x="370" y="122" fill="#6b7280" fontSize="16" fontWeight="500">Interacted with Staff</text>
                    
                    {/* Contact Info Captured - Third section (lighter blue) */}
                    <polygon
                      points="130,150 300,150 250,195 180,195"
                      fill="#93c5fd"
                    />
                    <text x="320" y="177" fill="#6b7280" fontSize="16" fontWeight="500">Contact Info Captured</text>
                    
                    {/* Synced to CRM - Bottom triangle (lightest blue) */}
                    <polygon
                      points="180,205 250,205 215,250"
                      fill="#dbeafe"
                    />
                    <text x="270" y="232" fill="#6b7280" fontSize="16" fontWeight="500">Synced to CRM</text>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Leads Table */}
          <div className="bg-white rounded-lg shadow-sm">
            <div className="p-6 border-b flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-900">Leads</h3>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700">
                EXPORT TO CSV
              </button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left py-3 px-6 text-sm font-medium text-gray-500">Lead Name</th>
                    <th className="text-left py-3 px-6 text-sm font-medium text-gray-500">Company</th>
                    <th className="text-left py-3 px-6 text-sm font-medium text-gray-500">Engagement Score</th>
                    <th className="text-left py-3 px-6 text-sm font-medium text-gray-500">Last Interaction</th>
                    <th className="text-left py-3 px-6 text-sm font-medium text-gray-500">Assigned Rep.</th>
                    <th className="text-left py-3 px-6 text-sm font-medium text-gray-500">CRM Status</th>
                  </tr>
                </thead>
                <tbody>
                  {leads.map((lead) => (
                    <tr key={lead.id} className="border-t hover:bg-gray-50">
                      <td className="py-4 px-6">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                          <span className="text-sm text-gray-900 font-medium">{lead.name}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-sm text-gray-600">{lead.company}</td>
                      <td className="py-4 px-6">
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                            <span className="text-xs font-medium text-blue-600">{lead.engagementScore}</span>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-sm text-gray-600">{lead.lastInteraction}</td>
                      <td className="py-4 px-6 text-sm text-gray-600">{lead.assignedRep}</td>
                      <td className="py-4 px-6">
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${lead.statusColor}`}>
                          {lead.status}
                        </span>
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

export default LeadCaptureCRMDashboard;