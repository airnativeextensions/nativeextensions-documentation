---
title: Authorisation
sidebar_label: Authorisation
---


On Android there is no direct way to detect screenshots so instead this extension uses a common technique of observing the user's media library 
and watching for additions to places where screenshots are normally stored. This approach however requires authorisation to read the user's media. 

On iOS this process is not needed and it will always return authorised.


## Requesting Authorisation

To this end the extension provides several helpers to check and request authorisation. 

On Android these permissions are listed through the manifest additions. 
On older versions of Android these permissions are accepted when the user installs the application. 
More modern versions (Marshmallow 6 [v23]+) require that you request the user grants the permissions. 
You will need to list the permissions in your manifest and then follow the code below. 

You should respect the `SHOULD_EXPLAIN` status by displaying additional information to your user about why you require this functionality.


### Event based

```actionscript
DetectScreenshot.instance.addEventListener( AuthorisationEvent.CHANGED, authorisationStatus_changedHandler );

switch (DetectScreenshot.instance.authorisationStatus())
{
	case AuthorisationStatus.SHOULD_EXPLAIN:
	case AuthorisationStatus.NOT_DETERMINED:
		// REQUEST ACCESS: This will display the permission dialog
		DetectScreenshot.instance.requestAuthorisation();
		return;
	
	case AuthorisationStatus.DENIED:
	case AuthorisationStatus.UNKNOWN:
	case AuthorisationStatus.RESTRICTED:
		// ACCESS DENIED: You should inform your user appropriately
		return;
		
	case AuthorisationStatus.AUTHORISED:
		// AUTHORISED
		break;						
}

function authorisationStatus_changedHandler( event:AuthorisationEvent ):void
{
	trace( "authorisationStatus_changedHandler: "+event.status );
}
```


### Callback based

Alternatively you can use a callback function for the `requestAuthorisation()` method:

```actionscript
DetectScreenshot.instance.requestAuthorisation(
    function ( status:String ):void
    {
        trace( "requestAuthorisation(): status=" + status );
    } );
```



## Imports


```actionscript
import com.distriqt.extension.detectscreenshot.DetectScreenshot;
import com.distriqt.extension.detectscreenshot.AuthorisationStatus;
```
