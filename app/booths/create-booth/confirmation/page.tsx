import React from 'react';

const BoothLiveUI = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
      <div className="max-w-2xl mx-auto text-center">
        {/* Image Placeholder */}
        <div className="mb-8">
          <div className="w-80 h-80 mx-auto bg-gray-200 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-gray-500 text-sm">Your image will go here</p>
            </div>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Your Booth Is Now Live!
        </h1>

        {/* Description */}
        <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto leading-relaxed">
          Lorem ipsum dolor sit amet consectetur. Turpis porttitor vitae 
          tincidunt duis felis quis velit. cras in.
        </p>

        {/* Button */}
        <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-colors duration-200">
          VIEW MY BOOTH
        </button>
      </div>
    </div>
  );
};

export default BoothLiveUI;