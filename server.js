import express from "express";
import "dotenv/config";

import db from "./db.js";
import userRoutes from "./src/routes/user.routes.js";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/env", (req, res) => {
  res.send(`ENVIRONMENT IS : ${process.env.NODE_ENV}`);
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// routes
app.route("/user", userRoutes);

app.listen(port, async () => {
  await db()
    .then((res) => {
      console.log(`Server running at ${port}`);
    })
    .catch((error) => {
      console.error("ERROR in connecting DB", error);
      process.exit(1);
    });
});
