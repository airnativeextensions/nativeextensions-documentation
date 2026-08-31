---
slug: 2026-09
title: September 2026
description: September 2026 Extension Updates
image: images/adobeair.png
authors: [ marchbold ]
tags: [newsletter, googleplayservices, admob, firebase, ios]
---

# September 2026

> This month, our primary focus was on updating the Google Play Services ecosystem, featuring an upgrade to the AdMob SDK and critical linkage refinements for Firebase Core on iOS.

## Key Focus

- **AdMob SDK Upgrade**: Updated the Google Mobile Ads SDK to the latest version to ensure compliance and support new ad delivery standards.
- **iOS SwiftUI Linkage**: Resolved critical linkage inconsistencies on iOS for Firebase Core, streamlining compatibility across modern extensions.

## Extension Updates

:::note
The following extensions were updated during August 2026: Google Play Services `v32.2.0` and `v32.1.5`.
:::

### Google Play Services `v32.2.0`

![](images/googleplayservices.png)

[GitHub Release](https://github.com/airnativeextensions/ANE-GooglePlayServices/releases/tag/v32.2.0) | [Documentation](https://docs.airnativeextensions.com/docs/google-play-services/)

This release updates the underlying Google Mobile Ads (AdMob) SDK inside the Google Play Services suite.

- Upgraded the `com.distriqt.playservices.Ads` library to `v25.4.0` on Android.
- Verified and updated dependencies across the entire Google Play Services stack to maintain stability and compliance.

---

### Google Play Services `v32.1.5`

![](images/googleplayservices.png)

[GitHub Release](https://github.com/airnativeextensions/ANE-GooglePlayServices/releases/tag/v32.1.5) | [Documentation](https://docs.airnativeextensions.com/docs/google-play-services/)

This maintenance release addresses crucial iOS linkage issues within the Firebase Core component of the library.

- Resolved an issue with `fir-core` to make SwiftUI linkage consistent with other modern iOS extensions (addressing community issue #638).
- Streamlined iOS builds using modern Swift and SwiftUI components alongside existing native extension configurations.

---

![](images/adobeair.png)

## Further Information

As always, thank you for your continued support of distriqt and the AIR developer community. Your feedback and contributions help us keep these extensions up to date and running smoothly across platforms.

- For full documentation and setup guides, visit [docs.airnativeextensions.com](https://docs.airnativeextensions.com)
- Join the AIR community discussions and get support at [github](https://github.com/airsdk/Adobe-Runtime-Support/)
- Publicly available extensions at [airnativeextensions](https://github.com/airnativeextensions)
- [Support](https://github.com/sponsors/marchbold) my ongoing involvement in the community

Stay tuned for more updates next month!