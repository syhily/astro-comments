import type { InjectedRoute } from 'astro';
import type { Page } from './types';

// All the astro files should be defined in the "pages" directory with the pattern.
const pages: Page[] = [
  {
    file: './pages/index.astro',
    requestPath: '/comments',
  },
];

export const registerPages = (injectRoute: (router: InjectedRoute) => void) => {
  for (const page of pages) {
    injectRoute({
      pattern: page.requestPath,
      entrypoint: new URL(page.file, import.meta.url),
      prerender: false,
    });
  }
};
