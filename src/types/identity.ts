export type WalletAddress = string;

export interface UserIdentity extends BaseEntity {
  wallet: WalletAddress;
  displayName?: string;
  avatarUrl?: string;
}

export interface SessionContext {
  wallet: WalletAddress;
  sessionId: string;
  issuedAt: TimestampMs;
  expiresAt?: TimestampMs;
}
