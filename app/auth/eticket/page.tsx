'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useRegistration } from '@/lib/contexts/RegistrationContext';
import Barcode from '@/components/barcode';

export default function ETicketPage() {
  const router = useRouter();
  const { state, resetFlow } = useRegistration();

  // Redirect if no e-ticket data
  if (!state.eTicketData) {
    router.push('/auth/register');
    return null;
  }

  const handleDownload = () => {
    // Trigger print dialog for PDF generation
    window.print();
  };

  const handleNewTicket = () => {
    resetFlow();
    router.push('/auth/register');
  };

  const handleBackToHome = () => {
    resetFlow();
    router.push('/');
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

      {/* Right side with the ticket */}
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

          <h1 className="text-2xl font-bold text-center mb-6">Your E-Ticket</h1>

          {/* E-Ticket Design */}
          <div className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden mb-6 shadow-lg" id="ticket-container">
            {/* Ticket Header */}
            <div className="bg-gradient-to-r from-[#F94F4F] to-red-600 text-white p-4">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-lg font-bold">{state.eTicketData.eventName}</h2>
                  <p className="text-red-100 text-sm">{state.ticketData.ticketType.toUpperCase()} PASS</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-red-100">Ticket ID</p>
                  <p className="font-mono text-sm">{state.eTicketData.ticketId}</p>
                </div>
              </div>
            </div>

            {/* Ticket Body */}
            <div className="p-6">
              {/* Attendee Information */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-800 mb-2">Attendee Information</h3>
                <div className="space-y-1 text-sm">
                  <p><span className="text-gray-600">Name:</span> <span className="font-medium">{state.userData.fullName}</span></p>
                  <p><span className="text-gray-600">Email:</span> <span className="font-medium">{state.userData.email}</span></p>
                  {state.userData.company && (
                    <p><span className="text-gray-600">Company:</span> <span className="font-medium">{state.userData.company}</span></p>
                  )}
                </div>
              </div>

              {/* Event Information */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-800 mb-2">Event Information</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-600">Date</p>
                    <p className="font-medium">{state.eTicketData.eventDate}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Time</p>
                    <p className="font-medium">{state.eTicketData.eventTime}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Check-in</p>
                    <p className="font-medium">{state.eTicketData.checkInTime}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Venue</p>
                    <p className="font-medium">{state.eTicketData.venue}</p>
                  </div>
                </div>
              </div>

              {/* Barcode Section */}
              <div className="border-t border-gray-200 pt-4">
                <h3 className="font-semibold text-gray-800 mb-3 text-center">Admission Barcode</h3>
                <div className="flex justify-center mb-2">
                  <Barcode value={state.eTicketData.barcode} />
                </div>
                <p className="text-center font-mono text-xs text-gray-600">
                  {state.eTicketData.barcode}
                </p>
              </div>

              {/* QR Code (if available) */}
              {state.eTicketData.qrCode && (
                <div className="mt-4 text-center">
                  <p className="text-xs text-gray-500 mb-2">Quick Check-in QR Code</p>
                  <div className="flex justify-center">
                    {/* In a real app, you'd use a QR code library */}
                    <div className="w-16 h-16 bg-gray-200 border border-gray-300 flex items-center justify-center text-xs text-gray-500">
                      QR Code
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Ticket Footer */}
            <div className="bg-gray-50 px-6 py-3 border-t border-gray-200">
              <div className="flex justify-between items-center text-xs text-gray-500">
                <span>Order: {state.orderData?.orderId}</span>
                <span>Issued: {state.eTicketData.issuedAt.toLocaleDateString()}</span>
              </div>
            </div>
          </div>

          {/* Important Notes */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
            <h3 className="font-medium text-yellow-800 mb-2">Important Notes</h3>
            <ul className="text-sm text-yellow-700 space-y-1">
              <li>• Please arrive at least 15 minutes before check-in time</li>
              <li>• Bring a valid photo ID for verification</li>
              <li>• This ticket is non-transferable and non-refundable</li>
              <li>• Keep this e-ticket accessible on your mobile device</li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button 
              onClick={handleDownload}
              className="w-full p-3 bg-[#F94F4F] text-white rounded-lg font-medium hover:bg-red-600 transition-colors"
            >
              DOWNLOAD/PRINT TICKET
            </button>
            
            <div className="grid grid-cols-2 gap-3">
              <button 
                onClick={handleNewTicket}
                className="p-3 border border-gray-300 text-black rounded-lg font-medium hover:bg-gray-100 transition-colors text-sm"
              >
                Register Another
              </button>
              
              <button 
                onClick={handleBackToHome}
                className="p-3 border border-gray-300 text-black rounded-lg font-medium hover:bg-gray-100 transition-colors text-sm"
              >
                Back to Home
              </button>
            </div>
          </div>

          {/* Support Information */}
          <div className="mt-6 text-center text-sm text-gray-500">
            <p>Questions about your ticket?</p>
            <p className="text-gray-600">Contact: support@megaevents.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}