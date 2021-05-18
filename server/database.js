import sqlite3 from "sqlite3";

const DBSOURCE = "db.sqlite";

const db = new sqlite3.Database(DBSOURCE, (err) => {
  if (err) {
    // Cannot open database
    console.error(err.message);
    throw err;
  } else {
    console.log("Connected to the SQLite database.");
    db.run(
      `CREATE TABLE status (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            message TEXT, 
            alert INT 
            )`
    );
  }
});

export default db;
