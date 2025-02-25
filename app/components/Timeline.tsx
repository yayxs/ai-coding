import { ModelRelease } from '../data/models';
import { motion } from 'framer-motion';

export default function Timeline({ releases }: { releases: ModelRelease[] }) {
  // Sort releases by date (newest first)
  const sortedReleases = [...releases].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="relative py-8 px-4">
      {/* Vertical line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-blue-100 dark:bg-blue-900/30"></div>

      {sortedReleases.map((release, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          className="relative mb-16 flex justify-center"
        >
          {/* Date marker */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-10">
            <div className="px-4 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-sm font-medium">
              {release.date}
            </div>
          </div>

          {/* Dot */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2">
            <div className="w-4 h-4 bg-blue-500 dark:bg-blue-400 rounded-full border-4 border-white dark:border-gray-800"></div>
          </div>

          {/* Content Card */}
          <div className="w-full max-w-2xl bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 border border-gray-200 dark:border-gray-700">
            <div className="p-6">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  {release.modelName}
                </h3>
                <span className="px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-sm">
                  {release.company}
                </span>
                {release.isOpenSource && (
                  <span className="px-3 py-1 rounded-full bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-300 text-sm">
                    Open Source
                  </span>
                )}
              </div>
              {release.description && (
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {release.description}
                </p>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
