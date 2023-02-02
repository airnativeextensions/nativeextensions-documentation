### 2023.02.02 [v14.4.0]

```
feat(ios,appreceipt): add callback to ApplicationReceipt refresh function
feat(docs): add documentation for the application receipt functionality
```

### 2023.01.20 [v14.3.0]

```
feat(ios): Xcode 14 update, remove bitcode and add no-objc-msgsend-selector-stubs compiler flag (resolves #520)
feat(huawei): update huawei in-app purchases to v6.6.0.301 (resolves #514, resolves #495, resolves #494)
fix(playbilling): fix for change purchase flow to correctly supply subscription offer for new purchase (resolves #506)
feat(playbilling): add fallback to legacy implementation when play store is outdated (resolves #489)
```

### 2022.11.04 [v14.0.2]

```
feat: add check availability function to check for feature availability and required store upgrades
```

### 2022.10.25 [v14.0.1]

```
fix(android): remove usage of String.join (resolves #500)
fix(docs): update docs to reflect latest testing process with AIR 33.1.1.889+ (#459)
```

### 2022.10.07 [v14.0.0]

```
Google Play Billing update
- v5.0.0

feat(playbilling): update play billing sdk to v5.0.0 (resolves #482)
feat(subscriptionoffers): introduce subscription offers across all services replacing product discounts
feat(getpurchases): play billing purchases should be more accurately retrieved from the store
feat(productdiscounts): product discounts have been removed 
feat(ios): add ability to show offer code redemption dialog (resolves #464)
feat(product): add some fallbacks for product priceString
feat(ios): skoverlay integration
feat(ios,productoverlay): add event callbacks for product overlay lifecycle
```

### 2022.05.20 [v13.2.4]

```
fix(apple): correct closing of product view on older versions of ios (#467)
```

### 2022.05.19 [v13.2.3]

```
feat(amazon): update to Amazon Appstore SDK v3.0.2 (resolves #445)
fix(amazon): correct android exported tags for Amazon receiver
fix(docs,amazon): add information on adding AppstoreAuthenticationKey.pem and new testing process (#459)
fix(googleplay): updates for handling odd case where closing app may lose purchase (#451)
fix(docs): corrected references to REQUEST_INSTALL_PACKAGES permission (resolves #461)
```

### 2022.02.07 [v13.2.1]

```
Update package and docs for Android 31
Update docs to use apm
Reorganise docs layout
Minor fixes for manifests in air packages
```

### 2021.09.09 [v13.1.0]

```
Added air package
Updated com.google.android.play dependency to 1.10.1

Updates: 
 - Added cancel date to a purchase to indicate end date of a subscription, and corrected Amazon getProducts returning false (resolves #427)
 - Amazon: Added handling of pagination in purchase query responses (#428)
 - Amazon: Updated implementation for better handling of consume purchase (#428)
```



### 2021.05.16 [v13.0.045]

```
Google Play Billing
 - v3.0.3

Huawei 
 - Fixed endless login loop (resolves #410)
 - Changed returned error codes to match definitions in ErrorCodes class
```


### 2021.02.26 [v13.0.037]

```
Corrected developer challenge on huawei consume purchase by product id (resolves #402)
```


### 2021.02.11 [v13.0.031]

```
Fixed issue with purchase state during restore purchases on Play Billing (resolves #395)
```


### 2021.02.01 [v13.0.030]

```
Added Samsung Galaxy Store In-App Purchases (resolves #359)
Added macOS AppStore (resolves  #355)

Google Play Billing
 - v3.0.2

Fixes: 
 - Android: Added handling of invalid extContext after app update (resolves #374)
```


### 2020.11.06 [v12.1.133]

```
Corrected missing classes from default library (resolves #369)
```


### 2020.11.02 [v12.1.128]

```
Updated documentation
```


### 2020.11.02 [v12.1.128]

```
Updated documentation
```


### 2020.10.28 [v12.1.128]

```
Added applicationUsername to a purchase change request (resolves #365)
Android: Corrected change purchase functionality to include purchase token (resolves #364)
Correctly reported error message and code with a PurchaseEvent.PURCHASE_FAILED event (resolves #361)
```


### 2020.09.17 [v12.0.119]

```
iOS: Corrected build issue with variants (resolves #352)
```


### 2020.09.15 [v12.0.117]

