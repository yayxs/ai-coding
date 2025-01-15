'use client'

import { FC, useEffect, useState } from 'react'
import type { AiTool } from '@/data/aiTools'

interface AiToolsTableProps {
  tools: AiTool[]
}

const AiToolsTable: FC<AiToolsTableProps> = ({ tools }) => {
  const [language, setLanguage] = useState<'zh' | 'en'>('zh')

  useEffect(() => {
    const storedLang = localStorage.getItem('language') as 'zh' | 'en'
    if (storedLang) {
      setLanguage(storedLang)
    }
  }, [])

  useEffect(() => {
    const handleLanguageChange = (event: CustomEvent<{ language: 'zh' | 'en' }>) => {
      setLanguage(event.detail.language)
    }

    window.addEventListener('languageChange', handleLanguageChange as EventListener)
    return () => {
      window.removeEventListener('languageChange', handleLanguageChange as EventListener)
    }
  }, [])

  return (
    <div className="overflow-x-auto my-8 rounded-lg shadow-sm">
      <table 
        className="w-full border-collapse bg-white dark:bg-gray-800" 
        role="grid" 
        aria-label="AI编程工具对比表格"
      >
        <thead>
          <tr className="bg-gray-50 dark:bg-gray-700">
            <th className="p-4 text-left font-semibold border-b border-gray-200 dark:border-gray-600" scope="col">
              {language === 'zh' ? '产品' : 'Product'}
            </th>
            <th className="p-4 text-left font-semibold border-b border-gray-200 dark:border-gray-600" scope="col">
              {language === 'zh' ? '所属' : 'Company'}
            </th>
            <th className="p-4 text-left font-semibold border-b border-gray-200 dark:border-gray-600" scope="col">
              {language === 'zh' ? '产品属性' : 'Platform'}
            </th>
          </tr>
        </thead>
        <tbody>
          {tools.map((tool, index) => (
            <tr 
              key={tool.name}
              className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <td className="p-4 border-b border-gray-200 dark:border-gray-600">
                {tool.url ? (
                  <a
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                    aria-label={`访问 ${tool.nameCn || tool.name} 官网`}
                  >
                    {language === 'zh' ? (tool.nameCn || tool.name) : tool.name}
                  </a>
                ) : (
                  <span>{language === 'zh' ? (tool.nameCn || tool.name) : tool.name}</span>
                )}
              </td>
              <td className="p-4 border-b border-gray-200 dark:border-gray-600">
                {tool.company}
              </td>
              <td className="p-4 border-b border-gray-200 dark:border-gray-600">
                {language === 'zh' ? tool.platform.zh : tool.platform.en}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default AiToolsTable 