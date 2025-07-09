'use client';

import React, { createContext, useContext, useReducer, ReactNode } from 'react';

// Types for the registration flow
export interface UserData {
  fullName: string;
  email: string;
  phone?: string;
  company?: string;
  role?: string;
}

export interface TicketData {
  ticketType: string;
  quantity: number;
  price: number;
  fees: number;
  totalAmount: number;
}

export interface PaymentData {
  method: 'credit' | 'apple' | 'google' | 'paypal';
  cardNumber?: string;
  expiryDate?: string;
  cvv?: string;
  cardholderName?: string;
  billingAddress?: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
}

export interface OrderData {
  orderId: string;
  status: 'pending' | 'processing' | 'completed' | 'failed';
  createdAt: Date;
  paymentStatus: 'pending' | 'completed' | 'failed';
}

export interface ETicketData {
  ticketId: string;
  barcode: string;
  qrCode?: string;
  eventName: string;
  eventDate: string;
  eventTime: string;
  venue: string;
  checkInTime: string;
  issuedAt: Date;
}

export interface RegistrationState {
  currentStep: number;
  userData: UserData;
  ticketData: TicketData;
  paymentData: PaymentData;
  orderData: OrderData | null;
  eTicketData: ETicketData | null;
  isLoading: boolean;
  error: string | null;
  // Added for Supabase integration
  userId: string | null;
  registrationId: string | null;
  needsVerification: boolean;
}

// Action types
type RegistrationAction = 
  | { type: 'SET_CURRENT_STEP'; payload: number }
  | { type: 'SET_USER_DATA'; payload: Partial<UserData> }
  | { type: 'SET_TICKET_DATA'; payload: Partial<TicketData> }
  | { type: 'SET_PAYMENT_DATA'; payload: Partial<PaymentData> }
  | { type: 'SET_ORDER_DATA'; payload: OrderData }
  | { type: 'SET_ETICKET_DATA'; payload: ETicketData }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string | null }
  | { type: 'SET_USER_REGISTRATION'; payload: { userId: string; registrationId: string; needsVerification: boolean } }
  | { type: 'RESET_FLOW' }
  | { type: 'NEXT_STEP' }
  | { type: 'PREV_STEP' };

// Initial state
const initialState: RegistrationState = {
  currentStep: 1,
  userData: {
    fullName: '',
    email: '',
    phone: '',
    company: '',
    role: ''
  },
  ticketData: {
    ticketType: '',
    quantity: 1,
    price: 0,
    fees: 0,
    totalAmount: 0
  },
  paymentData: {
    method: 'credit',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: '',
    billingAddress: {
      street: '',
      city: '',
      state: '',
      zipCode: '',
      country: ''
    }
  },
  orderData: null,
  eTicketData: null,
  isLoading: false,
  error: null,
  userId: null,
  registrationId: null,
  needsVerification: false
};

// Reducer function
function registrationReducer(state: RegistrationState, action: RegistrationAction): RegistrationState {
  switch (action.type) {
    case 'SET_CURRENT_STEP':
      return { ...state, currentStep: action.payload };
    
    case 'SET_USER_DATA':
      return { 
        ...state, 
        userData: { ...state.userData, ...action.payload } 
      };
    
    case 'SET_TICKET_DATA':
      return { 
        ...state, 
        ticketData: { ...state.ticketData, ...action.payload } 
      };
    
    case 'SET_PAYMENT_DATA':
      return { 
        ...state, 
        paymentData: { ...state.paymentData, ...action.payload } 
      };
    
    case 'SET_ORDER_DATA':
      return { ...state, orderData: action.payload };
    
    case 'SET_ETICKET_DATA':
      return { ...state, eTicketData: action.payload };
    
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    
    case 'SET_USER_REGISTRATION':
      return { 
        ...state, 
        userId: action.payload.userId,
        registrationId: action.payload.registrationId,
        needsVerification: action.payload.needsVerification
      };
    
    case 'NEXT_STEP':
      return { ...state, currentStep: state.currentStep + 1 };
    
    case 'PREV_STEP':
      return { ...state, currentStep: Math.max(1, state.currentStep - 1) };
    
    case 'RESET_FLOW':
      return initialState;
    
    default:
      return state;
  }
}

