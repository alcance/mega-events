// lib/supabase.ts - REPLACE with this fresh configuration
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://bwmjtnxfrrwqiooorjoa.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// Create client with minimal configuration
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
    flowType: 'pkce' // Important: Use PKCE flow
  }
})

// Test connection immediately
console.log('🔧 Supabase URL:', supabaseUrl)
console.log('🔧 Supabase Key (first 20 chars):', supabaseAnonKey?.substring(0, 20) + '...')

// Simple connection test
supabase.auth.getSession().then(({ data, error }) => {
  if (error) {
    console.error('❌ Supabase connection failed:', error)
  } else {
    console.log('✅ Supabase connection successful', data)
  }
})