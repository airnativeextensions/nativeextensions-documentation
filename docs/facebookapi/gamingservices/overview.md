---
title: Gaming Services
sidebar_label: Overview
---

Facebook Gaming Services allow game developers to utilize Facebook’s large social audience via the Facebook Login for Gaming, which enables engagement and promotes social features, such as Player Finder, Sharing for Gaming, and Gaming Activity, connecting games to Facebook’s ecosystem. By building game communities, organic player acquisition, engagement and retention increases.

Your application needs to enroll in Gaming Services to access features in this section. Follow the instructions to [enroll your application](https://developers.facebook.com/docs/games/gaming-services/enroll).

For more information see the [Facebook Gaming Services documentation](https://developers.facebook.com/docs/games/gaming-services/)


## Functionality

Currently this supports:

- [Game Request Dialog](game-request-dialog)
- [Friend Finder Dialog](friend-finder-dialog)



## Login

You will login using the Login extension as normal however you need to specify the `gaming_profile` eg:

```actionscript
FacebookLogin.instance.logInWithReadPermissions( [ "gaming_profile", "email" ] );
```



