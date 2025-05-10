'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from './supabase';
import { useRouter } from 'next/navigation';
import type { Session, User, AuthError } from '@supabase/supabase-js';

// Define UserMetadata interface
interface UserMetadata {
  full_name?: string;
}

// Define custom User type that includes user_metadata
interface CustomUser extends Omit<User, 'user_metadata'> {
  user_metadata: UserMetadata;
}

// Types for auth context
interface AuthContextType {
  user: CustomUser | null;
  session: Session | null;
  isLoading: boolean;
  signUp: (email: string, password: string, fullName: string) => Promise<{ error: AuthError | null }>;
  signIn: (email: string, password: string) => Promise<{ error: AuthError | null }>;
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
    // Function to get initial session
    async function getInitialSession() {
      setIsLoading(true);
      
      // Check active session
      const { data, error } = await supabase.auth.getSession();
      
      if (error) {
        console.error('Error getting session:', error);
      }
      
      setSession(data.session);
      setUser(data.session?.user as CustomUser || null);
      setIsLoading(false);
    }
    
    getInitialSession();
    
    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setUser(session?.user as CustomUser || null);
      setIsLoading(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  // Sign up function
  const signUp = async (email: string, password: string, fullName: string) => {
    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
          },
        },
      });
      
      return { error };
    } catch (err) {
      console.error('Signup error:', err);
      return { error: err as AuthError };
    }
  };

  // Sign in function
  const signIn = async (email: string, password: string) => {
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      
      return { error };
    } catch (err) {
      console.error('Sign in error:', err);
      return { error: err as AuthError };
    }
  };

  // Sign out function
  const signOut = async () => {
    await supabase.auth.signOut();
    router.push('/login');
  };

  // Create auth context value
  const value = {
    user,
    session,
    isLoading,
    signUp,
    signIn,
    signOut,
  };

  // Return the provider (as plain JavaScript, not JSX)
  return React.createElement(
    AuthContext.Provider,
    { value },
    children
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

// Protected route middleware (HOC)
export function withAuth<P extends object>(Component: React.ComponentType<P>) {
  const ProtectedRoute = (props: P) => {
    const { user, isLoading } = useAuth();
    const router = useRouter();

    // Effect for redirection
    useEffect(() => {
      if (!isLoading && !user) {
        router.push('/login');
      }
    }, [user, isLoading, router]);

    // Show loading state
    if (isLoading) {
      return React.createElement('div', null, 'Loading...');
    }

    // Render component if authenticated
    return user ? React.createElement(Component, props) : null;
  };

  return ProtectedRoute;
}