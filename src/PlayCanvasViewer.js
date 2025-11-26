// src/PlayCanvasViewer.js
import React, { useEffect, useRef } from 'react';
import { appInsights } from './appInsights';

export default function PlayCanvasViewer() {
  const iframeRef = useRef(null);

  useEffect(() => {
    function onLoad() {
      // Track an event when the PlayCanvas iframe finishes loading
      try {
        appInsights.trackEvent({ name: 'PlayCanvas_Loaded' });
      } catch (e) {
        console.warn('AppInsights event error', e);
      }
    }

    const iframe = iframeRef.current;
    if (iframe) {
      iframe.addEventListener('load', onLoad);
    }
    return () => iframe && iframe.removeEventListener('load', onLoad);
  }, []);

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <iframe
        ref={iframeRef}
        title="PlayCanvas App"
        src={`${process.env.PUBLIC_URL}/playcanvas-build/index.html`}
        style={{ width: '100%', height: '100%', border: 'none' }}
        sandbox="allow-scripts allow-same-origin allow-presentation"
      />
    </div>
  );
}
