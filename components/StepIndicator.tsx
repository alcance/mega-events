'use client';

import React from 'react';
import { useRegistration, REGISTRATION_STEPS } from '@/lib/contexts/RegistrationContext';

export default function StepIndicator() {
  const { state } = useRegistration();
  const currentStep = state.currentStep;

  return (
    <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-10">
      <div className="flex flex-col space-y-4">
        {REGISTRATION_STEPS.map((step, index) => (
          <div key={step.id} className="flex items-center group">
            {/* Bullet Point */}
            <div
              className={`
                w-3 h-3 rounded-full transition-all duration-300 ease-in-out
                ${currentStep > step.id 
                  ? 'bg-green-500 shadow-lg' 
                  : currentStep === step.id 
                    ? 'bg-[#F94F4F] shadow-lg scale-125' 
                    : 'bg-gray-300'
                }
              `}
            />
            
            {/* Step Label (appears on hover) */}
            <div className={`
              ml-3 px-2 py-1 rounded-md text-xs font-medium transition-all duration-300 ease-in-out
              opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0
              ${currentStep > step.id 
                ? 'bg-green-100 text-green-700' 
                : currentStep === step.id 
                  ? 'bg-red-100 text-red-700' 
                  : 'bg-gray-100 text-gray-600'
              }
            `}>
              {step.name}
            </div>
            
            {/* Connecting Line */}
            {index < REGISTRATION_STEPS.length - 1 && (
              <div 
                className={`
                  absolute left-1.5 w-0.5 h-8 mt-3 transition-colors duration-300
                  ${currentStep > step.id ? 'bg-green-300' : 'bg-gray-200'}
                `}
                style={{ 
                  top: '12px',
                  transform: 'translateX(-1px)'
                }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}