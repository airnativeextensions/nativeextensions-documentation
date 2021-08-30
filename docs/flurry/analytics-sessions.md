---
title: Analytics Sessions
sidebar_label: Sessions
---

A session represents a single use of the application, so you should start and end a
session each time your application is activated. Make sure you only add the activation
handler after you've initialised the Flurry extension, or else implement a check to
make sure this process has been performed.

```actionscript
var config:FlurryAnalyticsConfig = new FlurryAnalyticsConfig();
Flurry.service.analytics.initialiseWithKeys( "IOS_FLURRY_KEY", "ANDROID_FLURRY_KEY", config );
Flurry.service.analytics.startSession();

addEventListener( Event.ACTIVATE, activateHandler );
addEventListener( Event.DEACTIVATE, deactivateHandler );


function activateHandler( event:Event ):void
{
	if (Flurry.isSupported)
	{
		Flurry.service.analytics.startSession();
	}
}

function deactivateHandler( event:Event ):void
{
	if (Flurry.isSupported)
	{
		Flurry.service.analytics.endSession();
	}
}
```
