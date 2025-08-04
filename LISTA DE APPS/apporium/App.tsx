
/**
 * @file App.tsx
 * @description The root component of the application, responsible for routing.
 */

import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import AppDetail from './pages/AppDetail';
import Login from './pages/Login';

/**
 * The main App component that defines the application's structure and routes.
 * It uses React Router to switch between different pages.
 */
const App: React.FC = () => {
  const location = useLocation();
  // Don't show Header and Footer on the Login page for a more focused view.
  const showHeaderFooter = location.pathname !== '/login';

  return (
    <div className="flex flex-col min-h-screen">
      {showHeaderFooter && <Header />}
      
      {/* Main content area. The pb-20 provides padding to prevent content from being hidden by the fixed footer. */}
      <main className={`flex-grow ${showHeaderFooter ? 'pb-20' : ''}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/app/:id" element={<AppDetail />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>

      {showHeaderFooter && <Footer />}
    </div>
  );
};

export default App;
