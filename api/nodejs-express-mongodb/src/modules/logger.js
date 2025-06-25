import pino from "pino";
import { LOGGER_CONFIG } from "./config.js";

export default pino(LOGGER_CONFIG);
