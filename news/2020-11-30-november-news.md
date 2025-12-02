---
slug: 2020-11
title: November 2020
authors: [ marchbold ]
tags: [ newsletter, facebook, nativewebview, flash-eol, adverts ]
---

> Facebook, NativeWebView, Flash EOL, and advertising updates.

The end of the year is almost upon us, but the work never stops!

This month has seen a major release for the Facebook extension, a complete rewrite which has been in development for 6 months. Additionally our Adverts and IronSource ANEs have had some functionality updates that may interest some developers.

<!--truncate-->

![](images/facebook.png)

### [Facebook](https://airnativeextensions.com/extension/com.distriqt.FacebookAPI)

The [Facebook extension](https://airnativeextensions.com/extension/com.distriqt.FacebookAPI) has had a complete rewrite and API redesign over the past few months. The extension was becoming cumbersome to update, mainly due to the continuous changes that Facebook makes to their SDK. These often breaking updates meant that the ANE had a lot of legacy references and deprecated features still included.

With a complete rewrite the extension is now broken into the Facebook SDK components and much simpler to integrate the essential components such as analytics and login. Additionally you only need to include the functionality you require which will reduce the additional size of your application due to the Facebook SDK.

Check out the [updated documentation here](https://docs.airnativeextensions.com/docs/facebookapi/).

Migrating user’s have a look at the [migration documentation here](https://docs.airnativeextensions.com/docs/facebookapi/migrating-to-version-8).



![](images/flash.png)

### [Flash EOL](https://medium.com/airnativeextensions/managing-flash-end-of-life-e7d08b82504c)


You may be worried about the Flash End of Life which will be occurring next year. We wrote a bit of a break down of what’s going to happen earlier this month [here](https://medium.com/airnativeextensions/managing-flash-end-of-life-e7d08b82504c). If you need any help managing or converting existing web applications please feel free to get in [touch with us](mailto:airnativeextensions@distriqt.com). We have helped many clients this year prepare for the removal of the player from browsers.



![](images/nativewebview.png)

### [Native Web View](https://airnativeextensions.com/extension/com.distriqt.NativeWebView)


A range of fixes and small features have been added to the extension this month, most notably better handling of target="_blank" links which you can now control how the webview handles these types of links. They can be opened directly in the system browser, opened in the same webview or blocked so your application can handle them directly.

We have added in some view controls allowing you to scroll/page through the loaded page through code. Additionally we have given you more control over the Windows implementation allowing direct passing of options to the Cef browser.

Check out the Native Web View extension [here](https://airnativeextensions.com/extension/com.distriqt.NativeWebView).


![](images/admob.png)

### [Adverts](https://airnativeextensions.com/extension/com.distriqt.Adverts)

The Adverts ANE has been updated with support for [AdMob Open Bidding](https://support.google.com/admob/answer/9234488?hl=en#:~:text=AdMob%20initiates%20an%20Open%20Bidding,according%20to%20the%20eCPM%20value.). This feature changes the initialisation process slightly to allow feedback on the available mediation providers supported by your integration and through open bidding.

```actionscript
Adverts.service.addEventListener( AdvertsEvent.INITIALISED, initialisedHandler );

Adverts.service.initialise();

function initialisedHandler( event:AdvertsEvent ):void 
{
    for each (var adapterStatus:AdapterStatus in e.adapterStatus)
    {
        trace( "adapter: " + adapterStatus.name + " : " + adapterStatus.state + " [" + adapterStatus.latency + "] - " + adapterStatus.description );
    }
}
// com.distriqt.Adverts
```

Additionally this month we have updated the available AdMob mediators to the latest supported SDKs.

Check out the extension [here](https://airnativeextensions.com/extension/com.distriqt.Adverts).



![](images/ironsource.png)

### [ironSource](https://airnativeextensions.com/extension/com.distriqt.IronSource)

We have finally added some of the core functionality from the ironSource SDK that you have been asking for. This includes Banner Ads and the Offerwall. Both features are now available through our ANE along with the latest version of the ironSource SDK!

The ironSource ANE is free and available to all AIR developers!

[Get it here](https://airnativeextensions.com/extension/com.distriqt.IronSource)


---

Stay safe!


