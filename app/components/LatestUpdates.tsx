import { motion } from 'framer-motion';

interface LatestUpdateProps {
  date: string;
  tools: Array<{
    name: string;
    link: string;
  }>;
}

export function LatestUpdates({ date, tools }: LatestUpdateProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-7xl mx-auto mb-8 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800"
    >
      <div className="flex flex-wrap items-center justify-center gap-2 p-3 text-center">
        <span className="text-sm font-semibold text-blue-800 dark:text-blue-300 flex items-center">
          <span className="mr-1">🆕</span> Latest update ({date}):
        </span>
        <span className="text-sm text-blue-700 dark:text-blue-400">
          Added {tools.length} new tool{tools.length > 1 ? 's' : ''}:
        </span>
        <div className="flex flex-wrap justify-center gap-2">
          {tools.map((tool) => (
            <a 
              key={tool.name}
              href={tool.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-blue-700 hover:text-blue-500 dark:text-blue-300 dark:hover:text-blue-200 font-medium whitespace-nowrap bg-white dark:bg-blue-900/30 px-3 py-1 rounded-full"
            >
              {tool.name}
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
} 