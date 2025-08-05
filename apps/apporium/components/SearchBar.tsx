
/**
 * @file SearchBar.tsx
 * @description A reusable search bar component.
 */

import React, { useState } from 'react';

// Props definition for the SearchBar component.
interface SearchBarProps {
  onSearch: (query: string) => void;
}

/**
 * A simple search bar component that calls a function on submit.
 * @param onSearch Callback function to execute when a search is submitted.
 */
const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  // Handles the form submission.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto my-8">
      <div className="relative">
        {/* Search Icon */}
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
          </svg>
        </div>
        {/* Input Field */}
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for AI apps..."
          className="w-full bg-gray-700 border border-gray-600 text-white placeholder-gray-400 rounded-full py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
        />
        <button type="submit" className="absolute inset-y-0 right-0 mr-2 my-2 px-4 py-1 bg-cyan-600 text-white rounded-full hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors">
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
