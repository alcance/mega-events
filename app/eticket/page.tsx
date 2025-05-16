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
  };

  return (
    <div className="flex h-screen bg-white text-black">
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

      {/* Right side ticket container */}
      <div className="w-full md:w-1/2 h-screen flex justify-center items-center p-4 text-black">
        <div className="w-full max-w-md">
          {/* Ticket content */}
          <div className="flex flex-col items-center text-black">
            {/* Ticket icon */}
            <div className="text-center mb-2">
              <div className="inline-block bg-red-100 rounded-full p-2">
                <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 6a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 100 4v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2a2 2 0 100-4V6z"></path>
                </svg>
              </div>
            </div>
            
            <h2 className="text-lg font-bold mb-4 text-black">Your Ticket</h2>
            
            {/* Event info box */}
            <div className="bg-gray-50 rounded-lg w-full mb-4 text-black">
              <div className="px-4 pt-4 pb-2">
                <p className="text-xs text-black">Tech Event</p>
                <h3 className="text-lg font-bold text-black">Future Front 2025</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-x-4 px-4 pb-2">
                <div>
                  <p className="text-xs text-black">Date</p>
                  <p className="text-sm font-medium text-black">Jul 15, 2025</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-black">Time</p>
                  <p className="text-sm font-medium text-black">06:00 PM</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-x-4 px-4 pb-2">
                <div>
                  <p className="text-xs text-black">Check In Time</p>
                  <p className="text-sm font-medium text-black">05:45 PM</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-black">Ticket ID</p>
                  <p className="text-sm font-medium text-black">34587214578</p>
                </div>
              </div>
              
              <div className="px-4 pb-4">
                <p className="text-xs text-black">Place</p>
                <p className="text-sm font-medium text-black">San Francisco, CA</p>
              </div>
            </div>
            
            {/* Barcode container */}
            <div className="w-full border border-gray-200 rounded-lg p-4 mb-4">
              {ticketData.barcode && (
                <svg
                  width="100%"
                  height="70"
                  viewBox="0 0 400 80"
                  className="barcode"
                >
                  {/* Background */}
                  <rect x="0" y="0" width="400" height="80" fill="white" />
                  
                  {/* Draw the barcode lines with varying widths and spacing */}
                  {Array.from({ length: 48 }).map((_, i) => {
                    const x = 20 + i * 7.5;
                    const value = parseInt(ticketData.barcode[i % ticketData.barcode.length], 10);
                    const width = 2 + (value % 3); // Vary width based on digit
                    const height = 50 + (value % 15); // Vary height slightly
                    return (
                      <rect
                        key={i}
                        x={x}
                        y={5}
                        width={width}
                        height={height}
                        fill="black"
                      />
                    );
                  })}
                </svg>
              )}
            </div>
            
            {/* Download button */}
            <button 
              onClick={handleDownload}
              className="w-full py-3 bg-red-500 text-white rounded-lg font-medium hover:bg-red-600 transition-colors"
            >
              DOWNLOAD E - TICKET
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}