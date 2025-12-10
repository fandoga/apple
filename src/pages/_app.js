import "@/styles/globals.css";

import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://858ab7136a15255d608213224a832af6@o4510511253880832.ingest.de.sentry.io/4510511255584848",
  integrations: [Sentry.browserTracingIntegration()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
  // Set `tracePropagationTargets` to control for which URLs distributed tracing should be enabled
  tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
});

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
