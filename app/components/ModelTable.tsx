'use client';

import { ModelRelease } from '../data/models';

export default function ModelTable({ releases }: { releases: ModelRelease[] }) {
  // 按日期倒序排序，最新的在前
  const sortedReleases = [...releases].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr>
            <th className="border px-4 py-2 bg-gray-100">date</th>
            <th className="border px-4 py-2 bg-gray-100">modelName</th>
            <th className="border px-4 py-2 bg-gray-100">company</th>
            <th className="border px-4 py-2 bg-gray-100">description</th>
          </tr>
        </thead>
        <tbody>
          {sortedReleases.map((release, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{release.date}</td>
              <td className="border px-4 py-2">{release.modelName}</td>
              <td className="border px-4 py-2">{release.company}</td>
              <td className="border px-4 py-2">{release.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
