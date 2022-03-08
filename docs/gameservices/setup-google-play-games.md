---
title: Setup Google Play Games
sidebar_label: Setup Google Play Games
---


You must setup your application for Play Services, the following guide will help you through that.

- http://developer.android.com/google/play-services/games.html
- https://developers.google.com/games/services/console/enabling


## Getting the SHA1 signature:

The following command retrieves the SHA1 signature for the debug certificate used in Flash Builder. This will allow you to test your application from debug builds.


```
keytool -exportcert -keystore /Applications/Adobe\ Flash\ Builder\ 4.7/eclipse/plugins/com.adobe.flexide.multiplatform.android_4.7.0.349722/resources/debug-certificate-android.p12 -storepass debug  -list -v -storetype PKCS12
```


## Add your game in the Google Play Developer Console

Create an entry for your game in the Google Play Developer Console. This enables Game services for your application, and creates an OAuth 2.0 client ID, if you don't have one yet. You must perform this step even if you have created a client ID for your game in the Google Developers Console.

- Record the following credential information for later.
  - Your game's application ID  - you will need to enter this into the apm project config or your manually managed manifest additions
  - Your game's OAuth 2.0 client ID
- (Optional) Add achievements and leaderboards to your game by following the steps described in Configuring Achievements and Leaderboards.
- Add test accounts for other members of your team to test your game by following the steps described in Publishing Your Game Changes.



