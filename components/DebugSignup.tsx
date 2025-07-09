// components/DebugSignup.tsx - CREATE this to test step by step
'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function DebugSignup() {
  const [email, setEmail] = useState('test@example.com');
  const [results, setResults] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const addResult = (message: string) => {
    setResults(prev => [...prev, `${new Date().toLocaleTimeString()}: ${message}`]);
    console.log(message);
  };

  const testBasicSignup = async () => {
    setLoading(true);
    setResults([]);
    
    addResult('🧪 Starting basic signup test...');
    
    try {
      addResult(`📧 Using email: ${email}`);
      
      const { data, error } = await supabase.auth.signUp({
        email: email,
        password: 'simpletest123'
      });

      if (error) {
        addResult(`❌ Signup failed: ${error.message}`);
        addResult(`❌ Error code: ${error.status}`);
        addResult(`❌ Error details: ${JSON.stringify(error, null, 2)}`);
      } else {
        addResult(`✅ Signup successful!`);
        addResult(`✅ User ID: ${data.user?.id}`);
        addResult(`✅ User email: ${data.user?.email}`);
        addResult(`✅ Email confirmed: ${data.user?.email_confirmed_at ? 'Yes' : 'No'}`);
      }
    } catch (err) {
      addResult(`❌ Exception caught: ${err}`);
      addResult(`❌ Exception type: ${typeof err}`);
      if (err instanceof Error) {
        addResult(`❌ Exception message: ${err.message}`);
        addResult(`❌ Exception stack: ${err.stack}`);
      }
    } finally {
      setLoading(false);
    }
  };

  const testWithMetadata = async () => {
    setLoading(true);
    setResults([]);
    
    addResult('🧪 Testing signup with metadata...');
    
    try {
      const { data, error } = await supabase.auth.signUp({
        email: email,
        password: 'simpletest123',
        options: {
          data: {
            full_name: 'Test User',
            role: 'attendee'
          }
        }
      });

      if (error) {
        addResult(`❌ Metadata signup failed: ${error.message}`);
      } else {
        addResult(`✅ Metadata signup successful!`);
        addResult(`✅ User metadata: ${JSON.stringify(data.user?.user_metadata, null, 2)}`);
      }
    } catch (err) {
      addResult(`❌ Metadata exception: ${err}`);
    } finally {
      setLoading(false);
    }
  };

  const clearResults = () => {
    setResults([]);
  };

  return (
    <div className="p-4 border border-gray-300 rounded-lg m-4 max-w-md">
      <h3 className="font-bold mb-4">🔍 Signup Debug Tool</h3>
      
      <div className="space-y-3">
        <div>
          <label className="block text-sm font-medium mb-1">Test Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded text-sm"
            placeholder="test@example.com"
          />
        </div>
        
        <div className="flex space-x-2">
          <button
            onClick={testBasicSignup}
            disabled={loading}
            className="flex-1 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50 text-sm"
          >
            {loading ? 'Testing...' : 'Test Basic'}
          </button>
          
          <button
            onClick={testWithMetadata}
            disabled={loading}
            className="flex-1 p-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:opacity-50 text-sm"
          >
            {loading ? 'Testing...' : 'Test Metadata'}
          </button>
        </div>
        
        <button
          onClick={clearResults}
          className="w-full p-1 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 text-sm"
        >
          Clear Results
        </button>
        
        {results.length > 0 && (
          <div className="max-h-40 overflow-y-auto bg-gray-100 p-2 rounded text-xs">
            {results.map((result, index) => (
              <div key={index} className="mb-1 font-mono">
                {result}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}