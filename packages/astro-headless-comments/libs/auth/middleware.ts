import { defineMiddleware } from 'astro:middleware';

import { auth } from './index';

// This is a astro middleware for handling the /api/auth endpoints.
export const onRequest = defineMiddleware(async (context, next) => {
  const isAuthed = await auth.api.getSession({
    headers: context.request.headers,
  });

  if (isAuthed) {
    context.locals.user = isAuthed.user;
    context.locals.session = isAuthed.session;
  } else {
    context.locals.user = null;
    context.locals.session = null;
  }

  return next();
});
