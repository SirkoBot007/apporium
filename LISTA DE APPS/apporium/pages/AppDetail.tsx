
/**
 * @file AppDetail.tsx
 * @description Detailed view page for a single application.
 */

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getAppById } from '../services/appService';
import { App } from '../types';

/**
 * The AppDetail page shows all information about a specific app.
 * It retrieves the app's ID from the URL parameters.
 */
const AppDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [app, setApp] = useState<App | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApp = async () => {
      if (!id) return;
      try {
        setLoading(true);
        const fetchedApp = await getAppById(id);
        if (fetchedApp) {
          setApp(fetchedApp);
        } else {
          // Handle case where app is not found
          setApp(null);
        }
      } catch (error) {
        console.error("Failed to fetch app details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchApp();
  }, [id]);

  if (loading) {
    return <div className="text-center py-20">Loading App Details...</div>;
  }

  if (!app) {
    return <div className="text-center py-20 text-red-500">App not found.</div>;
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="bg-gray-800 rounded-lg shadow-2xl p-8 lg:p-12">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left Column: Image and Author */}
          <div className="lg:w-1/3">
            <img src={app.imageUrl} alt={app.name} className="w-full h-auto object-cover rounded-lg shadow-lg mb-6" />
            <div className="flex items-center gap-4 bg-gray-700 p-4 rounded-lg">
                <img src={app.author.avatarUrl} alt={app.author.name} className="w-16 h-16 rounded-full" />
                <div>
                    <p className="text-gray-400 text-sm">Created by</p>
                    <p className="text-white font-bold text-lg">{app.author.name}</p>
                </div>
            </div>
          </div>

          {/* Right Column: Details */}
          <div className="lg:w-2/3">
            <span className="inline-block bg-cyan-900 text-cyan-300 text-sm font-semibold px-3 py-1 rounded-full mb-3">
              {app.category}
            </span>
            <h1 className="text-5xl font-extrabold text-white mb-4">{app.name}</h1>
            <p className="text-gray-300 text-lg mb-8">{app.longDescription}</p>
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-transform duration-300 hover:scale-105">
              Get App
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDetail;
