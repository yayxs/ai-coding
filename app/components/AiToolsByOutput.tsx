import { AiTool } from '../data/aiTools'

interface AiToolsByOutputProps {
  tools: AiTool[]
}

const outputCategories = [
  {
    type: 'DailyCoding' as const,
    title: 'Daily Coding Assistant',
    description: 'AI tools to improve daily coding efficiency, such as code completion, refactoring, and debugging',
    icon: '⌨️',
  },
  {
    type: 'WebApp' as const,
    title: 'Web App Generation',
    description: 'AI tools for quickly generating complete web applications',
    icon: '🌐',
  },
  {
    type: 'Backend' as const,
    title: 'Backend Development',
    description: 'Tools for API design, database architecture, and backend development',
    icon: '⚙️',
  },
  {
    type: 'Terminal' as const,
    title: 'Terminal Enhancement',
    description: 'Add AI capabilities to command-line terminals',
    icon: '💻',
  },
  {
    type: 'Infrastructure' as const,
    title: 'Infrastructure Tools',
    description: 'AI tools for DevOps, CI/CD, and infrastructure management',
    icon: '🏗️',
  },
  {
    type: 'MobileApp' as const,
    title: 'Mobile App',
    description: 'Build any mobile app, fast.',
    icon: '📱',
  },
  {
    type: 'FrontEndComponent' as const,
    title: 'Frontend Components',
    description: 'Automatically generate frontend component code from screenshots',
    icon: '🎨',
  },
  {
    type: 'Documentation' as const,
    title: 'Documentation Generation',
    description: 'Automatically generate project documentation, API docs, and more',
    icon: '📝',
  },
  {
    type: 'Other' as const,
    title: 'Other Tools',
    description: 'Other types of AI programming tools',
    icon: '🔧',
  },
]

export function AiToolsByOutput({ tools }: AiToolsByOutputProps) {
  return (
    <div className='w-full max-w-7xl mx-auto space-y-12'>
      {outputCategories.map((category) => {
        const categoryTools = tools.filter(
          (tool) => tool.outputType === category.type
        )

        if (categoryTools.length === 0) return null

        return (
          <section key={category.type} className='space-y-4'>
            <div className='space-y-2'>
              <h2 className='text-2xl font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2'>
                <span>{category.icon}</span>
                {category.title}
                <span className="text-sm bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 px-3 py-1 rounded-full ml-2">
                  {categoryTools.length}
                </span>
              </h2>
              <p className='text-gray-600 dark:text-gray-300'>{category.description}</p>
            </div>
            <div
              className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
            >
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
                  {/* 复用现有的卡片内容结构 */}
                  <div className='flex flex-col items-start space-y-3'>
                    <div className='w-full flex items-start justify-between gap-2'>
                      <h3 className='text-lg font-medium text-gray-900 dark:text-gray-100
                        group-hover:text-blue-600 dark:group-hover:text-blue-400 
                        transition-colors duration-200'>
                        {tool.whatsTheName}
                      </h3>
                    </div>
                    <p className='text-sm text-gray-600 dark:text-gray-300'>
                      {tool.description}
                    </p>
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