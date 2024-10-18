import { Client } from "pg";
import dotenv from "dotenv";

dotenv.config();

export async function getClient() {
  const client = new Client({
    connectionString: process.env.KEY, // Use the KEY from the .env file
  });
  await client.connect();
  return client;
}
