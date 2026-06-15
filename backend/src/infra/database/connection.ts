import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

const UrlDatabase = `postgresql://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}/${process.env.PG_DATABASE}?sslmode=verify-full&channel_binding=${process.env.PG_CHANNELBINDING}`

export const pool = new Pool({
  connectionString: UrlDatabase
});
