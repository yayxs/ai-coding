'use client';

import { ModelRelease } from '../data/models';
import { motion } from 'framer-motion';

export default function ModelList({ releases }: { releases: ModelRelease[] }) {
  // 按日期倒序排序，最新的在前
  const sortedReleases = [...releases].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="space-y-4">
      {sortedReleases.map((release, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 border border-gray-200 dark:border-gray-700"
        >
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
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
            <span className="text-sm text-blue-600 dark:text-blue-300 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full">
              {release.date}
            </span>
          </div>
          {release.description && (
            <p className="mt-3 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              {release.description}
            </p>
          )}
        </motion.div>
      ))}
    </div>
  );
}
