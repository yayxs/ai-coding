import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import type { ReactNode } from 'react'
import { BackgroundBeamsWithCollision } from '@/components/ui/background-beams-with-collision'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AI Coding Tools Comparison',
  description: 'Compare features, platforms, and pricing of mainstream AI coding assistants',
}

type RootLayoutProps = {
  children: ReactNode
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <BackgroundBeamsWithCollision className="min-h-screen">
          {children}
        </BackgroundBeamsWithCollision>
      </body>
    </html>
  )
}

export default RootLayout 