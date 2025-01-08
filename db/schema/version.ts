import { defineDb, defineTable, column } from 'astro:db';

export const Pets = defineTable({
  columns: {
    name: column.text(),
    species: column.text(),
  },
});

export default defineDb({ tables: { Pets } });
