// app/dashboard/[id]/page.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';

interface Event {
  id: string;
  name: string;
  description: string;
  start_date: string;
  end_date: string;
  location: string;
  max_attendees: number;
  created_by: string;
  created_at: string;
}

export default function DashboardPage() {
  const { id } = useParams();
  const router = useRouter();
  const [event, setEvent] = useState<Event | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (id) {
      fetchEvent();
    }
  }, [id]);

  const fetchEvent = async () => {
    try {
      const { data, error } = await supabase
        .from('events')
        .select('*')
        .eq('id', id)
        .single();

      if (error) {
        setError('Event not found');
        console.error('Error fetching event:', error);
      } else {
        setEvent(data);
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Failed to load event');
    } finally {
      setIsLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const handleDashboardNavigation = (dashboardType: string) => {
    // Navigate to the specific dashboard with the event ID as a query parameter
    router.push(`/dashboard/${dashboardType}?eventId=${id}`);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading event...</p>
        </div>
      </div>
    );
  }

  if (error || !event) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Event Not Found</h1>
          <p className="text-gray-600 mb-6">{error || 'The event you are looking for does not exist.'}</p>
          <button
            onClick={() => router.push('/create-event')}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Create New Event
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{event.name}</h1>
              <p className="text-gray-600">Event ID: {event.id}</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => router.push('/events')}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50"
              >
                All Events
              </button>
              <button
                onClick={() => router.push('/create-event')}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Create New Event
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Event Details */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Event Details</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-1">Description</h3>
              <p className="text-gray-900">{event.description || 'No description provided'}</p>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-1">Location</h3>
              <p className="text-gray-900">{event.location || 'No location specified'}</p>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-1">Start Date</h3>
              <p className="text-gray-900">{formatDate(event.start_date)}</p>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-1">End Date</h3>
              <p className="text-gray-900">{formatDate(event.end_date)}</p>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-1">Maximum Attendees</h3>
              <p className="text-gray-900">{event.max_attendees || 'Unlimited'}</p>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-1">Created</h3>
              <p className="text-gray-900">{formatDate(event.created_at)}</p>
            </div>
          </div>
        </div>

        {/* Dashboard Navigation */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Dashboard Access</h2>
          <p className="text-gray-600 mb-6">
            Access different dashboard sections for this event. Each dashboard will show information specific to {event.name}.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { 
                name: 'Admin', 
                path: 'admin', 
                description: 'General administration and overview',
                icon: '⚙️'
              },
              { 
                name: 'Lead Manager', 
                path: 'lead', 
                description: 'Lead management and tracking',
                icon: '🎯'
              },
              { 
                name: 'Marketing Manager', 
                path: 'marketing-manager', 
                description: 'Marketing campaigns and analytics',
                icon: '📈'
              },
              { 
                name: 'Polling Manager', 
                path: 'polling-manager', 
                description: 'Polls, surveys and feedback',
                icon: '📊'
              },
              { 
                name: 'S-A Manager', 
                path: 's-a-manager', 
                description: 'Speaker & attendee management',
                icon: '👥'
              },
              { 
                name: 'Security Manager', 
                path: 'security-manager', 
                description: 'Security and access control',
                icon: '🔒'
              }
            ].map((section) => (
              <button
                key={section.path}
                onClick={() => handleDashboardNavigation(section.path)}
                className="p-6 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 text-left transition-colors group"
              >
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-3">{section.icon}</span>
                  <h3 className="font-medium text-gray-900 group-hover:text-blue-700">
                    {section.name}
                  </h3>
                </div>
                <p className="text-sm text-gray-600 group-hover:text-blue-600">
                  {section.description}
                </p>
                <div className="mt-3 text-xs text-gray-400">
                  Event: {event.name}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}