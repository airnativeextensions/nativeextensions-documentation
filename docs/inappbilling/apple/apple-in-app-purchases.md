---
title: Apple In-App Purchases
sidebar_label: Setup
---

## Creating Your Products

The first step to setting up purchases is to create your products.

Configure in-app purchases for your app in [App Store Connect](https://appstoreconnect.apple.com/). Before creating products, review Apple's [App Review Guidelines](https://developer.apple.com/app-store/review/guidelines/) and confirm that your content and payment flow meet its requirements.

For current product setup guidance, see Apple's [in-app purchase documentation](https://developer.apple.com/in-app-purchase/):

> 
> You can use In-App Purchase to sell content, app functionality, and services.
> 
> - **Content**. Deliver digital content or assets, such as magazines, photos, and artwork. Content can also be used by the app itself—for example, additional characters and levels in a game, filters in a camera app, and stationery in a word processor.
> - **App functionality**. Unlock behavior and expand features you’ve already delivered. Examples include a free game that offers multiplayer mode as an in-app purchase and a free weather app that lets users make a one-time purchase to remove ads.
> - **Services**. Have users pay for one-time services such as voice transcription and for ongoing services such as access to a collection of data.
>
> You can’t use In-App Purchase to sell real-world goods and services or to sell unsuitable content.
> 
> - **Real-world goods and services**. You must deliver a digital good or service within your app when using In-App Purchase. Use a different payment mechanism to let your users buy real-world goods and services in your app, such as a credit card or payment service.
> - **Unsuitable content**. Don’t use In-App Purchase to sell content that isn’t allowed by the App Review Guidelines.
>
> For detailed information about what you can offer using In-App Purchase, see your license agreement and the App Review Guidelines. Reviewing the guidelines carefully before you start coding helps you avoid delays and rejection during the review process. If the guidelines don’t address your case in sufficient detail, you can ask the App Review team specific questions using the online contact form.
> 


Create each product in App Store Connect. Product IDs are specific to an app, so keep them stable after release. Choose the correct product type when creating a product; it can't be changed later.

Use the product ID in the extension's `getProducts` call and purchase request.

Every product you create is only available to one particular application and cannot be shared amongst other applications.

When creating a product in App Store Connect:

- Choose the product type carefully; it can't be changed after creation.

- Set a product ID that you can keep stable after release.

  The product ID is the **product identifier**. 
  For example, com.company.app_name.productid.
  When your app uses the extension to communicate with the App Store, it uses product identifiers 
  to the `getProducts` function to retrieve the configuration data you provided for the products. 
  Later, when a user wants to purchase a product, your app identifies the product to be purchased 
  using its product identifier.

- For auto-renewable subscriptions, create a New Subscription Group, or add it to an existing group. 
  All auto-renewable subscriptions must be part of a group. 
  You can learn more in Understanding Subscription Groups and Durations.
- Set availability and pricing, add localizations, and provide any required review information.

Your in-app purchase product appears on the app’s In-App Purchases page. 

Product status labels and submission requirements can change; follow current App Store Connect guidance for testing and release.
You should now be able to use the extension to query and make test purchases of your products.

Complete the product's required metadata, localization, pricing, availability, and review information in App Store Connect. Follow current submission requirements before offering products in production.

---

## Testing

Use the testing environment that matches what you need to validate:

- **StoreKit Testing in Xcode** lets you test locally with a StoreKit configuration file, without creating sandbox tester accounts or making App Store purchases.
- **Sandbox testing** exercises purchases against Apple's sandbox. Create sandbox tester accounts in App Store Connect and follow Apple's current sign-in instructions for your OS version.
- **TestFlight** uses the sandbox environment for in-app purchases. Test with the app distributed through TestFlight and ensure your server handles sandbox transactions correctly.

Test product loading, successful and cancelled purchases, pending purchases where applicable, restores, subscription renewals and expirations, and your server-side verification and entitlement updates. See Apple's [StoreKit documentation](https://developer.apple.com/documentation/storekit) for current testing details.

---

## Security Recommendation

If you associate purchases with accounts in your service, set `applicationUsername` to an opaque value that identifies the account without exposing personal information. For StoreKit 2, this value must be a UUID string: the extension passes it to StoreKit as `appAccountToken`. Non-UUID values aren't used as an app account token by StoreKit 2. Keep the association on your server and don't treat this value by itself as proof that a purchase is valid.

Verify transactions before granting entitlements. See [Server Side Verification](server-side-verification.md) for the app-receipt and StoreKit 2 JWS approaches.


---

## Further Information

- [Apple In-App Purchase](https://developer.apple.com/in-app-purchase/)
- [StoreKit documentation](https://developer.apple.com/documentation/storekit)
- [App Review Guidelines](https://developer.apple.com/app-store/review/guidelines/)

