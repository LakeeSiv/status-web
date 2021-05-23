import sqlite3 from "sqlite3";

const DBSOURCE: string = "db.sqlite";
const sql: string = `CREATE TABLE status (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            message TEXT, 
            alert INT 
            )`;

const db: sqlite3.Database = new sqlite3.Database(DBSOURCE, (err) => {
  if (err) {
    // Cannot open database
    console.error(err.message);
    throw err;
  } else {
    console.log("Connected to the SQLite database.");
    db.run(sql, (err) => {
      if (err) {
        console.log("Table already created");
        //   console.log(err);
      } else {
        //   console.log("Inserting");
        //   var insert = "INSERT INTO status (message, alert) VALUES (?,?)";
        //   db.run(insert, ["hi 1", 1]);
      }
    });
  }
});

export default db;
