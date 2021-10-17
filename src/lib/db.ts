import { Pool } from "pg";
import { env } from "./process";

export const pool = new Pool({
  connectionString: env.DATABASE_URL(),
  ssl: {
    rejectUnauthorized: false,
  },
});
