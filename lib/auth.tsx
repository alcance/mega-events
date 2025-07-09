// lib/auth.tsx - REPLACE with this version that bypasses database issues
'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from './supabase';
import { useRouter } from 'next/navigation';
import type { Session, AuthError, AuthChangeEvent } from '@supabase/supabase-js';
import { CustomUser, UserRole } from './types';

interface AuthContextType {
  user: CustomUser | null;
  session: Session | null;
  isLoading: boolean;
  userRole: UserRole | null;
  signUp: (email: string, fullName: string, ticketType: string, quantity: number) => Promise<{ error: AuthError | null }>;
  signOut: () => Promise<void>;
  hasPermission: (permission: string) => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<CustomUser | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [userRole, setUserRole] = useState<UserRole | null>(null);
  const router = useRouter();

  useEffect(() => {
    async function getInitialSession() {
      setIsLoading(true);

      try {
        const { data, error } = await supabase.auth.getSession();

        if (error) {
          console.error('Error getting session:', error);
        }

        setSession(data.session);
        const user = data.session?.user as CustomUser | null;
        setUser(user);

        // Get role from user metadata instead of database
        if (user?.user_metadata?.role) {
          setUserRole(user.user_metadata.role as UserRole);
        }
      } catch (error) {
        console.error('Session initialization error:', error);
      } finally {
        setIsLoading(false);
      }
    }

    getInitialSession();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event: AuthChangeEvent, session: Session | null) => {
        console.log('Auth state changed:', event);

        setSession(session);
        const user = session?.user as CustomUser | null;
        setUser(user);

        // Get role from user metadata
        if (user?.user_metadata?.role) {
          setUserRole(user.user_metadata.role as UserRole);
        } else {
          setUserRole(null);
        }

        setIsLoading(false);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  const signUp = async (
    email: string,
    // fullName: string,
    // ticketType: string,
    // quantity: number
  ): Promise<{ error: AuthError | null }> => {
    try {
      setIsLoading(true);
      console.log('🚀 Ultra-minimal signup test...', { email });

      // ABSOLUTE MINIMAL SIGNUP - NO METADATA AT ALL
      const { data, error } = await supabase.auth.signUp({
        email,
        password: 'temporary123!@#'  // Simple static password for testing
      });

      if (error) {
        console.error('❌ Minimal signup failed:', error);
        return { error };
      }

      if (!data.user) {
        console.error('❌ No user returned');
        return { error: new Error('No user created') as AuthError };
      }

      console.log('✅ MINIMAL signup SUCCESS:', data.user.id);

      // Set a default role for now
      setUserRole('attendee');

      return { error: null };
    } catch (err) {
      console.error('❌ Signup exception:', err);
      return { error: err as AuthError };
    } finally {
      setIsLoading(false);
    }
  };

  // Simple permission checking
  const hasPermission = (permission: string): boolean => {
    if (!userRole) return false;
    if (userRole === 'admin') return true;

    const rolePermissions = {
      admin: ['all'],
      exhibitor: ['manage_booth', 'view_leads'],
      speaker: ['manage_sessions', 'view_attendees'],
      attendee: ['view_sessions', 'network'],
      security_manager: ['manage_users', 'view_logs']
    };

    return rolePermissions[userRole]?.includes(permission) || false;
  };

  const signOut = async () => {
    try {
      await supabase.auth.signOut();
      setUserRole(null);
      router.push('/auth/register');
    } catch (err) {
      console.error('Error signing out:', err);
    }
  };

  const value = {
    user,
    session,
    isLoading,
    userRole,
    signUp,
    signOut,
    hasPermission,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
