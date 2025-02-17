import { AiTool } from '../data/aiTools'

interface AiToolsGridProps {
  tools: AiTool[]
}

const categories = [
  {
    type: 'Editor' as const,
    title: 'Editor',
    description: ''
  },
  {
    type: 'Extension' as const,
    title: 'Extension',
    description: ''
  },
  {
    type: 'Browser-based' as const,
    title: 'Browser-based',
    description: ''
  },
  {
    type: 'Terminal' as const,
    title: 'Terminal',
    description: ''
  },
  {
    type: 'AI software engineer' as const,
    title: 'AI software engineer',
    description: ''
  },
  {
    type: 'Git' as const,
    title: 'Git',
    description: ''
  },
  {
    type: 'Other' as const,
    title: 'Other',
    description: ''
  }
]

// 添加分级颜色映射
const gradingColors: Record<string, { bg: string; text: string }> = {
  L1: { bg: 'bg-blue-100 dark:bg-blue-900/30', text: 'text-blue-700 dark:text-blue-300' },
  L2: { bg: 'bg-green-100 dark:bg-green-900/30', text: 'text-green-700 dark:text-green-300' },
  L3: { bg: 'bg-yellow-100 dark:bg-yellow-900/30', text: 'text-yellow-700 dark:text-yellow-300' },
  L4: { bg: 'bg-orange-100 dark:bg-orange-900/30', text: 'text-orange-700 dark:text-orange-300' },
  L5: { bg: 'bg-red-100 dark:bg-red-900/30', text: 'text-red-700 dark:text-red-300' },
}

export function AiToolsGrid({ tools }: AiToolsGridProps) {
  return (
    <div className='w-full max-w-7xl mx-auto space-y-12'>
      {categories.map((category) => {
        const categoryTools = tools.filter(
          (tool) => tool.howToUseType === category.type
        )

        if (categoryTools.length === 0) return null

        return (
          <section key={category.type} className='space-y-4'>
            <div className='space-y-2'>
              <h2 className='text-2xl font-bold text-gray-900 dark:text-gray-100'>
                {category.title}
              </h2>
              <p className='text-gray-600 dark:text-gray-300'>{category.description}</p>
            </div>
            <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
              {categoryTools.map((tool) => (
                <a
                  key={tool.whatsTheName}
                  href={tool.urlLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='group relative block rounded-lg border border-gray-200 dark:border-gray-700 
                    p-6 bg-white dark:bg-gray-800
                    shadow-sm hover:shadow-lg hover:border-gray-300 dark:hover:border-gray-600 
                    transition-all duration-200 ease-in-out 
                    hover:-translate-y-1 hover:bg-gray-50 dark:hover:bg-gray-700'
                >
                  <div className='flex flex-col items-start space-y-3'>
                    {/* 标题和分级标签容器 */}
                    <div className='w-full flex items-start justify-between gap-2'>
                      <h3 className='text-lg font-medium text-gray-900 dark:text-gray-100
                        group-hover:text-blue-600 dark:group-hover:text-blue-400 
                        transition-colors duration-200'>
                        {tool.whatsTheName}
                      </h3>
                      <div className='flex items-center gap-2 flex-shrink-0'>
                        {tool.grading && (
                          <span className={`inline-flex items-center px-2 py-0.5 text-xs font-medium rounded-full
                            ${gradingColors[tool.grading].bg} 
                            ${gradingColors[tool.grading].text}
                            whitespace-nowrap`}>
                            {tool.grading}
                          </span>
                        )}
                      </div>
                    </div>
                    
                    {/* 描述文本 */}
                    <p className='text-sm text-gray-600 dark:text-gray-300'>
                      {tool.description}
                    </p>
                    
                    {/* 公司标签 */}
                    {tool.company && (
                      <div className='mt-auto pt-2 text-xs font-medium text-gray-500 dark:text-gray-400'>
                        {tool.company}
                      </div>
                    )}
                  </div>
                </a>
              ))}
            </div>
          </section>
        )
      })}
    </div>
  )
}
