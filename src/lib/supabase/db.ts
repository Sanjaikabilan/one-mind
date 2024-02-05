import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "@/../migrations/schema";
import * as dotenv from "dotenv";
import { migrate } from "drizzle-orm/postgres-js/migrator";
dotenv.config({ path: ".env" });

if (!process.env.DATABASE_URL) {
  console.log("🔴 Database url not found , source : db ts ");
}

const client = postgres(process.env.DATABASE_URL as string, { max: 1 });
const db = drizzle(client, { schema });

const migrateDb = async () => {
  try {
    console.log("🟠 Migrating database");
    await migrate(db, { migrationsFolder: "migrations" });
    console.log("🟢 Database migrated");
  } catch (error) {
    console.error("🔴 Error migrating database", error);
  }
};

migrateDb();

export default db;
