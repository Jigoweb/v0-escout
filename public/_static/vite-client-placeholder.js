// Placeholder for unexpected Vite HMR client requests in a Next.js app.
// This avoids a SyntaxError when an external tool or extension injects
// a script tag to "/@vite/client" which doesn't exist in this project.
// The file is intentionally minimal and harmless.

(() => {
  try {
    if (typeof window !== 'undefined') {
      // No-op: log once to indicate placeholder was served.
      // eslint-disable-next-line no-console
      console.debug('[noop] Served vite-client-placeholder.js');
    }
  } catch (_) {
    // Swallow any errors; this file should never throw.
  }
})();