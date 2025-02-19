'use client';

import { useState } from 'react';
import { AiToolsGrid } from './components/AiToolsGrid';
import { AiToolsByOutput } from './components/AiToolsByOutput';
import { aiTools } from './data/aiTools';
import { Button } from './components/Button';
import { Layout, Layers } from 'lucide-react';

export default function Home() {
  // 默认展示类别视图
  const [viewMode, setViewMode] = useState<'category' | 'track'>('category');

  return (
    <main className="flex min-h-screen flex-col items-center p-2 py-6">
      <div className="w-full max-w-7xl mx-auto mb-8 flex justify-center space-x-4">
        <Button 
          variant={viewMode === 'category' ? 'outline' : 'default'}
          onClick={() => setViewMode('category')}
          className="flex items-center gap-2"
        >
          <Layout className="w-4 h-4" />
          按类别
        </Button>
        <Button 
          variant={viewMode === 'track' ? 'outline' : 'default'}
          onClick={() => setViewMode('track')}
          className="flex items-center gap-2"
        >
          <Layers className="w-4 h-4" />
          细分赛道
        </Button>
      </div>
      
      {viewMode === 'category' ? (
        <AiToolsGrid tools={aiTools} />
      ) : (
        <AiToolsByOutput tools={aiTools} />
      )}
    </main>
  );
}
