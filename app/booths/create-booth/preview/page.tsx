'use client';

import { useRouter } from 'next/navigation';

const BoothProfile = () => {

  const handleEdit = () => {
    console.log('Editing booth...');
  };


  const handleBack = () => {
    console.log('Going back...');
  };

    const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            EcoTech Innovations
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            EcoTech Innovations is a green tech company focused on solar-powered consumer products. We 
            aim to reduce sustainable living through innovation and simplicity.
          </p>
          <div className="mt-3">
            <span className="inline-block bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium">
              Package: Premium
            </span>
          </div>
        </div>

        {/* Branding Assets */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          {/* Logo */}
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-3">Logo</h3>
            <div className="bg-gray-100 rounded-lg p-6 flex items-center justify-center h-32">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-1">ECO</div>
                <div className="text-lg font-medium text-green-500">TECH</div>
                <div className="w-8 h-1 bg-green-400 mx-auto mt-1"></div>
              </div>
            </div>
          </div>

          {/* Banner */}
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-3">Banner</h3>
            <div className="bg-gray-100 rounded-lg p-4 h-32 flex items-center justify-center">
              <div className="w-full h-full bg-gradient-to-r from-red-400 via-orange-400 to-green-400 rounded flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Brochure */}
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-3">Brochure</h3>
            <div className="bg-gray-100 rounded-lg p-4 h-32 flex items-center justify-center">
              <div className="transform rotate-12">
                <div className="w-16 h-20 bg-white border border-gray-300 rounded shadow-sm flex flex-col">
                  <div className="flex-1 bg-gradient-to-br from-blue-100 to-green-100 rounded-t"></div>
                  <div className="h-3 bg-gray-200 rounded-b"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Video and Featured Products */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          {/* Video */}
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-3">Video</h3>
            <div className="bg-green-500 rounded-lg h-32 flex items-center justify-center">
              <div className="text-center text-white">
                <svg className="w-8 h-8 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
                <div className="text-xs">RENEWABLE ENERGY<br />SOLUTIONS</div>
              </div>
            </div>
          </div>

          {/* Industrial Equipment */}
          <div className="col-span-2">
            <div className="bg-gray-100 rounded-lg h-32 flex items-center justify-center">
              <div className="text-gray-400">
                <svg className="w-16 h-16 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l-1 1v6h2V3l1-1h-2zM7 8l-2 2 4 4 2-2-4-4zM17 8l-4 4 2 2 4-4-2-2zM3 11v2h6l-1-1v-1H3zM15 11v1l-1 1h6v-2h-5zM7.5 16L6 17.5l1.5 1.5L9 17.5 7.5 16zM16.5 16L15 17.5l1.5 1.5L18 17.5 16.5 16z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Products */}
        <div className="mb-8">
          <h3 className="text-lg font-medium text-gray-700 mb-4">Featured Products</h3>
          <div className="grid grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="text-center">
                <div className="bg-gray-100 rounded-lg p-6 mb-3 h-32 flex items-center justify-center">
                  <div className="w-16 h-20 bg-gray-800 rounded-lg flex items-center justify-center">
                    <div className="w-8 h-12 bg-blue-600 rounded"></div>
                  </div>
                </div>
                <h4 className="font-medium text-gray-900 mb-1">Solar Backpack</h4>
                <p className="text-sm text-gray-600">
                  Solar Backpack with integrated solar panel
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact & Links and Attendee Interact */}
        <div className="grid grid-cols-2 gap-8 mb-8">
          {/* Contact & Links */}
          <div>
            <h3 className="text-lg font-medium text-gray-700 mb-4">Contact & Links</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Name</span>
                <span className="font-medium text-gray-900">Amanda Clark</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Email</span>
                <span className="font-medium text-gray-900">amanda@ecotech.com</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Phone</span>
                <span className="font-medium text-gray-900">+1 (555) 123-4567</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Website</span>
                <span className="font-medium text-blue-600">www.ecotech.com</span>
              </div>
            </div>
          </div>

          {/* Attendee Interact With */}
          <div>
            <h3 className="text-lg font-medium text-gray-700 mb-4">Attendee Interact With</h3>
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/>
                </svg>
              </div>
              <span className="font-medium text-gray-900">Video Call</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between">
          <button
            onClick={handleBack}
            className="bg-gray-400 hover:bg-gray-500 text-white font-medium px-6 py-3 rounded-lg transition-colors"
          >
            BACK
          </button>
          
          <div className="space-x-4">
            <button
              onClick={handleEdit}
              className="border border-red-500 text-red-500 hover:bg-red-50 font-medium px-6 py-3 rounded-lg transition-colors"
            >
              EDIT
            </button>
            <button
                onClick={() => router.push("/booths/create-booth/confirmation")}
              className="bg-red-500 hover:bg-red-600 text-white font-medium px-6 py-3 rounded-lg transition-colors"
            >
              PUBLISH BOOTH
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoothProfile;