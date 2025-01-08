import type { AstroIntegration } from 'astro';
import { registerPages } from './pages';
import type { Options } from './types';

export default function Comments({ prefix }: Options): AstroIntegration {
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
