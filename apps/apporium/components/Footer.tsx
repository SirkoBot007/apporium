
/**
 * @file Footer.tsx
 * @description The main footer component for the application.
 */

import React from 'react';

/**
 * Footer component with legal text and social links.
 * It's fixed to the bottom of the viewport.
 */
const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-400 py-4 px-6 fixed bottom-0 left-0 right-0 z-40">
      <div className="container mx-auto flex justify-between items-center text-sm">
        {/* Copyright Information */}
        <p>&copy; {new Date().getFullYear()} APPORIUM. All rights reserved.</p>
        
        {/* Social Media Links */}
        <div className="flex space-x-4">
          <a href="#" className="hover:text-white transition-colors"><i className="fab fa-twitter"></i></a>
          <a href="#" className="hover:text-white transition-colors"><i className="fab fa-github"></i></a>
          <a href="#" className="hover:text-white transition-colors"><i className="fab fa-linkedin"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
