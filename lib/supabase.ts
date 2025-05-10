// lib/supabase.ts
import { createClient } from '@supabase/supabase-js';

// Check if we're in a browser environment
const isBrowser = typeof window !== 'undefined';

// Safely get environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// Only create the Supabase client if we have both required values
// This prevents errors during SSR/build if env vars aren't set
const createSupabaseClient = () => {
  // In production with missing env vars, log error but don't throw
  if (!supabaseUrl || !supabaseAnonKey) {
    // Only show error in browser or during local development
    if (isBrowser || process.env.NODE_ENV === 'development') {
      console.error(
        'Missing Supabase environment variables. Please check your .env file or environment configuration.'
      );
    }
    
    // For build/SSR with missing env vars, return a mock client to prevent build failures
    if (!isBrowser && process.env.NODE_ENV === 'production') {
      // Return a minimal mock that won't throw errors during SSR
      return {
        auth: {
          getSession: async () => ({ data: { session: null }, error: null }),
          onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } })
        }
      };
    }
  }
  
  // Create the real client if we have the required values
  return createClient(supabaseUrl, supabaseAnonKey);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const supabase = createSupabaseClient() as any;