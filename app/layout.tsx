import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'AI Coding Tools - The Ultimate AI Programming Tools & Vibe Coding Navigation',
  description:
    'Discover the latest collection of AI programming and Vibe coding (氛围编码) tools, including code editors, IDE plugins, and terminal tools. Find tools that create the perfect programming atmosphere and flow state, boosting development efficiency and enhancing your coding experience.',
  keywords: [
    'AI Programming',
    'AI 编程',
    'AI Code Assistant',
    'AI 代码助手',
    'AI Editor',
    'AI 编辑器',
    'Cursor Editor',
    'Cursor 编辑器',
    'GitHub Copilot',
    'GitHub Copilot 代码助手',
    'AI Development Tools',
    'AI 开发工具',
    'AI Programming Tools',
    'AI 编程工具',
    'AI Code Generation',
    'AI 代码生成',
    'Smart Programming',
    '智能编程',
    'AI Programming Navigation',
    'AI 编程导航',
    'AI Code Completion',
    'AI 代码补全',
    'AI App Development',
    'AI 应用开发',
    'Code Refactoring Tools',
    '代码重构工具',
    'AI Debug Assistant',
    'AI 调试助手',
    'Screenshot to Code',
    '截图生成代码',
    'AI Frontend Development',
    'AI 前端开发',
    'AI Mobile Development',
    'AI 移动开发',
    'Rork',
    'Rork 移动应用开发',
    'CodeFuse',
    'CodeFuse 研发平台',
    'AI Project Documentation',
    'AI 项目文档',
    'Cursor',
    'Cursor AI 编辑器',
    'Windsurf',
    'Windsurf 编辑器',
    'Trae',
    'Trae AI 助手',
    'AI tools for improving daily coding efficiency',
    '提升日常编码效率的AI工具',
    'Vibe Coding',
    '氛围编码',
    '编程氛围',
    'Programming Atmosphere',
    'Immersive Coding',
    '沉浸式编程',
    'Flow State Programming',
    '心流编程',
    'Ambient Coding',
    '环境感编程',
    'Coding Experience',
    '编码体验',
    'Developer Experience',
    '开发者体验',
    'Aesthetic Programming',
    '美学编程',
    '编程美学',
    'Coding Environment',
  ].join(', '),
  authors: [{ name: 'yayxs', url: 'https://github.com/yayxs' }],
  creator: 'yayxs',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aicoding.vercel.app/',
    title: 'AI Coding Tools - The Ultimate AI Programming & Vibe Coding Navigation',
    description:
      'Discover the latest collection of AI programming and Vibe coding (氛围编码) tools, including code editors, IDE plugins, and terminal tools. Find tools that create the perfect programming atmosphere and flow state, boosting development efficiency and enhancing your coding experience.',
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://aicoding.vercel.app/" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
