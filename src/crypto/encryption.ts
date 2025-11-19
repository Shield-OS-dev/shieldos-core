import { ShieldError } from "../errors/ShieldError";

export interface EncryptionResult {
  ciphertext: string;
  nonce: string;
}

export interface DecryptionResult {
  plaintext: string;
}

export function encrypt(
  _plaintext: string,
  _key: string
): EncryptionResult {
  // TODO: replace with a strong, audited symmetric encryption algorithm.
  throw new ShieldError(
    "CRYPTO_ERROR",
    "encrypt is not implemented yet"
  );
}

export function decrypt(
  _ciphertext: string,
  _key: string,
  _nonce: string
): DecryptionResult {
  // TODO: replace with a strong, audited symmetric encryption algorithm.
  throw new ShieldError(
    "CRYPTO_ERROR",
    "decrypt is not implemented yet"
  );
}
