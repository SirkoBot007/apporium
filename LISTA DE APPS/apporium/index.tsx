
/**
 * @file index.tsx
 * @description The main entry point for the React application.
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';

// Find the root element in the HTML.
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

// Create a root for the React application.
const root = ReactDOM.createRoot(rootElement);

// Render the application.
// HashRouter is used to handle routing in environments where the URL path cannot be modified.
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
