import { relations, sql } from 'drizzle-orm';
import { index, int, primaryKey, sqliteTableCreator, text } from 'drizzle-orm/sqlite-core';

export const createTable = sqliteTableCreator((name) => `comments_${name}`);

export const posts = createTable(
  'post',
  {
    id: int('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
    name: text('name', { length: 256 }),
    createdById: text('created_by', { length: 255 })
      .notNull()
      .references(() => users.id),
    createdAt: int('created_at', { mode: 'timestamp' })
      .default(sql`(unixepoch())`)
      .notNull(),
    updatedAt: int('updatedAt', { mode: 'timestamp' }).$onUpdate(() => new Date()),
  },
  (example) => ({
    createdByIdIdx: index('created_by_idx').on(example.createdById),
    nameIndex: index('name_idx').on(example.name),
  }),
);

export const users = createTable('user', {
  id: text('id', { length: 255 })
    .notNull()
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  name: text('name', { length: 255 }),
  email: text('email', { length: 255 }).notNull(),
  emailVerified: int('email_verified', {
    mode: 'timestamp',
  }).default(sql`(unixepoch())`),
  image: text('image', { length: 255 }),
});

export const sessions = createTable(
  'session',
  {
    sessionToken: text('session_token', { length: 255 }).notNull().primaryKey(),
    userId: text('userId', { length: 255 })
      .notNull()
      .references(() => users.id),
    expires: int('expires', { mode: 'timestamp' }).notNull(),
  },
  (session) => ({
    userIdIdx: index('session_userId_idx').on(session.userId),
  }),
);

export const sessionsRelations = relations(sessions, ({ one }) => ({
  user: one(users, { fields: [sessions.userId], references: [users.id] }),
}));

export const verificationTokens = createTable(
  'verification_token',
  {
    identifier: text('identifier', { length: 255 }).notNull(),
    token: text('token', { length: 255 }).notNull(),
    expires: int('expires', { mode: 'timestamp' }).notNull(),
  },
  (vt) => ({
    compoundKey: primaryKey({ columns: [vt.identifier, vt.token] }),
  }),
);
