/// <reference types="astro/client" />
/// <reference path="astro/actions.d.ts" />
/// <reference path="astro/content.d.ts" />
/// <reference path="astro/env.d.ts" />

declare namespace App {
  interface Locals {
    user: import('better-auth').User | null;
    session: import('better-auth').Session | null;
  }
}
