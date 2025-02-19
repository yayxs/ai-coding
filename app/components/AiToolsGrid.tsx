import { AiTool } from '../data/aiTools'
import { motion } from 'framer-motion'
import { gradingColors } from '../constants/colors'

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

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
      duration: 0.3,
      ease: "easeOut"
    }
  }
}

const item = {
  hidden: { 
    opacity: 0, 
    y: 10,
    scale: 0.98
  },
  show: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 25,
      mass: 0.5,
      duration: 0.4
    }
  }
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
            <motion.div 
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
            >
              {categoryTools.map((tool) => (
                <motion.a
                  key={tool.whatsTheName}
                  variants={item}
                  href={tool.urlLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='group relative block rounded-lg border border-gray-200 dark:border-gray-700 
                    p-6 bg-white dark:bg-gray-800
                    shadow-sm hover:shadow-lg hover:border-gray-300 dark:hover:border-gray-600 
                    transition-all duration-200 ease-in-out 
                    hover:-translate-y-1 hover:bg-gray-50 dark:hover:bg-gray-700'
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
                </motion.a>
              ))}
            </motion.div>
          </section>
        )
      })}
    </div>
  )
}
