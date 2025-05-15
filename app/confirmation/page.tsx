'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const ConfirmationPage = () => {
  const router = useRouter();

  return (
    <div className="flex h-screen bg-black text-white">
      {/* Left side with the background image */}
      <div className="hidden md:block md:w-1/2 relative">
        <Image 
          src="/general-background.svg" 
          alt="Event Background" 
          fill 
          style={{objectFit: 'cover'}}
          priority
        />
      </div>

      {/* Right side with the confirmation details */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="flex justify-center mb-6">
            <Image 
              src="/main-logo.svg" 
              alt="Logo" 
              width={80} 
              height={80}
            />
          </div>

          <div className="text-center">
            <div className="mx-auto w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mb-4">
              <svg className="w-10 h-10 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
              </svg>
            </div>
            
            <h1 className="text-2xl font-bold mb-2">Your Ticket Is Confirmed!</h1>
            <p className="text-gray-400 mb-6">
              Thank You For Registering For FutureFront 2025 – The Innovation Summit.
            </p>
            
            {/* More visible notification box */}
            <div className="bg-red-500 bg-opacity-15 border border-red-500 text-white p-5 rounded-lg mb-8">
              <p className="font-medium">
                We&aposve Sent Your Ticket And Event Details To:
              </p>
              <p className="mt-1 font-bold text-lg">
                [Your.Email@Example.Com]
              </p>
            </div>
            
            <div className="space-y-6">
              <button 
                onClick={() => router.push("/eticket")}
                className="w-full p-3 bg-red-500 text-white rounded-lg font-medium hover:bg-red-600 transition-colors"
              >
                VIEW E-TICKET
              </button>
              
              <button 
                onClick={() => router.push('/')}
                className="w-full p-3 border border-gray-700 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
              >
                BACK TO HOME
              </button>
            </div>
          </div>
          
          <div className="mt-8 text-center text-sm text-gray-500">
            <p>If you have any questions, please contact us at:</p>
            <p className="text-gray-400">support@megaevents.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;