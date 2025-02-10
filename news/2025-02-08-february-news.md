---
slug: 2025-02
title: February 2025
description: Extension Updates
image: images/adobeair.png
authors: [ marchbold ]
tags: [newsletter, dependencies, apm, paymentprovider]
---

> A Major Upgrade for AIR Extensions! New Payment System and Custom Development Work

Over the past six months, we’ve been working closely with Harman to bring a smarter, more efficient dependency system to AIR. Our new approach replaces embedded dependencies with Gradle dependencies, making extension management easier, faster, and more resilient.

What this means for you:

- Smaller extension file sizes – Free up space & streamline your builds
- Faster compilation times – Get things done in record time
- Much simpler manual manifest additions – Spend less time on setup
- Better dependency resolution – Seamless updates and fewer conflicts
- Improved compatibility – Extensions work together more smoothly

These improvements happen behind the scenes, making everything more stable and maintainable. But you’ll definitely notice the difference with **smaller files**, **fewer manifest changes**, and **much faster builds**. 🚀

<!-- truncate -->

:::note
Important: This update is generally not compatible with our traditional approach. To take advantage of these improvements, you’ll need to update all your extensions at once.
:::

Got questions? We’re here to help! [Let’s build better, faster, and smarter together.](#custom-development-work) 💡


--- 

![](images/loading.png)

### Updating

The best and simplest approach to updating your extensions is to use `apm`. 
If you are yet to start using `apm`, we highly recommend installing this tool and integrating it into your project.

:::info AIR Package Manager
The AIR Package Manager (`apm`) is the AIR SDK package manager and allows management of AIR libraries and extensions along with a range of utilities that assist in creation of an AIR application.

To download and install the AIR SDK Manager, check the [Install APM](https://airsdk.dev/docs/basics/install-apm) guide.

You can also read a case study of [Migrating to the AIR Package Manager](https://github.com/airsdk/apm/discussions/75).
:::

#### APM

Updating to the latest extensions is simply a matter of using the `apm` tool to update:

```
apm update
apm generate app-descriptor
```

This process will update all your project's extensions to the latest releases and then update your application descriptor appropriately including modifying the manifest additions and info additions correctly.


#### Manual

Manual updating will require downloading the latest releases of all your extensions and dependencies and then a careful reconstruction of the manifest additions. 

Firstly go to the github repository for all of the extensions you are using and download the latest release.

Then when updating the manifest additions we recommend starting fresh as there have been a lot of entries to be removed. The minimum manifest additions now look something like the following:

```xml
<manifest android:installLocation="auto" >
  <uses-sdk android:minSdkVersion="21" android:targetSdkVersion="34"/>
  <uses-permission android:name="android.permission.INTERNET"/>
  <application>
    <meta-data android:name="android.max_aspect" android:value="2.5"/>
    <meta-data android:name="android.notch_support" android:value="true"/>

    <activity android:name="com.distriqt.core.auth.AuthorisationActivity" android:exported="false" android:theme="@android:style/Theme.Translucent.NoTitleBar"/>
  </application>
</manifest>
```

You will need to go through each extension you are using and add in any specific permissions, activities, receivers and services for those extensions. 

We have added migration guides for most of the extensions highlighting the changes so you can check these for help in updating, for example:

- [Adverts](https://docs.airnativeextensions.com/docs/adverts/migrating-to-version-16.0)
- [InAppBilling](https://docs.airnativeextensions.com/docs/inappbilling/migration-v16.0)
- [Firebase](https://docs.airnativeextensions.com/docs/firebase/migrating-to-v10.0)
- [PushNotifications](https://docs.airnativeextensions.com/docs/pushnotifications/migrating-to-v16.0)



--- 

![](images/airnativeextension-packages.png)

### New Payment System

Next month we are migrating to a new payment provider. Unfortunately our existing provider will no longer support certain tax durisdictions which has meant we either had to stop providing our extensions or we move to a new provider. Due to the small timeline given to us we have been scrambling to change over all our systems to support a new provider and ensure there is little disruption to your service. 

Over the coming weeks we will be sending out information on how to handle your subscription renewals to ensure you continue to have access to the extensions. 

If you notice any issues or have any concerns, please reach out to us [airnativeextensions@distriqt.com](mailto:airnativeextensions@distriqt.com)


---

![](images/custom-development.png)

### Custom Development Work

**Exciting News – We’re Expanding Our Development Capacity!**

This year, we’re opening up our schedule to take on more development work! If you need expert help with AIR, native, Flutter, Unity, or Haxe, now is the perfect time to collaborate with us.

We thrive on challenging, complex integrations and specialize in making different systems work together seamlessly. With years of experience building high-performance native extensions across multiple platforms, we’re ready to bring your projects to life!

Got an idea or a project in mind? Let’s make it happen! Reach out to us at [airnativeextensions@distriqt.com](mailto:airnativeextensions@distriqt.com). 

Let’s build something amazing together! 🚀🔥
