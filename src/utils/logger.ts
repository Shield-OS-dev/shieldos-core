export type LogLevel = "debug" | "info" | "warn" | "error";

export interface Logger {
  debug: (message: string, meta?: unknown) => void;
  info: (message: string, meta?: unknown) => void;
  warn: (message: string, meta?: unknown) => void;
  error: (message: string, meta?: unknown) => void;
}

export const defaultLogger: Logger = {
  debug: (message, meta) => {
    if (process.env.NODE_ENV !== "production") {
      console.debug("[DEBUG]", message, meta ?? "");
    }
  },
  info: (message, meta) => {
    console.info("[INFO]", message, meta ?? "");
  },
  warn: (message, meta) => {
    console.warn("[WARN]", message, meta ?? "");
  },
  error: (message, meta) => {
    console.error("[ERROR]", message, meta ?? "");
  }
};
