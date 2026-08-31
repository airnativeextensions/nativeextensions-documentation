---
slug: 2026-09
title: September 2026
description: September 2026 Extension Updates
image: images/price-reduction.png
authors: [ marchbold ]
tags: [newsletter, googleplayservices, admob, pricing]
---

# September 2026

> Making AIR development more accessible than ever with a massive price reduction across our packages, alongside key updates to the Google Play Services ecosystem.

### Key Focus

- **Major Price Reduction:** Significant price cuts across our subscription packages, making the entire suite of distriqt extensions highly affordable.
- **Google Play Services Update:** Essential SDK updates, including AdMob v25.4.0 integration.
- **SwiftUI Integration Fixes:** Resolved underlying linkage conflicts for iOS targets utilising Firebase Core.

<!-- truncate -->


## News & Announcements

### [Major Price Reduction](https://docs.airnativeextensions.com/news/2026/08/25/price-reduction)

![](images/price-reduction.png)

We are incredibly excited to announce a major pricing restructuring designed to make our tools more accessible and support the ongoing growth of the AIR developer community. We have lowered package rates across the board: the all-inclusive Master Collection is now available for just USD $200 (a reduction of USD $200), and both the Game Development Tools and Monetisation packages have been reduced to USD $150. This update represents our investment in the long-term health, vitality, and innovation of the ecosystem.

**Actionable steps:**
- **Existing Subscribers:** If you are already subscribed via our new payment provider, the reduced price will apply automatically at your next renewal. Individual extension subscribers can upgrade to a package at any time and receive a prorated credit.
- **Migrate Payment Providers:** If you have not yet moved to our new payment provider, please follow the migration steps on your subscription management page to ensure you receive these discounted rates.

[Read more...](https://docs.airnativeextensions.com/news/2026/08/25/price-reduction)

## Important Notices

:::info
The new discounted pricing is only applicable to subscriptions managed through our new payment provider. If you are still on our legacy system, please migrate as soon as possible via your account dashboard.
:::

## Extension Updates

:::note
During August, our primary technical focus was upgrading key Google Play Services dependencies and ensuring consistent linkage across iOS framework targets.
:::

### Google Play Services `v32.2.0`

![](images/googleplayservices.png)

Updates to Google Play Services to keep your Android and iOS applications aligned with the latest SDK requirements, including crucial updates to mobile ads.

- **Releases:** [v32.2.0](https://github.com/airnativeextensions/ANE-GooglePlayServices/releases/tag/v32.2.0) | [v32.1.5](https://github.com/airnativeextensions/ANE-GooglePlayServices/releases/tag/v32.1.5)
- **Documentation:** [Google Play Services ANE](https://docs.airnativeextensions.com)

#### Key Changes:
- Updated AdMob SDK to `v25.4.0` in the Android Ads extension (`com.distriqt.playservices.Ads`).
- Fixed a linkage issue in Firebase Core (`fir-core`) to make SwiftUI compilation behaviour consistent with other native extensions on iOS.
- Synchronised transitive dependencies across Firebase and Play Services libraries.

---

![](images/adobeair.png)

## Further Information

As always, thank you for your continued support of distriqt and the AIR developer community. Your feedback and contributions help us keep these extensions up to date and running smoothly across platforms.

- For full documentation and setup guides, visit [docs.airnativeextensions.com](https://docs.airnativeextensions.com)
- Join the AIR community discussions and get support at [github](https://github.com/airsdk/Adobe-Runtime-Support/)
- Publicly available extensions at [airnativeextensions](https://github.com/airnativeextensions)
- [Support](https://github.com/sponsors/marchbold) my ongoing involvement in the community

Stay tuned for more updates next month!