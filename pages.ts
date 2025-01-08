import type { InjectedRoute } from 'astro';
import type { Page } from './types';

const pages: Page[] = [
  {
    path: './pages/index.astro',
    url: '/comments',
  },
];

export const registerPages = (injectRoute: (router: InjectedRoute) => void) => {
  for (const page of pages) {
    injectRoute({
      pattern: page.url,
      entrypoint: new URL(page.path, import.meta.url),
      prerender: false,
    });
  }
};
