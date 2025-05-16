'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth';
import { getUserBarcode } from '@/lib/barcode';
import Barcode from '@/components/barcode';
import { withAuth } from '@/lib/protected-route';

const ETicketPage = () => {
  const { user } = useAuth();
  const router = useRouter();
  const [barcode, setBarcode] = useState<string>('');
  const [ticketId, setTicketId] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadBarcode = async () => {
      if (user?.id) {
        try {
          const code = await getUserBarcode(user.id);
          setBarcode(code);
          // Generate a ticket ID by taking part of the barcode and adding random characters
          setTicketId(code.substring(0, 10));
        } catch (error) {
          console.error('Error loading barcode:', error);
        } finally {
          setIsLoading(false);
        }
      }
    };

    loadBarcode();
  }, [user]);

  const handleDownload = () => {
    alert('Ticket download initiated.');
    // In a real application, you would generate a PDF here
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-500"></div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Main content */}
      <div className="w-full max-w-6xl mx-auto p-4 md:p-8">
        <div className="mb-8 flex justify-center md:justify-start">
          <div className="w-16 h-16 bg-[#F94F4F] rounded-full flex items-center justify-center">
            <span className="text-white text-3xl font-bold">M</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left column with event image */}
          <div className="p-4">
            <Image 
              src="/general-background.svg" 
              alt="Event Background" 
              width={500}
              height={300}
              className="rounded-lg w-full h-auto"
            />
            
            <div className="mt-6">
              <h2 className="text-xl font-bold mb-2">Event Details</h2>
              <p className="text-gray-700 mb-4">
                Join us for FutureFront 2025 – The Innovation Summit. This premier technology event 
                brings together thought leaders, innovators, and tech enthusiasts from around the world.
              </p>
              
              <div className="bg-gray-100 p-4 rounded-lg">
                <h3 className="font-bold mb-2">Event Highlights</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Keynote Presentations</li>
                  <li>Tech Workshops</li>
                  <li>Networking Opportunities</li>
                  <li>Product Showcases</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Right column with e-ticket */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Ticket header */}
            <div className="text-center p-4 border-b">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <svg className="w-6 h-6 text-[#F94F4F]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 6a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 100 4v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2a2 2 0 100-4V6z"></path>
                </svg>
              </div>
              <h2 className="text-2xl font-bold">Your Ticket</h2>
            </div>
            
            {/* Ticket body */}
            <div className="p-6">
              <div className="mb-4">
                <p className="text-sm text-gray-500">Tech Event</p>
                <h3 className="text-xl font-bold">Future Front 2025</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm text-gray-500">Date</p>
                  <p className="font-medium">Jul 15, 2025</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Time</p>
                  <p className="font-medium">06:00 PM</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Check In Time</p>
                  <p className="font-medium">05:45 PM</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Ticket ID</p>
                  <p className="font-medium">{ticketId}</p>
                </div>
                <div className="col-span-2">
                  <p className="text-sm text-gray-500">Place</p>
                  <p className="font-medium">San Francisco, CA</p>
                </div>
                <div className="col-span-2">
                  <p className="text-sm text-gray-500">Attendee</p>
                  <p className="font-medium">{user?.user_metadata?.full_name || 'Guest'}</p>
                </div>
                <div className="col-span-2">
                  <p className="text-sm text-gray-500">Ticket Type</p>
                  <p className="font-medium">{user?.user_metadata?.ticket_type || 'Standard'}</p>
                </div>
              </div>
              
              {/* Barcode section */}
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <Barcode value={barcode} width={300} height={80} />
              </div>
              
              <button 
                onClick={handleDownload}
                className="w-full p-3 mt-6 bg-[#F94F4F] text-white rounded-lg font-medium hover:bg-red-600 transition-colors"
              >
                DOWNLOAD E-TICKET
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <button 
            onClick={() => router.push('/')}
            className="px-6 py-3 border border-gray-300 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            BACK TO HOME
          </button>
        </div>
      </div>
    </div>
  );
};

export default withAuth(ETicketPage);