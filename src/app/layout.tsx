import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import type { ReactNode } from 'react'
import { BackgroundBeamsWithCollision } from '@/components/ui/background-beams-with-collision'
import { Header } from '@/components/ui/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AI Coding Tools Comparison',
  description: 'Compare features, platforms, and pricing of mainstream AI coding assistants',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <Header />
        <main className="relative">
          <BackgroundBeamsWithCollision className="fixed inset-0">
            <div />
          </BackgroundBeamsWithCollision>
          <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
      </body>
    </html>
  )
} 