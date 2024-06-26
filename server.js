import express from "express";
import cors from "cors"
import "dotenv/config";

import db from "./db.js";
import userRoutes from "./src/routes/user.routes.js";
import featureRoutes from "./src/routes/feature.routes.js";
import productRoutes from "./src/routes/product.routes.js";

const app = express();
const port = 3000;

app.use(cors()) 
app.use(express.static("public"));
app.use(express.json());

app.get("/env", (req, res) => {
  res.send(`ENVIRONMENT IS : ${process.env.NODE_ENV}`);
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// routes
app.use("/user", userRoutes);
app.use("/feature", featureRoutes);
app.use("/product", productRoutes);

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
