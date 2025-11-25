# ShieldOS Core

Core architecture for ShieldOS, a decentralized personal security operating system built on Solana.  
This repository provides the fundamental building blocks used across all ShieldOS modules, including shared types, client-side cryptography, common utilities, and foundational system logic.

## Purpose

ShieldOS Core defines the base layer for:

- Shared TypeScript types and interfaces
- Cryptographic primitives and reusable encryption wrappers
- Wallet authentication utilities
- Common error handling and structured result types
- Module-to-module communication standards
- Secure client-side helpers for Mail, Drive, Vault, Chat, and Identity

This repository contains no UI code and no business-level logic.  
It acts as the low-level foundation for the entire ShieldOS ecosystem.

## Structure

This is the initial structure for early development.  
Additional directories will be added as modules mature.

/src
/crypto # encryption primitives, key management wrappers
/types # shared interfaces used across modules
/auth # wallet-based authentication helpers
/utils # common utility functions
/constants # shared constants, system identifiers
/errors # standardized error definitions
/tests
/unit # unit tests for core functions


All modules such as Mail, Drive, Vault, and Chat will import from ShieldOS Core to maintain consistent architecture and avoid duplicated logic.

## Principles

- Minimal and auditable
- Privacy-focused by design
- Strong cryptographic primitives only
- Zero telemetry
- No hidden state
- Deterministic and predictable behavior

## Status

Active development.  
APIs and structures are subject to refinement as other ShieldOS modules evolve.

### Messaging Integrations
- [XMTP JS](https://github.com/Shield-OS-dev/xmtp-js) – used as an experimental messaging transport for ShieldOS Chat.


## Links

Website: https://www.shieldos.xyz/  
DApp: https://app.shieldos.xyz/  
X: https://x.com/shield_os
