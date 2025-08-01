---
slug: 2025-07
title: July 2025
description: Extension Updates
image: images/adobeair.png
authors: [ marchbold ]
tags: [newsletter, inappbilling, adverts, googleidentity ]
---

> Play Billing v7 (Android 35), Adverts

We've had a big month of updates! From crucial billing upgrades to smoother sign-ins and better mediation support, this round of releases helps you stay compliant, improve user experience, and keep things running smoothly. 

We'd also like to take a moment to thank everyone who has migrated to our new payment provider and started using the new website. We hope the transition has been smooth and that you're finding the new site easier to use. If you run into any issues or have any questions, don't hesitate to reach out - we're always happy to help!

<!-- truncate -->

Here's everything you need to know.

:::note Extension Updates
- [InAppBilling](#inappbilling) v17.1.0 - Major Overhaul for Google Play + Samsung IAP
- [Adverts](#adverts)  v16.2.0 - AdMob SDK Update + Audio Fix
- [GoogleIdentity](#googleidentity)  v7.1.1 - Smarter, Seamless Sign-In
:::


Got questions? We're here to help! [Let's build better, faster, and smarter together.](#custom-development-work) 💡

---

![](images/inappbilling.png)

### [InAppBilling](https://airnativeextensions.com/extension/com.distriqt.InAppBilling)

> InAppBilling v17.1.0 - Major Overhaul for Google Play + Samsung IAP  

[Release notes »](https://github.com/distriqt/ANE-InAppBilling/releases/tag/v17.1.0)

This is a **critical update**, especially for Android developers. It brings support for **Google Play Billing v7** - and since **Google is enforcing API 35 starting August 2025**, this update is **required** for ongoing app submissions and updates.

#### What's Changed:
- **New Google Play Billing SDK v7.1.1**: Fully compliant with Android API 35 requirements.
- **Refactored events system**: Dedicated product and purchase events replace the older, all-purpose `InAppBillingEvent`, making event handling cleaner and more reliable.
- **Samsung IAP upgraded to SDK v6.4.0**: Purchases now require acknowledgment via `finishPurchase()`.
- **EU compliance support**: Added `isOfferPersonalised` flag to comply with GDPR.
- **Subscription improvements**:
  - Installment plans (`SubscriptionInstallmentPlan`)
  - Pending update info during plan changes
  - iOS fallback URLs for subscription management
- **Unity builds fully supported** for these new features

[Migration guide available here »](https://docs.airnativeextensions.com/docs/inappbilling/migration-v17.0)  

SDK Versions:
- 📦 **Play Billing SDK:** 7.1.1
- 📦 **Samsung IAP SDK:** 6.4.0

---

![](images/admob.png)

### [Adverts](https://airnativeextensions.com/extension/com.distriqt.Adverts)

> Adverts v16.2.0 - AdMob SDK Update + Audio Fix  

[Release notes »](https://github.com/distriqt/ANE-Adverts/releases/tag/v16.2.0)

This update includes an important **audio fix on iOS**, along with improved AIR package configuration.

#### Key Improvements:
- Updated to **AdMob iOS SDK v12.6.0**, resolving a bug where app audio could cut out after ad playback.
- AIR package updates with improved **Gradle settings** and **platform configuration**, making builds more streamlined.

SDK Versions:
- 📦 **Android SDK:** 24.2.0  
- 📦 **iOS SDK:** 12.6.0


#### Adverts Mediation v8.1.1 - Platform Config Included

[Release notes »](https://github.com/distriqt/ANE-Adverts-Mediation/releases/tag/v8.1.1)

This release adds platform configuration data to the AIR packages, improving integration workflows and visibility.

Updated Mediation SDKs:
- AdColony: Android 4.8.0.2 / iOS 4.9.0
- AppLovin: 13.2.0 (Android & iOS)
- Facebook Audience: Android 6.19.0 / iOS 6.17.1
- IronSource: Android & iOS 8.8.0
- Mintegral: Android 16.9.61 / iOS 7.7.7
- Pangle: Android 6.5.0.8 / iOS 6.5.0.9
- TapJoy: Android & iOS 13.2.1
- UnityAds: Android & iOS 4.14.2
- Vungle: Android 7.4.3 / iOS 7.4.5
- DigitalTurbine: Android & iOS 8.3.7


---

![](images/google.png)

### [GoogleIdentity](https://airnativeextensions.com/extension/com.distriqt.GoogleIdentity)

> GoogleIdentity v7.1.1 - Smarter, Seamless Sign-In  

[Release notes »](https://github.com/distriqt/ANE-GoogleIdentity/releases/tag/v7.1.1)

Now, if a user has previously signed in, the extension will **automatically attempt a silent sign-in during setup** - helping you better manage session state from the get-go.

#### What's New:
- `setup()` now triggers a **silent sign-in** if possible
- Ensures the `isSignedIn` flag is **correct immediately**
- Optional UI may appear on Android during the sign-in attempt
- You can **disable this behavior** with: `options.attemptSilentSignIn = false;`
- Cleaned up iOS setup logic for reliability
- Updated AndroidX Credentials SDK to v1.5.0

SDK Versions:
- 📦 **Android SDK**: 1.1.1
- 📦 **iOS SDK**: 8.0.0

  
---

![](images/custom-development.png)

## Custom Development Work

We've been lucky to work with some amazing clients this year - helping them push their apps further with AIR, native, Flutter, Unity, and Haxe.

If you've got a tricky integration, a performance challenge, or just need expert help, we're here for it. We specialize in high-performance native extensions and making complex systems work together seamlessly.

📩 Got a project in mind? Reach out at [airnativeextensions@distriqt.com](mailto:airnativeextensions@distriqt.com).

Let's build something great together!