// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { initAppInsights } from './appInsights';

initAppInsights();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
