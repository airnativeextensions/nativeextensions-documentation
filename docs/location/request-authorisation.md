---
title: Request Authorisation
sidebar_label: Request Authorisation
---

When you are going to be accessing the user's location you must check that your 
application has been allowed access. To this end the extension provides several 
helpers to check and request access to the location services.

On Android these permissions are listed through the manifest additions. 
On older versions of Android these permissions are accepted when the user installs 
the application. More modern versions (Marshmallow 6 [v23]+) require that you 
request the permissions similar to iOS. You will still need to list them in your
manifest and then follow the same code below as for iOS, except that on Android 
you will be able to ask multiple times. You should respect the `SHOULD_EXPLAIN`
status by displaying additional information to your user about why you require 
this functionality. You can either request coarse or fine location based on your 
application need

On iOS the user must be asked at runtime, which you only get one chance to ask, 
after which you must direct the user to manually change the permissions in the settings.

The following code will work across both platforms:

```actionscript
Location.service.addEventListener( AuthorisationEvent.CHANGED, authorisationChangedHandler );
switch (Location.service.authorisationStatus())
{
	case AuthorisationStatus.ALWAYS:
	case AuthorisationStatus.IN_USE:
		trace( "User allowed access: " + Location.service.authorisationStatus() );
		break;
	
	case AuthorisationStatus.NOT_DETERMINED:
	case AuthorisationStatus.SHOULD_EXPLAIN:
		Location.service.requestAuthorisation( AuthorisationStatus.ALWAYS );
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
> When requesting authorisation you can either request `AuthorisationStatus.ALWAYS` 
> or `AuthorisationStatus.IN_USE` access. If you want to be able to receive notifications 
> in the background you must use `ALWAYS` otherwise you will only receive updates when 
> the application is in use.
>
