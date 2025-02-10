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
                  <div className='flex flex-col items-center space-y-4 mt-4'>
                    <h3 className='text-lg font-medium text-gray-900 dark:text-gray-100
                      group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200
                      text-center max-w-[calc(100%-5rem)]'>
                      {tool.whatsTheName}
                    </h3>
                    <p className='text-sm text-gray-600 dark:text-gray-300 text-center'>
                      {tool.description}
                    </p>
                  </div>
                  {tool.company && (
                    <div className='absolute top-3 right-3 px-2 py-1 
                      text-xs font-medium text-gray-500 dark:text-gray-400 
                      bg-gray-50 dark:bg-gray-700
                      rounded-full border border-gray-200 dark:border-gray-600
                      group-hover:bg-white dark:group-hover:bg-gray-600 transition-colors duration-200'>
                      {tool.company}
                    </div>
                  )}
                </a>
              ))}
            </div>
          </section>
        )
      })}
    </div>
  )
}
