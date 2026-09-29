import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

export const pool = new Pool({
  host: process.env.PG_HOST || "localhost",
  port: Number(process.env.PG_PORT || 5432),
  user: process.env.PG_USER || process.env.PG_USERNAME,
  password: process.env.PG_PASSWORD || "",
  database: process.env.PG_DATABASE || process.env.PG_DBNAME,
  ssl: false,
});
