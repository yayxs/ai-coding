'use client';

import { useState } from 'react';
import { ModelRelease } from '../data/models';

interface ModelReleaseFormProps {
  onSubmit: (release: ModelRelease) => void;
}

export default function ModelReleaseForm({ onSubmit }: ModelReleaseFormProps) {
  const [formData, setFormData] = useState<ModelRelease>({
    date: '',
    modelName: '',
    company: '',
    description: '',
    isOpenSource: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    // 重置表单
    setFormData({
      date: '',
      modelName: '',
      company: '',
      description: '',
      isOpenSource: false,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6">添加模型发布信息</h2>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">发布日期</label>
          <input
            type="date"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">模型名称</label>
          <input
            type="text"
            value={formData.modelName}
            onChange={(e) => setFormData({ ...formData, modelName: e.target.value })}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">公司</label>
          <input
            type="text"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">描述</label>
          <textarea
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            className="w-full px-3 py-2 border rounded-md"
            rows={3}
          />
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="isOpenSource"
            checked={formData.isOpenSource}
            onChange={(e) => setFormData({ ...formData, isOpenSource: e.target.checked })}
            className="h-4 w-4 text-blue-600"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
        >
          添加模型
        </button>
      </div>
    </form>
  );
}
