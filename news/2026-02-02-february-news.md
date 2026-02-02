---
slug: 2026-02
title: February 2026
description: Extension Updates
image: images/adobeair.png
authors: [ marchbold ]
tags: [newsletter, image, nativewebview, agerange, display ]
---

> January Release Update

Welcome to your latest AIR Native Extensions update! We've had a busy start to 2026, featuring a brand-new system information extension, a highly requested debugging feature for WebView's on Android and better support for handling Age restrictions in the Amazon App Store ecosystem.


<!-- truncate -->

Here's a quick overview of the latest extension updates:

:::note Extension Updates
- [SystemInfo v0.1.0](https://github.com/airnativeextensions/ANE-SystemInfo/releases/tag/v0.1.0) - SystemInfo extension release for Android, iOS, macOS, Windows
- [NativeWebView v8.0.4](https://github.com/distriqt/ANE-NativeWebView/releases/tag/v8.0.4) - Added Android Debugging Support
- [AgeRange v0.1.0](https://github.com/airnativeextensions/ANE-AgeRange/releases/tag/v0.1.0) - Amazon SDK Integration
:::

If you have any questions or want to get involved in testing, we're here to help!


--- 

![](images/systeminfo.png)

### [SystemInfo](https://airnativeextensions.com/extension/com.distriqt.SystemInfo)

[v0.1.0](https://github.com/airnativeextensions/ANE-SystemInfo/releases/tag/v0.1.0)

We are excited to announce the initial release of the SystemInfo extension.

To keep our core extensions lean, we've migrated system-related functionality out of the Application extension and into this dedicated tool. Not only does this clean up your project dependencies, but we've also expanded support to macOS and Windows, making it a truly cross-platform solution.

#### Key Features 
- Unique Device IDs: Reliable identification across all supported platforms.
- Deep Hardware Insights: Access OS details, hardware specs, and locale info.
- State Monitoring: Track device orientation, idle status, and power modes.
- UI-Independent Events: Capture orientation changes even when the UI is locked.


:::note Migrating from the Application extension?

See the migration guide [here](/docs/systeminfo/migrating-from-application)

:::tip License
If you currently have a license for the Application extension, please contact us for access to this new extension.
:::

:::

License available [here](https://airnativeextensions.com/extension/com.distriqt.SystemInfo) and install via apm:

```bash
apm install com.distriqt.SystemInfo
```


--- 

![](images/nativewebview.png)

### [NativeWebView](https://airnativeextensions.com/extension/com.distriqt.NativeWebView)

[v8.0.4](https://github.com/distriqt/ANE-NativeWebView/releases/tag/v8.0.4)

For those working heavily with web content, the latest update to NativeWebView adds a crucial quality-of-life improvement for Android developers.

#### Updates
- Android Debug Mode: You can now enable WebView debug mode directly through the ANE. This resolves a long-standing request, allowing you to use Chrome DevTools to inspect and debug your web content within the app more effectively.


---

![](images/agerange.png)

### [AgeRange](https://docs.airnativeextensions.com/docs/agerange/)

[v0.1.0](https://github.com/airnativeextensions/ANE-AgeRange/releases/tag/v0.1.0)

:::info
This is a new extension that is available for free thanks to my [sponsors](https://github.com/sponsors/marchbold). I am looking for anyone interested in testing the extension and welcoming any feedback. Please note that the extension and the underlying SDKs are all still flagged as beta.
:::

We've introduced the AgeRange extension to help you stay compliant with store requirements.

Available now [here](https://github.com/airnativeextensions/ANE-AgeRange)  or via apm:

```bash
apm install com.distriqt.AgeRange
```

#### Updates 
- Amazon SDK Support: This release includes the implementation for the Amazon App Store User Age Verification SDK.
- Dynamic Initialization: Use the new `initialise` and `isServiceSupported` functions to specify which service to use, giving you more control over the verification flow.



---

![](images/adobeair.png)

## Further Information

As always, thank you for your continued support of distriqt and the AIR developer community.
Your feedback and contributions help us keep these extensions up to date and running smoothly across platforms.

- For full documentation and setup guides, visit [docs.airnativeextensions.com](https://docs.airnativeextensions.com)
- Join the AIR community discussions and get support at [github](https://github.com/airsdk/Adobe-Runtime-Support/) 
- Publicly available extensions at [airnativeextensions](https://github.com/airnativeextensions)
- [Support](https://github.com/sponsors/marchbold) my ongoing involvement in the community 

Stay tuned for more updates next month!