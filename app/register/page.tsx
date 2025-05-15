'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';

export default function RegisterPage() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [ticketType, setTicketType] = useState('');
  const [quantity, setQuantity] = useState(1); 
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage('');

    // Validation
    if (!fullName || !email || !password || !ticketType || quantity < 1) {
      setErrorMessage('Please fill in all required fields');
      setIsLoading(false);
      return;
    }

    if (password.length < 6) {
      setErrorMessage('Password must be at least 6 characters long');
      setIsLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      setIsLoading(false);
      return;
    }
    
    try {
      // Register the user with Supabase auth
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
            ticket_type: ticketType,
            ticket_quantity: quantity
          }
        }
      });

      if (error) {
        setErrorMessage(error.message);
      } else {
        // Success - redirect to home
        router.push('/payment');
      }
    } catch (error) {
      setErrorMessage('An unexpected error occurred');
      console.error('Registration error:', error);
    } finally {
      setIsLoading(false);
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
          style={{objectFit: 'cover'}}
          priority
        />
      </div>

      {/* Right side with the form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="flex justify-center mb-6">
            {/* Logo without the red circle background */}
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

          {errorMessage && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md text-sm">
              {errorMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Full Name</label>
              <input 
                type="text" 
                placeholder="Enter Full Name" 
                className="w-full p-3 bg-gray-50 rounded-md border border-gray-200"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Email Address</label>
              <input 
                type="email" 
                placeholder="Enter Email Address" 
                className="w-full p-3 bg-gray-50 rounded-md border border-gray-200"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <input 
                type="password" 
                placeholder="Enter Password" 
                className="w-full p-3 bg-gray-50 rounded-md border border-gray-200"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
              />
              <p className="mt-1 text-xs text-gray-500">
                Must be at least 6 characters
              </p>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Confirm Password</label>
              <input 
                type="password" 
                placeholder="Confirm Password" 
                className="w-full p-3 bg-gray-50 rounded-md border border-gray-200"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Ticket Type</label>
              <div className="relative">
                <select 
                  className="w-full p-3 bg-gray-50 rounded-md border border-gray-200 appearance-none"
                  value={ticketType}
                  onChange={(e) => setTicketType(e.target.value)}
                  required
                >
                  <option value="" disabled>Choose Ticket Type</option>
                  <option value="standard">Standard</option>
                  <option value="vip">VIP</option>
                  <option value="premium">Premium</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Quantity</label>
              <div className="relative">
                <input 
                  type="number" 
                  min="1"
                  max="10" 
                  className="w-full p-3 bg-gray-50 rounded-md border border-gray-200"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                  required
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </div>
            </div>
            
            <button 
              type="submit"
              className="w-full p-3 mt-6 bg-[#F94F4F] text-white rounded-lg font-medium hover:bg-red-600 transition-colors"
              disabled={isLoading}
            >
              {isLoading ? 'PROCESSING...' : 'PROCEED TO PAYMENT'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}