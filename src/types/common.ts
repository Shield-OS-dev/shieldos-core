export type TimestampMs = number;

export interface BaseEntity {
  id: string;
  createdAt: TimestampMs;
  updatedAt: TimestampMs;
}
