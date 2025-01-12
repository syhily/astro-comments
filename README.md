# Astro Headless Comments

A headless comments solution for Astro by using LibSQL.
Given this plugin is based on the `@astrojs/db` a runnable LibSQL instance is required to be used in production.

**This project is still under heavy development to get the first release.**

## Install

```bash
# Use npm
npm install -D astro-headless-comments

# Use pnpm
pnpm add -D astro-headless-comments

# Use yarn
yarn add -D astro-headless-comments
```

## Usage

Add the bellowing environment variables to your project.

```bash
# The database url
LIBSQL_DATABASE_URL=
# The auth token, it's a base64 encoded $username:$password
LIBSQL_AUTH_TOKEN=
```
