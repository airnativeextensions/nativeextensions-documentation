---
title: Request Authorisation
sidebar_label: Request Authorisation
---


Displaying maps does not require any particular authorisation / permission from the user. 
You can use most of the functionality of this ANE without requesting authorisation at all.

The exception here is if you plan to display the user's location on the map using the `showUserLocation` 
function.

## Requesting Authorisation

The extension provides several helpers to check and request access to the user's location. 


### Android

On Android these permissions are listed through the manifest additions. 
You need to add one or both of the following to your manifest additions:

```xml
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION"/>
<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION"/>
```

On older versions of Android these permissions are accepted when the user installs the application. 
More modern versions (Marshmallow 6 [v23]+) require that you request the permissions similar to iOS. 
You will still need to list them in your manifest and then follow the same code below as for iOS, except that on Android you will be able to ask multiple times. 
You should respect the `SHOULD_EXPLAIN` status by displaying additional information to your user about why you require this functionality.


### iOS

On iOS the user must be asked at runtime, which you only get one chance to ask, 
after which you must direct the user to manually change the permissions in the settings.

There are two types of permission on iOS `ALWAYS` and `IN_USE`. 

`ALWAYS`, indicates that you wish to continue tracking the user's location while your application is in the background.
For most cases, this will be excessive for a mapping application and we suggest you only request
the `IN_USE` permission, which allows your application access to the user's permission while
your application is active.

You need to add the following to your info additions. 
These messages can be customised as you require and are displayed in the dialog when requesting authorisation.


```xml
<!-- iOS 6,7 -->
<key>NSLocationUsageDescription</key>
<string>This application would like to use your location.</string>

<!-- iOS 8 + -->
<key>NSLocationWhenInUseUsageDescription</key>
<string>This application would like to use your location when in use.</string>
<key>NSLocationAlwaysUsageDescription</key>
<string>This application would like to use your location in the background.</string>
```



### Implementation

The following code will work across both platforms:

```actionscript
switch (NativeMaps.service.authorisationStatus())
{
	case AuthorisationStatus.ALWAYS:
	case AuthorisationStatus.IN_USE:
		trace( "User allowed access: " + NativeMaps.service.authorisationStatus() );
		break;
	
	case AuthorisationStatus.NOT_DETERMINED:
	case AuthorisationStatus.SHOULD_EXPLAIN:
		NativeMaps.service.requestAuthorisation( AuthorisationStatus.IN_USE );
		break;
	
	case AuthorisationStatus.RESTRICTED:
	case AuthorisationStatus.DENIED:
	case AuthorisationStatus.UNKNOWN:
		trace( "User denied access" );
		break;
}
```


