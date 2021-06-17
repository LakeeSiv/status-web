import { Pool } from "pg";
import { config } from "dotenv";
config();

const connectionString: string = process.env.URI as string;

const pool = new Pool({ connectionString });

pool.query(
  `INSERT INTO status (id, message, alert) VALUES ($1,$2, $3)`,
  [1, "1", 2],
  (err, res) => {
    console.log(err, res);
    pool.end();
  }
);
