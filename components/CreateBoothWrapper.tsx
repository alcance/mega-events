'use client';

import { useAuth } from '@/lib/auth';
import CreateBoothFlow from './CreateBoothFlow';

export default function CreateBoothWrapper() {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div>Loading...</div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Please Log In</h1>
          <p>You need to be logged in to create a booth.</p>
          <a href="/register" className="mt-4 inline-block bg-red-500 text-white px-6 py-3 rounded-lg">
            Go to Login
          </a>
        </div>
      </div>
    );
  }

  return <CreateBoothFlow />;
}