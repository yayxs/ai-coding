'use client';

import { AiToolsGrid } from './components/AiToolsGrid';
import { AiTool } from './data/aiTools';
import { useEffect, useState } from 'react';

export default function Home() {
  const [tools, setTools] = useState<AiTool[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTools = async () => {
      try {
        const response = await fetch(
          'https://hono-server-api.youngwanlia.workers.dev/api/ai-tools'
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setTools(data);
      } catch (error) {
        console.error('获取AI工具数据失败:', error);
        setError('获取数据失败，请稍后重试');
      } finally {
        setLoading(false);
      }
    };

    fetchTools();
  }, []);

  if (loading) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-2 py-6">
        <div className="animate-pulse text-lg text-gray-600 dark:text-gray-300">加载中...</div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-2 py-6">
        <div className="text-red-500 dark:text-red-400">{error}</div>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-2 py-6">
      <AiToolsGrid tools={tools} />
    </main>
  );
}
