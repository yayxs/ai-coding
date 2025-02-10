import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import type { ReactNode } from 'react'
import { BackgroundBeamsWithCollision } from './components/BeamsWithCollision'
import { Header } from './components/Header'
import { ScrollToTop } from './components/ScrollToTop'
import { Providers } from './components/Providers'

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
      </head>
      <body className='min-h-screen bg-background text-foreground transition-colors duration-300'>
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