```
Added InAppUpdates functionality:
  - Huawei checkAppUpdate (resolves #344)
  - Google Play In-App Updates 

Google Play Billing
 - v3.0.0 (resolves #345)
 - Developer payload changes: https://developer.android.com/google/play/billing/developer-payload 
 - Returning obfuscated application username from purchases (resolves #348)

Android: Changed service support checks to use installer package to better detect store availability (resolves #343)
```


### 2020.08.14 [v11.0.097]

```
Added SWC + updated builds
```


### 2020.06.25 [v11.0.096]

```
Updated Huawei AppGallery documentation (#323)
```


### 2020.06.22 [v11.0.096]

```
Added support for in app purchases through Huawei AppGallery  
Added ability to retrieve user data (initially Amazon user id) (resolves #322)
Updated documentation
```


### 2020.04.20 [v10.2.056]

```
Added details of subscription period on supported services
Google Play Billing: Added introductory prices and free trials (resolves #308) 
Google Play Billing library updated to version 2.2.0
Amazon InAppPurchasing is now considered out of beta (resolves #231)
Corrected typo in documentation purchased states (resolves #309)
```


### 2020.03.31 [v10.1.049]

```
Added finish purchase success and failed events to better handle finishing purchases (#262, #175)
iOS: Removed dispatch of purchases updated event on finish purchase, replaced with success event 
Android: Added null pointer checks during consume purchase process and handled results (#306)
```


### 2020.03.24 [v10.0.038]

```
Android X migration (resolves #300)
```


### 2020.01.18 [v9.1.034]

```
Updated default library functions to match release (#290)
```


### 2019.10.24 [v9.1.026]

```
Android: Added check for extension context state when dispatching events (#268)
```


### 2019.10.18 [v9.1.025]

```
iOS: Application Receipt added all fields to originalMessage Purchase field (#267)
```


### 2019.10.11 [v9.1.024]

```
Corrected documentation
```


### 2019.10.11 [v9.1.024]

```
iOS: Added discounts and offers (resolves #233)
```


### 2019.09.19 [v9.0.009]

```
Android: Critical fix for crash in getPurchases call (resolves #261)
```


### 2019.09.09 [v9.0.007]

```
Android 64bit update (resolves #247)
Removed products requirement from getPurchases, finishPurchase and consumePurchase functions (resolves #248)
```


### 2019.04.18 [v8.0.064]

```
Amazon InApp Purchasing integration (alpha) (#231)
Added additional variants to better handle development cases
Corrected missing  method from default lib (#235)
```


### 2019.03.27 [v7.0.042]

```
Corrected getPurchases call for Play Billing (resolves #230)
```


### 2019.03.20 [v7.0.033]

```
Added applicationUsername implementation for Android (#229)
```


### 2019.03.03 [v7.0.032]

```
Complete rewrite of Android Play Store integration to latest API (closes #215)
 - Added upgrade / downgrade ability to change subscriptions (resolves #56)
 - Resolves crashes (resolves #171)
 - Fixes transaction identifiers (resolves #127)
 - Should correct template issues (#203)
Embedded iOS bitcode
```


### 2019.02.22 [v6.4.119]

```
iOS: Added additional checks to product information (#221)
Updated minimum iOS version to 8.0 (#222)
```


### 2018.10.22 [v6.3.118]

```
iOS: Corrected handling of error in getProducts call (resolves #204)
```


### 2018.10.10 [v6.3.113]

```
iOS getPurchases integration using AppReceipt Validation
```


### 2018.08.17 [v6.2.107]

```
Added tvOS platform support (resolves #123)
```


### 2018.08.15 [v6.1.102]

```
Corrected @available packaging issue on Windows machines (resolves #191)
```


### 2018.08.01 [v6.1.098]

```
Corrected size of ANE (#189)
```


### 2018.07.31 [v6.1.096]

```
Resolved issue with calling setup after failure (resolves #189)
```


### 2018.01.19 [v6.1.079]

```
Android: Corrected issue returning wrong response when already owned item (resolves #130)
```

### 2017.12.19 [v6.1.076]

```
iOS: Corrected minor issue with multiple simultaneous finish purchase calls
iOS: Improved compatibility with other ANEs and the startup process (resolves #135)
Updated User Cancellation docs (resolves #153)
Corrected default lib function signatures
```


### 2017.12.19 [v6.1.076]

```
iOS: Corrected minor issue with multiple simultaneous finish purchase calls
iOS: Improved compatibility with other ANEs and the startup process (resolves #135)
Updated User Cancellation docs (resolves #153)
Corrected default lib function signatures
```