// Context
const RegistrationContext = createContext<{
  state: RegistrationState;
  dispatch: React.Dispatch<RegistrationAction>;
  // Helper functions
  setUserData: (data: Partial<UserData>) => void;
  setTicketData: (data: Partial<TicketData>) => void;
  setPaymentData: (data: Partial<PaymentData>) => void;
  setOrderData: (data: OrderData) => void;
  setETicketData: (data: ETicketData) => void;
  setUserRegistration: (userId: string, registrationId: string, needsVerification: boolean) => void;
  nextStep: () => void;
  prevStep: () => void;
  goToStep: (step: number) => void;
  resetFlow: () => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  calculateTotalAmount: () => number;
  isStepValid: (step: number) => boolean;
} | null>(null);

// Provider component
export function RegistrationProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(registrationReducer, initialState);

  // Helper functions
  const setUserData = (data: Partial<UserData>) => {
    dispatch({ type: 'SET_USER_DATA', payload: data });
  };

  const setTicketData = (data: Partial<TicketData>) => {
    dispatch({ type: 'SET_TICKET_DATA', payload: data });
  };

  const setPaymentData = (data: Partial<PaymentData>) => {
    dispatch({ type: 'SET_PAYMENT_DATA', payload: data });
  };

  const setOrderData = (data: OrderData) => {
    dispatch({ type: 'SET_ORDER_DATA', payload: data });
  };

  const setETicketData = (data: ETicketData) => {
    dispatch({ type: 'SET_ETICKET_DATA', payload: data });
  };

  const setUserRegistration = (userId: string, registrationId: string, needsVerification: boolean) => {
    dispatch({ 
      type: 'SET_USER_REGISTRATION', 
      payload: { userId, registrationId, needsVerification } 
    });
  };

  const nextStep = () => {
    dispatch({ type: 'NEXT_STEP' });
  };

  const prevStep = () => {
    dispatch({ type: 'PREV_STEP' });
  };

  const goToStep = (step: number) => {
    dispatch({ type: 'SET_CURRENT_STEP', payload: step });
  };

  const resetFlow = () => {
    dispatch({ type: 'RESET_FLOW' });
  };

  const setLoading = (loading: boolean) => {
    dispatch({ type: 'SET_LOADING', payload: loading });
  };

  const setError = (error: string | null) => {
    dispatch({ type: 'SET_ERROR', payload: error });
  };

  const calculateTotalAmount = () => {
    const { price, quantity, fees } = state.ticketData;
    return (price * quantity) + fees;
  };

  const isStepValid = (step: number): boolean => {
    switch (step) {
      case 1: // User data form
        return !!(state.userData.fullName && state.userData.email);
      case 2: // Payment screen
        return !!(state.ticketData.ticketType && state.ticketData.quantity > 0);
      case 3: // Card details
        return !!(state.paymentData.method && 
          (state.paymentData.method !== 'credit' || 
           (state.paymentData.cardNumber && state.paymentData.expiryDate && state.paymentData.cvv)));
      case 4: // Order details
        return !!state.orderData;
      case 5: // Ticket confirmation
        return !!state.orderData && state.orderData.status === 'completed';
      case 6: // E-ticket
        return !!state.eTicketData;
      default:
        return false;
    }
  };

  const value = {
    state,
    dispatch,
    setUserData,
    setTicketData,
    setPaymentData,
    setOrderData,
    setETicketData,
    setUserRegistration,
    nextStep,
    prevStep,
    goToStep,
    resetFlow,
    setLoading,
    setError,
    calculateTotalAmount,
    isStepValid
  };

  return (
    <RegistrationContext.Provider value={value}>
      {children}
    </RegistrationContext.Provider>
  );
}

// Custom hook to use the context
export function useRegistration() {
  const context = useContext(RegistrationContext);
  if (!context) {
    throw new Error('useRegistration must be used within a RegistrationProvider');
  }
  return context;
}

// Step configuration
export const REGISTRATION_STEPS = [
  { id: 1, name: 'User Data', path: '/auth/register' },
  { id: 2, name: 'Payment Method', path: '/auth/payment' },
  { id: 3, name: 'Card Details', path: '/auth/card-details' },
  { id: 4, name: 'Order Details', path: '/auth/order-details' },
  { id: 5, name: 'Confirmation', path: '/auth/confirmation' },
  { id: 6, name: 'E-Ticket', path: '/auth/eticket' }
] as const;
