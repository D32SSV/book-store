import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
// import { Book } from "./models/bookModel.js";
import booksRoute from "./routes/booksRoute.js";
import cors from "cors";

const app = express();

//Middleware for parsing request body to json
app.use(express.json());

//middleware for handling CORS Policy
//Option 1. Allows all origins with default of CORS
app.use(cors());
//Option 2. Allow custom origins
// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     methods: ["GET", "PUT", "POST", "DELETE"],
//     allowedHeaders: ["Content-Type"],
//   })
// );

app.get("/", (request, response) => {
  console.log(request);
  response.status(202).send("Welcome to my world");
});


//middileware for handling routes
app.use("/books", booksRoute);


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
