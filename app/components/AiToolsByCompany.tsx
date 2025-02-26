'use client';

import { AiTool } from '../data/aiTools';
import { motion } from 'framer-motion';

interface AiToolsByCompanyProps {
  tools: AiTool[];
}

// 动画配置
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
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3 } }
}

export function AiToolsByCompany({ tools }: AiToolsByCompanyProps) {
  // 获取所有公司并去重
  const companies = Array.from(
    new Set(
      tools
        .filter(tool => tool.company && tool.company.trim() !== '')
        .map(tool => tool.company)
    )
  ).sort() as string[];
  
  // 添加一个"其他"类别用于没有公司信息的工具
  const toolsWithoutCompany = tools.filter(tool => !tool.company || tool.company.trim() === '');
  
  return (
    <div className='w-full max-w-7xl mx-auto space-y-12'>
      {companies.map((company) => {
        const companyTools = tools.filter(
          (tool) => tool.company === company
        );

        // 如果该公司没有工具，则不显示
        if (companyTools.length === 0) return null;

        return (
          <section key={company} className='space-y-4'>
            <div className='space-y-2'>
              <h2 className='text-2xl font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2'>
                {company}
                <span className="text-sm bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 px-3 py-1 rounded-full ml-2">
                  {companyTools.length} tools
                </span>
              </h2>
            </div>
            <motion.div 
              variants={container}
              initial="hidden"
              whileInView="show"
              layout
              viewport={{ 
                once: true, 
                margin: "-50px",
                amount: 0.3
              }}
              className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
            >
              {companyTools.map((tool) => (
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
                  <div className='flex flex-col items-start space-y-3'>
                    <div className='w-full flex items-start justify-between gap-2'>
                      <h3 className='text-lg font-medium text-gray-900 dark:text-gray-100
                        group-hover:text-blue-600 dark:group-hover:text-blue-400 
                        transition-colors duration-200'>
                        {tool.whatsTheName}
                      </h3>
                      
                      {/* Display howToUseType in top right corner */}
                      <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-md">
                        {tool.howToUseType}
                      </span>
                    </div>
                    <p className='text-sm text-gray-600 dark:text-gray-300'>
                      {tool.description}
                    </p>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </section>
        )
      })}
      
      {/* 显示没有公司信息的工具 */}
      {toolsWithoutCompany.length > 0 && (
        <section className='space-y-4'>
          <div className='space-y-2'>
            <h2 className='text-2xl font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2'>
              Other Tools
              <span className="text-sm bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 px-3 py-1 rounded-full ml-2">
                {toolsWithoutCompany.length} tools
              </span>
            </h2>
          </div>
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            layout
            viewport={{ 
              once: true, 
              margin: "-50px",
              amount: 0.3
            }}
            className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
          >
            {toolsWithoutCompany.map((tool) => (
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
                <div className='flex flex-col items-start space-y-3'>
                  <div className='w-full flex items-start justify-between gap-2'>
                    <h3 className='text-lg font-medium text-gray-900 dark:text-gray-100
                      group-hover:text-blue-600 dark:group-hover:text-blue-400 
                      transition-colors duration-200'>
                      {tool.whatsTheName}
                    </h3>
                    
                    {/* Display howToUseType in top right corner */}
                    <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-md">
                      {tool.howToUseType}
                    </span>
                  </div>
                  <p className='text-sm text-gray-600 dark:text-gray-300'>
                    {tool.description}
                  </p>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </section>
      )}
    </div>
  )
} 