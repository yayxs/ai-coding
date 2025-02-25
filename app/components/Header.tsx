'use client';

import Link from 'next/link';
import { Button } from './Button';
import { Github, Clock } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-7xl mx-auto items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Link href="/" className="text-xl font-bold text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            <h1>
              <span className="hidden">AI Coding Tools - </span>
              AI Coding Tools Navigation
            </h1>
          </Link>
          <p className="hidden">Discover the latest AI coding tools to boost your development efficiency</p>
        </div>
        <div className="flex items-center space-x-4">
          {/* Model Timing Button */}
          <Button variant="ghost" size="sm" asChild className="hidden sm:flex items-center gap-1">
            <Link href="/model-timing">
              <Clock className="h-4 w-4 text-gray-800 dark:text-gray-200" />
              <span className="text-sm">Model Timing</span>
            </Link>
          </Button>
          
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
