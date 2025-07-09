'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useRegistration } from '@/lib/contexts/RegistrationContext';

type PaymentMethod = 'credit' | 'apple' | 'google' | 'paypal';

export default function PaymentPage() {
  const router = useRouter();
  const { 
    state, 
    setPaymentData, 
    nextStep, 
    prevStep, 
    setLoading, 
    setError 
  } = useRegistration();

  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod>(state.paymentData.method);

  const handlePaymentMethodChange = (method: PaymentMethod) => {
    setSelectedMethod(method);
  };

  const handleContinue = async () => {
    setLoading(true);
    setError(null);

    try {
      // Save payment method to context
      setPaymentData({
        method: selectedMethod
      });

      // For non-credit card methods, we might skip card details
      if (selectedMethod === 'credit') {
        nextStep();
        router.push('/auth/card-details');
      } else {
        // For digital wallets, simulate payment processing
        // In a real app, you'd integrate with Apple Pay, Google Pay, PayPal APIs
        await simulateDigitalPayment(selectedMethod);
        
        // Skip card details and go directly to order processing
        nextStep(); // to card details step
        nextStep(); // to order details step
        router.push('/auth/order-details');
      }
    } catch (error) {
      setError('Payment method selection failed');
      console.error('Payment error:', error);
    } finally {
      setLoading(false);
    }
  };

  const simulateDigitalPayment = async (method: PaymentMethod) => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Set payment data for digital wallets
    setPaymentData({
      method,
      cardNumber: 'Digital Wallet',
      expiryDate: 'N/A',
      cvv: 'N/A',
      cardholderName: state.userData.fullName
    });
  };

  const handleBack = () => {
    prevStep();
    router.push('/auth/register');
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

      {/* Right side with the form */}
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

          <h1 className="text-2xl font-bold text-center mb-2">Complete Your Payment</h1>
          <p className="text-center text-gray-600 mb-6">
            Use our secure checkout system to finalize your ticket.
          </p>

          {state.error && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md text-sm">
              {state.error}
            </div>
          )}

          {/* Order Summary */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6 border border-gray-200">
            <h3 className="font-medium mb-3">Order Summary</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Ticket Type:</span>
                <span className="capitalize">{state.ticketData.ticketType}</span>
              </div>
              <div className="flex justify-between">
                <span>Quantity:</span>
                <span>{state.ticketData.quantity}</span>
              </div>
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>${(state.ticketData.price * state.ticketData.quantity).toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Processing Fee:</span>
                <span>${state.ticketData.fees.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-semibold text-base border-t pt-2">
                <span>Total:</span>
                <span>${state.ticketData.totalAmount.toFixed(2)}</span>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-lg font-medium mb-4">Choose Payment Method</h2>
            
            <div className="space-y-3">
              {/* Credit/Debit Card Option */}
              <div 
                className={`flex items-center justify-between p-4 rounded-md border cursor-pointer ${
                  selectedMethod === 'credit' 
                    ? 'border-[#F94F4F] bg-red-50' 
                    : 'border-gray-200 bg-gray-50'
                }`}
                onClick={() => handlePaymentMethodChange('credit')}
              >
                <div className="flex items-center">
                  <div className="p-2 bg-gray-100 rounded-md mr-3">
                    <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"></path>
                    </svg>
                  </div>
                  <span className="font-medium">Credit/Debit Card</span>
                </div>
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                  selectedMethod === 'credit' 
                    ? 'border-[#F94F4F] bg-[#F94F4F]' 
                    : 'border-gray-300'
                }`}>
                  {selectedMethod === 'credit' && (
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  )}
                </div>
              </div>

              {/* Apple Pay Option */}
              <div 
                className={`flex items-center justify-between p-4 rounded-md border cursor-pointer ${
                  selectedMethod === 'apple' 
                    ? 'border-[#F94F4F] bg-red-50' 
                    : 'border-gray-200 bg-gray-50'
                }`}
                onClick={() => handlePaymentMethodChange('apple')}
              >
                <div className="flex items-center">
                  <div className="p-2 bg-gray-100 rounded-md mr-3">
                    <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"/>
                    </svg>
                  </div>
                  <span className="font-medium">Apple Pay</span>
                </div>
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                  selectedMethod === 'apple' 
                    ? 'border-[#F94F4F] bg-[#F94F4F]' 
                    : 'border-gray-300'
                }`}>
                  {selectedMethod === 'apple' && (
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  )}
                </div>
              </div>

              {/* Google Pay Option */}
              <div 
                className={`flex items-center justify-between p-4 rounded-md border cursor-pointer ${
                  selectedMethod === 'google' 
                    ? 'border-[#F94F4F] bg-red-50' 
                    : 'border-gray-200 bg-gray-50'
                }`}
                onClick={() => handlePaymentMethodChange('google')}
              >
                <div className="flex items-center">
                  <div className="p-2 bg-gray-100 rounded-md mr-3">
                    <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.56,12.25C22.56,13.97 22.45,15.54 22.25,17.05H12.26V9.26H17.92C17.66,8.09 16.84,6.67 15.25,5.73V8.84H18.92C21.09,6.89 22.56,4.83 22.56,2.25V12.25Z"/>
                      <path d="M12.26,22C15.48,22 18.16,20.92 20.09,19.09L16.42,16.59C15.31,17.33 13.92,17.75 12.26,17.75C9.16,17.75 6.57,15.81 5.63,13.06H1.89V16.24C3.96,20.34 7.7,22 12.26,22Z"/>
                      <path d="M5.63,13.06C5.37,12.32 5.26,11.53 5.26,10.75C5.26,9.97 5.37,9.18 5.63,8.44V5.26H1.89C1.18,6.67 0.75,8.17 0.75,9.75C0.75,11.33 1.18,12.83 1.89,14.24L5.63,13.06Z"/>
                      <path d="M12.26,3.75C14.03,3.75 15.56,4.38 16.76,5.53L20.07,2.22C18.16,0.46 15.48,-0.75 12.26,-0.75C7.7,-0.75 3.96,1.41 1.89,5.51L5.63,8.69C6.57,5.94 9.16,3.75 12.26,3.75Z"/>
                    </svg>
                  </div>
                  <span className="font-medium">Google Pay</span>
                </div>
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                  selectedMethod === 'google' 
                    ? 'border-[#F94F4F] bg-[#F94F4F]' 
                    : 'border-gray-300'
                }`}>
                  {selectedMethod === 'google' && (
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  )}
                </div>
              </div>

              {/* PayPal Option */}
              <div 
                className={`flex items-center justify-between p-4 rounded-md border cursor-pointer ${
                  selectedMethod === 'paypal' 
                    ? 'border-[#F94F4F] bg-red-50' 
                    : 'border-gray-200 bg-gray-50'
                }`}
                onClick={() => handlePaymentMethodChange('paypal')}
              >
                <div className="flex items-center">
                  <div className="p-2 bg-gray-100 rounded-md mr-3">
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7.076,21.337H2.47a.641.641,0,0,1-.633-.74L4.944,2.28A.78.78,0,0,1,5.734,1.8H14.5a6.948,6.948,0,0,1,5.564,2.559,6.379,6.379,0,0,1,.466,5.620,6.962,6.962,0,0,1-5.673,4.293L14.8,14.3a.78.78,0,0,1,.733.553,9.861,9.861,0,0,1,.24,3.694c-.433,2.749-.95,2.749-.95,2.749s-6.628.036-7.747.036M15.266,7.2a2.5,2.5,0,0,0-1.633-.566H10.168L9.1,12.257h3.469a3.062,3.062,0,0,0,2.732-1.4,2.53,2.53,0,0,0-.035-3.659"/>
                    </svg>
                  </div>
                  <span className="font-medium">PayPal</span>
                </div>
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                  selectedMethod === 'paypal' 
                    ? 'border-[#F94F4F] bg-[#F94F4F]' 
                    : 'border-gray-300'
                }`}>
                  {selectedMethod === 'paypal' && (
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <button 
              onClick={handleContinue}
              disabled={state.isLoading}
              className="w-full p-3 bg-[#F94F4F] text-white rounded-md font-medium hover:bg-red-600 transition-colors disabled:opacity-50"
            >
              {state.isLoading ? 'Processing...' : 
                selectedMethod === 'credit' ? 'Continue to Card Details' : 
                `Pay with ${selectedMethod === 'apple' ? 'Apple Pay' : 
                          selectedMethod === 'google' ? 'Google Pay' : 'PayPal'}`
              }
            </button>
            
            <button 
              onClick={handleBack}
              disabled={state.isLoading}
              className="w-full p-3 border border-gray-300 text-black rounded-md font-medium hover:bg-gray-100 transition-colors"
            >
              Back to Registration
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

