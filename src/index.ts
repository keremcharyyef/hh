import "./jobs/updateTariffs";
import "./jobs/exportJob";    
import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Service is running Kerem");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
