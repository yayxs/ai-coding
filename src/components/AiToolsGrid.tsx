import { AiTool } from '@/data/aiTools'

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
    type: 'Browser-based' as const,
    title: 'Browser-based',
    description: ''
  },
  {
    type: 'Extension' as const,
    title: 'Extension',
    description: ''
  },
  {
    type: 'Terminal' as const,
    title: 'Terminal',
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
              <h2 className='text-2xl font-bold text-gray-900'>
                {category.title}
              </h2>
              <p className='text-gray-600'>{category.description}</p>
            </div>
            <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
              {categoryTools.map((tool) => (
                <a
                  key={tool.whatsTheName}
                  href={tool.urlLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='group relative block rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow'
                >
                  <div className='flex flex-col items-center space-y-4'>
                    <h3 className='text-lg font-medium text-gray-900'>
                      {tool.whatsTheName}
                    </h3>
                    <p className='text-sm text-gray-600 text-center'>
                      {tool.description}
                    </p>
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
