'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useRegistration } from '@/lib/contexts/RegistrationContext';

export default function CardDetailsPage() {
  const router = useRouter();
  const { 
    state, 
    setPaymentData, 
    nextStep, 
    prevStep, 
    setLoading, 
    setError 
  } = useRegistration();

  const [formData, setFormData] = useState({
    cardNumber: state.paymentData.cardNumber || '',
    expiryDate: state.paymentData.expiryDate || '',
    cvv: state.paymentData.cvv || '',
    cardholderName: state.paymentData.cardholderName || '',
    billingAddress: {
      street: state.paymentData.billingAddress?.street || '',
      city: state.paymentData.billingAddress?.city || '',
      state: state.paymentData.billingAddress?.state || '',
      zipCode: state.paymentData.billingAddress?.zipCode || '',
      country: state.paymentData.billingAddress?.country || 'US'
    }
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    if (name.startsWith('billing.')) {
      const field = name.split('.')[1];
      setFormData(prev => ({
        ...prev,
        billingAddress: {
          ...prev.billingAddress,
          [field]: value
        }
      }));
    } else {
      let formattedValue = value;
      
      // Format card number
      if (name === 'cardNumber') {
        formattedValue = value.replace(/\s/g, '').replace(/(.{4})/g, '$1 ').trim();
      }
      
      // Format expiry date
      if (name === 'expiryDate') {
        formattedValue = value.replace(/\D/g, '').replace(/^(\d{2})(\d)/, '$1/$2').substr(0, 5);
      }
      
      // Format CVV
      if (name === 'cvv') {
        formattedValue = value.replace(/\D/g, '').substr(0, 4);
      }
      
      setFormData(prev => ({
        ...prev,
        [name]: formattedValue
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Validation
    if (!formData.cardNumber || !formData.expiryDate || !formData.cvv || !formData.cardholderName) {
      setError('Please fill in all required card details');
      setLoading(false);
      return;
    }

    try {
      // Save payment data to context
      setPaymentData({
        method: state.paymentData.method,
        cardNumber: formData.cardNumber,
        expiryDate: formData.expiryDate,
        cvv: formData.cvv,
        cardholderName: formData.cardholderName,
        billingAddress: formData.billingAddress
      });

      // Move to next step
      nextStep();
      router.push('/auth/order-details');

    } catch (error) {
      setError('An unexpected error occurred');
      console.error('Payment error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleBack = () => {
    prevStep();
    router.push('/auth/payment');
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

          <h1 className="text-2xl font-bold text-center mb-2">Card Details</h1>
          <p className="text-center text-gray-600 mb-6">
            Enter your card information to complete the payment.
          </p>

          {state.error && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md text-sm">
              {state.error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Card Number *</label>
              <input 
                type="text" 
                name="cardNumber"
                placeholder="1234 5678 9012 3456" 
                className="w-full p-3 bg-gray-50 rounded-md border border-gray-200"
                value={formData.cardNumber}
                onChange={handleInputChange}
                maxLength={19}
                required
              />
            </div>
            
            <div className="flex space-x-4">
              <div className="flex-1">
                <label className="block text-sm font-medium mb-1">Expiry Date *</label>
                <input 
                  type="text" 
                  name="expiryDate"
                  placeholder="MM/YY" 
                  className="w-full p-3 bg-gray-50 rounded-md border border-gray-200"
                  value={formData.expiryDate}
                  onChange={handleInputChange}
                  maxLength={5}
                  required
                />
              </div>
              
              <div className="flex-1">
                <label className="block text-sm font-medium mb-1">CVV *</label>
                <input 
                  type="text" 
                  name="cvv"
                  placeholder="123" 
                  className="w-full p-3 bg-gray-50 rounded-md border border-gray-200"
                  value={formData.cvv}
                  onChange={handleInputChange}
                  maxLength={4}
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Cardholder Name *</label>
              <input 
                type="text" 
                name="cardholderName"
                placeholder="John Doe" 
                className="w-full p-3 bg-gray-50 rounded-md border border-gray-200"
                value={formData.cardholderName}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="border-t pt-4 mt-6">
              <h3 className="text-lg font-medium mb-4">Billing Address</h3>
              
              <div>
                <label className="block text-sm font-medium mb-1">Street Address</label>
                <input 
                  type="text" 
                  name="billing.street"
                  placeholder="123 Main Street" 
                  className="w-full p-3 bg-gray-50 rounded-md border border-gray-200"
                  value={formData.billingAddress.street}
                  onChange={handleInputChange}
                />
              </div>

              <div className="flex space-x-4 mt-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium mb-1">City</label>
                  <input 
                    type="text" 
                    name="billing.city"
                    placeholder="San Francisco" 
                    className="w-full p-3 bg-gray-50 rounded-md border border-gray-200"
                    value={formData.billingAddress.city}
                    onChange={handleInputChange}
                  />
                </div>
                
                <div className="flex-1">
                  <label className="block text-sm font-medium mb-1">State</label>
                  <input 
                    type="text" 
                    name="billing.state"
                    placeholder="CA" 
                    className="w-full p-3 bg-gray-50 rounded-md border border-gray-200"
                    value={formData.billingAddress.state}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="flex space-x-4 mt-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium mb-1">ZIP Code</label>
                  <input 
                    type="text" 
                    name="billing.zipCode"
                    placeholder="94102" 
                    className="w-full p-3 bg-gray-50 rounded-md border border-gray-200"
                    value={formData.billingAddress.zipCode}
                    onChange={handleInputChange}
                  />
                </div>
                
                <div className="flex-1">
                  <label className="block text-sm font-medium mb-1">Country</label>
                  <select 
                    name="billing.country"
                    className="w-full p-3 bg-gray-50 rounded-md border border-gray-200"
                    value={formData.billingAddress.country}
                    onChange={handleInputChange}
                  >
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="MX">Mexico</option>
                    <option value="UK">United Kingdom</option>
                    <option value="DE">Germany</option>
                    <option value="FR">France</option>
                    <option value="AU">Australia</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="pt-4 space-y-3">
              <button 
                type="submit" 
                disabled={state.isLoading}
                className="w-full p-3 bg-[#F94F4F] text-white rounded-md font-medium hover:bg-red-600 transition-colors disabled:opacity-50"
              >
                {state.isLoading ? 'Processing...' : 'Continue to Order Review'}
              </button>
              
              <button 
                type="button"
                onClick={handleBack}
                className="w-full p-3 border border-gray-300 text-black rounded-md font-medium hover:bg-gray-100 transition-colors"
              >
                Back to Payment Method
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}