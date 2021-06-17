import { Pool, QueryResult } from "pg";
import { config } from "dotenv";
config();

const connectionString: string = process.env.URI as string;

const pool: Pool = new Pool({ connectionString });

const updateData = async (message: string, alert: number) => {
  try {
    await pool
      .query(`UPDATE status SET message = $1, alert = $2 WHERE id = 1`, [
        message,
        alert,
      ])
      .then(() => {
        console.log("inserted");
      });
  } catch (error) {
    throw error;
  }
};

const getData = async () => {
  try {
    const response = await pool.query(`SELECT * from status`);
    const data: object = response.rows[0];
    // pool.end();
    return data;
  } catch (error) {
    throw error;
  }
};

export { getData, updateData };
