import { FC } from 'react'
import { AiToolsTable, LanguageSwitch } from '@/components/ClientComponents'
import { aiTools } from '@/data/aiTools'

const Home: FC = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <LanguageSwitch />
      <div className="space-y-4 text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl data-[language=en]:hidden">
          AI编程工具对比
        </h1>
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl hidden data-[language=en]:block">
          AI Coding Tools Comparison
        </h1>
        <p className="text-lg leading-8 text-gray-600 dark:text-gray-300">
          比较主流AI编程助手的功能、平台和定价
        </p>
      </div>
      <AiToolsTable tools={aiTools} />
    </main>
  )
}

export default Home 