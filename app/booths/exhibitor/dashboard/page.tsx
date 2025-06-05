import React from 'react';

// Type definitions
interface ChartDataPoint {
  date: string;
  visitors: number;
  calls: number;
  brochure: number;
  links: number;
  time: number;
  leads: number;
}

interface LeadData {
  name: string;
  company: string;
  email: string;
  interaction: string;
  timestamp: string;
  downloads: string;
}

const WekalaDashboard = () => {
  // Sample data for the chart
  const chartData: ChartDataPoint[] = [
    { date: 'JUL 21', visitors: 60, calls: 45, brochure: 80, links: 40, time: 50, leads: 30 },
    { date: 'JUL 22', visitors: 80, calls: 70, brochure: 85, links: 60, time: 65, leads: 45 },
    { date: 'JUL 23', visitors: 45, calls: 55, brochure: 60, links: 35, time: 40, leads: 55 },
    { date: 'JUL 24', visitors: 90, calls: 80, brochure: 95, links: 75, time: 85, leads: 70 },
    { date: 'JUL 25', visitors: 110, calls: 100, brochure: 120, links: 90, time: 105, leads: 85 },
    { date: 'JUL 26', visitors: 75, calls: 65, brochure: 70, links: 55, time: 60, leads: 80 },
    { date: 'JUL 27', visitors: 45, calls: 35, brochure: 50, links: 30, time: 40, leads: 95 },
    { date: 'JUL 28', visitors: 95, calls: 85, brochure: 100, links: 80, time: 90, leads: 110 },
    { date: 'JUL 29', visitors: 120, calls: 110, brochure: 125, links: 100, time: 115, leads: 130 }
  ];

  const leadsData: LeadData[] = [
    {
      name: 'John Smith',
      company: 'Intel Corp',
      email: 'john.smith@email.com',
      interaction: 'Video Call',
      timestamp: '2025-07-19 10:15 AM',
      downloads: 'Brochure'
    },
    {
      name: 'Peter Wolf',
      company: 'GreenTech Ltd.',
      email: 'wolf1@email.com',
      interaction: 'Video Call',
      timestamp: '2025-07-19 10:15 AM',
      downloads: 'Demo Video'
    },
    {
      name: 'John Smith',
      company: 'Intel Corp',
      email: 'john.smith@email.com',
      interaction: 'Video Call',
      timestamp: '2025-07-19 10:15 AM',
      downloads: 'Brochure'
    },
    {
      name: 'Peter Wolf',
      company: 'GreenTech Ltd.',
      email: 'wolf1@email.com',
      interaction: 'Video Call',
      timestamp: '2025-07-19 10:15 AM',
      downloads: 'Demo Video'
    },
    {
      name: 'John Smith',
      company: 'Intel Corp',
      email: 'john.smith@email.com',
      interaction: 'Video Call',
      timestamp: '2025-07-19 10:15 AM',
      downloads: 'Brochure'
    }
  ];

  const generatePath = (data: ChartDataPoint[], key: keyof ChartDataPoint, maxY: number = 140): string => {
    const width = 800;
    const height = 200;
    const padding = 40;
    
    const xStep = (width - 2 * padding) / (data.length - 1);
    const yScale = (height - 2 * padding) / maxY;
    
    let path = '';
    
    data.forEach((point: ChartDataPoint, index: number) => {
      const x = padding + index * xStep;
      const y = height - padding - ((point[key] as number) * yScale);
      
      if (index === 0) {
        path += `M ${x} ${y}`;
      } else {
        // Create smooth curves using quadratic bezier curves
        const prevX = padding + (index - 1) * xStep;
        const prevY = height - padding - ((data[index - 1][key] as number) * yScale);
        const cpX = (prevX + x) / 2;
        path += ` Q ${cpX} ${prevY} ${x} ${y}`;
      }
    });
    
    return path;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 w-64 h-full bg-white shadow-lg">
        {/* Logo */}
        <div className="flex items-center p-6 border-b">
          <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-3">
            <span className="text-white font-bold text-sm">W</span>
          </div>
          <span className="text-xl font-bold">WEKALA</span>
        </div>

        {/* Navigation */}
        <nav className="mt-6">
          <div className="px-4 space-y-2">
            <a href="#" className="flex items-center px-4 py-3 text-blue-600 bg-blue-50 rounded-lg">
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              Dashboard
            </a>
            <a href="#" className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg">
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              My Booths
            </a>
            <a href="#" className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg">
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              Package & Billing
            </a>
            <a href="#" className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg">
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Help / Support
            </a>
            <a href="#" className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg">
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Settings
            </a>
          </div>
        </nav>

        {/* Logout Button */}
        <div className="absolute bottom-6 left-4 right-4">
          <button className="w-full flex items-center justify-center px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            Log Out
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64 p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Overview</h1>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">John D.</span>
            <div className="w-8 h-8 bg-orange-400 rounded-full"></div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-purple-600 to-orange-500 rounded-2xl p-8 mb-8 relative overflow-hidden">
          <div className="flex justify-between items-center relative z-10">
            <div className="text-white">
              <div className="flex items-center mb-2">
                <span className="bg-yellow-400 text-black px-2 py-1 rounded-full text-xs font-medium mr-3">
                  Live
                </span>
              </div>
              <h2 className="text-2xl font-bold mb-2">EcoTech Innovations</h2>
              <p className="text-purple-100 mb-4">
                EcoTech Innovations is a green tech company focused on<br />
                solar-powered consumer products.
              </p>
              <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-medium">
                VIEW BOOTH
              </button>
            </div>
            <div className="relative">
              {/* Image placeholder - you can replace this with your image */}
              <div className="w-80 h-40 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Your image goes here</span>
              </div>
            </div>
          </div>
        </div>

        {/* Booth Performance Analytics */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Booth Performance Analytics</h3>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-6 gap-6 mb-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div className="text-sm text-gray-600 mb-1">Visitors</div>
              <div className="text-2xl font-bold text-gray-900">23</div>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="text-sm text-gray-600 mb-1">Video Calls Scheduled</div>
              <div className="text-2xl font-bold text-gray-900">05</div>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="text-sm text-gray-600 mb-1">Brochure Downloads</div>
              <div className="text-2xl font-bold text-gray-900">18</div>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <div className="text-sm text-gray-600 mb-1">Website Link Clicks</div>
              <div className="text-2xl font-bold text-gray-900">32</div>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-sm text-gray-600 mb-1">Avg. Time Spent At Booth</div>
              <div className="text-2xl font-bold text-gray-900">2m 45s</div>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div className="text-sm text-gray-600 mb-1">Leads Generated</div>
              <div className="text-2xl font-bold text-gray-900">12</div>
            </div>
          </div>

          {/* Chart */}
          <div className="mb-8">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Booth Performance Analytics</h4>
            <div className="relative">
              <svg width="100%" height="240" viewBox="0 0 800 240" className="overflow-visible">
                {/* Grid lines */}
                <defs>
                  <pattern id="grid" width="80" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 80 0 L 0 0 0 40" fill="none" stroke="#f3f4f6" strokeWidth="1"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
                
                {/* Y-axis labels */}
                <text x="30" y="50" fontSize="12" fill="#6b7280" textAnchor="end">140</text>
                <text x="30" y="90" fontSize="12" fill="#6b7280" textAnchor="end">120</text>
                <text x="30" y="130" fontSize="12" fill="#6b7280" textAnchor="end">80</text>
                <text x="30" y="170" fontSize="12" fill="#6b7280" textAnchor="end">40</text>
                <text x="30" y="210" fontSize="12" fill="#6b7280" textAnchor="end">0</text>
                
                {/* Chart lines */}
                <path
                  d={generatePath(chartData, 'visitors')}
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d={generatePath(chartData, 'calls')}
                  fill="none"
                  stroke="#8b5cf6"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d={generatePath(chartData, 'brochure')}
                  fill="none"
                  stroke="#ef4444"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d={generatePath(chartData, 'links')}
                  fill="none"
                  stroke="#f59e0b"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d={generatePath(chartData, 'time')}
                  fill="none"
                  stroke="#ec4899"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d={generatePath(chartData, 'leads')}
                  fill="none"
                  stroke="#06b6d4"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                
                {/* X-axis labels */}
                {chartData.map((item, index) => (
                  <text 
                    key={index}
                    x={40 + index * ((800 - 80) / (chartData.length - 1))} 
                    y="230" 
                    fontSize="12" 
                    fill="#6b7280" 
                    textAnchor="middle"
                  >
                    {item.date}
                  </text>
                ))}
              </svg>
              
              {/* Legend */}
              <div className="flex flex-wrap justify-center mt-4 space-x-6 text-sm">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                  <span>Visitors</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
                  <span>Calls Schedule</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                  <span>Brochure Download</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                  <span>Link Clicks</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-pink-500 rounded-full mr-2"></div>
                  <span>Time Spend</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-cyan-500 rounded-full mr-2"></div>
                  <span>Leads Generated</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Leads Overview */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold text-gray-900">Leads Overview</h3>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium">
              EXPORT TO CSV
            </button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Visitor Name</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Company</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Email</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Interaction Type</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Timestamps</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Downloads</th>
                </tr>
              </thead>
              <tbody>
                {leadsData.map((lead, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 text-gray-900">{lead.name}</td>
                    <td className="py-3 px-4 text-gray-600">{lead.company}</td>
                    <td className="py-3 px-4 text-gray-600">{lead.email}</td>
                    <td className="py-3 px-4 text-gray-600">{lead.interaction}</td>
                    <td className="py-3 px-4 text-gray-600">{lead.timestamp}</td>
                    <td className="py-3 px-4 text-gray-600">{lead.downloads}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WekalaDashboard;