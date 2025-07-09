export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          username: string | null;
          full_name: string | null;
          email: string | null;
          role: 'admin' | 'exhibitor' | 'speaker' | 'attendee' | 'security_manager';
          status: 'active' | 'pending' | 'suspended';
          ticket_type: string | null;
          ticket_quantity: number | null;
          barcode: string | null;
          checked_in: boolean;
          check_in_time: string | null;
          created_at: string;
          updated_at: string | null;
        };
        Insert: {
          id: string;
          username?: string | null;
          full_name?: string | null;
          email?: string | null;
          role?: 'admin' | 'exhibitor' | 'speaker' | 'attendee' | 'security_manager';
          status?: 'active' | 'pending' | 'suspended';
          ticket_type?: string | null;
          ticket_quantity?: number | null;
          barcode?: string | null;
          checked_in?: boolean;
          check_in_time?: string | null;
          created_at?: string;
          updated_at?: string | null;
        };
        Update: {
          id?: string;
          username?: string | null;
          full_name?: string | null;
          email?: string | null;
          role?: 'admin' | 'exhibitor' | 'speaker' | 'attendee' | 'security_manager';
          status?: 'active' | 'pending' | 'suspended';
          ticket_type?: string | null;
          ticket_quantity?: number | null;
          barcode?: string | null;
          checked_in?: boolean;
          check_in_time?: string | null;
          created_at?: string;
          updated_at?: string | null;
        };
      };
      booths: {
        Row: {
          id: string;
          user_id: string | null;
          name: string;
          description: string | null;
          package_type: string | null;
          contact_name: string | null;
          contact_email: string | null;
          contact_phone: string | null;
          website: string | null;
          interaction_type: string | null;
          status: 'draft' | 'published' | 'archived';
          created_at: string;
          updated_at: string | null;
        };
        Insert: {
          id?: string;
          user_id?: string | null;
          name: string;
          description?: string | null;
          package_type?: string | null;
          contact_name?: string | null;
          contact_email?: string | null;
          contact_phone?: string | null;
          website?: string | null;
          interaction_type?: string | null;
          status?: 'draft' | 'published' | 'archived';
          created_at?: string;
          updated_at?: string | null;
        };
        Update: {
          id?: string;
          user_id?: string | null;
          name?: string;
          description?: string | null;
          package_type?: string | null;
          contact_name?: string | null;
          contact_email?: string | null;
          contact_phone?: string | null;
          website?: string | null;
          interaction_type?: string | null;
          status?: 'draft' | 'published' | 'archived';
          created_at?: string;
          updated_at?: string | null;
        };
      };
      sessions: {
        Row: {
          id: string;
          speaker_id: string | null;
          title: string;
          description: string | null;
          session_type: string | null;
          duration: number | null;
          max_attendees: number | null;
          scheduled_at: string | null;
          status: 'draft' | 'published' | 'cancelled';
          created_at: string;
          updated_at: string | null;
        };
        Insert: {
          id?: string;
          speaker_id?: string | null;
          title: string;
          description?: string | null;
          session_type?: string | null;
          duration?: number | null;
          max_attendees?: number | null;
          scheduled_at?: string | null;
          status?: 'draft' | 'published' | 'cancelled';
          created_at?: string;
          updated_at?: string | null;
        };
        Update: {
          id?: string;
          speaker_id?: string | null;
          title?: string;
          description?: string | null;
          session_type?: string | null;
          duration?: number | null;
          max_attendees?: number | null;
          scheduled_at?: string | null;
          status?: 'draft' | 'published' | 'cancelled';
          created_at?: string;
          updated_at?: string | null;
        };
      };
      events: {
        Row: {
          id: string;
          name: string;
          description: string | null;
          start_date: string | null;
          end_date: string | null;
          location: string | null;
          max_attendees: number | null;
          status: 'planning' | 'open' | 'in_progress' | 'completed' | 'cancelled';
          created_at: string;
          updated_at: string | null;
        };
        Insert: {
          id?: string;
          name: string;
          description?: string | null;
          start_date?: string | null;
          end_date?: string | null;
          location?: string | null;
          max_attendees?: number | null;
          status?: 'planning' | 'open' | 'in_progress' | 'completed' | 'cancelled';
          created_at?: string;
          updated_at?: string | null;
        };
        Update: {
          id?: string;
          name?: string;
          description?: string | null;
          start_date?: string | null;
          end_date?: string | null;
          location?: string | null;
          max_attendees?: number | null;
          status?: 'planning' | 'open' | 'in_progress' | 'completed' | 'cancelled';
          created_at?: string;
          updated_at?: string | null;
        };
      };
      leads: {
        Row: {
          id: string;
          booth_id: string | null;
          attendee_id: string | null;
          notes: string | null;
          interest_level: 'low' | 'medium' | 'high';
          follow_up_required: boolean;
          created_at: string;
          updated_at: string | null;
        };
        Insert: {
          id?: string;
          booth_id?: string | null;
          attendee_id?: string | null;
          notes?: string | null;
          interest_level?: 'low' | 'medium' | 'high';
          follow_up_required?: boolean;
          created_at?: string;
          updated_at?: string | null;
        };
        Update: {
          id?: string;
          booth_id?: string | null;
          attendee_id?: string | null;
          notes?: string | null;
          interest_level?: 'low' | 'medium' | 'high';
          follow_up_required?: boolean;
          created_at?: string;
          updated_at?: string | null;
        };
      };
      audit_logs: {
        Row: {
          id: string;
          user_id: string | null;
          action: string;
          resource_type: string | null;
          resource_id: string | null;
          details: any | null;
          ip_address: string | null;
          user_agent: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id?: string | null;
          action: string;
          resource_type?: string | null;
          resource_id?: string | null;
          details?: any | null;
          ip_address?: string | null;
          user_agent?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string | null;
          action?: string;
          resource_type?: string | null;
          resource_id?: string | null;
          details?: any | null;
          ip_address?: string | null;
          user_agent?: string | null;
          created_at?: string;
        };
      };
      user_roles: {
        Row: {
          name: string;
          display_name: string;
          permissions: string[];
          description: string | null;
          created_at: string;
        };
        Insert: {
          name: string;
          display_name: string;
          permissions?: string[];
          description?: string | null;
          created_at?: string;
        };
        Update: {
          name?: string;
          display_name?: string;
          permissions?: string[];
          description?: string | null;
          created_at?: string;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
  };
};