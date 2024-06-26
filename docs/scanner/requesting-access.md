---
title: Requesting Access
sidebar_label: Requesting Access
---

:::info Authorisation
If you are going to be using one of the camera methods then you need to ensure you have 
requested authorisation before using the scanning functionality.

However if you are planning to just scan bitmap data, then you can skip this section.
:::


When you are going to be accessing the camera you must check that your application 
has been allowed access. To this end the extension provides several helpers to 
check and request access to the camera. Normal permission rules apply here.

On Android these permissions are listed through the manifest additions. On older 
versions of Android these permissions are accepted when the user installs the 
application. More modern versions (Marshmallow 6 [v23]+) require that you request 
the permissions similar to iOS. You will still need to list them in your manifest 
and then follow the same code below as for iOS, except that on Android you will 
be able to ask multiple times. 

You should respect the `SHOULD_EXPLAIN` status by displaying additional information 
to your user about why you require this functionality.


On iOS the user must be asked at runtime, which you only get one chance to ask,
after which you must direct the user to manually change the permissions in the settings.


The following code will work across both platforms:

```actionscript
trace( "Scanner Authorisation Status: " + Scanner.service.authorisationStatus() );
Scanner.service.addEventListener( AuthorisationEvent.CHANGED, authorisationChangedHandler );
switch (Scanner.service.authorisationStatus())
{
	case AuthorisationStatus.NOT_DETERMINED:
	case AuthorisationStatus.SHOULD_EXPLAIN:
		// REQUEST ACCESS: This will display the permission dialog
		Scanner.service.requestAccess();
		return;
	
	case AuthorisationStatus.DENIED:
	case AuthorisationStatus.UNKNOWN:
	case AuthorisationStatus.RESTRICTED:
		// ACCESS DENIED: You should inform your user appropriately
		return;
		
	case AuthorisationStatus.AUTHORISED:
		// AUTHORISED: Scanner will be available
		break;						
}
```


You will then receive a change event if the user accepted your permission request:

```actionscript
private function authorisationChangedHandler( event:AuthorisationEvent ):void
{
	switch (event.status)
	{
		case AuthorisationStatus.SHOULD_EXPLAIN:
			// Should display a reason you need this feature
			break;
			
		case AuthorisationStatus.AUTHORISED:
			// AUTHORISED: Camera will be available
			break;
			
		case AuthorisationStatus.RESTRICTED:
		case AuthorisationStatus.DENIED:
			// ACCESS DENIED: You should inform your user appropriately
			break;
	}
}
```



## Usage Description

You can customise the usage description messages as you see fit to suit your application. These messages are displayed in the main body area of the iOS authorisation dialog with the title and buttons being standard (and not customisable).

The image below is an example of the authorisation dialog. The content *"Require Camera"* is the usage description message you can set.

![](images/ios-permission-dialog-camera.png)

You set these values through adding the usage description keys to your application descriptor's info additions or simply by setting up your configuration options in your `apm` project. 

