'use client';

import { ModelRelease } from '../data/models';

export default function ModelTable({ releases }: { releases: ModelRelease[] }) {
  // 按日期倒序排序，最新的在前
  const sortedReleases = [...releases].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-50 dark:bg-gray-700/50">
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">
              Model Name
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">
              Company
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">
              Release Date
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">
              Description
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">
              Type
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
          {sortedReleases.map((release, index) => (
            <tr
              key={index}
              className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200"
            >
              <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">
                {release.modelName}
              </td>
              <td className="px-6 py-4">
                <span className="px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-sm">
                  {release.company}
                </span>
              </td>
              <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">
                {release.date}
              </td>
              <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">
                {release.description || '-'}
              </td>
              <td className="px-6 py-4">
                {release.isOpenSource ? (
                  <span className="px-3 py-1 rounded-full bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-300 text-sm">
                    Open Source
                  </span>
                ) : (
                  <span className="px-3 py-1 rounded-full bg-gray-50 dark:bg-gray-700/50 text-gray-600 dark:text-gray-300 text-sm">
                    Closed Source
                  </span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
