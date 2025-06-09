// types/booth.ts
export interface BoothFormData {
    // Package selection
    packageType: 'basic' | 'premium' | 'custom';
    
    // Booth info
    name: string;
    description: string;
    brandingFiles: File[];
    
    // Contact info
    contactName: string;
    contactEmail: string;
    contactPhone: string;
    website: string;
    interactionType: 'chat' | 'videocall' | 'qa';
  }
  
  export interface BoothData extends BoothFormData {
    id?: string;
    user_id?: string;
    status?: 'draft' | 'published' | 'live';
    created_at?: string;
    updated_at?: string;
  }