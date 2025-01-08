import { defineDbIntegration } from '@astrojs/db/utils';

export default function Comments() {
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
