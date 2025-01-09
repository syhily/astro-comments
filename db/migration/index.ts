import type { Client } from '@libsql/client';
import type { DbMigrator } from '../../types';
import v1 from './V_1_create_auth_tables';

// Remember to import the migrator from the same directory.
const migrators: DbMigrator[] = [v1];
const initVersionTable = `CREATE TABLE IF NOT EXISTS hc_schema_version (
	version INTEGER NOT NULL,
	description TEXT NOT NULL,
    checksum TEXT NOT NULL,
	execute_date TEXT DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
	CONSTRAINT schema_version_pk PRIMARY KEY (version)
);`;

// Migrate all the required tables for drizzle orm.
const migrate = async (client: Client) => {
  // Make sure the schema version table has been created.
  await client.execute(initVersionTable);

  // Validate the migrators, make sure there are not any errors.
  migrators.sort((a, b) => a.version - b.version);
};
