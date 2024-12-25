import cors from "cors";
import express, { Application, Response } from "express";
import cookieParser from "cookie-parser";
import { StatusCodes } from "http-status-codes";
import { Server } from "http";
import mongoose from "mongoose";
import config from "./config";
import globalErrorHandler from "./middlewares/global-error-handler";

const app: Application = express();

// Middlewares
app.use(cors());
app.use(cookieParser());
app.use(express.json());

// test route
app.get("/", (_, res: Response) => {
  res.send("Hello World!");
});

// application routes
// app.use("/api/v1", applicationRoutes);

// error handler
app.use(globalErrorHandler);

// not found route
app.use((_, res: Response) => {
  res.status(StatusCodes.NOT_FOUND).json({
    success: false,
    status: StatusCodes.NOT_FOUND,
    message: "Endpoint not found",
  });
});

let server: Server;

(async function () {
  console.log("Connecting to database...");
  try {
    await mongoose.connect(config.db_connection_string as string);
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );

    server = app.listen(config.port || 5000, () => {
      console.log(`STN Portfolio app listening on port ${config.port || 5000}`);
    });
  } catch (error) {
    console.log("There was a problem starting the server.", error);
  }
})();

// async error handle
process.on("unhandledRejection", () => {
  console.log("UnhandledRejection is detected! shutting down the server...");

  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }

  process.exit(1);
});

// synchronies error handle
process.on("uncaughtException", () => {
  console.log("UncaughtException is detected! shutting down the server...");
  process.exit();
});
