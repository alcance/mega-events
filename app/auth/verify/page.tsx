'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { supabase } from '@/lib/supabase';

// Separate the component that uses useSearchParams
function VerifyContent() {
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
      // Fix: Use environment variable or hardcode your domain
      const redirectUrl = process.env.NEXT_PUBLIC_SITE_URL 
        ? `${process.env.NEXT_PUBLIC_SITE_URL}/auth/verify`
        : `${typeof window !== 'undefined' ? window.location.origin : 'http://localhost:3000'}/auth/verify`;

      const { error } = await supabase.auth.resend({
        type: 'signup',
        email: email,
        options: {
          emailRedirectTo: redirectUrl
        }
      });

      if (error) {
        setMessage(`Failed to resend verification: ${error.message}`);
      } else {
        setMessage('Verification email sent! Please check your inbox.');
      }
    } catch (error) {
      console.error('Resend error:', error);
      setMessage('An error occurred while resending the verification email.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Verify Your Email
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {isLoading ? (
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
              <p className="mt-4 text-gray-600">Processing verification...</p>
            </div>
          ) : (
            <div className="text-center">
              {verificationStatus === 'success' ? (
                <div className="text-green-600">
                  <p className="text-lg font-semibold">✓ {message}</p>
                  <p className="text-sm text-gray-600 mt-2">Redirecting to dashboard...</p>
                </div>
              ) : (
                <div>
                  <p className="text-red-600 mb-4">{message}</p>
                  {canResend && (
                    <div className="space-y-4">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <button
                        onClick={handleResendVerification}
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        Resend Verification Email
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Loading fallback component
function VerifyLoading() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Verify Your Email
        </h2>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading verification...</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Main page component with Suspense wrapper
export default function VerifyPage() {
  return (
    <Suspense fallback={<VerifyLoading />}>
      <VerifyContent />
    </Suspense>
  );
}