import { Pool, QueryResult } from "pg";
import { config } from "dotenv";
config();

const connectionString: string = process.env.URI as string;

const pool: Pool = new Pool({ connectionString });

// pool.query(
//   `INSERT INTO status (id, message, alert) VALUES ($1,$2, $3)`,
//   [1, "1", 2],
//   (err, res) => {
//     console.log(err, res);
//     pool.end();
//   }
// );

const getData = async () => {
  try {
    const response = await pool.query(`SELECT * from status`);
    const data: object = response.rows[0];
    pool.end();
    return data;
  } catch (error) {
    throw error;
  }
};

const main = async () => {
  var a = await getData();
  console.log(a);
};

main();
