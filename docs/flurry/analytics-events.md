---
title: Analytics Events
sidebar_label: Analytics Events
---

Logging events is as simple as calling the logEvent function with an event name and an object 
representing any properties you'd like to attach to this event. In the example below we log a 
screen click and use the coordinates of the click as properties. The properties must be simple 
data types that can be converted into strings.

```actionscript
Flurry.service.analytics.logEvent( "click", { x: event.stageX, y: event.stageY } );
```



## Example

Simple example of initialisation and logging a startup event.

```actionscript
try
{
	trace( "Flurry Supported:     " + Flurry.isSupported );
	if (Flurry.isSupported)
	{
		var config:FlurryAnalyticsConfig = new FlurryAnalyticsConfig();

		Flurry.service.analytics.initialiseWithKeys(
			"IOS_FLURRY_KEY", 
			"ANDROID_FLURRY_KEY",
			config );
		
		trace( "Flurry Version:       " + Flurry.service.version );
		trace( "Flurry Agent Version: " + Flurry.service.analytics.getFlurryAgentVersion() );

		Flurry.service.analytics.startSession();
		Flurry.service.analytics.logEvent( "startup" );
	}
}
catch (e:Error)
{
	trace( "ERROR::"+e.message );
}
```



## Revenue Analytics

Revenue Analytics within Flurry allows you to track your In App Purchase (IAP) Revenue from transactions that occur within your iOS app or Android app in order to determine if your app is producing revenue from in app purchases at the levels you expect.

To log a purchase call the `logPayment()` method passing the details of the purchase:


```actionscript
var payment:PaymentData = new PaymentData( "candy", "yummy_candy", 1, 2.99, "USD", "123456789" );

Flurry.service.analytics.logPayment( payment );
```


