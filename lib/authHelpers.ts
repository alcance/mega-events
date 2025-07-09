import { supabase } from './supabase';
import { UserRole, TICKET_TYPE_TO_ROLE, ROLE_DASHBOARDS } from './types';

// Get user role from database
export const getUserRole = async (userId: string): Promise<UserRole> => {
  try {
    const { data, error } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', userId)
      .single();
    
    if (error || !data) {
      console.error('Error fetching user role:', error);
      return 'attendee';
    }
    
    return data.role as UserRole || 'attendee';
  } catch (err) {
    console.error('Failed to get user role:', err);
    return 'attendee';
  }
};

// Check if user has permission
export const hasPermission = (userRole: UserRole | null, permission: string): boolean => {
  if (!userRole) return false;
  
  // Admin has all permissions
  if (userRole === 'admin') return true;
  
  // Define role permissions
  const rolePermissions = {
    admin: ['all'],
    exhibitor: ['manage_booth', 'view_leads'],
    speaker: ['manage_sessions', 'view_attendees'],
    attendee: ['view_sessions', 'network'],
    security_manager: ['manage_users', 'view_logs']
  };
  
  return rolePermissions[userRole]?.includes(permission) || false;
};

// Get dashboard URL for user role
export const getDashboardForRole = (role: UserRole): string => {
  return ROLE_DASHBOARDS[role] || '/dashboard/admin/attendee-checkin';
};

// Map ticket type to role (for registration)
export const getRole = (ticketType: string): UserRole => {
  return TICKET_TYPE_TO_ROLE[ticketType] || 'attendee';
};

// Enhanced sign up function that works with your existing auth
export const enhancedSignUp = async (
  email: string,
  fullName: string,
  ticketType: string,
  quantity: number,
  generateBarcode: () => string
) => {
  try {
    const barcode = generateBarcode();
    const role = getRole(ticketType);
    
    // Generate a random password since users will use magic links
    const randomPassword = Math.random().toString(36).substring(2, 15) + 
                         Math.random().toString(36).substring(2, 15);
    
    const { data, error } = await supabase.auth.signUp({
      email,
      password: randomPassword,
      options: {
        data: {
          full_name: fullName,
          ticket_type: ticketType,
          ticket_quantity: quantity,
          barcode: barcode,
          role: role
        }
      }
    });
    
    if (data.user) {
      // Create or update the profile with the role
      const { error: profileError } = await supabase
        .from('profiles')
        .upsert({
          id: data.user.id,
          full_name: fullName,
          email: email,
          username: email.split('@')[0],
          ticket_type: ticketType,
          ticket_quantity: quantity,
          barcode: barcode,
          role: role,
          status: 'active',
          updated_at: new Date().toISOString()
        });
        
      if (profileError) {
        console.error('Error updating profile:', profileError);
      }
    }
    
    return { data, error };
  } catch (err) {
    console.error('Enhanced signup error:', err);
    return { data: null, error: err };
  }
};
