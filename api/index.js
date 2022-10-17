// @ts-nocheck
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import companyRoute from "./routes/company.js";
import cookieParser from "cookie-parser";
import errorHandler from "./middlewares/error.js";
import cors from "cors";

const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Conntected to mongodb");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("Mongodb disconnected!");
});

//middlewares
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["POST", "GET", "PUT", "DELETE", "PATCH"],
  })
);
app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/companies", companyRoute);

app.use(errorHandler);

app.listen(process.env.PORT || 4000, () => {
  connect();
  console.log("Connected to backend");
});
