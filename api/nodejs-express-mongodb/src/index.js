import express from "express";
import { connectToDatabase } from "./modules/mongoose.js";
import { ENV, REQUIRED_ENVS } from "./modules/config.js";
import logger from "./modules/logger.js";
import userRouter from "./routes/user.route.js";

main().catch((err) => {
  logger.error(err.message);

  throw new Error(err);
});

async function main() {
  if (!REQUIRED_ENVS.every((env) => Object.keys(ENV).includes(env)))
    throw new Error("Missing required environment variable");

  await connectToDatabase();
  const app = express();

  app.use((req, res, next) => {
    logger.info(`${req.method} ${req.originalUrl}`);
    next();
  });
  app.use(express.urlencoded());
  app.use(express.json());

  app.use(userRouter);

  app.listen(ENV.PORT, async () => {
    logger.info(`app listening on port ${ENV.PORT}`);
  });
}
