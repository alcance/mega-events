// lib/registrationService.ts
import { supabase } from './supabase';
import { generateBarcodeNumber } from './barcode';
import type { UserRole } from './types';

export interface RegistrationData {
    fullName: string;
    email: string;
    phone?: string;
    company?: string;
    ticketType: string;
    quantity: number;
    price: number;
    fees: number;
    totalAmount: number;
}

export interface UserRegistrationResult {
    userId: string;
    registrationId: string;
    barcode: string;
    needsVerification: boolean;
    error?: string;
}

// Map ticket types to user roles
const getRole = (ticketType: string): UserRole => {
    const ticketToRole: Record<string, UserRole> = {
        'standard': 'attendee',
        'vip': 'attendee',
        'premium': 'attendee',
        'exhibitor': 'exhibitor',
        'admin': 'admin',
        'speaker': 'speaker'
    };
    return ticketToRole[ticketType] || 'attendee';
};

// Generate a secure temporary password
const generateTemporaryPassword = (): string => {
    return Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2) + '!1A';
};

export class RegistrationService {
    /**
     * Register user to Supabase and create registration record
     * This happens during the registration flow without interrupting it
     */
    static async registerUser(data: RegistrationData): Promise<UserRegistrationResult> {
        try {
            const barcode = generateBarcodeNumber(12);
            const role = getRole(data.ticketType);
            const tempPassword = generateTemporaryPassword();

            console.log('🚀 Starting user registration...', { email: data.email, role });

            // Step 1: Create user in Supabase Auth
            const { data: authData, error: authError } = await supabase.auth.signUp({
                email: data.email,
                password: tempPassword,
                options: {
                    emailRedirectTo: `${window.location.origin}/auth/verify`,
                    data: {
                        // Basic user info
                        full_name: data.fullName,
                        role: role,

                        // Ticket information for email
                        ticket_type: data.ticketType,
                        ticket_quantity: data.quantity,
                        ticket_price: data.price,
                        processing_fees: data.fees,
                        total_amount: data.totalAmount,

                        // Additional info
                        company: data.company || '',
                        phone: data.phone || '',

                        // Generated data
                        barcode: barcode,
                        registration_source: 'event_flow',

                        // Event details
                        event_name: 'Future Front 2025',
                        event_date: 'Jul 15, 2025',
                        event_time: '06:00 PM',
                        venue: 'San Francisco, CA',
                        check_in_time: '05:45 PM'
                    }
                }
            });

            if (authError) {
                console.error('❌ Auth signup failed:', authError);

                // Check if user already exists
                if (authError.message.includes('already registered')) {
                    // Try to get existing user and proceed
                    return await this.handleExistingUser(data, barcode);
                }

                throw new Error(`Registration failed: ${authError.message}`);
            }

            if (!authData.user) {
                throw new Error('No user created during signup');
            }

            const userId = authData.user.id;
            console.log('✅ User created:', userId);

            // Step 2: Create detailed registration record
            const registrationRecord = {
                id: crypto.randomUUID(),
                user_id: userId,
                email: data.email,
                full_name: data.fullName,
                phone: data.phone || null,
                company: data.company || null,
                ticket_type: data.ticketType,
                quantity: data.quantity,
                price: data.price,
                processing_fees: data.fees,
                total_amount: data.totalAmount,
                barcode: barcode,
                role: role,
                registration_status: 'completed',
                payment_status: 'pending', // Will be updated after payment
                created_at: new Date().toISOString(),
                updated_at: new Date().toISOString()
            };

            // Try to insert registration record (non-blocking)
            const { error: regError } = await supabase
                .from('registrations')
                .insert(registrationRecord);

            if (regError) {
                console.warn('⚠️ Registration record creation failed:', regError);
                // Don't fail the flow - we have the user in auth
            } else {
                console.log('✅ Registration record created');
            }

            // Step 3: Create/update profile (non-blocking)
            const { error: profileError } = await supabase
                .from('profiles')
                .upsert({
                    id: userId,
                    full_name: data.fullName,
                    email: data.email,
                    username: data.email.split('@')[0],
                    phone: data.phone,
                    company: data.company,
                    role: role,
                    ticket_type: data.ticketType,
                    barcode: barcode,
                    status: 'active',
                    updated_at: new Date().toISOString()
                });

            if (profileError) {
                console.warn('⚠️ Profile creation failed:', profileError);
                // Don't fail the flow
            } else {
                console.log('✅ Profile created/updated');
            }

            return {
                userId,
                registrationId: registrationRecord.id,
                barcode,
                needsVerification: !authData.user.email_confirmed_at
            };

        } catch (error) {
            console.error('❌ Registration service error:', error);
            return {
                userId: '',
                registrationId: '',
                barcode: '',
                needsVerification: false,
                error: error instanceof Error ? error.message : 'Unknown error'
            };
        }
    }

