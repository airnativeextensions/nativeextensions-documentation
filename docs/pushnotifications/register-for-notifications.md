---
title: Register for notifications
sidebar_label: Register for notifications
---

Now that you have authorisation to access push notifications you can register your user's device.
Registration involves a call to the server to obtain a registration id or device token. 
This is initiated by calling the `register()` function. 

The token may change at any time so you should also listen for the `CHANGED` event and update your server as your application requires.


```actionscript
PushNotifications.service.addEventListener( RegistrationEvent.REGISTERING, registeringHandler );
PushNotifications.service.addEventListener( RegistrationEvent.REGISTER_SUCCESS, registerSuccessHandler );
PushNotifications.service.addEventListener( RegistrationEvent.CHANGED, registrationChangedHandler );
PushNotifications.service.addEventListener( RegistrationEvent.REGISTER_FAILED, registerFailedHandler );
PushNotifications.service.addEventListener( RegistrationEvent.ERROR, errorHandler );

PushNotifications.service.register();
```

```
function registeringHandler( event:RegistrationEvent ):void
{
	trace( "Registration started" );
}

function registerSuccessHandler( event:RegistrationEvent ):void
{
	trace( "Registration succeeded with ID: " + event.data  );
	var deviceTokenOrRegistrationId:String = event.data;
}

function registrationChangedHandler( event:RegistrationEvent ):void
{
	trace( "Registration ID has changed: " + event.data );
	var deviceTokenOrRegistrationId:String = event.data;
}

function registerFailedHandler( event:RegistrationEvent ):void
{
	trace( "Registration failed" );
}

function errorHandler( event:RegistrationEvent ):void
{
	trace( "Registration error: "+event.data );
}
```


### Current Tokens

Once registered you can access the current registration id / device token at any time by using the `getDeviceToken()` function. This will return the same string as the registration id / device token returned in either the  `REGISTER_SUCCESS` or `CHANGED` event.

```actionscript
var deviceTokenOrRegistrationId:String = PushNotifications.service.getDeviceToken();
```

Additionally some services may have a secondary service identifier that the service server returned for this device. For example the OneSignal or Azure identifier. This can be retrieved by using the `getServiceToken()` function.

```actionscript
var serviceToken:String = PushNotifications.service.getServiceToken();
```

Depending on the service you are using you may have to use the device token or the service token to send notifications to the device.

