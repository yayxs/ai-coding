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
        <span className="text-gray-700 dark:text-gray-300">
          {tool.author ? `by ${tool.author}` : ''}
        </span>
      ),
      type: tool.platform.en,
      typeDescription: tool.platform.en,
      typeDescriptionLink: tool.url
    }
    return acc
  }, {} as Record<string, any>)

  return (
    <div className="w-full overflow-auto rounded-lg border border-gray-200 bg-white/50 backdrop-blur dark:border-gray-800 dark:bg-gray-900/50">
      <TypeTable
        type={toolsData}
        className="w-full min-w-[640px]"
      />
    </div>
  )
}

export default AiToolsTable 