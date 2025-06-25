import mongoose from "mongoose";
import { ENV } from "./config.js";
import logger from "./logger.js";

export async function connectToDatabase() {
  await mongoose.connect(ENV.MONGODB_CONNECTION_STRING);

  logger.info("connection estabilished with success to MongoDB");

  mongoose.connection.on("error", (error) => logger.error(error.message));
}
