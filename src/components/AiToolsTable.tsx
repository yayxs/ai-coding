'use client'

import { FC } from 'react'
import type { AiTool } from '@/data/aiTools'
import { TypeTable } from '@/components/ui/type-table'

interface AiToolsTableProps {
  tools: AiTool[]
}

const AiToolsTable: FC<AiToolsTableProps> = ({ tools }) => {
  const toolsData = tools.reduce((acc, tool) => {
    acc[tool.name] = {
      description: (
        <div className="flex flex-col gap-2">
          <div>
            <strong>Company:</strong> {tool.company || 'N/A'}
          </div>
          <div>
            <strong>Platform:</strong> {tool.platform.en}
          </div>
          {tool.url && (
            <a
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Visit Website →
            </a>
          )}
        </div>
      ),
      type: tool.platform.en,
      typeDescription: tool.company ? `Made by ${tool.company}` : undefined,
      typeDescriptionLink: tool.url
    }
    return acc
  }, {} as Record<string, any>)

  return (
    <div className="my-8">
      <h1 className="text-3xl font-bold mb-6 text-center">AI Coding Tools Comparison</h1>
      <TypeTable
        type={toolsData}
        className="min-w-[800px]"
      />
    </div>
  )
}

export default AiToolsTable 