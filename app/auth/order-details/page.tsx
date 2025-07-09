'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useRegistration } from '@/lib/contexts/RegistrationContext';
import { RegistrationService } from '@/lib/registrationService';

export default function OrderDetailsPage() {
  const router = useRouter();
  const { 
    state, 
    setOrderData, 
    nextStep, 
    prevStep, 
    setLoading, 
    setError 
  } = useRegistration();

  const [isProcessing, setIsProcessing] = useState(false);

  const generateOrderId = () => {
    return 'ORD-' + Date.now().toString().slice(-8) + Math.random().toString(36).substr(2, 4).toUpperCase();
  };

  const handleConfirmOrder = async () => {
    setIsProcessing(true);
    setLoading(true);
    setError(null);

    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Create order data
      const orderId = generateOrderId();
      const orderData = {
        orderId,
        status: 'completed' as const,
        createdAt: new Date(),
        paymentStatus: 'completed' as const
      };

      // Save order data to context
      setOrderData(orderData);

      // Update payment status in Supabase (if we have registration data)
      if (state.registrationId) {
        console.log('🔄 Updating payment status in Supabase...');
        const paymentUpdated = await RegistrationService.updatePaymentStatus(
          state.registrationId,
          orderId,
          'completed'
        );
        
        if (!paymentUpdated) {
          console.warn('⚠️ Could not update payment status in database');
          // Don't fail the flow - user still gets their ticket
        }
      }

      // Move to next step
      nextStep();
      router.push('/auth/confirmation');

    } catch (error) {
      setError('Order processing failed. Please try again.');
      console.error('Order error:', error);
    } finally {
      setIsProcessing(false);
      setLoading(false);
    }
  };

  const handleBack = () => {
    prevStep();
    if (state.paymentData.method === 'credit') {
      router.push('/auth/card-details');
    } else {
      router.push('/auth/payment');
    }
  };

  const orderSummary = [
    { label: 'Ticket Type', value: state.ticketData.ticketType.charAt(0).toUpperCase() + state.ticketData.ticketType.slice(1) },
    { label: 'Quantity', value: state.ticketData.quantity.toString().padStart(2, '0') },
    { label: 'Unit Price', value: `$${state.ticketData.price}` },
    { label: 'Sub-Total', value: `$${(state.ticketData.price * state.ticketData.quantity).toFixed(2)}` },
    { label: 'Processing Fee', value: `$${state.ticketData.fees.toFixed(2)}` },
  ];

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

      {/* Right side with the order details */}
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

          <h1 className="text-2xl font-bold text-center mb-6">Review Your Order</h1>

          {state.error && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md text-sm">
              {state.error}
            </div>
          )}

          {/* Customer Information */}
          <div className="mb-6">
            <h2 className="text-lg font-medium mb-3">Customer Information</h2>
            <div className="bg-gray-50 rounded-lg p-4 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Name:</span>
                <span className="font-medium">{state.userData.fullName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Email:</span>
                <span className="font-medium">{state.userData.email}</span>
              </div>
              {state.userData.phone && (
                <div className="flex justify-between">
                  <span className="text-gray-600">Phone:</span>
                  <span className="font-medium">{state.userData.phone}</span>
                </div>
              )}
              {state.userData.company && (
                <div className="flex justify-between">
                  <span className="text-gray-600">Company:</span>
                  <span className="font-medium">{state.userData.company}</span>
                </div>
              )}
            </div>
          </div>

          {/* Order Summary */}
          <div className="mb-6">
            <h2 className="text-lg font-medium mb-3">Order Summary</h2>
            
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              {orderSummary.map((item, index) => (
                <div 
                  key={index} 
                  className={`flex justify-between py-2 ${
                    index !== orderSummary.length - 1 ? 'border-b border-gray-200' : ''
                  }`}
                >
                  <span className="text-gray-600">{item.label}</span>
                  <span className="font-medium">{item.value}</span>
                </div>
              ))}
              
              {/* Total Amount */}
              <div className="flex justify-between py-3 mt-3 border-t border-gray-300 text-lg font-bold">
                <span>Total Amount</span>
                <span className="text-[#F94F4F]">${state.ticketData.totalAmount.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* Payment Information */}
          <div className="mb-6">
            <h2 className="text-lg font-medium mb-3">Payment Method</h2>
            <div className="bg-gray-50 rounded-lg p-4 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Method:</span>
                <span className="font-medium capitalize">
                  {state.paymentData.method === 'credit' ? 'Credit/Debit Card' :
                   state.paymentData.method === 'apple' ? 'Apple Pay' :
                   state.paymentData.method === 'google' ? 'Google Pay' :
                   'PayPal'}
                </span>
              </div>
              {state.paymentData.method === 'credit' && state.paymentData.cardNumber && (
                <div className="flex justify-between mt-2">
                  <span className="text-gray-600">Card:</span>
                  <span className="font-medium">**** **** **** {state.paymentData.cardNumber.slice(-4)}</span>
                </div>
              )}
            </div>
          </div>

          {/* Processing indicator */}
          {isProcessing && (
            <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600 mr-3"></div>
                <span className="text-blue-700">Processing your order...</span>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="space-y-3">
            <button 
              onClick={handleConfirmOrder}
              disabled={isProcessing || state.isLoading}
              className="w-full p-3 bg-[#F94F4F] text-white rounded-md font-medium hover:bg-red-600 transition-colors disabled:opacity-50"
            >
              {isProcessing ? 'Processing Order...' : 'Confirm & Pay'}
            </button>
            
            <button 
              onClick={handleBack}
              disabled={isProcessing || state.isLoading}
              className="w-full p-3 border border-gray-300 text-black rounded-md font-medium hover:bg-gray-100 transition-colors"
            >
              Back to {state.paymentData.method === 'credit' ? 'Card Details' : 'Payment Method'}
            </button>
          </div>

          {/* Security Notice */}
          <div className="mt-6 text-center text-xs text-gray-500">
            <p>🔒 Your payment information is secure and encrypted</p>
            <p>By confirming, you agree to our Terms of Service and Privacy Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
}