    /**
     * Handle case where user email already exists
     */
    private static async handleExistingUser(data: RegistrationData, barcode: string): Promise<UserRegistrationResult> {
        try {
            console.log('🔄 Handling existing user...');

            // Try to get existing user data
            const { data: existingProfiles, error } = await supabase
                .from('profiles')
                .select('id, email')
                .eq('email', data.email)
                .single();

            if (error || !existingProfiles) {
                throw new Error('Could not find existing user profile');
            }

            const userId = existingProfiles.id;

            // Create new registration record for this event
            const registrationRecord = {
                id: crypto.randomUUID(),
                user_id: userId,
                email: data.email,
                full_name: data.fullName,
                phone: data.phone || null,
                company: data.company || null,
                ticket_type: data.ticketType,
                quantity: data.quantity,
                price: data.price,
                processing_fees: data.fees,
                total_amount: data.totalAmount,
                barcode: barcode,
                role: getRole(data.ticketType),
                registration_status: 'completed',
                payment_status: 'pending',
                created_at: new Date().toISOString(),
                updated_at: new Date().toISOString()
            };

            const { error: regError } = await supabase
                .from('registrations')
                .insert(registrationRecord);

            if (regError) {
                console.warn('⚠️ Could not create registration for existing user:', regError);
            }

            return {
                userId,
                registrationId: registrationRecord.id,
                barcode,
                needsVerification: true // Existing users might need verification
            };

        } catch (error) {
            console.error('❌ Error handling existing user:', error);
            throw error;
        }
    }

    /**
     * Update payment status after successful payment
     */
    static async updatePaymentStatus(
        registrationId: string,
        orderId: string,
        paymentStatus: 'completed' | 'failed'
    ): Promise<boolean> {
        try {
            const { error } = await supabase
                .from('registrations')
                .update({
                    payment_status: paymentStatus,
                    order_id: orderId,
                    updated_at: new Date().toISOString()
                })
                .eq('id', registrationId);

            if (error) {
                console.error('❌ Failed to update payment status:', error);
                return false;
            }

            console.log('✅ Payment status updated');
            return true;
        } catch (error) {
            console.error('❌ Error updating payment status:', error);
            return false;
        }
    }

    /**
     * Create e-ticket record linked to user
     */
    static async createETicket(
        userId: string,
        registrationId: string,
        ticketData: {
            ticketId: string;
            barcode: string;
            qrCode?: string;
            eventName: string;
            eventDate: string;
            eventTime: string;
            venue: string;
            checkInTime: string;
        }
    ): Promise<boolean> {
        try {
            const { error } = await supabase
                .from('etickets')
                .insert({
                    id: crypto.randomUUID(),
                    ticket_id: ticketData.ticketId,
                    user_id: userId,
                    registration_id: registrationId,
                    barcode: ticketData.barcode,
                    qr_code: ticketData.qrCode || ticketData.barcode,
                    event_name: ticketData.eventName,
                    event_date: ticketData.eventDate,
                    event_time: ticketData.eventTime,
                    venue: ticketData.venue,
                    check_in_time: ticketData.checkInTime,
                    status: 'active',
                    issued_at: new Date().toISOString(),
                    created_at: new Date().toISOString()
                });

            if (error) {
                console.error('❌ Failed to create e-ticket:', error);
                return false;
            }

            console.log('✅ E-ticket created and linked to user');
            return true;
        } catch (error) {
            console.error('❌ Error creating e-ticket:', error);
            return false;
        }
    }

    /**
     * Check if user needs email verification
     */
    static async checkVerificationStatus(email: string): Promise<{
        needsVerification: boolean;
        userId?: string;
    }> {
        try {
            const { data, error } = await supabase
                .from('profiles')
                .select('id')
                .eq('email', email)
                .single();

            if (error || !data) {
                return { needsVerification: false };
            }

            // Check auth user verification status
            const { data: authUser } = await supabase.auth.getUser();

            return {
                needsVerification: !authUser.user?.email_confirmed_at,
                userId: data.id
            };
        } catch (error) {
            console.error('❌ Error checking verification status:', error);
            return { needsVerification: false };
        }
    }
}