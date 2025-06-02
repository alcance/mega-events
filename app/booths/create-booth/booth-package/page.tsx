'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

const BoothPackageSelector = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Choose Your Booth Package
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Select a package that best fits your brand&apos;s presence at the event.
          </p>
        </div>

        {/* Package Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Basic Package */}
          <div className="bg-white rounded-lg shadow-lg p-8 relative">
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Basic</h2>
              <div className="flex items-baseline">
                <span className="text-4xl font-bold text-gray-900">$149</span>
                <span className="text-gray-600 ml-2">/ Per Booth</span>
              </div>
            </div>

            <div className="mb-8">
              <p className="text-gray-700 mb-4 font-medium">It Includes</p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">•</span>
                  <span className="text-gray-600">1 Product Upload</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">•</span>
                  <span className="text-gray-600">Logo & Banner Upload</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">•</span>
                  <span className="text-gray-600">Company Description</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">•</span>
                  <span className="text-gray-600">Contact Information</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">•</span>
                  <span className="text-gray-600">Static Booth Display</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">•</span>
                  <span className="text-gray-600">Website Link</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => router.push("/booths/create-booth/booth-info")}
              className="w-full bg-gray-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-700 transition-colors"
            >
              CHOOSE BASIC PLAN
            </button>
          </div>

          {/* Premium Package */}
          <div className="bg-white rounded-lg shadow-lg p-8 relative">
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Premium</h2>
              <div className="flex items-baseline">
                <span className="text-4xl font-bold text-gray-900">$249</span>
                <span className="text-gray-600 ml-2">/ Per Booth</span>
              </div>
            </div>

            <div className="mb-8">
              <p className="text-gray-700 mb-4 font-medium">Includes Everything In Basic, Plus</p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">•</span>
                  <span className="text-gray-600">Up To 5 Product Uploads</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">•</span>
                  <span className="text-gray-600">Video Upload ( Product Demo)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">•</span>
                  <span className="text-gray-600">Downloadable Brochure (PDF)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">•</span>
                  <span className="text-gray-600">Enable Chat With Attendees</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">•</span>
                  <span className="text-gray-600">Schedule Video Meetings</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">•</span>
                  <span className="text-gray-600">Lead Collection & CSV Export</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">•</span>
                  <span className="text-gray-600">Basic Analytics (Views, Clicks)</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => router.push("/booths/create-booth/booth-info")}
              className="w-full bg-red-500 text-white py-3 px-6 rounded-lg font-medium hover:bg-red-600 transition-colors"
            >
              CHOOSE PREMIUM PLAN
            </button>
          </div>

          {/* Custom Package */}
          <div className="bg-white rounded-lg shadow-lg p-8 relative">
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Custom</h2>
              <div className="text-4xl font-bold text-gray-900 mb-2">Contact Us</div>
            </div>

            <div className="mb-8">
              <p className="text-gray-700 mb-4 font-medium">Includes Everything In Premium, Plus</p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">•</span>
                  <span className="text-gray-600">Unlimited Product Uploads</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">•</span>
                  <span className="text-gray-600">Multiple Brochures/Videos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">•</span>
                  <span className="text-gray-600">Dedicated Support Rep</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">•</span>
                  <span className="text-gray-600">Advanced Analytics Dashboard</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">•</span>
                  <span className="text-gray-600">Real-Time Lead Notifications</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">•</span>
                  <span className="text-gray-600">Custom Booth Design Support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">•</span>
                  <span className="text-gray-600">Priority Placement in Booth Listings</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => router.push("/booths/create-booth/booth-info")}
              className="w-full bg-gray-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-700 transition-colors"
            >
              REQUEST CUSTOM PLAN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoothPackageSelector;