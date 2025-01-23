import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import type { ReactNode } from 'react'
import { BackgroundBeamsWithCollision } from '@/components/ui/BeamsWithCollision'
import { Header } from '@/components/ui/Header'
import { ScrollToTop } from '@/components/ui/ScrollToTop'
import { Providers } from '@/components/Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AI Coding',
  description:
    'Collection of AI Coding code editors, tools, and extensions, such as Cursor, Windsurf, v0, Bolt, Cline, etc.'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                let isDark = localStorage.theme === 'dark' || 
                  (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
                document.documentElement.classList.toggle('dark', isDark)
              } catch (e) {}
            `
          }}
        />
      </head>
      <body className='min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300'>
        <Providers>
          <Header />
          <main className='relative'>
            <BackgroundBeamsWithCollision className='fixed inset-0'>
              <div />
            </BackgroundBeamsWithCollision>
            <div className='relative z-10 mx-auto max-w-7xl px-4 sm:px-4 md:px-6 lg:px-8'>
              {children}
            </div>
          </main>
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  )
}
