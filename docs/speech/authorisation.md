---
title: Authorisation
sidebar_label: Authorisation
---



In order to use the speech recognition functionality you must first request certain permissions from the user.


## Authorisation Status

You can determine the current authorisation status by calling:

```actionscript
var authorisationStatus:String = Speech.instance.recogniser.authorisationStatus;
```

This value will be one of the values defined in the `AuthorisationStatus` class:


```actionscript
switch (Speech.instance.recogniser.authorisationStatus)
{
    case AuthorisationStatus.AUTHORISED:
        // Your app is authorised to use speech recognition
        break;

    case AuthorisationStatus.DENIED:
        // Your app has been denied authorisation to use speech recognition
        break;

    ...
}
```

When the status is `AuthorisationStatus.NOT_DETERMINED` you can request authorisation.


## Request Authorisation


You request authorisation by calling the `requestAuthorisation()` function. This call will dispatch an event when complete:


```actionscript
Speech.instance.recogniser.addEventListener( AuthorisationEvent.CHANGED, auth_changedHandler );

Speech.instance.recogniser.requestAuthorisation();


function auth_changedHandler( event:AuthorisationEvent ):void 
{
    Speech.instance.recogniser.removeEventListener( AuthorisationEvent.CHANGED, auth_changedHandler );

    // Handle new authorisation status
}
```




