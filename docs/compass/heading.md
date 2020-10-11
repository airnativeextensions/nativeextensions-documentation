---
title: Heading
sidebar_label: Heading
---

## Heading Updates

Once you've initialised the extension calling the `register` function will start 
the update of event updates (`CompassEvent`).

```actionscript
if (Compass.isSupported)
{
	Compass.init( APP_KEY );
	Compass.service.addEventListener( CompassEvent.HEADING_UPDATED, compass_headingUpdatedHandler );
	Compass.service.register();
}
```

Listening for the `CompassEvent.HEADING_UPDATED` will give you periodic events with 
heading information:

```actionscript
private function compass_headingUpdatedHandler( event:CompassEvent ):void
{
	trace( "Heading: " + event.magneticHeading +"   ["+event.headingAccuracy+"]" );
}
```

When your application no longer requires the heading updates it's important to call 
`unregister` to stop the active usage of the sensors on the device. This will 
conserve battery life etc. This is important when your application goes into 
background operation. It's suggested that you use a mechanism to unregister 
the ANE when this occurs, by using something like the ACTIVATE/DEACTIVATE events.

```actionscript
if (Compass.isSupported && Compass.service.isRegistered)
{
	Compass.service.unregister();
}
```




## True Heading

On iOS you can access the true heading of the device, however this requires access to the device location so you will need to add some additional properties to your application and request permission to access the device location. 

You will need to add the following to your iPhone info additions:

```xml
<!-- iOS 6,7 -->
<key>NSLocationUsageDescription</key>
<string>This application would like to use your location.</string>

<!-- iOS 8 + -->
<key>NSLocationWhenInUseUsageDescription</key>
<string>This application would like to use your location when in use.</string>
<key>NSLocationAlwaysUsageDescription</key>
<string>This application would like to use your location in the background.</string>

<!-- iOS 11 + -->
<key>NSLocationAlwaysAndWhenInUseUsageDescription</key>
<string>This application would like to use your location in the background and the foreground.</string>
```

#### Authorisation

When you are going to be accessing the user's location you must check that your application has been allowed access. To this end the extension provides several helpers to check and request access to the location services.

On iOS the user must be asked at runtime, which you only get one chance to ask, after which you must direct the user to manually change the permissions in the settings.

You can check if you currently have permission using the `hasAuthorisation` function:

```actionscript
if (Compass.service.hasAuthorisation())
{
	// Application has permission to access trueHeading
}
```

If this returns false you should expect a `-1` value for true heading.


To request authorisation at runtime, you call the `requestAuthorisation` function. 
The following code will work across both platforms:

```actionscript
switch (Compass.service.authorisationStatus())
{
	case AuthorisationStatus.ALWAYS:
	case AuthorisationStatus.IN_USE:
		trace( "User allowed access: " + Compass.service.authorisationStatus() );
		break;
	
	case AuthorisationStatus.NOT_DETERMINED:
	case AuthorisationStatus.SHOULD_EXPLAIN:
		Compass.service.addEventListener( AuthorisationEvent.CHANGED, authorisationChangedHandler );
		Compass.service.requestAuthorisation( AuthorisationStatus.ALWAYS );
		break;
	
	case AuthorisationStatus.RESTRICTED:
	case AuthorisationStatus.DENIED:
	case AuthorisationStatus.UNKNOWN:
		trace( "User denied access" );
		break;
}

function authorisationChangedHandler( event:AuthorisationEvent ):void
{
	//
}
```


>
> True Heading is not supported on Android
>

