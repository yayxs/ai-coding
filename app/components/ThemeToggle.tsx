'use client'

import { Moon, Sun } from 'lucide-react'
import { Button } from './Button'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button
        variant="outline"
        size="icon"
        className="opacity-0 transition-opacity rounded-full"
      >
        <Moon className="h-5 w-5" />
      </Button>
    )
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => {
        console.log('Current theme:', theme);
        setTheme(theme === 'dark' ? 'light' : 'dark');
      }}
      aria-label="切换主题"
      className="rounded-full shadow-lg bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
    >
      <div className="relative w-5 h-5">
        <Sun
          className={`h-5 w-5 absolute text-gray-800 dark:text-gray-200 ${theme !== 'dark'
            ? 'opacity-100'
            : 'opacity-0'
            }`}
        />
        <Moon
          className={`h-5 w-5 absolute text-gray-800 dark:text-gray-200 ${theme === 'dark'
            ? 'opacity-100'
            : 'opacity-0'
            }`}
        />
      </div>
    </Button>
  )
}
