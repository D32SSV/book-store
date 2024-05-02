import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";

const app = express();

app.get("/", (req, res) => {
  console.log(req);
  res.status(202).send("Welcome to my world");
});

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("DB Connected");
    app.listen(PORT, () => {
      console.log(`App running on port : ${PORT}`);
    });
  })
  .catch((e) => {
    console.log(e);
  });