### 2017.10.03 [v6.0.062]

```
Latest release including iOS 11 Promotions and Android updates
```


### 2017.07.25 [v5.0.017]

```
Added checks for null reference and correctly handled error (resolves #151)
```


### 2017.07.10 [v5.0.016]

```
Updated for compatibility with new Core library (for Notifications/PushNotifications fix)
```


### 2017.07.01 [v5.0.015]

```
Added getPurchases to retrieve purchases (resolves #36, resolves #131, resolves #142, resolves #61)
Added subscription product handling
Deprecated Purchase events to use PURCHASES_UPDATED main handler (resolves #115)
Android: Corrected response from test transactions (resolves #132)
Android: Added message to purchase cancelled event (resolves #130)
Android: Updated IabHelper (resolves #129, resolves #126, resolves #122, resolves #145, resolves #137)
Android: Moved to better activity handling (resolves #128)
Android: Resolved slow isSupported call (resolves  #138)
Added ErrorCodes constants (resolves #10, resolves #141)
Updated documentation
```


### 2016.12.31 [v4.7.005]

```
New documentation
```


### 2016.12.01 [v4.7.002]

```
Android: Implemented clear products with the getProducts function
```


### 2016.06.04

```
Android: Corrected link for product view (#105)
```


### 2016.03.16

```
Android: Fixed error when multiple consumes occur, now dispatches failed event (#90)
Android: Fixed issue with odd characters in product description (resolves #95)
```


### 2016.01.12

```
iOS: Changed order of product loaded and invalid events
Added a canMakePayments function to check if restrictions are enabled (resolves #82)
```


### 2015.08.13

```
Clean build to check default SWC (#52)
```


### 2015.08.12

```
Added swc to lib (#52)
```


### 2015.07.23

```
Added documentation of events dispatched from function calls (resolves #46)
Added option to add products when calling getProducts rather than clearing the list each call (resolves #45)
Android: Improved handling of package names in init call
```


### 2015.06.30

```
Android: Corrected issue with makePurchase not working after a call to restorePurchases (#40)
```


### 2015.06.29

```
Corrected the default library consumePurchase function to match the native library (resolves #42)
```


### 2015.06.27

```
iOS: Corrected events firing twice (on update and removed) (resolves #37)
```


### 2015.06.19

```
iOS: Added getPendingPurchases to allow access to purchases that are in progress
iOS: Added a check of pending purchases when a call to makePurchase is made to ensure there are no pending purchases for the product (#26)
Removed debug code from AS lib
```


### 2015.06.12

```
Android: Changed 'price' value on a product to be consistent with iOS (resolves #32)
Android: Windows: Fix for bug in AIR packager resulting in missing resources
```


### 2015.06.10

```
Android: Corrected JSON format on cancelled event (#27)
iOS: Corrected restored transaction receipt 
```


### 2015.05.07

```
iOS: Corrected finishPurchase on a failed transaction, was incorrectly failing to find transaction (#25)
```


### 2015.04.16

```
Added changelog for front end site
```


### 2015.04.16

```
Updated documentation
Android: Corrected product details (resolves #16)
```


### 2015.04.15

```
Completely rewriten example application using Starling

Separated finishing a purchase into a separate call
Separated PURCHASE_* events into separate class
Introduced the PurchaseRequest object to initiate calls (resolves #15)
Introduced the Product View for native product UI
Added the currency code to the returned product details (resolves #5)

iOS: Updated to include new receipt data using the appStoreReceiptUrl
iOS: Added access to the application receipt (for iOS 7+) including refresh functionality (resolves #20)
iOS: Added the applicationUsername on purchase requests as optional added security measure
iOS: Updated to the new restorePurchases method

Android: x86 support (resolves #19)
Android: Fixed null pointer exception (resolves #12)
Android: Patch for querying more than 20 items (resolves #6)
```


### 2015.02.02

```
Added check for .debug suffix in application id
```


### 2014.12.20

```
iOS: Included arm64 support (resolves #3) 
Android: Corrected application id check when doesn't contain air prefix 
```


### 2014.12.05

```
Corrected missing EventDispatcher functions from base class
iOS: Implemented autoreleasepools for all C function calls
```


### 2014.12.01

```
Updated README
```


### 2014.12.01

```
New application based key check, removing server checks
```


### 2014.11.25

```
Corrected missing default library definitions (resolves #292)
```
