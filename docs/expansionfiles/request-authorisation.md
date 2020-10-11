---
title: Request Authorisation
sidebar_label: Request Authorisation
---


In order to save the downloaded expansion files you must check that your 
application has been allowed write access to the external storage.

ie. `android.permission.WRITE_EXTERNAL_STORAGE`

To this end the extension provides several helpers to check and request 
access to the external storage. Normal permission rules apply here.

On Android these permissions are listed through the manifest additions. 
On older versions of Android these permissions are accepted when the user 
installs the application. More modern versions (Marshmallow 6 [v23]+) require 
that you request the permissions similar to iOS. You will still need to list 
them in your manifest and then follow the same code below.

You should respect the `SHOULD_EXPLAIN` status by displaying additional 
information to your user about why you require this functionality.


```actionscript
switch (ExpansionFiles.service.authorisationStatus())
{
	case AuthorisationStatus.AUTHORISED:
		// This device has been authorised.
		break;

	case AuthorisationStatus.NOT_DETERMINED:
	case AuthorisationStatus.SHOULD_EXPLAIN:
		// You are yet to ask for authorisation 
		// At this point you should consider your strategy to get your 
		// user to authorise by explaining your need for the permissions
		ExpansionFiles.service.addEventListener( AuthorisationEvent.CHANGED, authorisationChangedHandler );
		ExpansionFiles.service.requestAuthorisation();
		break;

	case AuthorisationStatus.DENIED:
	case AuthorisationStatus.UNKNOWN:
	case AuthorisationStatus.RESTRICTED:
		// The user has disabled the permissions
		// Advise your user of the lack of permissions as you see fit
		break;
}
```

You will then receive a change event if the user accepted your permission request:

```actionscript
private function authorisationChangedHandler( event:AuthorisationEvent ):void
{
	// Check the authorisation state again (as above)
}
```