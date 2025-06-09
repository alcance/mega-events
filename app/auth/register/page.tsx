// app/register/page.tsx
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { generateBarcodeNumber } from '@/lib/barcode';

export default function RegisterPage() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
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
    if (!fullName || !email || !ticketType || quantity < 1) {
      setErrorMessage('Please fill in all required fields');
      setIsLoading(false);
      return;
    }
    
    try {
      // Generate a unique barcode for the user
      const barcode = generateBarcodeNumber();
      
      // Generate a random password since Supabase requires one
      const randomPassword = Math.random().toString(36).substring(2, 15) + 
                           Math.random().toString(36).substring(2, 15);
      
      // Register the user with Supabase auth
      const { data, error } = await supabase.auth.signUp({
        email,
        password: randomPassword, // Use random password that user doesn't need to know
        options: {
          data: {
            full_name: fullName,
            ticket_type: ticketType,
            ticket_quantity: quantity,
            barcode: barcode // Include the barcode in user metadata
          }
        }
      });

      if (error) {
        setErrorMessage(error.message);
      } else if (data?.user) {
        // Create or update the profile with the barcode
        const { error: profileError } = await supabase
          .from('profiles')
          .upsert({
            id: data.user.id,
            full_name: fullName,
            username: email.split('@')[0], // Generate a simple username
            ticket_type: ticketType,
            ticket_quantity: quantity,
            barcode: barcode,
            updated_at: new Date().toISOString()
          });
          
        if (profileError) {
          console.error('Error updating profile:', profileError);
        }
        
        // Success - redirect to dashboard selection page
        router.push('/');
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
              {isLoading ? 'PROCESSING...' : 'REGISTER & CONTINUE'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}