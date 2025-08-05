
/**
 * @file Header.tsx
 * @description The main header component for the application.
 */

import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Header component displaying the site title and navigation links.
 */
const Header: React.FC = () => {
  return (
    <header className="bg-gray-800/80 backdrop-blur-sm shadow-lg sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo and Site Title */}
        <Link to="/" className="text-2xl font-bold text-white hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2">
          <i className="fas fa-cubes-stacked"></i>
          APPORIUM
        </Link>
        
        {/* Navigation Links */}
        <div className="flex items-center space-x-6">
          <Link to="/" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Home</Link>
          <Link to="/catalog" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Catalog</Link>
          <Link to="/login" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded-full transition-transform duration-300 hover:scale-105">
            Login
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
