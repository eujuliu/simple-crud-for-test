export const REQUIRED_ENVS = ["PORT", "MONGODB_CONNECTION_STRING"];
export const ENV = { ...process.env };
export const DEBUG = ENV.NODE_ENV !== "production";
export const LOGGER_CONFIG = {
  level: DEBUG ? "debug" : "info",
  transport: DEBUG ? { target: "pino-pretty" } : undefined,
};
