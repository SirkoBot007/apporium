
/**
 * @file AppCard.tsx
 * @description A card component to display a summary of an AI application.
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { App } from '../types';

// Props definition for the AppCard component.
interface AppCardProps {
  app: App;
}

/**
 * A card component that shows a preview of an app.
 * @param app The application data to display.
 */
const AppCard: React.FC<AppCardProps> = ({ app }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 ease-in-out group">
      {/* App Image */}
      <img src={app.imageUrl} alt={app.name} className="w-full h-48 object-cover" />
      
      <div className="p-6">
        {/* Category Badge */}
        <span className="inline-block bg-cyan-900 text-cyan-300 text-xs font-semibold px-2.5 py-1 rounded-full mb-2">
          {app.category}
        </span>
        
        {/* App Name */}
        <h3 className="text-xl font-bold text-white mb-2">{app.name}</h3>
        
        {/* App Description */}
        <p className="text-gray-400 text-sm mb-4 h-10">{app.description}</p>
        
        {/* View Details Button */}
        <Link 
          to={`/app/${app.id}`} 
          className="inline-block w-full text-center bg-cyan-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-cyan-700 transition-colors duration-300 opacity-0 group-hover:opacity-100"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default AppCard;
