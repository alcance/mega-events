'use client';

import React, { useState } from 'react';
import { validateTicket, TicketValidationResult } from '@/lib/validatedTicket';
import { withAuth } from '@/lib/protected-route';
import Image from 'next/image';

const TicketScannerPage = () => {
  const [barcode, setBarcode] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [validationResult, setValidationResult] = useState<TicketValidationResult | null>(null);
  const [checkIn, setCheckIn] = useState<boolean>(true);

  // Handle barcode validation
  const handleValidateTicket = async () => {
    if (!barcode) return;
    
    setIsProcessing(true);
    try {
      const result = await validateTicket(barcode, checkIn);
      setValidationResult(result);
    } catch (error) {
      console.error('Error validating ticket:', error);
      setValidationResult({
        valid: false,
        message: 'An error occurred during validation'
      });
    } finally {
      setIsProcessing(false);
    }
  };

  // Clear the form
  const handleClear = () => {
    setBarcode('');
    setValidationResult(null);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center mr-3">
              <Image 
                src="/main-logo.svg" 
                alt="Logo" 
                width={20} 
                height={20}
              />
            </div>
            <h1 className="text-xl font-semibold">Ticket Scanner</h1>
          </div>
          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
            Staff Portal
          </span>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-lg font-medium mb-6">Scan or Enter Ticket Barcode</h2>
            
            <div className="mb-6">
              <label htmlFor="barcode" className="block text-sm font-medium text-gray-700">
                Barcode
              </label>
              <div className="mt-1 flex rounded-md shadow-sm">
                <input
                  type="text"
                  id="barcode"
                  className="flex-1 min-w-0 block w-full px-3 py-2 rounded-md border border-gray-300 focus:ring-red-500 focus:border-red-500"
                  placeholder="Enter barcode number"
                  value={barcode}
                  onChange={(e) => setBarcode(e.target.value)}
                />
                <button
                  type="button"
                  onClick={handleValidateTicket}
                  disabled={isProcessing || !barcode}
                  className="ml-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-50"
                >
                  {isProcessing ? 'Processing...' : 'Validate'}
                </button>
              </div>
              
              <div className="mt-2 flex items-center">
                <input
                  id="check-in"
                  type="checkbox"
                  className="h-4 w-4 text-red-500 focus:ring-red-500 border-gray-300 rounded"
                  checked={checkIn}
                  onChange={(e) => setCheckIn(e.target.checked)}
                />
                <label htmlFor="check-in" className="ml-2 block text-sm text-gray-700">
                  Mark as checked in
                </label>
              </div>
            </div>

            {validationResult && (
              <div className={`p-4 rounded-md ${
                validationResult.valid 
                  ? 'bg-green-50 border border-green-200' 
                  : 'bg-red-50 border border-red-200'
              }`}>
                <div className="flex">
                  <div className={`flex-shrink-0 ${
                    validationResult.valid ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {validationResult.valid ? (
                      <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                  <div className="ml-3">
                    <h3 className={`text-sm font-medium ${
                      validationResult.valid ? 'text-green-800' : 'text-red-800'
                    }`}>
                      {validationResult.message}
                    </h3>
                    
                    {validationResult.userData && (
                      <div className="mt-2 text-sm">
                        <div className="space-y-1">
                          <p><strong>Name:</strong> {validationResult.userData.fullName || 'N/A'}</p>
                          {validationResult.userData.email && <p><strong>Email:</strong> {validationResult.userData.email}</p>}
                          <p><strong>Ticket Type:</strong> {validationResult.userData.ticketType || 'Standard'}</p>
                          <p><strong>Quantity:</strong> {validationResult.userData.ticketQuantity || 1}</p>
                          {validationResult.userData.checkedIn && (
                            <p><strong>Check-in Time:</strong> {new Date(validationResult.userData.checkInTime || '').toLocaleString()}</p>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
            
            <div className="mt-6">
              <button
                type="button"
                onClick={handleClear}
                className="w-full inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Clear
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-8 bg-white shadow rounded-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-lg font-medium mb-4">Recent Check-ins</h2>
            <div className="border border-gray-200 rounded-md overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Time
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Ticket Type
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {/* This would be populated with actual check-in data in a real application */}
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date().toLocaleTimeString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      John Doe
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      VIP
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Checked In
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(Date.now() - 300000).toLocaleTimeString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Jane Smith
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Standard
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Checked In
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default withAuth(TicketScannerPage);