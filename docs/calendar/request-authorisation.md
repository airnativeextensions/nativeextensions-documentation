---
title: Request Authorisation
sidebar_label: Request Authorisation
---


When you are going to be accessing the user's calendars you must check that your application has been allowed access. To this end the extension provides several helpers to check and request access to the contact list. Normal permission rules apply here.

On Android these permissions are listed through the manifest additions. On older versions of Android these permissions are accepted when the user installs the application. More modern versions (Marshmallow 6 [v23]+) require that you request the permissions similar to iOS. You will still need to list them in your manifest and then follow the same code below as for iOS, except that on Android you will be able to ask multiple times. You should respect the SHOULD_EXPLAIN status by displaying additional information to your user about why you require this functionality.

On iOS the user must be asked at runtime, which you only get one chance to ask, after which you must direct the user to manually change the permissions in the settings.

The following code will work across both platforms


```actionscript
Calendar.service.addEventListener( AuthorisationEvent.CHANGED, calendar_authorisationChangedHandler );

switch (Calendar.service.authorisationStatus())
{
	case AuthorisationStatus.SHOULD_EXPLAIN:
	case AuthorisationStatus.NOT_DETERMINED:
		// REQUEST ACCESS: This will display the permission dialog
		Calendar.service.requestAccess();
		return;
	
	case AuthorisationStatus.DENIED:
	case AuthorisationStatus.UNKNOWN:
	case AuthorisationStatus.RESTRICTED:
		// ACCESS DENIED: You should inform your user appropriately
		return;
		
	case AuthorisationStatus.AUTHORISED:
		// AUTHORISED: Calendars will be available
		break;						
}


function calendar_authorisationChangedHandler( event:AuthorisationEvent ):void
{
	// Check event.status
}
```



## Usage Description

You can customise the usage description messages as you see fit to suit your application. These messages are displayed in the main body area of the iOS authorisation dialog with the title and buttons being standard (and not customisable).

The image below is an example of the authorisation dialog. The content *"Access to photo library is required to save images."* is the usage description message you can set.

![](images/ios-permission-dialog.png)

You set these values through adding the usage description keys to your info additions or simply by setting up your configuration options in your `apm` project. 




