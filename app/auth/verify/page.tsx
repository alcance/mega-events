'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { supabase } from '@/lib/supabase';

export default function VerifyPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);
  const [verificationStatus, setVerificationStatus] = useState<'loading' | 'success' | 'error' | 'expired'>('loading');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    const handleEmailVerification = async () => {
      try {
        // Check if this is a verification callback
        const token_hash = searchParams.get('token_hash');
        const type = searchParams.get('type');
        
        if (token_hash && type === 'email') {
          // Verify the email token
          const { data, error } = await supabase.auth.verifyOtp({
            token_hash,
            type: 'email'
          });

          if (error) {
            console.error('Verification error:', error);
            setVerificationStatus('error');
            setMessage('Invalid or expired verification link. Please request a new one.');
            setCanResend(true);
          } else if (data.user) {
            setVerificationStatus('success');
            setMessage('Email verified successfully! You can now access your dashboard.');
            
            // Redirect to dashboard after a short delay
            setTimeout(() => {
              router.push('/dashboard');
            }, 2000);
          }
        } else {
          // No verification token - show resend option
          setVerificationStatus('error');
          setMessage('Please check your email for the verification link.');
          setCanResend(true);
        }
      } catch (error) {
        console.error('Verification process error:', error);
        setVerificationStatus('error');
        setMessage('An error occurred during verification.');
        setCanResend(true);
      } finally {
        setIsLoading(false);
      }
    };

    handleEmailVerification();
  }, [searchParams, router]);

  const handleResendVerification = async () => {
    if (!email) {
      setMessage('Please enter your email address');
      return;
    }

    setIsLoading(true);
    try {
      const { error } = await supabase.auth.resend({
        type: 'signup',
        email: email,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/verify`
        }
      });

      if (error) {
        setMessage(`Failed to resend verification: ${error.message}`);
      } else {
        setMessage('Verification email sent! Please check your inbox.');
        setCanResend(false);
      }
    } catch (error) {
      setMessage('An error occurred while sending verification email');
      console.error('Resend error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const getStatusIcon = () => {
    switch (verificationStatus) {
      case 'success':
        return (
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
        );
      case 'error':
        return (
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
        );
      case 'loading':
      default:
        return (
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          </div>
        );
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

      {/* Right side with verification content */}
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

          <div className="text-center">
            {getStatusIcon()}

            <h1 className="text-2xl font-bold mb-4">
              {verificationStatus === 'loading' && 'Verifying Email...'}
              {verificationStatus === 'success' && 'Email Verified!'}
              {verificationStatus === 'error' && 'Verification Required'}
            </h1>

            <p className="text-gray-600 mb-6">
              {message}
            </p>

            {canResend && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="Enter your email address" 
                    className="w-full p-3 bg-gray-50 rounded-md border border-gray-200"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <button 
                  onClick={handleResendVerification}
                  disabled={isLoading || !email}
                  className="w-full p-3 bg-[#F94F4F] text-white rounded-lg font-medium hover:bg-red-600 transition-colors disabled:opacity-50"
                >
                  {isLoading ? 'Sending...' : 'Resend Verification Email'}
                </button>
              </div>
            )}

            {verificationStatus === 'success' && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-4">
                <p className="text-green-800 text-sm">
                  Redirecting to your dashboard...
                </p>
              </div>
            )}

            <div className="mt-8 space-y-3">
              <button 
                onClick={() => router.push('/auth/register')}
                className="w-full p-3 border border-gray-300 text-black rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Register for Event
              </button>
              
              <button 
                onClick={() => router.push('/')}
                className="w-full p-3 text-gray-600 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Back to Home
              </button>
            </div>

            <div className="mt-6 text-center text-sm text-gray-500">
              <p>Need help? Contact us at:</p>
              <p className="text-gray-600">support@megaevents.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
