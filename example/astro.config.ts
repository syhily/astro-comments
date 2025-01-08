// @ts-check
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import comments from '../index';

export default defineConfig({
  site: 'http://localhost:4321',
  server: {
    port: 4321,
  },
  integrations: [
    mdx(),
    sitemap(),
    comments({ prefix: 'comments' }),
    {
      name: 'watch-plugin-files',
      hooks: {
        'astro:config:setup': ({ addWatchFile }) => {
          addWatchFile('../');
        },
      },
    },
  ],
});
