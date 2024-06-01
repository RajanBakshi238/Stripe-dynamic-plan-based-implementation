import express from "express";
import 'dotenv/config'

const DB_URL = process.env.DATABASE_URL;
console.log(DB_URL)

import db from "./db.js";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/env", (req, res) => {
  res.send(`ENVIRONMENT IS : ${process.env.NODE_ENV}`);
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(port, async () => {
  await db()
    .then((res) => {
      console.log(`Server running at http://localhost:${port}`, res);
    })
    .catch((error) => {
      console.log("ERROR in connecting DB", error);
    });
});
