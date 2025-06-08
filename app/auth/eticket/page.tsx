'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { generateBarcodeNumber } from '@/lib/barcode';


export default function ETicketPage() {
  const [ticketData, setTicketData] = useState({
    eventName: 'Future Front 2025',
    eventType: 'Tech Event',
    date: 'Jul 15, 2025',
    time: '06:00 PM',
    checkInTime: '05:45 PM',
    ticketId: '34587214578',
    place: 'San Francisco, CA',
    barcode: ''
  });

  const router = useRouter();


  useEffect(() => {
    // Generate a barcode when the component mounts
    const barcode = generateBarcodeNumber(12);
    setTicketData(prev => ({
      ...prev,
      barcode,
      // You could also update the ticketId based on the barcode
      ticketId: barcode.substring(0, 11)
    }));
  }, []);

  
  const handleDownload = () => {
    window.print();
    // In a real application, you might generate a PDF here

    router.push("/")
  };

  return (
    <div className="flex h-screen bg-white text-black">
      {/* Left side with the background image - using same style as register/payment pages */}
      <div className="hidden md:block md:w-1/2 relative">
        <Image 
          src="/general-background.svg" 
          alt="Event Background" 
          fill 
          style={{objectFit: 'cover'}}
          priority
        />
      </div>

      {/* Right side with the ticket */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="flex justify-center mb-5">
            <Image 
              src="/main-logo.svg" 
              alt="Logo" 
              width={70} 
              height={70}
            />
          </div>

          {/* Ticket content */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Ticket Header */}
            <div className="text-center p-3 border-b">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-1">
                <svg className="w-5 h-5 text-[#F94F4F]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 6a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 100 4v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2a2 2 0 100-4V6z"></path>
                </svg>
              </div>
              <h2 className="text-xl font-bold">Your Ticket</h2>
            </div>
            
            {/* Blue box for event image - kept as requested */}
            <div className="p-4">
              <div className="bg-blue-500 rounded-lg h-32 flex items-center justify-center">
                <span className="text-white text-lg font-medium">Event Image</span>
              </div>
            </div>
            
            {/* Event information - More compact */}
            <div className="p-4 bg-gray-50 border-t border-b border-gray-200">
              <div className="mb-2">
                <p className="text-xs text-gray-500">Tech Event</p>
                <h3 className="text-lg font-bold">Future Front 2025</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <p className="text-xs text-gray-500">Date</p>
                  <p className="font-medium">Jul 15, 2025</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Time</p>
                  <p className="font-medium">06:00 PM</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Check In</p>
                  <p className="font-medium">05:45 PM</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Ticket ID</p>
                  <p className="font-medium text-xs">{ticketData.ticketId}</p>
                </div>
                <div className="col-span-2">
                  <p className="text-xs text-gray-500">Place</p>
                  <p className="font-medium">San Francisco, CA</p>
                </div>
              </div>
            </div>
            
            {/* Barcode section - Smaller */}
            <div className="mt-4 p-3 bg-gray-50 rounded-lg mx-4">
              <div className="barcode-container flex justify-center items-center bg-white p-3">
                {ticketData.barcode && (
                  <svg
                    width="100%"
                    height="80"
                    viewBox="0 0 360 80"
                    className="barcode"
                  >
                    {/* Background */}
                    <rect x="0" y="0" width="360" height="80" fill="white" />
                    
                    {/* Draw the barcode lines with varying widths and spacing */}
                    {Array.from({ length: 48 }).map((_, i) => {
                      const x = 20 + i * 6.5;
                      const value = parseInt(ticketData.barcode[i % ticketData.barcode.length], 10);
                      const width = 1.5 + (value % 2.5);
                      const height = 45 + (value % 12);
                      return (
                        <rect
                          key={i}
                          x={x}
                          y={10}
                          width={width}
                          height={height}
                          fill="black"
                        />
                      );
                    })}
                  </svg>
                )}
              </div>
            </div>
            
            {/* Download button */}
            <div className="p-4">
              <button 
                onClick={handleDownload}
                className="w-full p-2.5 bg-[#F94F4F] text-white rounded-lg font-medium hover:bg-red-600 transition-colors"
              >
                DOWNLOAD E-TICKET
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}