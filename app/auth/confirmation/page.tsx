'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useRegistration } from '@/lib/contexts/RegistrationContext';
import { generateBarcodeNumber } from '@/lib/barcode';
import { RegistrationService } from '@/lib/registrationService';

export default function ConfirmationPage() {
  const router = useRouter();
  const { 
    state, 
    setETicketData, 
    nextStep,
    resetFlow 
  } = useRegistration();

  useEffect(() => {
    // Generate e-ticket data when component mounts
    const generateETicket = async () => {
      const barcode = generateBarcodeNumber(12);
      const ticketId = 'TKT-' + Date.now().toString().slice(-8);
      
      const eTicketData = {
        ticketId,
        barcode,
        qrCode: barcode, // In a real app, you might generate a separate QR code
        eventName: 'Future Front 2025',
        eventDate: 'Jul 15, 2025',
        eventTime: '06:00 PM',
        venue: 'San Francisco, CA',
        checkInTime: '05:45 PM',
        issuedAt: new Date()
      };

      // Save e-ticket to context
      setETicketData(eTicketData);

      // Save e-ticket to Supabase (if we have user data)
      if (state.userId && state.registrationId) {
        console.log('🎫 Creating e-ticket in Supabase...');
        const eTicketCreated = await RegistrationService.createETicket(
          state.userId,
          state.registrationId,
          {
            ticketId,
            barcode,
            qrCode: barcode,
            eventName: 'Future Front 2025',
            eventDate: 'Jul 15, 2025',
            eventTime: '06:00 PM',
            venue: 'San Francisco, CA',
            checkInTime: '05:45 PM'
          }
        );

        if (!eTicketCreated) {
          console.warn('⚠️ Could not save e-ticket to database');
          // Don't fail the flow - user still gets their ticket displayed
        } else {
          console.log('✅ E-ticket saved to database and linked to user');
        }
      } else {
        console.warn('⚠️ No user/registration data available for e-ticket linking');
        // Still proceed with the flow
      }
    };

    if (state.orderData && !state.eTicketData) {
      generateETicket();
    }
  }, [state.orderData, state.eTicketData, state.userId, state.registrationId, setETicketData]);

  const handleViewETicket = () => {
    nextStep();
    router.push('/auth/eticket');
  };

  const handleBackToHome = () => {
    resetFlow();
    router.push('/');
  };

  // Redirect if no order data
  if (!state.orderData) {
    router.push('/auth/register');
    return null;
  }

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

      {/* Right side with the confirmation */}
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

          {/* Success Animation/Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>

          <h1 className="text-2xl font-bold text-center mb-2">Payment Successful!</h1>
          <p className="text-center text-gray-600 mb-6">
            Your registration has been confirmed. Get ready for an amazing event!
          </p>
          
          {/* Order Confirmation Details */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-5 mb-6">
            <h3 className="font-medium text-green-800 mb-3">Order Confirmation</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-green-700">Order ID:</span>
                <span className="font-medium text-green-900">{state.orderData.orderId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-green-700">Amount Paid:</span>
                <span className="font-medium text-green-900">${state.ticketData.totalAmount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-green-700">Payment Status:</span>
                <span className="font-medium text-green-900 capitalize">{state.orderData.paymentStatus}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-green-700">Date:</span>
                <span className="font-medium text-green-900">
                  {state.orderData.createdAt.toLocaleDateString()}
                </span>
              </div>
            </div>
          </div>

          {/* Email Notification */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
            <div className="flex items-start">
              <div className="p-2 bg-blue-100 rounded-md mr-3">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-blue-800">Confirmation Email Sent</p>
                <p className="text-sm text-blue-700 mt-1">
                  We've sent your ticket and event details to:
                </p>
                <p className="font-medium text-blue-900 mt-1">
                  {state.userData.email}
                </p>
              </div>
            </div>
          </div>

          {/* Event Details Summary */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <h3 className="font-medium mb-3">Event Details</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Event:</span>
                <span className="font-medium">Future Front 2025</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Date:</span>
                <span className="font-medium">Jul 15, 2025</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Time:</span>
                <span className="font-medium">06:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Location:</span>
                <span className="font-medium">San Francisco, CA</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Ticket Type:</span>
                <span className="font-medium capitalize">{state.ticketData.ticketType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Quantity:</span>
                <span className="font-medium">{state.ticketData.quantity}</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button 
              onClick={handleViewETicket}
              className="w-full p-3 bg-[#F94F4F] text-white rounded-lg font-medium hover:bg-red-600 transition-colors"
            >
              VIEW E-TICKET
            </button>
            
            <button 
              onClick={handleBackToHome}
              className="w-full p-3 border border-gray-300 text-black rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              BACK TO HOME
            </button>
          </div>

          {/* Support Information */}
          <div className="mt-6 text-center text-sm text-gray-500">
            <p>Need help? Contact us at:</p>
            <p className="text-gray-600 font-medium">support@megaevents.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
