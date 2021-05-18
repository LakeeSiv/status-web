import express from "express";
import db from "./database.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/api", (req, res) => {
  const sql = "SELECT * from status";
  db.all(sql, [], (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json(rows[0]);
  });
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
