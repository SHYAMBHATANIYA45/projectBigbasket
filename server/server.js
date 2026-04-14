const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

dotenv.config({ path: "./.env" });

app.use(express.json());

const allowedOrigins = (process.env.CORS_ORIGINS || "")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

app.use(
  cors({
    origin: allowedOrigins.length ? allowedOrigins : true,
  })
);

const port = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("connection successful");
  })
  .catch((error) => {
    console.log(error);
  });

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api", require("./router/produtRouter"));

if (process.env.VERCEL !== "1") {
  app.listen(port, () => {
    console.log(`Express Server is Started at : http://localhost:${port}`);
  });
}

module.exports = app;
