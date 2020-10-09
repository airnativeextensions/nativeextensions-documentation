---
title: Requesting Authorisation
sidebar_label: Requesting Authorisation
---

## Requesting Authorisation

When you are going to be accessing the user's location by scanning for beacons you 
must check that your application has been allowed access. To this end the extension 
provides several helpers to check and request access to the required permissions.

On Android these permissions are listed through the manifest additions. On older 
versions of Android these permissions are accepted when the user installs the application. 
More modern versions (Marshmallow 6 [v23]+) require that you request the permissions 
similar to iOS. You will still need to list them in your manifest and then follow the 
same code below as for iOS, except that on Android you will be able to ask multiple times. 
You should respect the `SHOULD_EXPLAIN` status by displaying additional information to your 
user about why you require this functionality.

On iOS the user must be asked at runtime, which you only get one chance to ask, after which
you must direct the user to manually change the permissions in the settings.

The following code will work across both platforms

```actionscript
Beacon.service.addEventListener( AuthorisationEvent.CHANGED, authorisationChangedHandler );

switch (Beacon.service.authorisationStatus())
{
	case AuthorisationStatus.AUTHORISED:
	case AuthorisationStatus.ALWAYS:
	case AuthorisationStatus.IN_USE:
		// This device has been authorised for the particular use case
		break;
	
	case AuthorisationStatus.NOT_DETERMINED:
	case AuthorisationStatus.SHOULD_EXPLAIN:
		// You are yet to ask for authorisation 
		// At this point you should consider your strategy to get your 
		// user to authorise by explaining your need for the permissions

		Beacon.service.requestAuthorisation();
		break;
	
	case AuthorisationStatus.DENIED:
	case AuthorisationStatus.UNKNOWN:
	case AuthorisationStatus.RESTRICTED:
		// The user has disabled the permissions
		// Advise your user of the lack of permissions as you see fit
		break;
}

function authorisationChangedHandler( event:AuthorisationEvent ):void
{
	// You should check the authorisation status again 
}
```

Without authorisation none of the beacon functionality will work, so make sure you have been 
through this process and gotten a positive response from `hasAuthorisation()`.



