
/**
 * @file CategorySidebar.tsx
 * @description A sidebar component displaying a list of app categories.
 */

import React from 'react';

// Static list of categories for demonstration.
const categories = ['Productivity', 'Creative', 'Business', 'Developer Tools', 'Education', 'Lifestyle'];

/**
 * A sidebar that displays a list of clickable categories.
 * For now, the links are placeholders.
 */
const CategorySidebar: React.FC = () => {
  return (
    <aside className="w-full bg-gray-800/50 p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4 text-white border-b-2 border-cyan-500 pb-2">Categories</h3>
      <ul className="space-y-2">
        {categories.map((category) => (
          <li key={category}>
            <a href="#" className="block text-gray-300 hover:text-cyan-400 hover:pl-2 transition-all duration-300">
              {category}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default CategorySidebar;
