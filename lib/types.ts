// lib/types.ts - UPDATE your existing file with these additions
import { Session, User } from '@supabase/supabase-js';

// Keep your existing UserMetadata but add role
export interface UserMetadata {
  full_name?: string;
  ticket_type?: string;
  ticket_quantity?: number;
  role?: string; // ADD THIS
}

// Keep your existing CustomUser
export interface CustomUser extends Omit<User, 'user_metadata'> {
  user_metadata: UserMetadata;
}

// Keep your existing AuthSession
export interface AuthSession {
  user: CustomUser | null;
  session: Session | null;
}

// UPDATE your existing Profile interface to include new fields
export interface Profile {
  id: string;
  username: string | null;
  full_name: string | null;
  email: string | null; // ADD THIS
  role: UserRole; // ADD THIS
  status: UserStatus; // ADD THIS
  created_at: string;
  updated_at: string | null;
  ticket_type: string | null;
  ticket_quantity: number | null;
  barcode: string | null;
  checked_in?: boolean; // ADD THIS
  check_in_time?: string | null; // ADD THIS
}

// ADD these new types for the role system
export type UserRole = 'admin' | 'exhibitor' | 'speaker' | 'attendee' | 'security_manager';
export type UserStatus = 'active' | 'pending' | 'suspended';

// Keep your existing EventInfo
export interface EventInfo {
  name: string;
  date: string;
  time: string;
  location: string;
  description: string;
}

// Keep your existing Ticket
export interface Ticket {
  id: string;
  user_id: string;
  event_id: string;
  barcode: string;
  ticket_type: string;
  created_at: string;
  checked_in?: boolean;
  check_in_time?: string;
}

// ADD these new mappings for the role system
export const ROLE_DASHBOARDS = {
  admin: '/dashboard/security-manager',
  exhibitor: '/dashboard/exhibitor',
  speaker: '/dashboard/s-a-manager',
  attendee: '/dashboard/admin/attendee-checkin',
  security_manager: '/dashboard/security-manager'
} as const;

export const ROLE_PERMISSIONS = {
  admin: ['all'],
  exhibitor: ['manage_booth', 'view_leads'],
  speaker: ['manage_sessions', 'view_attendees'],
  attendee: ['view_sessions', 'network'],
  security_manager: ['manage_users', 'view_logs']
} as const;

// ADD mapping from your ticket types to roles
export const TICKET_TYPE_TO_ROLE: Record<string, UserRole> = {
  standard: 'attendee',
  vip: 'attendee',
  premium: 'speaker',
  exhibitor: 'exhibitor',
  admin: 'admin'
};

// ADD descriptions for your ticket types
export const TICKET_TYPE_DESCRIPTIONS = {
  standard: {
    label: 'Standard - General Attendee',
    role: 'attendee' as UserRole,
    description: 'Access to sessions and networking',
    price: '$199'
  },
  vip: {
    label: 'VIP - Premium Attendee', 
    role: 'attendee' as UserRole,
    description: 'Premium seating + networking events',
    price: '$399'
  },
  premium: {
    label: 'Premium - Speaker Access',
    role: 'speaker' as UserRole, 
    description: 'Speaking opportunities + attendee benefits',
    price: '$599'
  },
  exhibitor: {
    label: 'Exhibitor - Booth Package',
    role: 'exhibitor' as UserRole,
    description: 'Exhibition booth + marketing opportunities',
    price: '$1,299'
  },
  admin: {
    label: 'Admin - Staff Access',
    role: 'admin' as UserRole,
    description: 'Full system access (invitation only)',
    price: 'Contact Us'
  }
} as const;