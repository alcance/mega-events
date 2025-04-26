'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Session, User, SupabaseClient } from '@supabase/supabase-js';
import { supabase } from '@/lib/supabase';

type AuthError = {
  message: string;
};

type AuthContextType = {
  user: User | null;
  session: Session | null;
  isLoading: boolean;
  signIn: (email: string, password: string) => Promise<{ error: AuthError | null }>;
  signUp: (email: string, password: string) => Promise<{ error: AuthError | null }>;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const initializeAuth = async () => {
      setIsLoading(true);
      
      try {
        // Get initial session
        const { data: { session: initialSession }, error } = await supabase.auth.getSession();
        
        if (error) {
          console.error('Error fetching session:', error);
          return;
        }
        
        if (initialSession) {
          setSession(initialSession);
          setUser(initialSession.user);
          
          // If on login or register page, redirect to dashboard
          if (window.location.pathname === '/login' || window.location.pathname === '/register') {
            router.push('/dashboard');
          }
        }
      } catch (err) {
        console.error('Auth initialization error:', err);
      } finally {
        setIsLoading(false);
      }
    };

    initializeAuth();

    // Set up auth state change listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, newSession) => {
        setSession(newSession);
        setUser(newSession?.user ?? null);
        setIsLoading(false);
        
        if (event === 'SIGNED_IN' && newSession) {
          router.push('/dashboard');
        } else if (event === 'SIGNED_OUT') {
          router.push('/login');
        }
      }
    );

    // Cleanup subscription on unmount
    return () => {
      subscription.unsubscribe();
    };
  }, [router]);

  const signIn = async (email: string, password: string) => {
    try {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (!error) {
        router.push('/dashboard');
      }
      return { error };
    } catch (error: unknown) {
      console.error('Sign in error:', error);
      return { error: error instanceof Error ? { message: error.message } : { message: 'An unknown error occurred' } };
    }
  };

  const signUp = async (email: string, password: string) => {
    try {
      const { error } = await supabase.auth.signUp({ 
        email, 
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/callback`,
        },
      });
      return { error };
    } catch (error: unknown) {
      console.error('Sign up error:', error);
      return { error: error instanceof Error ? { message: error.message } : { message: 'An unknown error occurred' } };
    }
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    router.push('/login');
  };

  const value = {
    user,
    session,
    isLoading,
    signIn,
    signUp,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}