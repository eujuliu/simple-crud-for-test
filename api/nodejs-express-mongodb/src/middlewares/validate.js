import logger from "../modules/logger.js";
import { routes } from "../modules/validations.js";
import * as z from "zod/v4";

export default function validateFieldsMiddleware(req, res, next) {
  const zodSchema = routes[`${req.method}:${req.path}`];

  const result = zodSchema.safeParse({
    ...req.body,
    ...req.params,
    ...req.query,
  });

  if (!result.success) {
    logger.error(`\n${z.prettifyError(result.error)}`);
    res.status(400).json(result.error.format());
    return;
  }

  res.locals.safeData = result.data;

  logger.debug(
    `middleware set locals safe data, result: ${JSON.stringify(res.locals.safeData)}`,
  );

  next();
}
