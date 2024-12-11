---
title: Phone Number
sidebar_label: Phone Number
---


If you require access to the user's phone number you will need to request permission to access the phone state.


## Android

Add the `android.permission.READ_PHONE_STATE` permission to your manifest additions:


```xml
<manifest android:installLocation="auto">

    <uses-permission android:name="android.permission.INTERNET"/>
    <uses-permission android:name="android.permission.READ_PHONE_STATE"/>

    <!-- OTHER MANIFEST ENTRIES -->

```


and then request permission to access it on recent versions:

```actionscript
switch (Application.service.authorisationStatus())
{
    case AuthorisationStatus.AUTHORISED:
    {
        // User has granted access
        break;
    }

    case AuthorisationStatus.NOT_DETERMINED:
    case AuthorisationStatus.SHOULD_EXPLAIN:
    {
        Application.service.addEventListener( AuthorisationEvent.CHANGED, authorisationChangedHandler );
        Application.service.requestAccess();
        break;
    }

    case AuthorisationStatus.DENIED:
    {
        // User has denied access
        break;
    }
}

function authorisationChangedHandler( event:AuthorisationEvent ):void 
{
    // check authorisation status again
}
```


## iOS 

Not supported
