---
title: Location Monitoring
sidebar_label: Location Monitoring
---


## Start Location Monitoring

To start location monitoring you construct a `LocationRequest` instance and then call `startLocationMonitoring`. 
The request specifies the details of the monitoring such as accuracy, priority and intervals. 
You should only request the minimum level of information required to achieve your applications goals, 
so to conserve the user's power wherever possible. The two most important settings are the accuracy and 
priority, these separately specify the levels for iOS and Android respectively.

The extension will dispatch `LocationEvent.UPDATE` events whenever a location update is received.

```actionscript
Location.service.addEventListener( LocationEvent.UPDATE, location_updateHandler );

var request:LocationRequest = new LocationRequest()
	.setAccuracy( LocationRequest.ACCURACY_NEAREST_TEN_METERS )
	.setPriority( LocationRequest.PRIORITY_BALANCED_POWER_ACCURACY );


var success:Boolean = Location.service.startLocationMonitoring( request );


function location_updateHandler( event:LocationEvent ):void
{
	trace( "location updated: ["+event.position.latitude+","+event.position.longitude +"]");
}
```


### Android Background Updates

In an effort to reduce power consumption, Android 8.0 (API level 26) limits how frequently background apps can retrieve the user's current location. Apps can receive location updates only a few times each hour.

This location retrieval behavior is particularly important to keep in mind if your app relies on real-time alerts or motion detection while running in the background.

> 
> Reference: https://developer.android.com/about/versions/oreo/background-location-limits
>

In order to get frequent updates when in the background we can launch a foreground service which will continue to receive location updates. Foreground services require a notification so additionally we create a notification and display it to the user. This notification when clicked will launch your application.

To enable this background operation you must set the `persistInBackground` option on your `LocationRequest` by calling `setPersistInBackground()`. 
This function takes two parameters. The first is the value for `persistInBackground` which should be `true` if you wish to enable the foreground service for background location updates. And the second is the text to display in the ongoing notification.


```actionscript
var request:LocationRequest = new LocationRequest()
	.setAccuracy( LocationRequest.ACCURACY_NEAREST_TEN_METERS )
	.setPriority( LocationRequest.PRIORITY_BALANCED_POWER_ACCURACY )

	.setPersistInBackground( true, "Tracking location for mapping" );
```

>
> Note: You should only do this if location updates in the background are critical to your applications core functionality.
>

## Stop Location Monitoring

Stopping location updates is simply a matter of calling `stopLocationMonitoring` and removing 
any `LocationEvent.UPDATE` listeners you may have been using.

```actionscript 
Location.service.removeEventListener( LocationEvent.UPDATE, location_updateHandler );

var success:Boolean = Location.service.stopLocationMonitoring();
```



## Update URL

As part of the location request you can specify a url that the extension will pass the 
location information whenever a location update is received.

This can be useful in situations where the application is running in the background
(or even terminated on Android) the update url will still be contacted where AS3 code
may not run. 

```actionscript
var request:LocationRequest = new LocationRequest()
	.setAccuracy( LocationRequest.ACCURACY_NEAREST_TEN_METERS )
	.setPriority( LocationRequest.PRIORITY_BALANCED_POWER_ACCURACY );

request.setServerUpdate( 
	"http://example.com/locationupdate",
	"YOUR_CUSTOM_DATA_STRING"
);

Location.service.startLocationMonitoring( request );
```

The extension will send a json payload to the url containing the following structure:

```json
{
	"location": { 
		"altitude": 0.00,
		"latitude": 0.00,
		"longitude": 0.00,
		"timestamp": 000000000
	},
	"data": "YOUR_CUSTOM_DATA_STRING"
}
```


## Mock Locations 

In some circumstances it is possible for a user to download an app and send mock locations to your application. 

We can detect if the location reported is from a mock location provider by checking the `isMockLocation` property of the reported `Position`:

```actionscript
function location_updateHandler( event:LocationEvent ):void
{
	if (event.position.isMockLocation)
	{
		// This is a mock location - handle as appropriate for your application 
	}
}
```

If you are using the location for some specific user tracking you may find it important to ignore any mock location values.

:::note
Currently supported on Android only. iOS will always return `false` for this value
:::




