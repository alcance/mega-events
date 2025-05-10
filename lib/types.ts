// lib/types.ts
import { Session, User } from '@supabase/supabase-js';

// User metadata type
export interface UserMetadata {
  full_name?: string;
}

// Extended user type
export interface CustomUser extends Omit<User, 'user_metadata'> {
  user_metadata: UserMetadata;
}

// Auth session type
export interface AuthSession {
  user: CustomUser | null;
  session: Session | null;
}

// Database profile type
export interface Profile {
  id: string;
  username: string | null;
  full_name: string | null;
  created_at: string;
  updated_at: string | null;
}