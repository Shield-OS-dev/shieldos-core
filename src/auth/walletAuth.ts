import type { WalletAddress } from "../types/identity";
import { DEFAULT_SESSION_TTL_MS } from "../constants/system";
import type { SessionContext } from "../types/identity";
import { ShieldError } from "../errors/ShieldError";

export interface WalletSignaturePayload {
  message: string;
  signature: string;
}

export function createSessionFromWallet(
  wallet: WalletAddress,
  now: number = Date.now()
): SessionContext {
  return {
    wallet,
    sessionId: `sess_${wallet}_${now.toString(36)}`,
    issuedAt: now,
    expiresAt: now + DEFAULT_SESSION_TTL_MS
  };
}

export function validateSignature(
  _wallet: WalletAddress,
  _payload: WalletSignaturePayload
): boolean {
  // TODO: implement wallet signature verification for Solana.
  throw new ShieldError(
    "AUTH_ERROR",
    "validateSignature is not implemented yet"
  );
}
