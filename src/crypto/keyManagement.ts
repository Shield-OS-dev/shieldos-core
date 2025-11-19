import { ShieldError } from "../errors/ShieldError";

export interface KeyPair {
  publicKey: string;
  privateKey: string;
}

export function generateEphemeralKeyPair(): KeyPair {
  // TODO: replace with audited implementation.
  throw new ShieldError(
    "CRYPTO_ERROR",
    "generateEphemeralKeyPair is not implemented yet"
  );
}
