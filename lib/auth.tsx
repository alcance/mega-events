'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from './supabase';
import { useRouter } from 'next/navigation';
import type { Session, AuthError, AuthChangeEvent } from '@supabase/supabase-js';
import { CustomUser } from './types';

// Types for auth context
interface AuthContextType {
  user: CustomUser | null;
  session: Session | null;
  isLoading: boolean;
  signUp: (email: string, fullName: string, ticketType: string, quantity: number) => Promise<{ error: AuthError | null }>;
  signOut: () => Promise<void>;
}

// Create Auth Context with default undefined value
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Auth provider component
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<CustomUser | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Skip server-side execution by using useEffect
    // Function to get initial session
    async function getInitialSession() {
      setIsLoading(true);
      
      try {
        // Check active session
        const { data, error } = await supabase.auth.getSession();
        
        if (error) {
          console.error('Error getting session:', error);
        }
        
        setSession(data.session);
        setUser(data.session?.user as CustomUser || null);
      } catch (err) {
        console.error('Failed to get session:', err);
      } finally {
        setIsLoading(false);
      }
    }
    
    getInitialSession();
    
    try {
      // Listen for auth changes
      const { data: { subscription } } = supabase.auth.onAuthStateChange(
        (_event: AuthChangeEvent, session: Session | null) => {
          setSession(session);
          setUser(session?.user as CustomUser || null);
          setIsLoading(false);
        }
      );

      return () => {
        subscription.unsubscribe();
      };
    } catch (err) {
      console.error('Error setting up auth subscription:', err);
      setIsLoading(false);
    }
  }, []);

  // Sign up function - modified to not require password
  const signUp = async (email: string, fullName: string, ticketType: string, quantity: number) => {
    try {
      // Generate random password since we're not collecting it from users
      const randomPassword = Math.random().toString(36).substring(2, 15) + 
                            Math.random().toString(36).substring(2, 15);
      
      const { error } = await supabase.auth.signUp({
        email,
        password: randomPassword,
        options: {
          data: {
            full_name: fullName,
            ticket_type: ticketType,
            ticket_quantity: quantity
          }
        }
      });
      
      return { error };
    } catch (err) {
      console.error('Signup error:', err);
      return { error: err as AuthError };
    }
  };

  // Sign out function
  const signOut = async () => {
    try {
      await supabase.auth.signOut();
      router.push('/register');
    } catch (err) {
      console.error('Error signing out:', err);
    }
  };

  // Create auth context value
  const value = {
    user,
    session,
    isLoading,
    signUp,
    signOut,
  };

  // Return the provider
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to use auth context
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}