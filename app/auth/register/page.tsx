'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useRegistration } from '@/lib/contexts/RegistrationContext';
import { RegistrationService } from '@/lib/registrationService';

export default function RegisterPage() {
  const router = useRouter();
  const {
    state,
    setUserData,
    setTicketData,
    setUserRegistration,
    nextStep,
    setLoading,
    setError
  } = useRegistration();

  const [formData, setFormData] = useState({
    fullName: state.userData.fullName,
    email: state.userData.email,
    phone: state.userData.phone || '',
    company: state.userData.company || '',
    ticketType: state.ticketData.ticketType,
    quantity: state.ticketData.quantity
  });

  const ticketPrices = {
    standard: 99,
    vip: 229,
    premium: 329,
    exhibitor: 499,
    admin: 0
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'quantity' ? parseInt(value) || 1 : value
    }));
  };

  const calculatePrice = () => {
    const basePrice = ticketPrices[formData.ticketType as keyof typeof ticketPrices] || 0;
    const fees = basePrice * 0.1; // 10% processing fee
    const totalAmount = (basePrice * formData.quantity) + fees;

    return { basePrice, fees, totalAmount };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Validation
    if (!formData.fullName || !formData.email || !formData.ticketType || formData.quantity < 1) {
      setError('Please fill in all required fields');
      setLoading(false);
      return;
    }

    try {
      // Calculate pricing
      const { basePrice, fees, totalAmount } = calculatePrice();

      // Save user data to context first
      setUserData({
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        company: formData.company
      });

      // Save ticket data to context
      setTicketData({
        ticketType: formData.ticketType,
        quantity: formData.quantity,
        price: basePrice,
        fees,
        totalAmount
      });

      // Register user to Supabase in the background
      console.log('🚀 Registering user to Supabase...');
      const registrationResult = await RegistrationService.registerUser({
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        ticketType: formData.ticketType,
        quantity: formData.quantity,
        price: basePrice,
        fees,
        totalAmount
      });

      if (registrationResult.error) {
        console.warn('⚠️ Registration warning:', registrationResult.error);
        // Don't fail the flow - user can still get their ticket
        // We'll handle this in a retry mechanism later
      } else {
        console.log('✅ User registered successfully & confirmation email sent:', registrationResult.userId);
        // Save registration data to context
        setUserRegistration(
          registrationResult.userId,
          registrationResult.registrationId,
          registrationResult.needsVerification
        );
      }

      // Move to next step regardless of registration success
      // The flow continues smoothly
      nextStep();
      router.push('/auth/payment');

    } catch (error) {
      console.error('❌ Registration flow error:', error);
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen bg-white text-black">
      {/* Left side with the background image */}
      <div className="hidden md:block md:w-1/2 relative">
        <Image
          src="/general-background.svg"
          alt="Event Background"
          fill
          style={{ objectFit: 'cover' }}
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

          <h1 className="text-2xl font-bold text-center mb-2">Secure Your Spot</h1>
          <p className="text-center text-gray-600 mb-6">
            Fill in your details below to complete your registration.
          </p>

          {state.error && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md text-sm">
              {state.error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Full Name *</label>
              <input
                type="text"
                name="fullName"
                placeholder="Enter Full Name"
                className="w-full p-3 bg-gray-50 rounded-md border border-gray-200"
                value={formData.fullName}
                onChange={handleInputChange}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email Address *</label>
              <input
                type="email"
                name="email"
                placeholder="Enter Email Address"
                className="w-full p-3 bg-gray-50 rounded-md border border-gray-200"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Phone Number</label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter Phone Number"
                className="w-full p-3 bg-gray-50 rounded-md border border-gray-200"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Company</label>
              <input
                type="text"
                name="company"
                placeholder="Enter Company Name"
                className="w-full p-3 bg-gray-50 rounded-md border border-gray-200"
                value={formData.company}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Ticket Type *</label>
              <div className="relative">
                <select
                  name="ticketType"
                  className="w-full p-3 bg-gray-50 rounded-md border border-gray-200 appearance-none"
                  value={formData.ticketType}
                  onChange={handleInputChange}
                  required
                >
                  <option value="" disabled>Choose Ticket Type</option>
                  <option value="standard">Standard - $99 (General Attendee)</option>
                  <option value="vip">VIP - $229 (Premium Attendee)</option>
                  <option value="premium">Premium - $329 (Speaker Access)</option>
                  <option value="exhibitor">Exhibitor - $499 (Booth Package)</option>
                  <option value="admin">Admin - Free (Staff Access)</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Quantity *</label>
              <input
                type="number"
                name="quantity"
                min="1"
                max="10"
                placeholder="1"
                className="w-full p-3 bg-gray-50 rounded-md border border-gray-200"
                value={formData.quantity}
                onChange={handleInputChange}
                required
              />
            </div>

            {formData.ticketType && (
              <div className="p-3 bg-blue-50 rounded-md">
                <div className="text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Ticket Price:</span>
                    <span>${ticketPrices[formData.ticketType as keyof typeof ticketPrices]} x {formData.quantity}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Processing Fee:</span>
                    <span>${(calculatePrice().fees).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-semibold text-gray-900 border-t pt-2 mt-2">
                    <span>Total:</span>
                    <span>${calculatePrice().totalAmount.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            )}

            <button
              type="submit"
              disabled={state.isLoading}
              className="w-full p-3 bg-[#F94F4F] text-white rounded-md font-medium hover:bg-red-600 transition-colors disabled:opacity-50"
            >
              {state.isLoading ? 'Processing...' : 'Continue to Payment'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
