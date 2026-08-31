---
slug: 2026-09
title: September 2026
description: September 2026 Extension Updates
image: images/adobeair.png
authors: [ marchbold ]
tags: [newsletter, googleplayservices, firebase, ads, swiftui]
---

# September 2026

> Keep your AIR applications compliant and up-to-date with the latest Google Play Services SDKs, featuring updates to AdMob and critical iOS link fixes.

## Key Focus

- **AdMob SDK Upgrade**: Updated the AdMob SDK inside Google Play Services to version `25.4.0` for latest ad delivery features and platform compliance on Android.
- **iOS Linkage Stability**: Addressed iOS build integration issues by standardizing SwiftUI linkage across Firebase Core, ensuring seamless compatibility when compiling with multiple extensions.

## Important Notices

:::info iOS Build Alignment
The Firebase Core dependency inside Google Play Services has updated SwiftUI linkages to prevent compiler conflicts when bundled alongside other ANEs (such as PushNotifications).
:::

<!-- truncate -->

## Extension Updates Summary

:::note
The following extensions were updated in this release cycle:
- **Google Play Services**: `v32.2.0` and `v32.1.5`
:::

## Extension Updates

### Google Play Services `v32.2.0`

This release updates the underlying AdMob SDK dependencies to the latest major version on Android to ensure compatibility with modern ad serving requirements.

- Upgraded the [Google Play Services Ads](https://github.com/airnativeextensions/ANE-GooglePlayServices/releases/tag/v32.2.0) library component to version `25.4.0`.
- Maintained stability and alignment for all other internal Google Play Services and Firebase library mappings.

### Google Play Services `v32.1.5`

This release brings crucial linkage updates for iOS to resolve potential compilation issues when building with multiple native extensions.

- Fixed Firebase Core SwiftUI linkage to ensure compatibility across other dependent extensions, resolving [issue #638](https://github.com/airnativeextensions/ANE-PushNotifications/issues/638).
- Aligned internal iOS Framework dependencies to ensure smoother builds on modern Xcode versions.

---

![](images/adobeair.png)

## Further Information

As always, thank you for your continued support of distriqt and the AIR developer community. Your feedback and contributions help us keep these extensions up to date and running smoothly across platforms.

- For full documentation and setup guides, visit [docs.airnativeextensions.com](https://docs.airnativeextensions.com)
- Join the AIR community discussions and get support at [github](https://github.com/airsdk/Adobe-Runtime-Support/)
- Publicly available extensions at [airnativeextensions](https://github.com/airnativeextensions)
- [Support](https://github.com/sponsors/marchbold) my ongoing involvement in the community

Stay tuned for more updates next month!