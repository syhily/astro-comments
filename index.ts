import type { AstroIntegration } from 'astro';

import { registerPages } from './pages';

// The entrypoint for comments integration.
export default function Comments(): AstroIntegration {
  return {
    name: 'astro-headless-comments',
    hooks: {
      'astro:config:setup': ({ injectRoute }) => {
        // Inject the comments router for serving all the comments requests.
        registerPages(injectRoute);
      },
    },
  };
}
