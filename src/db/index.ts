import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

const DATABASE_URI =
  "postgresql://next-big-idea_owner:npg_q5fw3xBFeNGh@ep-quiet-cell-a5pu2orz-pooler.us-east-2.aws.neon.tech/next-big-idea?sslmode=require";

const sql = neon(DATABASE_URI);
export const db = drizzle({ client: sql, schema: schema });
