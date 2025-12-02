---
slug: 2025-11
title: November 2025
description: Extension Updates
image: images/adobeair.png
authors: [ marchbold ]
tags: [newsletter, agerange, webp ]
---

> November Release Roundup

Welcome to this month’s extension update! We’ve been busy refining existing tools and expanding support across platforms to keep your AIR development workflow modern, reliable, and aligned with evolving platform requirements. This release brings important improvements to the WebP extension - now fully supported on macOS and Windows - as well as the first beta of our new AgeRange extension, designed to simplify age-verification flows on iOS and Android. There’s also ongoing progress on the new Display extension, and we’d love your help testing it.

<!-- truncate -->

Here's a quick overview of our latest extension updates:

:::note Extension Updates
- [WebP v4.2.2](https://github.com/distriqt/ANE-WebP/releases/tag/v4.2.2) - WebP library update + macOS and Windows support
- [AgeRange v0.0.1](https://github.com/airnativeextensions/ANE-AgeRange/releases/tag/v0.0.1) - Beta release for new age related SDKs
:::

If you have any questions or want to get involved in testing, we’re here to help!


--- 

![](images/webp.png)

### [WebP](https://airnativeextensions.com/extension/com.distriqt.WebP)

This update introduces full WebP image support on both macOS and Windows, bringing these platforms in line with our existing capabilities. We’ve also integrated the latest Android and iOS SDKs, delivering improved stability and addressing several long-standing issues. Together, these enhancements ensure a more reliable, modern, and consistent experience across all platforms. 


#### Updates 

- feat(android): update webp jni lib to v1.6.0 and jni alignment support for 16kb [resolves #7](https://github.com/distriqt/ANE-WebP/issues/7)
- feat(ios): update ios webp lib to v1.6.0
- feat(macos): add support for macos [#3](https://github.com/distriqt/ANE-WebP/issues/3)
- feat(windows): add support for windows [resolves #3](https://github.com/distriqt/ANE-WebP/issues/3)


---

![](images/agerange.png)

### [AgeRange](https://docs.airnativeextensions.com/docs/agerange/)

:::info
This is a new extension that is available for free thanks to my [sponsors](https://github.com/sponsors/marchbold). I am looking for anyone interested in testing the extension and welcoming any feedback. Please note that the extension and the underlying SDKs are all still flagged as beta.
:::

Age-gating in applications has always required a careful balance between safety, privacy, and platform compliance. This extension introduces unified support for modern age-verification flows on both iOS and Android, giving developers a consistent and privacy-respecting way to deliver age-appropriate content without handling sensitive personal data.

On iOS 26, Apple’s new DeclaredAgeRange API enables apps to request an age range (for example 13+, 16+, or 18+) without ever asking for or storing a user’s birthdate. This allows developers to responsibly tailor features and content while aligning with Apple’s updated privacy and child-safety requirements.

On Android, the extension integrates Google Play’s new Play Age Signals API. This API allows apps to retrieve age-related signals, notify Google Play when major app changes require renewed parental approval, and receive alerts if prior approvals are revoked. These capabilities help developers meet compliance obligations in jurisdictions with age-verification laws—such as Texas, Utah, and Louisiana—while keeping full responsibility for ensuring adherence to all applicable regulations and Google Play policies.

Together, these platform-specific integrations allow developers to implement age-appropriate experiences across both ecosystems using one consistent extension, all while maintaining strong privacy protections and avoiding unnecessary collection of sensitive user data.

Available now [here](https://github.com/airnativeextensions/ANE-AgeRange)  or via apm:

```bash
apm install com.distriqt.AgeRange
```


--- 

### Display

The Display extension is a new extension I'm working on to address the aging display modes and keyboard integration in the [Application extension](https://github.com/airsdk/Adobe-Runtime-Support/discussions/3947). 

This new extension aims to use the more modern approach around managing display modes and monitoring the keyboard. Currently I have it working on the majority of cases but as with anything associated with Android there are a lot of edge cases that need to be addressed and handled in the code. I'm currently working through as many of these as I find.

:::info
If you are interested in helping me test this new extension, please reach out! I'd appreciate your involvement and help in identifying edge cases. 
:::


---

![](images/adobeair.png)

## Thanks for your support

As always, thank you for your continued support of distriqt and the AIR developer community.
Your feedback and contributions help us keep these extensions up to date and running smoothly across platforms.

- For full documentation and setup guides, visit [docs.airnativeextensions.com](https://docs.airnativeextensions.com)
- Join the AIR community discussions and get support at [github](https://github.com/airsdk/Adobe-Runtime-Support/) 
- Publicly available extensions at [airnativeextensions](https://github.com/airnativeextensions)
- [Support](https://github.com/sponsors/marchbold) my ongoing involvement in the community 

Stay tuned for more updates next month!