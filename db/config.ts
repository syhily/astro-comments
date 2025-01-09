import type { DbConfig } from '../types';

// Load the environment variable.
const loadEnv = (key: string, desc: string): string => {
  const value = process.env[key];
  if (value === undefined) {
    throw new Error(`Missing '${key}' in your environment variables, it's used for ${desc}`);
  }
  return value;
};

// Load the database configuration.
export const loadDbConfig = (): DbConfig => {
  const url = loadEnv('LIBSQL_DATABASE_URL', 'the LibSQL access url');
  const token = loadEnv('LIBSQL_AUTH_TOKEN', 'the base64 encoded username:password');
  return { url, token };
};
