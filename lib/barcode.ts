// lib/barcode.ts
import { supabase } from './supabase';

/**
 * Generates a random numeric barcode string
 * @param length Length of the barcode to generate
 * @returns A random numeric string
 */
export const generateBarcodeNumber = (length: number = 12): string => {
  let result = '';
  for (let i = 0; i < length; i++) {
    result += Math.floor(Math.random() * 10).toString();
  }
  return result;
};

/**
 * Saves a barcode to the user's profile in the database
 * @param userId The user ID to save the barcode for
 * @param barcode The barcode to save
 */
export const saveBarcodeToUser = async (userId: string, barcode: string): Promise<void> => {
  try {
    const { error } = await supabase
      .from('profiles')
      .update({ barcode })
      .eq('id', userId);
    
    if (error) {
      console.error('Error saving barcode:', error);
      throw error;
    }
  } catch (err) {
    console.error('Failed to save barcode:', err);
    throw err;
  }
};

/**
 * Gets or creates a barcode for a user
 * @param userId The user ID to get/create a barcode for
 * @returns The user's barcode
 */
export const getUserBarcode = async (userId: string): Promise<string> => {
  try {
    // First check if user already has a barcode
    const { data, error } = await supabase
      .from('profiles')
      .select('barcode')
      .eq('id', userId)
      .single();
    
    if (error) {
      console.error('Error fetching user barcode:', error);
      throw error;
    }
    
    // If user has a barcode, return it
    if (data?.barcode) {
      return data.barcode;
    }
    
    // Otherwise, generate a new one
    const newBarcode = generateBarcodeNumber();
    await saveBarcodeToUser(userId, newBarcode);
    return newBarcode;
  } catch (err) {
    console.error('Failed to get or create barcode:', err);
    // Return a fallback barcode if there's an error
    return generateBarcodeNumber();
  }
};