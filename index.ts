import type { AstroIntegration } from 'astro';

import { registerPages } from './pages';

// The entrypoint for comments integration.
export default function Comments(): AstroIntegration {
  return {
    name: 'astro-headless-comments',
    hooks: {
      'astro:config:setup': ({ injectRoute, addMiddleware }) => {
        // Inject the comments router for serving all the comments requests.
        registerPages(injectRoute);
        // Inject the auth middleware for having the auth context.
        addMiddleware({ order: 'pre', entrypoint: new URL('./auth/middleware.ts', import.meta.url) });
      },
    },
  };
}
