import { ApplicationInsights } from "@microsoft/applicationinsights-web";

const connectionString = process.env.REACT_APP_AI_CONNECTION_STRING || "";
const appInsights = new ApplicationInsights({
  config: { connectionString, enableAutoRouteTracking: true }
});
appInsights.loadAppInsights();

export default appInsights;
