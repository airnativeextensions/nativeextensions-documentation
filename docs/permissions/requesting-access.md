---
title: Requesting Access
sidebar_label: Requesting Access
---

When you are going to be accessing a 'dangerous' permission you must check that 
your application has been allowed access.

![](images/userflow.png)

On Android these permissions are listed through the manifest additions. On older 
versions of Android these permissions are accepted when the user installs the 
application. More modern versions (Marshmallow 6 [API v23]+) require that you request 
the permissions similar to iOS. You will still need to list them in your manifest 
and then follow the same code below.



## Check Authorisation

You can check the current authorisation status by calling the `authorisationStatus()` method:

```actionscript
switch (Permissions.service.authorisationStatus())
{
	case AuthorisationStatus.AUTHORISED:
		// This device has been authorised.
		break;
		
	case AuthorisationStatus.NOT_DETERMINED:
	case AuthorisationStatus.SHOULD_EXPLAIN:
		// You are yet to ask for authorisation or need to further explain
		// At this point you should consider your strategy to get your 
		// user to authorise by explaining your need for the permissions
		break;
		
	case AuthorisationStatus.DENIED:
	case AuthorisationStatus.UNKNOWN:
	case AuthorisationStatus.RESTRICTED:
		// The user has disabled the permissions
		// Advise your user of the lack of permissions as you see fit
		break;
}
```

You should respect the `SHOULD_EXPLAIN` status by displaying additional information 
to your user about why you require this functionality.


## Request Authorisation

To request authorisation call the `requestAuthorisation()` function:

```actionscript
Permissions.service.addEventListener( AuthorisationEvent.CHANGED, authorisationChangedHandler );
Permissions.service.requestAuthorisation();
```

You will then receive a change event if the user accepted your permission request:

```actionscript
function authorisationChangedHandler( event:AuthorisationEvent ):void
{
	// Check the authorisation state again (as above)
}
```



## Example

```actionscript
function checkAndRequestAuthorisation():void 
{
	switch (Permissions.service.authorisationStatus())
	{
		case AuthorisationStatus.AUTHORISED:
			// This device has been authorised.
			break;
			
		case AuthorisationStatus.NOT_DETERMINED:
			// You are yet to ask for authorisation 
			Permissions.service.addEventListener( AuthorisationEvent.CHANGED, authorisationChangedHandler );
			Permissions.service.requestAuthorisation();
			break;

		case AuthorisationStatus.SHOULD_EXPLAIN:
			// At this point you should consider your strategy to get your 
			// user to authorise by explaining your need for the permissions
			
			// You can attempt a request again or show a dialog as to the requirement for the permission

			break;

		case AuthorisationStatus.DENIED:
		case AuthorisationStatus.UNKNOWN:
		case AuthorisationStatus.RESTRICTED:
			// The user has disabled the permissions
			// Advise your user of the lack of permissions as you see fit
			break;
	}
}

function authorisationChangedHandler( event:AuthorisationEvent ):void
{
	// Check the authorisation state again (as above)
	checkAndRequestAuthorisation();
}
```
