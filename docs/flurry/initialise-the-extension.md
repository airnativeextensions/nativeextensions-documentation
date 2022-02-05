---
title: Initialise the Extension
sidebar_label: Initialise the Extension
---


To use the analytics service you must pass in your Flurry keys that you created through the Flurry website and a configuration instance to set various configuration options (`FlurryAnalyticsConfig`). 



```actionscript
var config:FlurryAnalyticsConfig = new FlurryAnalyticsConfig()
		.setLogEnabled(true)
		.setCrashReportingEnabled(true)
		.setSessionContinueSeconds( 6 )
;

Flurry.service.analytics.initialise( "FLURRY_KEY", config );
```

(If you don't supply a configuration then the defaults will be used).



If you are cross compiling both iOS and Android you can use the `initialiseWithKeys` function to initialise both platforms.


```actionscript
Flurry.service.analytics.initialiseWithKeys( 
	"IOS_FLURRY_KEY", 
	"ANDROID_FLURRY_KEY", 
	config
);
```


