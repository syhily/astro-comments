export interface Page {
  // The relative file path start with "./pages"
  file: string;
  // The url request path start with "/comments"
  requestPath: string;
}

export interface DbConfig {
  // The access url for LibSQL
  url: string;
  // The base64 encoded username:password token
  token: string;
}

export interface DbMigrator {
  // The sql sets.
  // Remember that all the tables in our system should start with 'hc_'.
  migrations: string[];
  // The migrate version for auto increase in the version table.
  version: number;
  // The changes made in this migrator.
  changelog: string[];
}
