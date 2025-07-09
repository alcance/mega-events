'use client';

import React from 'react';
import { RegistrationProvider } from '@/lib/contexts/RegistrationContext';
import StepIndicator from '@/components/StepIndicator';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RegistrationProvider>
      <div className="min-h-screen bg-white">
        <StepIndicator />
        {children}
      </div>
    </RegistrationProvider>
  );
}