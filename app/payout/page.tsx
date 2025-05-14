'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

// Define a type for the payment method
type PaymentMethod = 'credit' | 'apple' | 'google' | 'paypal';

const PaymentMethodSelection = () => {
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod>('credit');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  
  const router = useRouter();
  
  const handlePaymentMethodChange = (method: PaymentMethod) => {
    setSelectedMethod(method);
  };
  
  const handleSubmit = () => {
    setIsLoading(true);
    // Simulating payment processing
    setTimeout(() => {
      router.push('/order-details');
      setIsLoading(false);
    }, 2000);
  };

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
          <p className="text-center text-gray-400 mb-6">
            Use our secure checkout system to finalize your ticket.
          </p>

          <div className="mb-6">
            <h2 className="text-lg font-medium mb-4">Choose Payment Method</h2>
            
            <div className="space-y-3">
              {/* Credit/Debit Card Option */}
              <div 
                className={`flex items-center justify-between p-4 rounded-md border ${
                  selectedMethod === 'credit' 
                    ? 'border-red-500 bg-red-500 bg-opacity-10' 
                    : 'border-gray-700 bg-gray-800'
                }`}
                onClick={() => handlePaymentMethodChange('credit')}
              >
                <div className="flex items-center">
                  <div className="p-2 bg-gray-700 rounded-md mr-3">
                    <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"></path>
                    </svg>
                  </div>
                  <span className="font-medium">Credit/Debit Card</span>
                </div>
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                  selectedMethod === 'credit' 
                    ? 'border-red-500' 
                    : 'border-gray-500'
                }`}>
                  {selectedMethod === 'credit' && (
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  )}
                </div>
              </div>

              {/* Apple Pay Option */}
              <div 
                className={`flex items-center justify-between p-4 rounded-md border ${
                  selectedMethod === 'apple' 
                    ? 'border-red-500 bg-red-500 bg-opacity-10' 
                    : 'border-gray-700 bg-gray-800'
                }`}
                onClick={() => handlePaymentMethodChange('apple')}
              >
                <div className="flex items-center">
                  <div className="p-2 bg-gray-700 rounded-md mr-3">
                    <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                  </div>
                  <span className="font-medium">Apple Pay</span>
                </div>
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                  selectedMethod === 'apple' 
                    ? 'border-red-500' 
                    : 'border-gray-500'
                }`}>
                  {selectedMethod === 'apple' && (
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  )}
                </div>
              </div>

              {/* Google Pay Option */}
              <div 
                className={`flex items-center justify-between p-4 rounded-md border ${
                  selectedMethod === 'google' 
                    ? 'border-red-500 bg-red-500 bg-opacity-10' 
                    : 'border-gray-700 bg-gray-800'
                }`}
                onClick={() => handlePaymentMethodChange('google')}
              >
                <div className="flex items-center">
                  <div className="p-2 bg-gray-700 rounded-md mr-3">
                    <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 24C5.38 24 0 18.62 0 12S5.38 0 12 0s12 5.38 12 12-5.38 12-12 12zm0-22C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-4.38 12.81l7.09-7.09 1.41 1.41-8.5 8.5-4.18-4.18 1.41-1.41 2.77 2.77z"></path>
                    </svg>
                  </div>
                  <span className="font-medium">Google Pay</span>
                </div>
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                  selectedMethod === 'google' 
                    ? 'border-red-500' 
                    : 'border-gray-500'
                }`}>
                  {selectedMethod === 'google' && (
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  )}
                </div>
              </div>

              {/* PayPal Option */}
              <div 
                className={`flex items-center justify-between p-4 rounded-md border ${
                  selectedMethod === 'paypal' 
                    ? 'border-red-500 bg-red-500 bg-opacity-10' 
                    : 'border-gray-700 bg-gray-800'
                }`}
                onClick={() => handlePaymentMethodChange('paypal')}
              >
                <div className="flex items-center">
                  <div className="p-2 bg-gray-700 rounded-md mr-3">
                    <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.067 8.478c.492.88.556 2.014.3 3.327-.74 3.806-3.276 5.12-6.514 5.12h-.5a.805.805 0 0 0-.794.68l-.04.22-.63 4.028-.02.12a.804.804 0 0 1-.794.68h-2.52a.67.67 0 0 1-.66-.78l1.16-7.33v-.04a.804.804 0 0 1 .795-.68h1.677c4.525 0 7.67-2.007 8.648-6.485.30-1.374.262-2.468-.31-3.358-.18-.277-.444-.52-.772-.736.738.916 1.06 2.218.697 3.867-.798 4.04-3.494 6.147-7.622 6.147H9.54a.67.67 0 0 0-.66.78l1.1 6.977a.796.796 0 0 0 .785.68h2.386c.248 0 .458-.18.495-.424l.02-.12.583-3.68.038-.202a.803.803 0 0 1 .794-.682h.5c3.07 0 5.53-1.426 6.23-5.022.32-1.29.16-2.358-.307-3.139z"></path>
                    </svg>
                  </div>
                  <span className="font-medium">Pay Pal</span>
                </div>
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                  selectedMethod === 'paypal' 
                    ? 'border-red-500' 
                    : 'border-gray-500'
                }`}>
                  {selectedMethod === 'paypal' && (
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <button 
            type="button"
            className="w-full p-3 mt-6 bg-red-500 text-white rounded-lg font-medium"
            onClick={handleSubmit}
            disabled={isLoading}
          >
            {isLoading ? 'PROCESSING...' : 'NEXT'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethodSelection;