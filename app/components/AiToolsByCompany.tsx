'use client';

import { AiTool } from '../data/aiTools';

interface AiToolsByCompanyProps {
  tools: AiTool[];
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
              <h2 className='text-2xl font-bold text-foreground flex items-center gap-2'>
                {company}
                <span className="text-sm bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 px-3 py-1 rounded-full ml-2">
                  {companyTools.length} tools
                </span>
              </h2>
            </div>
            <div
              className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
            >
              {companyTools.map((tool) => (
                <a
                  key={tool.whatsTheName}
                  href={tool.urlLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='group relative block rounded-lg border border-border bg-card p-6 shadow-sm transition-all duration-200 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:border-border/80 hover:bg-accent'
                >
                  <div className='flex flex-col items-start space-y-3'>
                    <div className='w-full flex items-start justify-between gap-2'>
                      <h3 className='text-lg font-medium text-card-foreground transition-colors duration-200 group-hover:text-blue-600 dark:group-hover:text-blue-400'>
                        {tool.whatsTheName}
                      </h3>

                      {/* Display howToUseType in top right corner */}
                      <span className="text-xs px-2 py-1 bg-card-tag text-card-tag-foreground rounded-md">
                        {tool.howToUseType}
                      </span>
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

      {/* 显示没有公司信息的工具 */}
      {toolsWithoutCompany.length > 0 && (
        <section className='space-y-4'>
          <div className='space-y-2'>
            <h2 className='text-2xl font-bold text-foreground flex items-center gap-2'>
              Other Tools
              <span className="text-sm bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 px-3 py-1 rounded-full ml-2">
                {toolsWithoutCompany.length} tools
              </span>
            </h2>
          </div>
          <div
            className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
          >
            {toolsWithoutCompany.map((tool) => (
              <a
                key={tool.whatsTheName}
                href={tool.urlLink}
                target='_blank'
                rel='noopener noreferrer'
                className='group relative block rounded-lg border border-border bg-card p-6 shadow-sm transition-all duration-200 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:border-border/80 hover:bg-accent'
              >
                <div className='flex flex-col items-start space-y-3'>
                  <div className='w-full flex items-start justify-between gap-2'>
                    <h3 className='text-lg font-medium text-card-foreground transition-colors duration-200 group-hover:text-blue-600 dark:group-hover:text-blue-400'>
                      {tool.whatsTheName}
                    </h3>

                    {/* Display howToUseType in top right corner */}
                    <span className="text-xs px-2 py-1 bg-card-tag text-card-tag-foreground rounded-md">
                      {tool.howToUseType}
                    </span>
                  </div>
                  <p className='text-sm text-card-muted-foreground'>
                    {tool.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
