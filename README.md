This project uses the following libraries:

- React Router
- Tailwind CSS
- DaisyUI
- Lucide (for icons)
- Vite (for development and build)# Next-Big-Idea

## Setup Drizzle Kit With Postgres Neon Database

#### NOTE: If your application is JavaScript-based, perform this setup in a `.ts` extension

1. Install The NeonDb And Drizzle Kit
````
npm i drizzle-orm @neondatabase/serverless dotenv
npm i -D drizzle-kit tsx
````

2. Go To The Neon Db Website And Create A Project And New Database And Copy Connection String

3. Coonect Drizzle Orm With NeonDatabase
````
src/db/index.ts

import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle({ client: sql });
````

4. Create Schema
````
src/db/schema.ts

import { integer, pgTable, timestamp, uuid, varchar } from "drizzle-orm/pg-core";

export const Ideas = pgTable("ideas", {
  id: uuid("id").defaultRandom().primaryKey(),
  content: varchar("content").notNull(),
  username: varchar("username").notNull(),
  vote: integer("vote").default(0),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});
````

5. Setup Drizzle Config file in root directory
````
drizzle.config.ts

import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './drizzle',
  schema: './src/db/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
````

6. Apply Chnages and show live changes on NeonDb
````
npx drizzle-kit push
````

7. Now Run Studio 
```
npx drizzle-kit studio
```