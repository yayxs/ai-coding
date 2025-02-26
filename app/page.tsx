'use client';

import { useState, useEffect } from 'react';
import { AiToolsGrid } from './components/AiToolsGrid';
import { AiToolsByOutput } from './components/AiToolsByOutput';
import { AiToolsByCompany } from './components/AiToolsByCompany';
import { LatestUpdates } from './components/LatestUpdates';
import { aiTools } from './data/aiTools';
import { Button } from './components/Button';
import { Layout, Layers, Building2 } from 'lucide-react';

export default function Home() {
  // Update to include the new company view
  const [viewMode, setViewMode] = useState<'category' | 'track' | 'company'>('category');
  const [buildDate, setBuildDate] = useState<string>('');
  
  useEffect(() => {
    // Use the build date or current date if not available
    // This will be replaced with the actual build date during deployment
    const date = process.env.NEXT_PUBLIC_BUILD_DATE || new Date().toISOString().split('T')[0];
    setBuildDate(date);
  }, []);

  // Latest tools data
  const latestUpdates = {
    date: buildDate,
    tools: [
      {
        name: 'Gemini Code Assist',
        link: 'https://codeassist.google/'
      }
      // Add more tools if needed
    ]
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-2 py-6">
      <LatestUpdates date={latestUpdates.date} tools={latestUpdates.tools} />
      
      <div className="w-full max-w-7xl mx-auto mb-8 flex justify-center space-x-4">
        <Button 
          variant={viewMode === 'category' ? 'outline' : 'default'}
          onClick={() => setViewMode('category')}
          className="flex items-center gap-2"
        >
          <Layout className="w-4 h-4" />
          By Category
        </Button>
        <Button 
          variant={viewMode === 'track' ? 'outline' : 'default'}
          onClick={() => setViewMode('track')}
          className="flex items-center gap-2"
        >
          <Layers className="w-4 h-4" />
          By Track
        </Button>
        <Button 
          variant={viewMode === 'company' ? 'outline' : 'default'}
          onClick={() => setViewMode('company')}
          className="flex items-center gap-2"
        >
          <Building2 className="w-4 h-4" />
          By Company
        </Button>
      </div>
      
      {viewMode === 'category' ? (
        <AiToolsGrid tools={aiTools} />
      ) : viewMode === 'track' ? (
        <AiToolsByOutput tools={aiTools} />
      ) : (
        <AiToolsByCompany tools={aiTools} />
      )}
    </main>
  );
}
