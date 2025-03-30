
import { defineConfig } from "drizzle-kit";
const DATABASE_URI =
  "postgresql://next-big-idea_owner:npg_q5fw3xBFeNGh@ep-quiet-cell-a5pu2orz-pooler.us-east-2.aws.neon.tech/next-big-idea?sslmode=require";

export default defineConfig({
  out: "./drizzle",
  schema: "./src/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: DATABASE_URI,
  },
});
