'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { modelReleases } from '../data/models';
import { Button } from '../components/Button';
import { Calendar, List, Table2, Grid } from 'lucide-react';
import Timeline from '../components/Timeline';
import ModelList from '../components/ModelList';
import ModelTable from '../components/ModelTable';

export default function ModelTiming() {
  const companies = useMemo(
    () => Array.from(new Set(modelReleases.map((release) => release.company))),
    []
  );

  const [selectedCompanies, setSelectedCompanies] = useState<string[]>(companies);
  const [viewMode, setViewMode] = useState<'timeline' | 'list' | 'table' | 'grid'>('grid');

  const handleCompanyToggle = (company: string) => {
    setSelectedCompanies((prev) => {
      if (prev.includes(company)) {
        return prev.filter((c) => c !== company);
      } else {
        return [...prev, company];
      }
    });
  };

  const filteredReleases = modelReleases.filter((release) =>
    selectedCompanies.includes(release.company)
  );

  return (
    <main className="flex min-h-screen flex-col items-center p-2 py-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-7xl mx-auto"
      >
        <div className="mb-8">
          <p className="text-gray-600 dark:text-gray-300">
            A timeline visualization project for tracking the evolution of Large Language Models (LLMs) across different companies.
          </p>
        </div>

        {/* Company Filter */}
        <div className="mb-6 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-3">Company Filter</h2>
          <div className="flex flex-wrap gap-2">
            {companies.map((company) => (
              <Button
                key={company}
                variant={selectedCompanies.includes(company) ? "outline" : "default"}
                onClick={() => handleCompanyToggle(company)}
                className="text-sm"
              >
                {company}
              </Button>
            ))}
          </div>
        </div>

        {/* View Mode Buttons */}
        <div className="w-full max-w-7xl mx-auto mb-8 flex justify-center space-x-4">
          <Button 
            variant={viewMode === 'timeline' ? 'outline' : 'default'}
            onClick={() => setViewMode('timeline')}
            className="flex items-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            Timeline
          </Button>
          <Button 
            variant={viewMode === 'list' ? 'outline' : 'default'}
            onClick={() => setViewMode('list')}
            className="flex items-center gap-2"
          >
            <List className="w-4 h-4" />
            List
          </Button>
          <Button 
            variant={viewMode === 'table' ? 'outline' : 'default'}
            onClick={() => setViewMode('table')}
            className="flex items-center gap-2"
          >
            <Table2 className="w-4 h-4" />
            Table
          </Button>
          <Button 
            variant={viewMode === 'grid' ? 'outline' : 'default'}
            onClick={() => setViewMode('grid')}
            className="flex items-center gap-2"
          >
            <Grid className="w-4 h-4" />
            Grid
          </Button>
        </div>

        {selectedCompanies.length === 0 ? (
          <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <p className="text-lg text-gray-500 dark:text-gray-400">Please select at least one company to view models</p>
          </div>
        ) : (
          <>
            {viewMode === 'timeline' && (
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-200 dark:border-gray-700">
                <Timeline releases={filteredReleases} />
              </div>
            )}
            
            {viewMode === 'list' && (
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-200 dark:border-gray-700">
                <ModelList releases={filteredReleases} />
              </div>
            )}
            
            {viewMode === 'table' && (
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-200 dark:border-gray-700">
                <ModelTable releases={filteredReleases} />
              </div>
            )}

            {viewMode === 'grid' && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {selectedCompanies.map((company) => {
                  const companyModels = modelReleases
                    .filter((release) => release.company === company)
                    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

                  return (
                    <motion.div
                      key={company}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 hover:shadow-md transition-all duration-300 border border-gray-200 dark:border-gray-700"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">{company}</h3>
                        <span className="text-sm bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 px-3 py-1 rounded-full">
                          {companyModels.length} models
                        </span>
                      </div>
                      <div className="space-y-3">
                        {companyModels.map((model, index) => (
                          <div
                            key={index}
                            className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors duration-200 border border-gray-100 dark:border-gray-700"
                          >
                            <div className="flex justify-between items-start mb-2">
                              <div className="font-medium text-gray-900 dark:text-gray-100">{model.modelName}</div>
                              <div className="text-sm text-blue-600 dark:text-blue-300 bg-blue-50 dark:bg-blue-900/30 px-2 py-1 rounded-md">
                                {model.date}
                              </div>
                            </div>
                            {model.description && (
                              <div className="text-sm text-gray-600 dark:text-gray-300 mt-2 leading-relaxed">
                                {model.description}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            )}
          </>
        )}
      </motion.div>
    </main>
  );
}
