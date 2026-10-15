---
title: Server Side Verification
sidebar_label: Server Side Verification
---

## Server Side Verification

Server-side verification implementations are generally beyond the scope of our support. The data to verify depends on which StoreKit implementation produced the purchase. The `Purchase` object exposes both `transactionReceipt` and `jwsRepresentation`; these are different payloads and should not be used interchangeably.

### App receipt (legacy)

For the app-receipt validation flow, send the base64-encoded application receipt from `transactionReceipt` to your server and validate it with Apple's receipt validation service. The receipt represents the app's in-app purchase history; it is not the StoreKit 2 transaction JWS. Handle Apple's production and sandbox responses as described in its documentation.

References:

- https://developer.apple.com/library/ios/releasenotes/General/ValidateAppStoreReceipt/Introduction.html
- https://gist.github.com/menny/1985010#file-verify_market_in_app-php


### StoreKit 2 transaction JWS

For StoreKit 2, use `jwsRepresentation`. It contains the signed JWS for the individual transaction. Send it to your server and verify its signature and transaction claims there; decoding the JWS alone does not verify it. Apple's App Store Server Library can help with verification. Check the verified transaction's app and product identifiers and use its transaction and subscription status when granting or updating entitlements.

References:

- https://developer.apple.com/documentation/appstoreserverapi



