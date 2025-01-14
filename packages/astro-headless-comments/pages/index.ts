import type { InjectedRoute } from 'astro';

import type { Endpoint } from '../types';

// All the API endpoints should be defined in the "pages" directory with the pattern.
const apis: Endpoint[] = [
  {
    file: './api/auth/[...all].ts',
    requestPath: '/api/auth/[...all]',
  },
];

// TODO Share this configuration with React Router.
const pages = ['/signup', '/login', '/comments/[...all]'];

export const registerEndpoints = (injectRoute: (router: InjectedRoute) => void) => {
  for (const api of apis) {
    injectRoute({
      pattern: api.requestPath,
      entrypoint: new URL(api.file, import.meta.url),
      prerender: false,
    });
  }

  const pageRoot = new URL('./pages.astro', import.meta.url);
  for (const page of pages) {
    injectRoute({
      pattern: page,
      entrypoint: pageRoot,
      prerender: false,
    });
  }
};
