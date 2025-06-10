'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { useAuth } from '@/lib/auth';
import { useEffect } from 'react';

const AuthDebugger = () => {
  const { user, session, isLoading } = useAuth();
  const [debugInfo, setDebugInfo] = useState<{
    contextUser?: boolean;
    contextSession?: boolean;
    contextLoading?: boolean;
    supabaseSession?: boolean;
    supabaseUser?: boolean;
    sessionError?: string;
    userError?: string;
    userId?: string;
    accessToken?: string;
    error?: string;
  } | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        // Check session
        const { data: { session }, error: sessionError } = await supabase.auth.getSession();
        
        // Check user
        const { data: { user }, error: userError } = await supabase.auth.getUser();
        
        setDebugInfo({
          contextUser: !!user,
          contextSession: !!session,
          contextLoading: isLoading,
          supabaseSession: !!session,
          supabaseUser: !!user,
          sessionError: sessionError?.message,
          userError: userError?.message,
          userId: user?.id || session?.user?.id,
          accessToken: session?.access_token ? 'present' : 'missing'
        });
      } catch (error) {
        setDebugInfo({ error: error instanceof Error ? error.message : 'Unknown error' });
      }
    };

    checkAuth();
  }, [user, session, isLoading]);

  if (!debugInfo) return <div>Loading debug info...</div>;

  return (
    <div className="fixed top-4 right-4 bg-black text-white p-4 rounded text-xs max-w-xs z-50">
      <h3 className="font-bold mb-2">Auth Debug:</h3>
      <pre>{JSON.stringify(debugInfo, null, 2)}</pre>
    </div>
  );
};

interface BoothFormData {
  // Package selection
  packageType: 'basic' | 'premium' | 'custom';
  
  // Booth info
  boothName: string;
  boothDescription: string;
  uploadedFiles: File[];
  
  // Contact info
  contactName: string;
  email: string;
  phone: string;
  website: string;
  selectedInteraction: string;
}

