'use client';

import { ModelRelease } from '../data/models';

export default function ModelList({ releases }: { releases: ModelRelease[] }) {
  // 按日期倒序排序，最新的在前
  const sortedReleases = [...releases].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="space-y-4">
      {sortedReleases.map((release, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow border">
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold">{release.modelName}</span>
            <span className="text-sm text-gray-500">{release.date}</span>
          </div>
          <div className="mt-2">
            <p className="text-gray-600">{release.company}</p>
            {release.description && <p className="mt-1 text-gray-600">{release.description}</p>}
          </div>
        </div>
      ))}
    </div>
  );
}
