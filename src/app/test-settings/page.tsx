"use client";

import { useAdmin } from '@/contexts/AdminContext';

export default function TestSettings() {
  const { siteSettings, isLoading } = useAdmin();

  if (isLoading) {
    return <div className="p-8">Loading...</div>;
  }

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Site Settings Test</h1>
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">Current Settings:</h2>
        <div className="space-y-2">
          <p><strong>Site Title:</strong> {siteSettings.siteTitle}</p>
          <p><strong>Site Description:</strong> {siteSettings.siteDescription}</p>
          <p><strong>Dark Theme:</strong> {siteSettings.darkTheme ? 'Yes' : 'No'}</p>
          <p><strong>Animations:</strong> {siteSettings.animationsEnabled ? 'Yes' : 'No'}</p>
          <p><strong>Performance Monitor:</strong> {siteSettings.performanceMonitor ? 'Yes' : 'No'}</p>
        </div>
        
        <h2 className="text-lg font-semibold mb-4 mt-6">LocalStorage Check:</h2>
        <div className="bg-gray-100 p-4 rounded">
          <pre>{JSON.stringify(JSON.parse(localStorage.getItem('siteSettings') || '{}'), null, 2)}</pre>
        </div>
        
        <h2 className="text-lg font-semibold mb-4 mt-6">Document Title:</h2>
        <p>{document.title}</p>
      </div>
    </div>
  );
}