const CreateBoothFlow = () => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(-1);
  const [isLoading, setIsLoading] = useState(false);
  
  const [formData, setFormData] = useState<BoothFormData>({
    packageType: 'basic',
    boothName: '',
    boothDescription: '',
    uploadedFiles: [],
    contactName: '',
    email: '',
    phone: '',
    website: '',
    selectedInteraction: 'Video Call'
  });

  const updateFormData = (updates: Partial<BoothFormData>) => {
    setFormData(prev => ({ ...prev, ...updates }));
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > -1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handlePublish = async () => {
    setIsLoading(true);
    
    try {
      console.log('=== Frontend Debug ===');
      
      // Check session before making request
      const { data: { session }, error: sessionError } = await supabase.auth.getSession();
      const { data: { user }, error: userError } = await supabase.auth.getUser();
      
      console.log('Frontend auth check:', {
        hasSession: !!session,
        hasUser: !!user,
        sessionUserId: session?.user?.id,
        userUserId: user?.id,
        sessionError: sessionError?.message,
        userError: userError?.message,
        accessToken: session?.access_token ? 'present' : 'missing'
      });
      
      if (!session && !user) {
        alert('Please log in again - no session found');
        router.push('/register');
        return;
      }
  
      console.log('Making API request...');
      const response = await fetch('/api/booths', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Pass the authorization header explicitly
          'Authorization': `Bearer ${session?.access_token || ''}`,
        },
        credentials: 'include', // Important for cookies
        body: JSON.stringify({
          name: formData.boothName,
          description: formData.boothDescription,
          packageType: formData.packageType,
          contactName: formData.contactName,
          contactEmail: formData.email,
          contactPhone: formData.phone,
          website: formData.website,
          interactionType: formData.selectedInteraction.toLowerCase().replace(' ', '')
        }),
      });
  
      console.log('Raw response status:', response.status);
      console.log('Raw response headers:', response.headers);
      
      const responseText = await response.text();
      console.log('Raw response text:', responseText);
      
      let result;
      try {
        result = JSON.parse(responseText);
      } catch (parseError) {
        console.error('Failed to parse response as JSON:', parseError);
        alert('Server returned invalid response: ' + responseText);
        return;
      }
      
      console.log('Parsed API response:', result);
  
      if (result.success) {
        setCurrentStep(4); // Go to confirmation
      } else {
        console.error('API error:', result);
        alert('Error creating booth: ' + result.error + (result.debug ? '\nDebug: ' + JSON.stringify(result.debug) : ''));
      }
    } catch (error) {
      console.error('Error submitting booth:', error);
      alert('Failed to create booth: ' + (error instanceof Error ? error.message : 'Unknown error'));
    } finally {
      setIsLoading(false);
    }
  };

  // Step -1: Initial Dashboard (Create Booth Landing)
  const renderCreateBoothStep = () => (
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
              <span className="text-blue-600 font-medium">My Booths</span>
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
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-semibold text-gray-900 mb-4">Booth Overview</h1>
            <p className="text-gray-600 mb-8">You Haven&apos;t Set Up Your Booth Yet.</p>
            
            <button 
              onClick={() => setCurrentStep(0)}
              className="inline-flex items-center px-6 py-3 bg-red-500 text-white rounded-lg font-medium hover:bg-red-600 transition-colors cursor-pointer"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              CREATE MY BOOTH
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // Step 0: Package Selection
  const renderPackageStep = () => (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Choose Your Booth Package
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Select a package that best fits your brand&apos;s presence at the event.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Basic Package */}
          <div 
            className={`bg-white rounded-lg shadow-lg p-8 relative cursor-pointer border-2 ${
              formData.packageType === 'basic' ? 'border-red-500' : 'border-transparent'
            }`}
            onClick={() => updateFormData({ packageType: 'basic' })}
          >
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
          </div>

          {/* Premium Package */}
          <div 
            className={`bg-white rounded-lg shadow-lg p-8 relative cursor-pointer border-2 ${
              formData.packageType === 'premium' ? 'border-red-500' : 'border-transparent'
            }`}
            onClick={() => updateFormData({ packageType: 'premium' })}
          >
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
          </div>

          {/* Custom Package */}
          <div 
            className={`bg-white rounded-lg shadow-lg p-8 relative cursor-pointer border-2 ${
              formData.packageType === 'custom' ? 'border-red-500' : 'border-transparent'
            }`}
            onClick={() => updateFormData({ packageType: 'custom' })}
          >
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
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <button
            onClick={handleNext}
            className="bg-red-500 hover:bg-red-600 text-white font-medium px-8 py-3 rounded-lg transition-colors"
          >
            NEXT
          </button>
        </div>
      </div>
    </div>
  );

  // Step 1: Booth Info
  const renderBoothInfoStep = () => (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-sm p-8">
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

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Booth Name
            </label>
            <input
              type="text"
              placeholder="Enter Booth Name"
              value={formData.boothName}
              onChange={(e) => updateFormData({ boothName: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Upload Branding
            </label>
            <div
              className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:border-gray-400 transition-colors cursor-pointer"
              onClick={() => {
                const fileInput = document.getElementById('file-upload') as HTMLInputElement;
                fileInput?.click();
              }}
            >
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 mb-4">
                  <svg
                    className="w-full h-full text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>
                </div>
                <p className="text-gray-700 font-medium mb-1">
                  Drop files here or click to upload
                </p>
                <p className="text-sm text-gray-500">
                  Supported Files Types: pdf, docx, jpg, png
                </p>
              </div>
              <input
                id="file-upload"
                type="file"
                multiple
                accept=".pdf,.docx,.jpg,.jpeg,.png"
                onChange={(e) => updateFormData({ uploadedFiles: Array.from(e.target.files || []) })}
                className="hidden"
                value="" // Add this to make it controlled
              />
            </div>
            {formData.uploadedFiles.length > 0 && (
              <div className="mt-3">
                <p className="text-sm text-gray-600">
                  {formData.uploadedFiles.length} file(s) selected
                </p>
              </div>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Booth Description
            </label>
            <textarea
              placeholder="Write Here...."
              value={formData.boothDescription}
              onChange={(e) => updateFormData({ boothDescription: e.target.value })}
              rows={6}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-colors resize-none"
            />
          </div>
        </div>

        <div className="flex justify-end mt-8">
          <button
            onClick={handleNext}
            className="bg-red-500 hover:bg-red-600 text-white font-medium px-8 py-3 rounded-lg transition-colors"
          >
            NEXT
          </button>
        </div>
      </div>
    </div>
  );

  // Step 2: Contact Info
  const renderContactInfoStep = () => {
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

    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
        <div className="w-full max-w-2xl bg-white rounded-lg shadow-sm p-8">
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

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Contact Name
                </label>
                <input
                  type="text"
                  placeholder="Enter Contact Name"
                  value={formData.contactName}
                  onChange={(e) => updateFormData({ contactName: e.target.value })}
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
                  value={formData.email}
                  onChange={(e) => updateFormData({ email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  placeholder="Enter Phone"
                  value={formData.phone}
                  onChange={(e) => updateFormData({ phone: e.target.value })}
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
                  value={formData.website}
                  onChange={(e) => updateFormData({ website: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-colors"
                />
              </div>
            </div>

            <div className="mt-8">
              <label className="block text-sm font-medium text-gray-700 mb-6">
                Attendees Interact With Exhibitor
              </label>
              
              <div className="flex justify-center space-x-8">
                {interactionOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => updateFormData({ selectedInteraction: option.label })}
                    className={`flex flex-col items-center p-6 rounded-lg transition-all duration-200 ${
                      formData.selectedInteraction === option.label
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

          <div className="flex justify-between mt-12">
            <button
              onClick={handleBack}
              className="bg-gray-400 hover:bg-gray-500 text-white font-medium px-8 py-3 rounded-lg transition-colors"
            >
              BACK
            </button>
            <button
              onClick={handleNext}
              className="bg-red-500 hover:bg-red-600 text-white font-medium px-8 py-3 rounded-lg transition-colors"
            >
              PREVIEW
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Step 3: Preview
  const renderPreviewStep = () => (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            {formData.boothName || 'EcoTech Innovations'}
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {formData.boothDescription || 'EcoTech Innovations is a green tech company focused on solar-powered consumer products. We aim to reduce sustainable living through innovation and simplicity.'}
          </p>
          <div className="mt-3">
            <span className="inline-block bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium">
              Package: {formData.packageType}
            </span>
          </div>
        </div>

        {/* Branding Assets */}
        <div className="grid grid-cols-3 gap-6 mb-8">
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

        {/* Contact & Links */}
        <div className="grid grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-medium text-gray-700 mb-4">Contact & Links</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Name</span>
                <span className="font-medium text-gray-900">{formData.contactName || 'Amanda Clark'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Email</span>
                <span className="font-medium text-gray-900">{formData.email || 'amanda@ecotech.com'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Phone</span>
                <span className="font-medium text-gray-900">{formData.phone || '+1 (555) 123-4567'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Website</span>
                <span className="font-medium text-blue-600">{formData.website || 'www.ecotech.com'}</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-700 mb-4">Attendee Interact With</h3>
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/>
                </svg>
              </div>
              <span className="font-medium text-gray-900">{formData.selectedInteraction}</span>
            </div>
          </div>
        </div>

        <div className="flex justify-between">
          <button
            onClick={handleBack}
            className="bg-gray-400 hover:bg-gray-500 text-white font-medium px-6 py-3 rounded-lg transition-colors"
          >
            BACK
          </button>
          
          <div className="space-x-4">
            <button
              onClick={() => setCurrentStep(1)}
              className="border border-red-500 text-red-500 hover:bg-red-50 font-medium px-6 py-3 rounded-lg transition-colors"
            >
              EDIT
            </button>
            <button
              onClick={handlePublish}
              disabled={isLoading}
              className="bg-red-500 hover:bg-red-600 text-white font-medium px-6 py-3 rounded-lg transition-colors"
            >
              {isLoading ? 'PUBLISHING...' : 'PUBLISH BOOTH'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // Step 4: Confirmation
  const renderConfirmationStep = () => (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
      <div className="max-w-2xl mx-auto text-center">
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

        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Your Booth Is Now Live!
        </h1>

        <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto leading-relaxed">
          Lorem ipsum dolor sit amet consectetur. Turpis porttitor vitae 
          tincidunt duis felis quis velit. cras in.
        </p>

        <button 
          onClick={() => router.push('/booths/exhibitor/booth')}
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-colors duration-200"
        >
          VIEW MY BOOTH
        </button>
      </div>
    </div>
  );

  // Render the current step
  const renderCurrentStep = () => {
    switch (currentStep) {
      case -1: return renderCreateBoothStep();
      case 0: return renderPackageStep();
      case 1: return renderBoothInfoStep();
      case 2: return renderContactInfoStep();
      case 3: return renderPreviewStep();
      case 4: return renderConfirmationStep();
      default: return renderCreateBoothStep();
    }
  };

  return (
    <div>
      {renderCurrentStep()}
    </div>
  );
};

export default CreateBoothFlow;