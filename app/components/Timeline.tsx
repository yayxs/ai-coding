import { ModelRelease } from '../data/models';

export default function Timeline({ releases }: { releases: ModelRelease[] }) {
  // Sort releases by date (newest first)
  const sortedReleases = [...releases].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="relative py-12">
      {/* Vertical line with gradient */}
      <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-purple-500"></div>

      {sortedReleases.map((release, index) => (
        <div
          key={index}
          className="mb-16 flex flex-col items-center transform hover:scale-102 transition-transform duration-200"
        >
          {/* Date display with gradient background */}
          <div className="mb-3 px-4 py-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500">
            <span className="text-white font-medium">{release.date}</span>
          </div>

          {/* Animated dot */}
          <div className="relative w-full flex justify-center">
            <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white shadow-lg z-10 absolute left-1/2 transform -translate-x-1/2 hover:scale-150 transition-transform duration-200"></div>
          </div>

          {/* Content Card with hover effects */}
          <div className="mt-6 w-full max-w-md transform transition-all duration-200 hover:-translate-y-1">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl border border-gray-100">
              <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {release.modelName}
              </h3>
              <span className="inline-block px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-sm mb-3">
                {release.company}
              </span>
              {release.description && (
                <p className="text-gray-600 leading-relaxed">{release.description}</p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
