export type ShieldErrorCode =
  | "CRYPTO_ERROR"
  | "AUTH_ERROR"
  | "CONFIG_ERROR"
  | "INTERNAL_ERROR";

export class ShieldError extends Error {
  readonly code: ShieldErrorCode;
  readonly cause?: unknown;

  constructor(code: ShieldErrorCode, message: string, cause?: unknown) {
    super(message);
    this.name = "ShieldError";
    this.code = code;
    this.cause = cause;
  }
}
