import { pgTable, uuid, text, timestamp } from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";

export const users = pgTable("users", {
  id: uuid().primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
  created_at: timestamp("created_at", { withTimezone: true })
    .notNull()
    .default(sql`now()`),
  updated_at: timestamp("updated_at", { withTimezone: true })
    .notNull()
    .default(sql`now()`),
});
