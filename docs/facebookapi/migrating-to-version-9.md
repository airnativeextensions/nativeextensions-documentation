---
title: Migrating to v9
---

Version 9 of the FacebookAPI brings a major internal update to the iOS SDK.


This new version of Facebook Login supports two distinct modes: **Limited** and **Classic**. Your app will pass Facebook a flag indicating the mode you have chosen for each of your users.

1. Limited Login mode implements safeguards designed to prevent the fact that a person used Facebook to log into your iOS app from being used to target advertising or measure advertising effectiveness. The mode is based on the OpenID Connect standard and allows users to create new accounts or access existing accounts on your app while only sharing their name, profile pic, and (optionally) email address. Note that Limited Login mode utilizes a JSON Web Token, which does not support Graph API queries.

2. Classic Login mode remains unchanged from the login product you and your users already know and love. It allows users to create new accounts or access existing accounts while granting your app the ability to access (with Facebook approval and user consent) certain Facebook data intended to improve their experience in your app. Note that Classic Login mode utilizes an oAuth 2.0 Access Token which supports Graph API queries.

You can choose either mode uniformly for all of your users, or choose one of the two modes conditionally.


:::info
This currently is an iOS only feature. It will be ignored on Android and you will always get the classic implementation with an access token and full tracking enabled.
:::


## API Changes 

In order to support this new functionality there have been some additions to the API. If you plan to continue supporting classic login you should not need to change anything.

If you do plan to implement limited login, please see the guide on the new login call `logInWithConfiguration()`, `LoginConfiguration` class and the `AuthenticationToken`, in the [Facebook Login documentation](login/facebook-login#limited-login).


Note: `isLoggedIn()` will return `true` irrespective of the login tracking state.


