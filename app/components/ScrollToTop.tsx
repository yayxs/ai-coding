'use client'

import { useEffect, useState } from 'react'
import { Button } from './Button'
import { ArrowUp } from 'lucide-react'
import { cn } from '../lib/utils'

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  const handleScroll = () => {
    const scrollY = window.scrollY
    setIsVisible(scrollY > 200)
  }

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Button
      variant="outline"
      size="icon"
      className={cn(
        'fixed bottom-8 right-8 z-50 rounded-full shadow-lg transition-all duration-300 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700',
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-28 opacity-0'
      )}
      onClick={handleScrollToTop}
      aria-label="返回顶部"
    >
      <ArrowUp className="h-4 w-4 text-gray-800 dark:text-gray-200" />
    </Button>
  )
}