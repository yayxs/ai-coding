import { AiTool } from '@/data/aiTools'

interface AiToolsGridProps {
  tools: AiTool[]
}

export function AiToolsGrid({ tools }: AiToolsGridProps) {
  const getLogoComponent = (tool: AiTool) => {
    if (!tool.logoComponent) {
      return (
        <div className='h-16 w-16 flex items-center justify-center bg-gray-100 rounded-full'>
          <span className='text-2xl'>🖥️</span>
        </div>
      )
    }

    switch (tool.logoComponent) {
      case 'Cursor':
      case 'V0':
      default:
        return (
          <div className='h-16 w-16 flex items-center justify-center bg-gray-100 rounded-full'>
            <span className='text-2xl'>🖥️</span>
          </div>
        )
    }
  }

  return (
    <div className='grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 sm:gap-6 sm:p-6 md:grid-cols-3 lg:grid-cols-4'>
      {tools.map((tool) => (
        <a
          key={tool.whatsTheName}
          href={tool.urlLink}
          target='_blank'
          rel='noopener noreferrer'
          className='group relative block rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow'
        >
          <div className='flex flex-col items-center space-y-4'>
            {getLogoComponent(tool)}
            <h3 className='text-lg font-medium text-gray-900'>
              {tool.whatsTheName}
            </h3>
            <p className='text-sm text-gray-600 text-center'>
              {tool.description}
            </p>
            <div className='px-3 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded-full'>
              {tool.howToUseType}
            </div>
          </div>
        </a>
      ))}
    </div>
  )
}
