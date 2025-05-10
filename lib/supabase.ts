// lib/supabase.ts
import { createClient } from '@supabase/supabase-js';
import type { Database } from '@/types/supabse';

// Ensure environment variables exist, using fallbacks for development
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// Log a helpful error message if variables are missing
if (!supabaseUrl || !supabaseAnonKey) {
  console.error(
    'Missing Supabase environment variables. Please check your .env file or environment configuration.'
  );
}

// Create and export the supabase client with proper typing
export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);