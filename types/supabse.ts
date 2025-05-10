// types/supabase.ts
export type Database = {
    public: {
      Tables: {
        profiles: {
          Row: {
            id: string;
            username: string | null;
            full_name: string | null;
            created_at: string;
            updated_at: string | null;
          };
          Insert: {
            id: string;
            username?: string | null;
            full_name?: string | null;
            created_at?: string;
            updated_at?: string | null;
          };
          Update: {
            id?: string;
            username?: string | null;
            full_name?: string | null;
            created_at?: string;
            updated_at?: string | null;
          };
        };
        // Add other tables here as needed
      };
      Views: {
        // Add views here if you have any
      };
      Functions: {
        // Add functions here if you have any
      };
      Enums: {
        // Add enums here if you have any
      };
    };
  };