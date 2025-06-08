'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

type OrderSummaryItem = {
  label: string;
  value: string | number;
};

const OrderDetails = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  
  // Sample order data
  const orderSummary: OrderSummaryItem[] = [
    { label: 'Ticket Price', value: '$229' },
    { label: 'Ticket Type', value: 'VIP Pass' },
    { label: 'Quantity', value: '02' },
    { label: 'Sub - Total', value: '$229' },
    { label: 'Fees', value: '$20' },
  ];
  
  const totalAmount = '$249';

  const handlePayment = () => {
    setIsLoading(true);
    // Simulate payment processing delay
    setTimeout(() => {
      // Redirect to the confirmation page after payment
      router.push('/confirmation');
      setIsLoading(false);
    }, 1500);
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

      {/* Right side with the order details */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="flex justify-center mb-6">
            {/* Logo */}
            <Image 
              src="/main-logo.svg" 
              alt="Logo" 
              width={80} 
              height={80}
            />
          </div>

          <h1 className="text-2xl font-bold text-center mb-6">Your Order</h1>
          
          <div className="mb-6">
            <h2 className="text-lg font-medium mb-4">Order Summary</h2>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-6 border border-gray-200">
              {orderSummary.slice(0, 3).map((item, index) => (
                <div 
                  key={index} 
                  className={`flex justify-between py-2 ${
                    index !== orderSummary.length - 1 ? '' : ''
                  }`}
                >
                  <span className="text-gray-600">{item.label}</span>
                  <span className="font-medium">{item.value}</span>
                </div>
              ))}
              
              <div className="border-t border-gray-200 my-4"></div>
              
              {orderSummary.slice(3).map((item, index) => (
                <div 
                  key={index + 3} 
                  className="flex justify-between py-2"
                >
                  <span className="text-gray-600">{item.label}</span>
                  <span className="font-medium">{item.value}</span>
                </div>
              ))}
            </div>
            
            <div className="flex justify-between py-3 text-lg">
              <span className="font-medium">Total</span>
              <span className="font-bold">{totalAmount}</span>
            </div>
          </div>

          <button 
            type="button"
            onClick={handlePayment}
            disabled={isLoading}
            className="w-full p-3 mt-6 bg-[#F94F4F] text-white rounded-lg font-medium hover:bg-red-600 transition-colors disabled:opacity-75"
          >
            {isLoading ? 'PROCESSING...' : `PAY ${totalAmount}`}
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;