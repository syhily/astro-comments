import { column, defineDb, defineTable } from 'astro:db';

export const MigrateVersion = defineTable({
  columns: {
    version: column.number(),
    name: column.text(),
    date: column.date(),
  },
});

export default defineDb({ tables: { MigrateVersion } });
