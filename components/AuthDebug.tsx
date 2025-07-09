// components/AuthDebug.tsx - CREATE this for testing
'use client';

import { useAuth } from '@/lib/auth';

export default function AuthDebug() {
  const { user, session, userRole, isLoading } = useAuth();

  return (
    <div className="fixed top-4 right-4 bg-white border border-gray-300 rounded-lg p-4 shadow-lg max-w-sm z-50">
      <h3 className="font-bold text-sm mb-2">🔍 Auth Debug</h3>
      
      <div className="text-xs space-y-1">
        <div><strong>Loading:</strong> {isLoading ? '⏳' : '✅'}</div>
        <div><strong>User:</strong> {user ? '✅ Logged In' : '❌ Not logged in'}</div>
        
        {user && (
          <>
            <div><strong>Email:</strong> {user.email}</div>
            <div><strong>ID:</strong> {user.id.substring(0, 8)}...</div>
            <div><strong>Role:</strong> {userRole || 'No role'}</div>
            
            <div className="mt-2">
              <strong>User Metadata:</strong>
              <pre className="text-xs bg-gray-100 p-1 rounded mt-1">
                {JSON.stringify(user.user_metadata, null, 2)}
              </pre>
            </div>
            
            <div><strong>Session:</strong> {session ? '✅' : '❌'}</div>
          </>
        )}
      </div>
    </div>
  );
}