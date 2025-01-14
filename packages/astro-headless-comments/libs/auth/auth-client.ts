import { createAuthClient } from 'better-auth/client';
import { createAuthClient as createReactAuthClient } from 'better-auth/react';

// Remember to correctly configure the site part in astro.config.ts.
export const authClient = createAuthClient({ baseURL: import.meta.env.SITE });
export const reactAuthClient = createReactAuthClient({ baseURL: import.meta.env.SITE });
