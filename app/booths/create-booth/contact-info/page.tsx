'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const CreateBoothContactForm = () => {
  const [contactInfo, setContactInfo] = useState({
    contactName: '',
    email: '',
    phone: '',
    website: ''
  });

  const [selectedInteraction, setSelectedInteraction] = useState<string>('Video Call');

  const handleInputChange = (field: string, value: string) => {
    setContactInfo(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleInteractionSelect = (interaction: string) => {
    setSelectedInteraction(interaction);
  };

  const handleBack = () => {
    console.log('Going back...');
  };


  const interactionOptions = [
    {
      id: 'chat',
      label: 'Chat',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
        </svg>
      ),
      color: 'bg-orange-500'
    },
    {
      id: 'videocall',
      label: 'Video Call',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/>
        </svg>
      ),
      color: 'bg-red-500'
    },
    {
      id: 'qa',
      label: 'Q/A',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/>
        </svg>
      ),
      color: 'bg-blue-500'
    }
  ];
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-sm p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-semibold text-gray-900 mb-3">
            Create Booth
          </h1>
          <p className="text-gray-600 leading-relaxed">
            Provide your booth details, upload branding assets, add products,
            <br />
            & enter contact information to set up your virtual presence.
          </p>
        </div>

        {/* Contact Form */}
        <div className="space-y-6">
          {/* Contact Name and Email Row */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Contact Name
              </label>
              <input
                type="text"
                placeholder="Enter Contact Name"
                value={contactInfo.contactName}
                onChange={(e) => handleInputChange('contactName', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter Email"
                value={contactInfo.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-colors"
              />
            </div>
          </div>

          {/* Phone and Website Row */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone
              </label>
              <input
                type="tel"
                placeholder="Enter Phone"
                value={contactInfo.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Website
              </label>
              <input
                type="url"
                placeholder="Enter Website URL"
                value={contactInfo.website}
                onChange={(e) => handleInputChange('website', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-colors"
              />
            </div>
          </div>

          {/* Interaction Options */}
          <div className="mt-8">
            <label className="block text-sm font-medium text-gray-700 mb-6">
              Attendees Interact With Exhibitor
            </label>
            
            <div className="flex justify-center space-x-8">
              {interactionOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => handleInteractionSelect(option.label)}
                  className={`flex flex-col items-center p-6 rounded-lg transition-all duration-200 ${
                    selectedInteraction === option.label
                      ? 'border-2 border-red-400 bg-red-50'
                      : 'border-2 border-transparent hover:bg-gray-50'
                  }`}
                >
                  <div className={`w-12 h-12 ${option.color} rounded-full flex items-center justify-center text-white mb-3`}>
                    {option.icon}
                  </div>
                  <span className="text-sm font-medium text-gray-700">
                    {option.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-12">
          <button
            onClick={handleBack}
            className="bg-gray-400 hover:bg-gray-500 text-white font-medium px-8 py-3 rounded-lg transition-colors"
          >
            BACK
          </button>
          <button
                onClick={() => router.push("/booths/create-booth/preview")}
            className="bg-red-500 hover:bg-red-600 text-white font-medium px-8 py-3 rounded-lg transition-colors"
          >
            PREVIEW
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateBoothContactForm;