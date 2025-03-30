import { integer, pgTable, timestamp, uuid, varchar } from "drizzle-orm/pg-core";

export const Ideas = pgTable("ideas", {
  id: uuid("id").defaultRandom().primaryKey(),
  content: varchar("content").notNull(),
  username: varchar("username").notNull(),
  vote: integer("vote").default(0),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});
