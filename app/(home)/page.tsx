import { aiTools} from '@/data/aiTools'

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

export default function AiToolsGrid() {
  return (
    <div className='w-full max-w-7xl mx-auto space-y-12 mt-5 mb-10'>
      {categories.map((category) => {
        const categoryTools = aiTools.filter(
          (tool) => tool.howToUseType === category.type
        )

        if (categoryTools.length === 0) return null

        return (
          <section key={category.type} className='space-y-4'>
            <div className='space-y-2'>
              <h2 className='text-2xl font-bold text-foreground flex items-center gap-2'>
                {category.title}
                <span className='text-sm bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 px-3 py-1 rounded-full ml-2'>
                  {categoryTools.length}
                </span>
              </h2>
              <p className='text-muted-foreground'>{category.description}</p>
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
                  className='group relative block rounded-lg border border-border bg-card p-6 shadow-sm transition-all duration-200 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:border-border/80 hover:bg-accent'
                >
                  <script type="application/ld+json">
                    {JSON.stringify({
                      "@context": "https://schema.org",
                      "@type": "SoftwareApplication",
                      "name": tool.whatsTheName,
                      "description": tool.description,
                      "applicationCategory": "DeveloperApplication",
                      "offers": {
                        "@type": "Offer",
                        "availability": "https://schema.org/OnlineOnly"
                      }
                    })}
                  </script>
                  <div className='flex flex-col items-start space-y-3'>
                    <div className='w-full flex items-start justify-between gap-2'>
                      <h3 className='text-lg font-medium text-card-foreground transition-colors duration-200 group-hover:text-blue-600 dark:group-hover:text-blue-400'>
                        {tool.whatsTheName}
                      </h3>
                      {tool.company && (
                        <span className="text-xs px-2 py-1 bg-card-tag text-card-tag-foreground rounded-md">
                          {tool.company}
                        </span>
                      )}
                    </div>
                    <p className='text-sm text-card-muted-foreground'>
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