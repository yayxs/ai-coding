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
  title: 'AI Coding Tools - 最全AI编程工具导航 | AI代码助手 | AI编辑器',
  description: '收录Cursor、Copilot、CodeWhisperer等热门AI编程工具，包含代码补全、重构、调试等AI编程助手，以及移动应用开发、前端组件生成等智能开发工具。发现提升编程效率的AI工具。',
  keywords: [
    'AI编程',
    'AI代码助手',
    'AI编辑器',
    'Cursor编辑器',
    'GitHub Copilot',
    'AI开发工具',
    'AI编程工具',
    'AI代码生成',
    '智能编程',
    'AI编程导航',
    'AI代码补全',
    'AI应用开发',
    '代码重构工具',
    'AI调试助手',
    'Screenshot to Code',
    'AI前端开发',
    'AI移动开发',
    'Rork',
    'CodeFuse',
    'AI项目文档生成',
    'Cursor',
    'Windsurf',
    'Trae',
  ].join(', '),
  authors: [
    { name: 'yayxs', url: 'https://github.com/yayxs' }
  ],
  creator: 'yayxs',
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: 'https://aicoding.vercel.app/',
    title: 'AI Coding Tools - 最全AI编程工具导航 | AI代码助手 | AI编辑器',
    description: '收录最全最新AI编程工具，包括代码编辑器、IDE插件、终端工具等。帮助开发者发现并使用最新AI编程工具，提升开发效率。',
    siteName: 'AI Coding Tools',
    
  },
  // twitter: {
  //   card: 'summary_large_image',
  //   title: 'AI Coding Tools - 最全AI编程工具导航',
  //   description: '发现最新最全的AI编程工具，提升开发效率',
  //   images: ['/og-image.png'],
  // },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
 
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh-CN" className={inter.className} suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://aicoding.vercel.app/" />
        <meta name="baidu-site-verification" content="你的百度验证码" />
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
