'use client';

import { useState } from 'react';
import { ModelRelease, modelReleases } from '../data/models';

interface SidebarProps {
  companies: string[];
  selectedCompanies: string[];
  onCompanyToggle: (company: string) => void;
  modelReleases: ModelRelease[];
}

export default function Sidebar({ companies, selectedCompanies, onCompanyToggle }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* 移动端菜单按钮 */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 right-4 z-50 bg-blue-600 text-white p-2 rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-200"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
          />
        </svg>
      </button>

      {/* 侧边栏 */}
      <aside
        className={`
          fixed md:static inset-y-0 left-0 z-40
          w-64 bg-white shadow-lg md:shadow-none
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}
      >
        <div className="flex flex-col h-full">
          {/* 标题区域 */}
          <div className="p-4 border-b border-gray-100">
            <h2 className="text-xl font-bold text-blue-600">模型提供商</h2>
            <p className="text-sm text-gray-500 mt-1">已选择 {selectedCompanies.length} 个提供商</p>
          </div>

          {/* 公司列表 */}
          <div className="flex-1 overflow-y-auto p-4">
            <div className="space-y-2">
              {companies.map((company) => (
                <label
                  key={company}
                  className={`
                    flex items-center gap-3 p-3 rounded-lg cursor-pointer
                    transition-all duration-200
                    ${
                      selectedCompanies.includes(company)
                        ? 'bg-blue-50 border border-blue-100'
                        : 'hover:bg-gray-50'
                    }
                  `}
                >
                  <div className="relative">
                    <input
                      type="checkbox"
                      checked={selectedCompanies.includes(company)}
                      onChange={() => onCompanyToggle(company)}
                      className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 transition-all duration-200"
                    />
                    {selectedCompanies.includes(company) && (
                      <div className="absolute inset-0 bg-blue-500 opacity-10 rounded animate-pulse" />
                    )}
                  </div>
                  <div className="flex-1">
                    <span
                      className={`
                      text-sm font-medium
                      ${selectedCompanies.includes(company) ? 'text-blue-700' : 'text-gray-700'}
                    `}
                    >
                      {company}
                    </span>
                  </div>
                  <div className="text-xs text-gray-500">
                    {modelReleases.filter((m) => m.company === company).length} 个模型
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* 底部信息 */}
          <div className="p-4 border-t border-gray-100">
            <div className="text-xs text-gray-500 text-center">
              共 {companies.length} 个提供商 / {modelReleases.length} 个模型
            </div>
          </div>
        </div>
      </aside>

      {/* 移动端遮罩层 */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
