'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const Dashboard = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [sessionForm, setSessionForm] = useState({
    title: '',
    track: 'Healthcare',
    date: '',
    time: '',
    roomNo: '',
    description: '',
    files: null
  });

  // Sample data
  const materials = [
    {
      id: 1,
      name: 'NeuroAI Ethics Slides.pdf',
      type: 'Presentation',
      uploadedOn: 'May 2, 2025',
      icon: 'pdf'
    },
    {
      id: 2,
      name: 'NeuroAI_QuickFacts.pdf',
      type: 'Handout',
      uploadedOn: 'May 2, 2025',
      icon: 'pdf'
    },
    {
      id: 3,
      name: 'BrainInterface_Demo.mp4',
      type: 'Presentation',
      uploadedOn: 'May 2, 2025',
      icon: 'video'
    },
    {
      id: 4,
      name: 'NeuroAI Ethics Slides.pdf',
      type: 'Presentation',
      uploadedOn: 'May 2, 2025',
      icon: 'pdf'
    }
  ];

  const sessions = [
    {
      id: 1,
      title: 'Ethics of Brain-Machine Interfaces',
      date: 'May 10, 2025',
      time: '2:00-3:00 PM',
      room: 'AB - 03',
      track: 'AI',
      status: 'Confirmed'
    },
    {
      id: 2,
      title: 'Neural Interfaces In Practice',
      date: 'May 11, 2025',
      time: '10:00-11:00 AM',
      room: 'KL - 03',
      track: 'HEALTHCARE',
      status: 'Pending'
    },
    {
      id: 3,
      title: 'Ethics of Brain-Machine Interfaces',
      date: 'May 10, 2025',
      time: '2:00-3:00 PM',
      room: 'AB - 03',
      track: 'AI',
      status: 'Confirmed'
    },
    {
      id: 4,
      title: 'Neural Interfaces In Practice',
      date: 'May 11, 2025',
      time: '10:00-11:00 AM',
      room: 'KL - 03',
      track: 'HEALTHCARE',
      status: 'Pending'
    },
    {
      id: 5,
      title: 'Neural Interfaces In Practice',
      date: 'May 11, 2025',
      time: '10:00-11:00 AM',
      room: 'KL - 03',
      track: 'HEALTHCARE',
      status: 'Pending'
    }
  ];

  const handleCreateSession = () => {
    setShowCreateModal(true);
  };

  const handleUploadMaterial = () => {
    setShowUploadModal(true);
  };

  const handleCloseModal = () => {
    setShowCreateModal(false);
    setShowUploadModal(false);
    setSessionForm({
      title: '',
      track: 'Healthcare',
      date: '',
      time: '',
      roomNo: '',
      description: '',
      files: null
    });
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Session created:', sessionForm);
    // Here you would typically send the data to your backend
    handleCloseModal();
  };

  const handleUploadSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Material uploaded:', sessionForm.files);
    // Here you would typically upload the file to your backend
    handleCloseModal();
  };

  const handleInputChange = (field: string, value: string | File | null) => {
    setSessionForm(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="flex h-screen bg-gray-50">
{/* Sidebar */}
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
        <span>My Materials</span>
      </a>
      <a href="#" className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span>My Sessions</span>
      </a>
      <a href="#" className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
        <span>Reports & Insights</span>
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
    <button className="flex items-center space-x-3 px-4 py-3 text-white bg-blue-600 rounded-lg w-full hover:bg-blue-700">
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
      </svg>
      <span>Log Out</span>
    </button>
  </div>
</div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <div className="bg-white border-b px-6 py-4 flex justify-between items-center">
          <div></div>
          <div className="flex items-center space-x-4">
            <button
              onClick={handleCreateSession}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-600"
            >
              CREATE SESSION
            </button>
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

        {/* Dashboard Content */}
        <div className="flex-1 p-6 overflow-auto">
          <div className="flex gap-6">
            {/* Left Column */}
            <div className="flex-1">
              {/* Stats Cards */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">03</div>
                  <div className="text-sm text-gray-600">Total Sessions</div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">06</div>
                  <div className="text-sm text-gray-600">Materials Uploaded</div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">02</div>
                  <div className="text-sm text-gray-600">Upcoming This Week <span className="text-xs text-gray-500">Sessions</span></div>
                </div>
              </div>

              {/* My Materials */}
              <div className="bg-white rounded-lg shadow-sm mb-8">
                <div className="p-6 border-b">
                  <div className="flex justify-between items-center">
                    <h2 className="text-lg font-semibold text-gray-900">My Materials</h2>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>14 Feb - 20 Feb</span>
                      </div>
                      <button
                        onClick={handleUploadMaterial}
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-600"
                      >
                        UPLOAD MATERIAL
                      </button>
                    </div>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="text-left py-3 px-6 text-sm font-medium text-gray-500">File Name</th>
                        <th className="text-left py-3 px-6 text-sm font-medium text-gray-500">Upload Type</th>
                        <th className="text-left py-3 px-6 text-sm font-medium text-gray-500">Uploaded On</th>
                        <th className="text-left py-3 px-6 text-sm font-medium text-gray-500">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {materials.map((material) => (
                        <tr key={material.id} className="border-t hover:bg-gray-50">
                          <td className="py-4 px-6">
                            <div className="flex items-center space-x-3">
                              <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                                {material.icon === 'video' ? (
                                  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                  </svg>
                                ) : (
                                  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                  </svg>
                                )}
                              </div>
                              <span className="text-sm text-gray-900">{material.name}</span>
                            </div>
                          </td>
                          <td className="py-4 px-6 text-sm text-gray-600">{material.type}</td>
                          <td className="py-4 px-6 text-sm text-gray-600">{material.uploadedOn}</td>
                          <td className="py-4 px-6">
                            <div className="flex items-center space-x-2">
                              <button className="p-1 text-orange-500 hover:bg-orange-50 rounded">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                </svg>
                              </button>
                              <button className="p-1 text-red-500 hover:bg-red-50 rounded">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* My Sessions */}
              <div className="bg-white rounded-lg shadow-sm">
                <div className="p-6 border-b">
                  <div className="flex justify-between items-center">
                    <h2 className="text-lg font-semibold text-gray-900">My Sessions</h2>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>14 Feb - 20 Feb</span>
                      </div>
                      <button
                        onClick={handleCreateSession}
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-600"
                      >
                        CREATE SESSION
                      </button>
                    </div>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="text-left py-3 px-6 text-sm font-medium text-gray-500">Title</th>
                        <th className="text-left py-3 px-6 text-sm font-medium text-gray-500">Date</th>
                        <th className="text-left py-3 px-6 text-sm font-medium text-gray-500">Time</th>
                        <th className="text-left py-3 px-6 text-sm font-medium text-gray-500">Room</th>
                        <th className="text-left py-3 px-6 text-sm font-medium text-gray-500">Track</th>
                        <th className="text-left py-3 px-6 text-sm font-medium text-gray-500">Status</th>
                        <th className="text-left py-3 px-6 text-sm font-medium text-gray-500">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sessions.map((session) => (
                        <tr key={session.id} className="border-t hover:bg-gray-50">
                          <td className="py-4 px-6 text-sm text-gray-900">{session.title}</td>
                          <td className="py-4 px-6 text-sm text-gray-600">{session.date}</td>
                          <td className="py-4 px-6 text-sm text-gray-600">{session.time}</td>
                          <td className="py-4 px-6 text-sm text-gray-600">{session.room}</td>
                          <td className="py-4 px-6 text-sm text-gray-600">{session.track}</td>
                          <td className="py-4 px-6">
                            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${session.status === 'Confirmed'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-blue-100 text-blue-800'
                              }`}>
                              • {session.status}
                            </span>
                          </td>
                          <td className="py-4 px-6">
                            <div className="flex items-center space-x-2">
                              <button className="p-1 text-orange-500 hover:bg-orange-50 rounded">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                </svg>
                              </button>
                              <button className="p-1 text-red-500 hover:bg-red-50 rounded">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Right Sidebar - Profile Card */}
            <div className="w-80">
              <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg p-6 text-white">
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 bg-orange-400 rounded-full mb-4 overflow-hidden">
                    <div className="w-full h-full bg-orange-400"></div>
                  </div>
                  <h3 className="text-lg font-semibold mb-1">John D.</h3>
                  <p className="text-purple-200 text-sm mb-6">Head of AI Research</p>

                  <div className="space-y-3 w-full text-left">
                    <div className="flex items-center space-x-3">
                      <svg className="w-4 h-4 text-purple-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span className="text-sm">lorem32@gmail.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <svg className="w-4 h-4 text-purple-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span className="text-sm">0358749936</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <svg className="w-4 h-4 text-purple-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-sm">432 Elm Street, Cityville</span>
                    </div>
                  </div>

                  <button className="w-full mt-6 bg-white bg-opacity-20 hover:bg-opacity-30 py-2 px-4 rounded-lg text-sm font-medium transition-all flex items-center justify-center space-x-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                    <span>EDIT PROFILE</span>
                  </button>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="mt-6 bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex-shrink-0"></div>
                  <div>
                    <p className="text-sm text-gray-900">
                      Edited session time for <strong>&quot;Neural Interfaces in Practice&quot;</strong>
                    </p>
                    <p className="text-xs text-gray-500 mt-1">May 1, 2025</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Create Session Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-3xl mx-4 max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-8">Create New Session</h2>

              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-8">
                  {/* Session Title */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Session Title
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Session Title"
                      value={sessionForm.title}
                      onChange={(e) => handleInputChange('title', e.target.value)}
                      className="w-full px-4 py-3 border-0 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-gray-100 text-gray-700 placeholder-gray-500"
                      required
                    />
                  </div>

                  {/* Track */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Track
                    </label>
                    <div className="relative">
                      <select
                        value={sessionForm.track}
                        onChange={(e) => handleInputChange('track', e.target.value)}
                        className="w-full px-4 py-3 border-0 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-gray-100 text-gray-700 appearance-none"
                      >
                        <option value="Healthcare">Healthcare</option>
                        <option value="AI">AI</option>
                        <option value="Technology">Technology</option>
                        <option value="Research">Research</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-6">
                  {/* Date */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Date
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="DD/MM/YYYY"
                        value={sessionForm.date}
                        onChange={(e) => handleInputChange('date', e.target.value)}
                        className="w-full px-4 py-3 border-0 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-gray-100 text-gray-700 placeholder-gray-500"
                        required
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Time */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Time
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="00:00"
                        value={sessionForm.time}
                        onChange={(e) => handleInputChange('time', e.target.value)}
                        className="w-full px-4 py-3 border-0 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-gray-100 text-gray-700 placeholder-gray-500"
                        required
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Room No */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Room No
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Room No."
                      value={sessionForm.roomNo}
                      onChange={(e) => handleInputChange('roomNo', e.target.value)}
                      className="w-full px-4 py-3 border-0 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-gray-100 text-gray-700 placeholder-gray-500"
                      required
                    />
                  </div>
                </div>

                {/* Upload */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Upload
                  </label>
                  <div className="border-2 border-dashed border-blue-300 rounded-lg p-12 text-center bg-blue-50">
                    <svg className="w-16 h-16 text-blue-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <p className="text-blue-600 font-medium mb-2">Drop files here or click to upload</p>
                    <p className="text-sm text-gray-500">Supported Files Type: pdf, docx</p>
                    <input
                      type="file"
                      accept=".pdf,.docx"
                      onChange={(e) => handleInputChange('files', e.target.files ? e.target.files[0] : null)}
                      className="hidden"
                      id="file-upload"
                    />
                  </div>
                </div>

                {/* Session Description */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Session Description
                  </label>
                  <textarea
                    placeholder="Write Here..."
                    value={sessionForm.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    rows={6}
                    className="w-full px-4 py-3 border-0 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-gray-100 text-gray-700 placeholder-gray-500 resize-none"
                  />
                </div>

                {/* Create Session Button */}
                <div className="flex justify-end pt-6">
                  <button
                    type="submit"
                    className="px-8 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 font-medium text-sm"
                  >
                    CREATE SESSION
                  </button>
                </div>
              </form>
            </div>

            {/* Close button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Upload Material Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-lg mx-4">
            <div className="p-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-8">Upload Material</h2>

              <form onSubmit={handleUploadSubmit} className="space-y-6">
                {/* Upload Area */}
                <div className="border-2 border-dashed border-blue-300 rounded-lg p-12 text-center bg-blue-50">
                  <svg className="w-16 h-16 text-blue-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  <p className="text-blue-600 font-medium mb-2">Drop files here or click to upload</p>
                  <p className="text-sm text-gray-500">Supported Files Type: pdf, docx</p>
                  <input
                    type="file"
                    accept=".pdf,.docx"
                    onChange={(e) => handleInputChange('files', e.target.files ? e.target.files[0] : null)}
                    className="hidden"
                    id="material-upload"
                  />
                  <label
                    htmlFor="material-upload"
                    className="cursor-pointer inline-block w-full h-full absolute inset-0"
                  ></label>
                </div>

                {/* Upload Button */}
                <div className="flex justify-end pt-4">
                  <button
                    type="submit"
                    className="px-8 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 font-medium text-sm"
                  >
                    UPLOAD
                  </button>
                </div>
              </form>
            </div>

            {/* Close button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;