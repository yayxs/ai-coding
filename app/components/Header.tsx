'use client';

import Link from 'next/link';
import { Button } from './Button';
import { Github } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-7xl mx-auto items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-bold text-gray-800 dark:text-gray-200">
            <span className="hidden">AI Coding Tools - </span>
            AI编程工具导航
          </h1>
          <p className="hidden">发现最新最全的AI编程工具，提升开发效率</p>
        </div>
        <div className="flex items-center space-x-4">
          
          <ThemeToggle />
          <Button variant="ghost" size="icon" asChild>
            <Link
              href="https://github.com/yayxs/ai-coding"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub repository"
            >
              <Github className="h-5 w-5 text-gray-800 dark:text-gray-200" />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
