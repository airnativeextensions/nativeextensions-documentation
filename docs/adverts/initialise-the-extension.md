---
title: Initialise the Extension
sidebar_label: Initialise the Extension
---

## Supported

You should always check whether the extension is supported before making calls. 
This allows you to react to whether the functionality is available on the device.

```as3
if (Adverts.isSupported)
{
	//	Functionality here
}
```


### Check Google Play Services Availability

This extension requires the use of Google Play Services.

You should use the  `GoogleApiAvailability` helper in the `com.distriqt.playservices.Base` ANE. The documentation for this class is available in the [Google Play Services wiki](https://github.com/distriqt/ANE-GooglePlayServices/wiki/API-Availability). 

For example:

```as3
import com.distriqt.extension.playservices.base.ConnectionResult;
import com.distriqt.extension.playservices.base.GoogleApiAvailability;
```

```as3
var result:int = GoogleApiAvailability.instance.isGooglePlayServicesAvailable();
if (result != ConnectionResult.SUCCESS)
{
    if (GoogleApiAvailability.instance.isUserRecoverableError( result ))
    {
        GoogleApiAvailability.instance.showErrorDialog( result );
    }
    else
    {
        trace( "Google Play Services aren't available on this device" );
    }
}
else
{
    trace( "Google Play Services are Available" );
}
```

If Google Play Services aren't available then you won't be able to use the functionality in this extension.
