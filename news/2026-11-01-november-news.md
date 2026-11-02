---
slug: 2026-11
title: November 2026
description: November 2026 Extension Updates
image: images/adobeair.png
authors: [ marchbold ]
tags: [newsletter, adverts, core, nativewebview, mediation]
---

> Centralised native logging infrastructure, AdMob ad preloading, and enhanced webview process recovery.

Welcome to the November 2026 distriqt extension update. This month brings significant foundational improvements to the core extension architecture, including a unified cross-platform native logging pipeline across Android, iOS, macOS, and Windows. Additionally, the Adverts extension introduces ad preloading for interstitials, rewarded video, and app open ads, alongside key resilience upgrades in NativeWebView.

Key focus:
- Unified cross-platform native logging pipeline and shared Windows dynamic library infrastructure in Core
- Beta ad preloading functionality for AdMob interstitials, rewarded videos, and app open ads
- Automatic render process recovery and state restoration in NativeWebView on Android
- Updated SDK dependencies and mediation adapters for AdMob v25.4.0 (Android) and v13.6.0 (iOS)

:::note Extension Updates
- [Adverts v17.1.2](https://github.com/airnativeextensions/ANE-Adverts/releases/tag/v17.1.2) - Updated SDK dependencies, added AdMob preloader functionality, and age restriction settings
- [Adverts Mediation v11.1.0](https://github.com/airnativeextensions/ANE-Adverts-Mediation/releases/tag/v11.1.0) - Updated mediation network adapters for compatibility with Adverts v17.1.0
- [Core v7.8.0](https://github.com/airnativeextensions/ANE-Core/releases/tag/v7.8.0) - Centralised cross-platform native logging pipeline and shared Windows DLL architecture
- [NativeWebView v9.1.0](https://github.com/airnativeextensions/ANE-NativeWebView/releases/tag/v9.1.0) - Android webview render process recovery, embedded ProGuard rules, and shared core DLL integration
:::

<!-- truncate -->

## Extension Updates

---
### Adverts
![](images/admob.png)

[GitHub Release v17.1.2](https://github.com/airnativeextensions/ANE-Adverts/releases/tag/v17.1.2) | [Documentation](https://docs.airnativeextensions.com/docs/adverts/)

The Adverts extension received a major update introducing beta support for AdMob ad preloading across Android and iOS, alongside the latest Google Mobile Ads SDK updates.

#### Updates
- Updated AdMob SDK to v25.4.0 (Android) and v13.6.0 (iOS), and UMP SDK to v4.0.0 (Android) and v3.1.0 (iOS)
- Added beta preloader functionality for interstitial, rewarded video, and app open ad types to prepare inventory in advance
- Added request configuration setting for age-restricted treatment on iOS
- Updated package dependency specifications for airpackage builds

```actionscript
// Example: Preloading ads using the Adverts Preloader
Adverts.service.preloader.addEventListener( PreloaderEvent.AD_LOADED, onAdPreloaded );
Adverts.service.preloader.preloadAd( AdType.INTERSTITIAL, "YOUR_AD_UNIT_ID" );

function onAdPreloaded( event:PreloaderEvent ):void
{
    trace( "Preloaded ad available for type: " + event.adType );
}
```

---
### Adverts Mediation

[GitHub Release v11.1.0](https://github.com/airnativeextensions/ANE-Adverts-Mediation/releases/tag/v11.1.0) | [Documentation](https://docs.airnativeextensions.com/docs/adverts/mediation)

Updated mediation network adapters to ensure full compatibility with the Adverts v17.1.0 release series.

#### Updates
- Updated AppLovin SDK to v13.6.3 (Android) and v13.6.3 (iOS)
- Updated IronSource SDK to v9.5.0 (Android) and v9.5.0 (iOS)
- Updated UnityAds SDK to v4.19.0 (Android) and v4.19.0 (iOS)
- Updated Mintegral, Pangle, Vungle, DigitalTurbine, and Facebook Audience Network adapters

---
### Core

[GitHub Release v7.8.0](https://github.com/airnativeextensions/ANE-Core/releases/tag/v7.8.0) | [Documentation](https://docs.airnativeextensions.com/docs/core/)

Core received major architectural updates, establishing a single ActionScript handler for cross-platform native log aggregation and implementing shared Windows dynamic library infrastructure.

#### Updates
- Implemented a unified ActionScript event handler for aggregated native extension logging across Android, iOS, macOS, and Windows
- Created common core native extension DLL libraries and utility layer for Windows desktop builds
- Added return path for native logs back into AIR, including output support for Windows dbgviewer
- Hardened iOS swizzling helper implementations and FRE utility functions
- Embedded consumer ProGuard rules directly into the Android ANE JAR package

---
### NativeWebView
![](images/nativewebview.png)

[GitHub Release v9.1.0](https://github.com/airnativeextensions/ANE-NativeWebView/releases/tag/v9.1.0) | [Documentation](https://docs.airnativeextensions.com/docs/nativewebview/)

NativeWebView has been upgraded to gracefully handle Android WebView renderer crashes and now leverages the new shared Core dynamic libraries on Windows.

#### Updates
- Added automatic recovery when the Android webview render process is terminated, enabling clean disposal and recreation
- Embedded ProGuard rules for release builds on Android
- Migrated Windows implementation to the new shared Core DLL infrastructure with improved logging
- Shifted iOS and macOS implementations to the centralised context and native logging pipeline

---

![](images/adobeair.png)

## Further Information

As always, thank you for your continued support of distriqt and the AIR developer community. Your feedback and contributions help us keep these extensions up to date and running smoothly across platforms.

- For full documentation and setup guides, visit [docs.airnativeextensions.com](https://docs.airnativeextensions.com)
- Join the AIR community discussions and get support at [github](https://github.com/airsdk/Adobe-Runtime-Support/)
- Publicly available extensions at [airnativeextensions](https://github.com/airnativeextensions)
- [Support](https://github.com/sponsors/marchbold) my ongoing involvement in the community

Stay tuned for more updates next month!