// src/App.js
import React, { useEffect } from 'react';
import PlayCanvasViewer from './PlayCanvasViewer';
import { appInsights } from './appInsights';

function App() {
  useEffect(() => {
    // Send page view to Application Insights
    appInsights.trackPageView({ name: "PlayCanvas Viewer Loaded" });
  }, []);

  return (
    <div className="App">
      <PlayCanvasViewer />
    </div>
  );
}

export default App;
