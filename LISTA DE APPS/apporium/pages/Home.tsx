
/**
 * @file Home.tsx
 * @description The main home page of the APPORIUM marketplace.
 */

import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import CategorySidebar from '../components/CategorySidebar';
import AppCard from '../components/AppCard';
import { getApps } from '../services/appService';
import { App } from '../types';

/**
 * The Home page, which serves as the main landing page.
 * It displays featured apps and provides search and category navigation.
 */
const Home: React.FC = () => {
  const [apps, setApps] = useState<App[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch apps when the component mounts.
  useEffect(() => {
    const fetchApps = async () => {
      try {
        setLoading(true);
        const fetchedApps = await getApps();
        // For the home page, let's show a curated selection (e.g., the first 4).
        setApps(fetchedApps.slice(0, 4));
      } catch (error) {
        console.error("Failed to fetch apps:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchApps();
  }, []);

  const handleSearch = (query: string) => {
    // In a real app, this would trigger a search and update the state.
    // For now, we just log it.
    console.log('Searching for:', query);
    alert(`Search functionality for "${query}" is not yet implemented.`);
  };

  return (
    <div className="container mx-auto px-6 py-8">
      {/* Hero Section */}
      <div className="text-center py-16">
        <h1 className="text-5xl font-extrabold text-white">Discover the Future of Apps</h1>
        <p className="text-xl text-gray-300 mt-4 max-w-3xl mx-auto">Explore a curated marketplace of cutting-edge AI-powered applications designed to boost your productivity and creativity.</p>
        <SearchBar onSearch={handleSearch} />
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Content: Featured Apps */}
        <main className="w-full lg:w-3/4">
          <h2 className="text-3xl font-bold text-white mb-6">Featured Apps</h2>
          {loading ? (
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="bg-gray-800 rounded-lg shadow-lg p-6 animate-pulse">
                        <div className="h-48 bg-gray-700 rounded mb-4"></div>
                        <div className="h-6 bg-gray-700 rounded w-3/4 mb-2"></div>
                        <div className="h-4 bg-gray-700 rounded w-full mb-4"></div>
                        <div className="h-4 bg-gray-700 rounded w-1/2"></div>
                    </div>
                ))}
             </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {apps.map((app) => (
                <AppCard key={app.id} app={app} />
              ))}
            </div>
          )}
        </main>

        {/* Sidebar */}
        <aside className="w-full lg:w-1/4">
          <CategorySidebar />
        </aside>
      </div>
    </div>
  );
};

export default Home;
