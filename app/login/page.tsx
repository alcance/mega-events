// app/login/page.tsx
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage('');

    // Validation
    if (!email || !password) {
      setErrorMessage('Please fill in all fields');
      setIsLoading(false);
      return;
    }
    
    try {
      // Sign in with Supabase
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setErrorMessage(error.message);
      } else if (data?.user) {
        // Success - redirect to dashboard selection
        router.push('/dashboard-selection');
      }
    } catch (error) {
      setErrorMessage('An unexpected error occurred');
      console.error('Login error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegisterRedirect = () => {
    router.push('/register');
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

          <h1 className="text-2xl font-bold text-center mb-2">Welcome Back</h1>
          <p className="text-center text-gray-600 mb-6">
            Sign in to access your account and tickets.
          </p>

          {errorMessage && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md text-sm">
              {errorMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
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
              />
            </div>
            
            <button 
              type="submit"
              className="w-full p-3 mt-6 bg-[#F94F4F] text-white rounded-lg font-medium hover:bg-red-600 transition-colors"
              disabled={isLoading}
            >
              {isLoading ? 'SIGNING IN...' : 'SIGN IN'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600 text-sm">
              Don't have an account?{' '}
              <button 
                onClick={handleRegisterRedirect}
                className="text-[#F94F4F] hover:text-red-600 font-medium"
              >
                Register here
              </button>
            </p>
          </div>

          <div className="mt-4 text-center">
            <button 
              type="button"
              className="text-gray-500 hover:text-gray-700 text-sm"
              onClick={() => alert('Password reset functionality would be implemented here')}
            >
              Forgot your password?
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}