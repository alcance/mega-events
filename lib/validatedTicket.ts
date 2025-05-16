// lib/validateTicket.ts
import { supabase } from './supabase';

/**
 * Interface for the validation result
 */
export interface TicketValidationResult {
  valid: boolean;
  message: string;
  userData?: {
    fullName?: string;
    email?: string;
    ticketType?: string;
    ticketQuantity?: number;
    checkedIn?: boolean;
    checkInTime?: string;
  };
}

/**
 * Validates a ticket barcode and optionally checks in the user
 * @param barcode The barcode to validate
 * @param checkIn Whether to mark the ticket as checked in
 * @returns Validation result with user data if valid
 */
export const validateTicket = async (
  barcode: string, 
  checkIn: boolean = false
): Promise<TicketValidationResult> => {
  if (!barcode) {
    return {
      valid: false,
      message: 'No barcode provided'
    };
  }

  try {
    // Query the profiles table to find the user with this barcode
    const { data, error } = await supabase
      .from('profiles')
      .select('id, full_name, barcode, ticket_type, ticket_quantity, checked_in, check_in_time')
      .eq('barcode', barcode)
      .single();
    
    if (error || !data) {
      return {
        valid: false,
        message: 'Invalid ticket barcode'
      };
    }

    // Check if ticket has already been checked in
    if (data.checked_in) {
      return {
        valid: false,
        message: `Ticket already used at ${data.check_in_time}`,
        userData: {
          fullName: data.full_name,
          ticketType: data.ticket_type,
          ticketQuantity: data.ticket_quantity,
          checkedIn: data.checked_in,
          checkInTime: data.check_in_time
        }
      };
    }

    // If we need to check in the user
    if (checkIn) {
      const now = new Date().toISOString();
      
      // Update the profile record to mark as checked in
      const { error: updateError } = await supabase
        .from('profiles')
        .update({ 
          checked_in: true,
          check_in_time: now
        })
        .eq('id', data.id);
      
      if (updateError) {
        console.error('Error updating check-in status:', updateError);
        return {
          valid: false,
          message: 'Error checking in ticket'
        };
      }
      
      // Also get the user's email for the full record
      const { data: userData, error: userError } = await supabase.auth
        .admin.getUserById(data.id);
      
      return {
        valid: true,
        message: 'Ticket successfully checked in',
        userData: {
          fullName: data.full_name,
          email: userData?.user?.email,
          ticketType: data.ticket_type,
          ticketQuantity: data.ticket_quantity,
          checkedIn: true,
          checkInTime: now
        }
      };
    }

    // Just validating without checking in
    return {
      valid: true,
      message: 'Valid ticket',
      userData: {
        fullName: data.full_name,
        ticketType: data.ticket_type,
        ticketQuantity: data.ticket_quantity,
        checkedIn: false
      }
    };
  } catch (error) {
    console.error('Error validating ticket:', error);
    return {
      valid: false,
      message: 'Server error during validation'
    };
  }
};