import { defineDbIntegration } from '@astrojs/db/utils';
import type { Options } from './options';

export default function Comments({ prefix }: Options) {
  return defineDbIntegration({
    name: 'astro-headless-comments',
    hooks: {
      'astro:db:setup': ({ extendDb }) => {
        extendDb({
          configEntrypoint: './db/schema/version',
          seedEntrypoint: './db/migrations/seed',
        });
      },
    },
  });
}
