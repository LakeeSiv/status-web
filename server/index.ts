import express, { Application, Request, Response } from "express";
import cors from "cors";
import { config } from "dotenv";
config();

const app: Application = express();
app.use(cors());
app.use(express.json());
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

app.post("/api", (req: Request, res: Response) => {
  const pass: string = req.body.pass;
  const message: string = req.body.message;
  const alert: number = req.body.alert;

  if (pass === process.env.PASS) {
    res.status(200).end("Success");
    updatedb(message, alert);
  } else {
    res.status(401).end("Failed");
  }
});

app.use((req: Request, res: Response) => {
  res.status(404).json({ error: "page does not exist" });
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
