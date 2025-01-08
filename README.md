# Astro Headless Comments

A headless comments solution for Astro by using LibSQL.
Given this plugin is based on the `@astrojs/db` a runnable LibSQL instance is required to be used in production.

**This project is still under heavy development to get the first release.**

## Install

TODO

## Usage

Add the bellowing environment variables to your project.

```bash
# The database url
LIBSQL_DATABASE_URL=
# The auth token, it's a base64 encoded $username:$password
LIBSQL_AUTH_TOKEN=
```

## Todo List

- [ ] Support database migration on astro db.
- [ ] Support the JWT auth.
