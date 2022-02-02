---
title: Android Setup
sidebar_label: Android
---


There are two methods available on Android to share settings between applications.

- Provider Method - uses a content provider and broadcast receiver to share variables
- File Method - uses an encrypted file to share variables.  **Deprecated**



### Provider Method

This method requires that you define a string value for an `APPGROUP` or `groupIdentifier`. Similar to iOS it should be a unique string that you share between your applications, eg `group.com.distriqt.test`. The group identifier can be anything you require, generally for simplicity we suggest leaving it as the same identifier as for the iOS group. This value should be the same for every application you use inside this group.

The `applicationAuthority` uniquely identifies this application content provider, while being in a specific pattern that the plugin uses to identify other providers that it can potentially synchronise with. To this end we suggest using `group.COMMON.UNIQUE.provider` as this value, replacing `COMMON` with some common value used across all your applications and `UNIQUE` with something unique for this application, for example:

- `group.com.distriqt.authority.unity1.provider`
- `group.com.distriqt.authority.unity2.provider`
- `group.com.distriqt.authority.unity3.provider`


You then place this information in your configuration for you platform or directly in the manifest depending on how you have setup your application. 








