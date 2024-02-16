require("dotenv").config();
import express from "express";
import log from "./utils/logger";
import AuthRouter from "./routes/Auth.routes";
import UserRouter from "./routes/User.routes";
import deserializeUser from "./middleware/deserialize";
import mongoose from "mongoose";

const app = express();

app.use(express.json());

app.use(deserializeUser);
app.use("/auth", AuthRouter);
app.use("/users", UserRouter);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    log.info("Connected to MongoDB");
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    // log.error(err);
    console.log(err);
    process.exit(1);
  });

app.listen(process.env.PORT, () => {
  log.info(`App started at http://localhost:${process.env.PORT}`);
  console.log(`App started at http://localhost:${process.env.PORT}`);
});

console.log("Hello World");
console.log(process.env);
