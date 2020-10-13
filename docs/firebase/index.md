---
title: Firebase
hide_title: true
slug: /firebase/
---

![](images/hero.png)


# Firebase

The [Firebase platform](https://firebase.google.com) forms one of the biggest 
platforms for application development available today bringing together a range 
of Google services along with the acquired Firebase infrastructure services.

We have been working with Google to bring you the best available ANEs 
integrating Google services tightly with your AIR application.

This extension is to bring access Google's Firebase infrastructure to your AIR application.

The simple API allows you to quickly integrate Firebase in your AIR application. 
Identical code base can be used across all platforms allowing you to concentrate 
on your application and not device specifics.

We provide complete guides to get you up and running with Firebase as quickly and easily as possible.


### Features:

- [Analytics](core/introduction)
- Develop
	- [Authentication](auth/introduction)
	- [Firestore](firestore/introduction)
	- [Realtime Database](database/introduction)
	- [Storage](storage/introduction)
- Quality
	- [Crashlytics](crashlytics/introduction)
	- [Performance Monitoring](performance/introduction)
	- **Deprecated** [Crash Reporting](crash/introduction)
- Grow
	- [Notifications (Cloud Messaging)](fcm/introduction)
	- [Remote Config](remoteconfig/introduction)
	- [Dynamic Links](dynamiclinks/introduction)
	- [Invites](invites/introduction)
- Single API interface - your code works across iOS and Android with no modifications
- Sample project code and ASDocs reference


## Documentation

Latest documentation can be found in the [wiki](https://github.com/distriqt/ANE-Firebase/wiki)

Quick Example: 

```actionscript
Firebase.initialiseApp();

// Log an event to analytics
var event:EventObject = new EventObject();
event.name = EventObject.ADD_TO_CART;
event.params[Params.PRICE] = 1.99;

Firebase.service.analytics.logEvent( event );
```

More information here: 

[com.distriqt.Firebase](https://airnativeextensions.com/extension/com.distriqt.Firebase)


## License

You can purchase a license for using this extension:

[airnativeextensions.com](https://airnativeextensions.com/)

distriqt retains all copyright.


![](images/promo.png)

