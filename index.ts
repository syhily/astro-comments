import db from '@astrojs/db';
import { defineDbIntegration } from '@astrojs/db/utils';
import { registerPages } from './pages';
import type { Options } from './types';

export default function Comments({ prefix }: Options) {
  return defineDbIntegration({
    name: 'astro-headless-comments',
    hooks: {
      'astro:config:setup': ({ injectRoute, updateConfig }) => {
        // Inject the comments router for serving all the comments requests.
        registerPages(injectRoute);
        updateConfig({ integrations: db() });
      },
      'astro:db:setup': ({ extendDb }) => {
        extendDb({
          configEntrypoint: new URL('./db/schema/version', import.meta.url),
          seedEntrypoint: new URL('./db/migrations/seed', import.meta.url),
        });
      },
    },
  });
}
