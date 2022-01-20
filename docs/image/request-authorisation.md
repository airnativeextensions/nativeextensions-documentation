---
title: Authorisation
sidebar_label: Authorisation
---


When you are going to be accessing the user's media you must check that your application has been allowed access. 
To this end the extension provides several helpers to check and request access to the camera roll. 

On Android these permissions are listed through the manifest additions. 
On older versions of Android these permissions are accepted when the user installs the application. 
More modern versions (Marshmallow 6 [v23]+) require that you request the permissions similar to iOS. 
You will still need to list them in your manifest and then follow the same code below as for iOS, 
except that on Android you will be able to ask multiple times. 
You should respect the `SHOULD_EXPLAIN` status by displaying additional information to your user 
about why you require this functionality.

On iOS the user must be asked at runtime, which you only get one chance to ask,
after which you must direct the user to manually change the permissions in the settings.

>
> On iOS < 10 you will not need to request permissions for this extension. 
> This is due to iOS not requiring user permission to save image data to the camera roll.
>
> **This changed in iOS 10 and you are now required to request permissions.**
>

![](images/ios-permission-dialog.png)

You can customise the text in this dialog by setting the usage strings in your info additions. (See [Add the Extension](add-the-extension) for details on setting these values). 


## Authorisation Status

To get the current status call the `authorisationStatus()` function:

```actionscript
var status:String = Image.service.authorisationStatus();
```

The returned value will be one of the values defined in the `AuthorisationStatus` class:

- `AuthorisationStatus.SHOULD_EXPLAIN`
- `AuthorisationStatus.NOT_DETERMINED`
- `AuthorisationStatus.DENIED`
- `AuthorisationStatus.UNKNOWN`
- `AuthorisationStatus.RESTRICTED`
- `AuthorisationStatus.AUTHORISED`


## Request Authorisation

To request authorisation call the `requestAuthorisation()` function:

```actionscript
Image.service.requestAuthorisation();
```

This will present the authorisation dialog (if possible).


## Example

The following code will work across both platforms:

```actionscript
Image.service.addEventListener( AuthorisationEvent.CHANGED, authorisationChangedHandler );
checkAuthorisation();

function checkAuthorisation():void 
{
	switch (Image.service.authorisationStatus())
	{
		case AuthorisationStatus.SHOULD_EXPLAIN:
			// You should further explain the usage here 
			// before calling requestAuthorisation again

		case AuthorisationStatus.NOT_DETERMINED:
			// REQUEST AUTHORISATION: This will display the permission dialog
			Image.service.requestAuthorisation();
			return;
		
		case AuthorisationStatus.DENIED:
		case AuthorisationStatus.UNKNOWN:
		case AuthorisationStatus.RESTRICTED:
			// ACCESS DENIED: You should inform your user appropriately
			return;
			
		case AuthorisationStatus.AUTHORISED:
			// AUTHORISED: Saving to camera roll will be available
			break;						
	}
}

function authorisationChangedHandler( event:AuthorisationEvent ):void
{
	// You should perform the above check again
	checkAuthorisation();
}
```

