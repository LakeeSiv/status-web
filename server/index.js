import express from "express";

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/api", (req, res) => {
  const state = {
    message: "Busy",
    alert: 1,
  };
  res.json(state);
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
