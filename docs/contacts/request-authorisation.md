---
title: Request Authorisation
sidebar_label: Request Authorisation
---

When you are going to be accessing the user's contacts you must check that your application has 
been allowed access. To this end the extension provides several helpers to check and request 
access to the contact list. Normal permission rules apply here.

On Android these permissions are listed through the manifest additions. On older versions of 
Android these permissions are accepted when the user installs the application. More modern
versions (Marshmallow 6 [v23]+) require that you request the permissions similar to iOS. 
You will still need to list them in your manifest and then follow the same code below as 
for iOS, except that on Android you will be able to ask multiple times. You should respect 
the `SHOULD_EXPLAIN` status by displaying additional information to your user about why 
you require this functionality.

On iOS the user must be asked at runtime, which you only get one chance to ask, after which
you must direct the user to manually change the permissions in the settings.

The following code will work across both platforms:

```actionscript
Contacts.service.addEventListener( AuthorisationEvent.CHANGED, contacts_authorisationChangedHandler );


switch (Contacts.service.authorisationStatus())
{
	case AuthorisationStatus.SHOULD_EXPLAIN:
	case AuthorisationStatus.NOT_DETERMINED:
		// REQUEST ACCESS: This will display the permission dialog
		Contacts.service.requestAccess();
		return;
	
	case AuthorisationStatus.DENIED:
	case AuthorisationStatus.UNKNOWN:
	case AuthorisationStatus.RESTRICTED:
		// ACCESS DENIED: You should inform your user appropriately
		return;
		
	case AuthorisationStatus.AUTHORISED:
		// AUTHORISED: Contacts will be available
		break;						
}


function contacts_authorisationChangedHandler( event:AuthorisationEvent ):void
{
	// Check event.status
}
```

