import React from 'react';

const ExhibitorDashboard = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-sm border-r flex flex-col">
        {/* Logo Section */}
        <div className="p-6 border-b">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
              M
            </div>
            <span className="text-xl font-bold text-gray-900">WEKALA</span>
          </div>
        </div>
        
        {/* Navigation Menu */}
        <nav className="flex-1 mt-6">
          <div className="px-4 space-y-2">
            <a href="#" className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <span>Dashboard</span>
            </a>
            
            <a href="#" className="flex items-center space-x-3 px-4 py-3 bg-blue-50 text-blue-600 rounded-lg">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <span className="text-blue-600 font-medium">Live Booths</span>
            </a>
            
            <a href="#" className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
              <span>Package & Billing</span>
            </a>
            
            <a href="#" className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Help / Support</span>
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

        {/* Log Out Button */}
        <div className="p-4">
          <button className="flex items-center space-x-3 px-4 py-3 text-white bg-blue-600 rounded-lg w-full hover:bg-blue-700 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            <span className="font-medium">Log Out</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-white border-b px-6 py-4">
          <div className="flex justify-end items-center">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5-5-5h5v-5a7.5 7.5 0 00-15 0v5h5l-5 5-5-5h5V7a9.5 9.5 0 0119 0v10z" />
                </svg>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center text-white font-medium text-sm">
                  J
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-900">John D.</div>
                  <div className="text-xs text-gray-500">Exhibitor</div>
                </div>
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 p-6 overflow-y-auto">
          {/* Header Section */}
          <div className="mb-6">
            <div className="flex items-center space-x-2 mb-2">
              <h1 className="text-2xl font-semibold text-gray-900">Live Booths</h1>
              <div className="bg-yellow-400 text-yellow-900 px-2 py-1 rounded text-xs font-medium">
                LIVE
              </div>
            </div>
            <p className="text-gray-600">One Booth Is Live Now!</p>
          </div>
          
          {/* Company Info and Booth */}
          <div className="text-center mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-2">EcoTech Innovations</h2>
            <p className="text-gray-600 max-w-md mx-auto">
              EcoTech Innovations is a green tech company focused on solar-powered consumer products.
            </p>
          </div>
          
          {/* Booth Image Placeholder */}
          <div className="flex justify-center items-center mb-8">
            <div className="w-96 h-80 bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center">
              <p className="text-gray-500">Your booth image will go here</p>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex justify-center items-center space-x-4 mb-8">
            <button className="inline-flex items-center px-6 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              START VIDEO CALL
            </button>
            
            <button className="inline-flex items-center px-6 py-2 bg-orange-500 text-white rounded-lg text-sm font-medium hover:bg-orange-600 transition-colors">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              START CHAT
            </button>
            
            <button className="inline-flex items-center px-6 py-2 bg-purple-500 text-white rounded-lg text-sm font-medium hover:bg-purple-600 transition-colors">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              SCHEDULE MEETING
            </button>
            
            <button className="inline-flex items-center px-6 py-2 bg-red-500 text-white rounded-lg text-sm font-medium hover:bg-red-600 transition-colors">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              ORDER PRODUCTS
            </button>
          </div>
          
          {/* Featured Products Section */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Featured Products</h3>
            
            <div className="grid grid-cols-3 gap-6">
              {/* Product 1 */}
              <div className="bg-white rounded-lg shadow-sm p-4">
                <div className="w-full h-32 bg-gray-100 rounded-lg mb-3 flex items-center justify-center">
                  <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 2l3 6 5-4-3 7h4l3 2-8 1-3-7-4 2V2z" />
                  </svg>
                </div>
                <h4 className="font-medium text-gray-900 mb-1">Solar Backpack</h4>
                <p className="text-sm text-gray-600">Solar backpack with integrated solar panel</p>
              </div>
              
              {/* Product 2 */}
              <div className="bg-white rounded-lg shadow-sm p-4">
                <div className="w-full h-32 bg-gray-100 rounded-lg mb-3 flex items-center justify-center">
                  <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 2l3 6 5-4-3 7h4l3 2-8 1-3-7-4 2V2z" />
                  </svg>
                </div>
                <h4 className="font-medium text-gray-900 mb-1">Solar Backpack</h4>
                <p className="text-sm text-gray-600">Solar backpack with integrated solar panel</p>
              </div>
              
              {/* Product 3 */}
              <div className="bg-white rounded-lg shadow-sm p-4">
                <div className="w-full h-32 bg-gray-100 rounded-lg mb-3 flex items-center justify-center">
                  <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 2l3 6 5-4-3 7h4l3 2-8 1-3-7-4 2V2z" />
                  </svg>
                </div>
                <h4 className="font-medium text-gray-900 mb-1">Solar Backpack</h4>
                <p className="text-sm text-gray-600">Solar backpack with integrated solar panel</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExhibitorDashboard;