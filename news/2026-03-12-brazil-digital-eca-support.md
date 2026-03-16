---
title: Brazil Digital ECA Support
description: AgeRange ANE v0.0.3 – Brazil Digital ECA Support
image: images/agerange.png
authors: [ marchbold ]
tags: [newsletter, image, nativewebview, agerange, display ]
---

> Update: AgeRange ANE v0.0.3 – Brazil Digital ECA Support

![](images/agerange.png)

We have released a critical update for the **AgeRange Adobe AIR Native Extension** to support **v0.0.3** of the Google Play Age Signals API.

This update is essential for developers with apps available in **Brazil**, ensuring your projects are ready for the **Digital Child and Adolescent Statute (Digital ECA)** before the **March 17, 2026** deadline.

<!--truncate-->

:::info What's happening
Brazil has passed a law, the [Digital Child and Adolescent Statute (Digital ECA)](https://c.gle/AEJ26qsqEtQ_vzcVWYjaNpFvnx5m9-bNkzSx4ZmRCyXZLi8ATvucJiHEhL8E7JQo0lONUoKPGIXSKvdK-wqDuYWmJu3N7AiAbI0XkY7KBGJxP9O6ugQqajPumjCNOYH5EkOoBIsqrxfQ2FsUE7vgzbon8qdTskETVduy4B1uCQQdiqyh85VV1nk3TnZcisOKo9yc6BUo2QRA46P2cfdqZARy7D37ZSKdCVhTkpHn02sHuHOu0XIwBOS6LSCS2S0), outlining new obligations for app developers. Key provisions include:

- Requiring developers of apps aimed at children and adolescents or likely to be accessed by them to ingest age range data from app stores; and

- Prohibiting loot boxes in electronic games aimed at children and adolescents or likely to be accessed by them.

It is scheduled to take effect on March 17, 2026. We recommend that you take action to determine whether and how the Digital ECA applies to your app and implement any necessary changes to ensure compliance.
:::

### What’s New?

Google has updated the Age Signals API and will roll out age range information via this API for users in Brazil, beginning with supervised users and scaling to all users over the coming months. This release updates the underlying implementation to support Google's latest version. 

This release introduces more granular user data and vital error-handling mechanisms to help you navigate global age verification laws:

* **`SELF_DECLARED` Status:** The API can now distinguish between users who are **VERIFIED** (official ID/Credit Card), **SUPERVISED** (Family Link), or **SELF_DECLARED** (manually entered). This allows you to tailor your app's restrictions or content based on the level of verification certainty.
* **`SDK_VERSION_OUTDATED` Error Code:** A key addition to the API. When this error occurs, age signals will not be returned.
  * **Pro Tip:** We recommend implementing a **"graceful degradation"** plan. If your app receives this error, consider falling back to an in-app age gate or a third-party verification service to maintain compliance.



### Change Log

* **feat(android):** Update Play Signals API to v0.0.3 (Resolves [#3](https://github.com/airnativeextensions/ANE-AgeRange/issues/3)).
* **Update:** Support for the new `SELF_DECLARED` status and `SDK_VERSION_OUTDATED` error code.

---

### Get the Update

You can update your project immediately via **apm** or by visiting the repository.

**Via APM:**
To update your existing installation:

```bash
apm update
```

To install the extension for the first time:

```bash
apm install com.distriqt.AgeRange
```

**Via GitHub:**
Access the repository directly:
[https://github.com/airnativeextensions/ANE-AgeRange](https://github.com/airnativeextensions/ANE-AgeRange)

---

### Documentation

Detailed implementation guides and updated API references for the new status and error codes are available on our documentation site:
[https://docs.airnativeextensions.com/docs/agerange/](https://docs.airnativeextensions.com/docs/agerange/)

**Don't wait until March 17!** Ensure your apps are compliant and ready for the new Brazilian regulations today.
