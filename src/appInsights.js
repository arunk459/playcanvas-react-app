// src/appInsights.js
import { ApplicationInsights } from '@microsoft/applicationinsights-web';

const connectionString = process.env.REACT_APP_AI_CONNECTION_STRING || ""; // set below

export const appInsights = new ApplicationInsights({
  config: {
    connectionString,
    enableAutoRouteTracking: true,
    // more config options if needed
  }
});

export function initAppInsights() {
  appInsights.loadAppInsights();
  // Optional: add a custom session / user id (for deterministic dedup)
  // const sessionId = localStorage.getItem('sessionId') || crypto.randomUUID();
  // localStorage.setItem('sessionId', sessionId);
  // appInsights.setAuthenticatedUserContext(sessionId);
}
