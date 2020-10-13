---
title: Core - Initialise
sidebar_label: Initialise
---


## Application Configuration

You must perform the Firebase configuration somewhere early in your application.

This process involves calling `initialiseApp` which will load your configuration files (as required) 
and ensure the Firebase application is initialised appropriately based on the current platform.


```actionscript
if (Firebase.isSupported)
{
	var success:Boolean = Firebase.service.initialiseApp();
	if (!success)
	{
		// CHECK YOUR CONFIGURATION FILES
	}
}
```

The call to `initialiseApp` returns a Boolean value indicating whether you have a configured 
Firebase application available.

If the call returns `false`, you should return to the [Configuration Files](../setup/configuration-files) section and ensure you have correctly setup all the appropriate options.


### Checking the configuration

You can call `getOptions()` to return the current options loaded into the Firebase application.

This is useful if you are having issues with connecting your application to confirm you are correctly configuring your application.

```actionscript
var options:FirebaseOptions = Firebase.service.getOptions();

trace( options.toString() );
```

This may return `null` if the Firebase app has not been configured, either by resources, configuration file or manually. 
