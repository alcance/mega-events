// lib/supabase.ts
import { createClient } from '@supabase/supabase-js';

// Ensure environment variables exist, using fallbacks for development
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://uutvwegwkqjhqvpyjpae.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV1dHZ3ZWd3a3FqaHF2cHlqcGFlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY4OTg1NDUsImV4cCI6MjA2MjQ3NDU0NX0.MUPElOhlXWKm4aTq4dKEpZ6xFJ8hQ6e6HsaVG_HAhaI';

// Create a conditional client to avoid errors during SSR/build
let supabase: ReturnType<typeof createClient>;

// Check if we're in a browser environment
const isBrowser = typeof window !== 'undefined';

// Only initialize Supabase client if we have the required environment variables
// or if we're in a browser environment (avoiding server-side issues during build)
if ((supabaseUrl && supabaseAnonKey) || isBrowser) {
  supabase = createClient(supabaseUrl, supabaseAnonKey);
} else {
  // Provide a mock client for SSR/build time to avoid errors
  supabase = {
    auth: {
      getSession: () => Promise.resolve({ data: { session: null }, error: null }),
      onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }),
      signUp: () => Promise.resolve({ error: null }),
      signInWithPassword: () => Promise.resolve({ error: null }),
      signOut: () => Promise.resolve({ error: null }),
    },
  } as any;
  
  console.warn(
    'Supabase client not initialized: Missing environment variables. Using mock client for SSR/build.'
  );
}

export { supabase };