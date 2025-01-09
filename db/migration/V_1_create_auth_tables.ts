import type { DbMigrator } from '../../types';

const migrate: DbMigrator = {
  statements: [],
  version: 1,
  changelog: ['Create the auth table for storing the credentials.'],
};

export default migrate;
