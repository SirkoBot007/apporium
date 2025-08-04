
/**
 * @file Catalog.tsx
 * @description Page for browsing all available AI applications.
 */

import React, { useState, useEffect } from 'react';
import AppCard from '../components/AppCard';
import { getApps } from '../services/appService';
import { App } from '../types';

/**
 * The Catalog page displays a grid of all applications.
 * Filtering logic is not yet implemented.
 */
const Catalog: React.FC = () => {
  const [apps, setApps] = useState<App[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch all apps when the component mounts.
  useEffect(() => {
    const fetchApps = async () => {
      try {
        setLoading(true);
        const fetchedApps = await getApps();
        setApps(fetchedApps);
      } catch (error) {
        console.error("Failed to fetch apps:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchApps();
  }, []);

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-4xl font-bold text-white mb-2">App Catalog</h1>
      <p className="text-gray-400 mb-8">Browse our entire collection of AI applications.</p>
      
      {/* Placeholder for filters */}
      <div className="bg-gray-800 p-4 rounded-lg mb-8 flex items-center gap-4">
        <span className="text-gray-300">Filters:</span>
        <span className="text-sm bg-gray-700 px-3 py-1 rounded-full">Category (coming soon)</span>
        <span className="text-sm bg-gray-700 px-3 py-1 rounded-full">Sort by (coming soon)</span>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
             {[...Array(8)].map((_, i) => (
                <div key={i} className="bg-gray-800 rounded-lg shadow-lg p-6 animate-pulse">
                    <div className="h-48 bg-gray-700 rounded mb-4"></div>
                    <div className="h-6 bg-gray-700 rounded w-3/4 mb-2"></div>
                    <div className="h-4 bg-gray-700 rounded w-full mb-4"></div>
                    <div className="h-4 bg-gray-700 rounded w-1/2"></div>
                </div>
            ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {apps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Catalog;
