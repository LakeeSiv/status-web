import db from "./database";

const updatedb = (message: string, alert: number) => {
  const sql: string = `UPDATE status
                       SET message = ?,
                           alert =   ?
                       WHERE id = ?`;
  const data: [string, number, number] = [message, alert, 1];

  db.run(sql, data, (err) => {
    if (err) {
      return console.log(err.message);
    }
    console.log("updated db");
  });
};

export default updatedb;
