import express, { Application, Request, Response } from "express";
import db from "./database";

const app: Application = express();
const PORT: number | string = process.env.PORT || 5000;

app.get("/api", (req: Request, res: Response) => {
  const sql: string = "SELECT * from status";
  db.all(sql, [], (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json(rows[0]);
  });
});

app.use((req: Request, res: Response) => {
  res.status(404).json({ error: "page does not exist" });
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
