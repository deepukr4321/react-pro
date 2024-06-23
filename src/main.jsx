import React from 'react';
import ReactDOMClient from 'react-dom/client';
import App from './App';

// Get the root element from the HTML
const rootElement = document.getElementById('root');

// Create the root container only once
const root = ReactDOMClient.createRoot(rootElement);

// Render the App component
root.render(<App />);

