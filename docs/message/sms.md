---
title: SMS
sidebar_label: SMS
---

## Sending an SMS with UI

The example below shows how to send an SMS using the native UI:

```actionscript
if (Message.service.smsManager.isSMSSupported)
{
	Message.service.smsManager.addEventListener( MessageSMSEvent.MESSAGE_SMS_CANCELLED, smsEventHandler );
	Message.service.smsManager.addEventListener( MessageSMSEvent.MESSAGE_SMS_SENT, smsEventHandler );
	Message.service.smsManager.addEventListener( MessageSMSEvent.MESSAGE_SMS_SENT_ERROR, smsEventHandler );
					
	var sms:SMS = new SMS();
	sms.address = "0444444444";
	sms.message = "Sending an SMS with the distriqt Message ANE";
	
	Message.service.smsManager.sendSMSWithUI( sms, false );
}

...

private function smsEventHandler( event:MessageSMSEvent ):void
{
	trace( event.type +"::"+ event.details + "::"+event.sms.toString() );
}
```



## Android Advanced SMS operations

On Android you can request permission to directly send and receive SMS messages without 
user interaction. 


### Manifest Additions

The Message ANE requires a few additions to the manifest to be able to start certain activities and to get permission to send and receive SMS. 

```xml
<manifest android:installLocation="auto">
	
	<uses-permission android:name="android.permission.SEND_SMS" /> 
	<uses-permission android:name="android.permission.READ_SMS" /> 
	<uses-permission android:name="android.permission.RECEIVE_SMS" />

	<!-- To access SIM subscriptions -->
	<uses-permission android:name="android.permission.READ_PHONE_STATE" />


	<application>

		<!-- TO RECEIVE SMS -->
		<receiver android:name="com.distriqt.extension.message.receivers.MessageSMSReceiver" android:exported="true" > 
			<intent-filter android:priority="1000"> 
				<action android:name="android.provider.Telephony.SMS_RECEIVED" />
			</intent-filter> 
		</receiver>

	</application>

</manifest>
```
	



### Requesting Authorisation

Firstly you must request authorisation to send and receive messages. 

On Android these permissions are listed through the manifest additions. 
On older versions of Android these permissions are accepted when the user installs the application. 
More modern versions (Marshmallow 6 [v23]+) require that you request the permissions similar to iOS. 
You will still need to list them in your manifest and then follow the same code below as for iOS, except that on Android you will be able to ask multiple times. 
You should respect the `SHOULD_EXPLAIN` status by displaying additional information to your user about why you require this functionality.

The following code will work across both platforms:


```actionscript
Message.service.smsManager.addEventListener( AuthorisationEvent.CHANGED, authorisationStatus_changedHandler );

switch (Message.service.smsManager.authorisationStatus())
{
	case AuthorisationStatus.SHOULD_EXPLAIN:
	case AuthorisationStatus.NOT_DETERMINED:
		// REQUEST ACCESS: This will display the permission dialog
		Message.service.smsManager.requestAuthorisation();
		return;
	
	case AuthorisationStatus.DENIED:
	case AuthorisationStatus.UNKNOWN:
	case AuthorisationStatus.RESTRICTED:
		// ACCESS DENIED: You should inform your user appropriately
		return;
		
	case AuthorisationStatus.AUTHORISED:
		// AUTHORISED: SMS will be available
		break;						
}
```

```actionscript
private function authorisationStatus_changedHandler( event:AuthorisationEvent ):void
{
	trace( "authorisationStatus_changedHandler: "+event.status );
}
```


### Sending an SMS

Once you have authorisation, sending an SMS is a simple matter of calling `sendSMS`:


```actionscript
if (Message.service.smsManager.isSMSSupported)
{
	var sms:SMS = new SMS();
	sms.address = "0444444444";
	sms.message = "Testing Message ANE";
	
	Message.service.smsManager.sendSMS( sms );
}
```


### Subscription Info

In some devices there are multiple SIM cards and you may wish to specify the subscription to use to send the SMS.

Firstly you must add the additional permission to `READ_PHONE_STATE` to be able to access the subscription information.


Then call `getSubscriptions()` to retrieve an array of `SubscriptionInfo` objects representing the different sims.

```actionscript
var subs:Array = Message.service.smsManager.getSubscriptions();
for each (var sub:SubscriptionInfo in subs)
{
	trace( "SIM: ["+sub.id+"] " + sub.displayName + "/"+sub.carrierName);
}
```

When sending an SMS you can specify the subscription id to use to send the SMS:

```actionscript
Message.service.smsManager.sendSMS( sms, sub.id );
```

>
> Note: This is only supported on Android API v22+. If it is not supported (or if you haven't requested the additional permission) `getSubscriptions()` will return an empty array and the default sim will be used to send messages.
>


### Events

You can listen for several events, as defined in the `MessageSMSEvent` class, see the documentation
in that class for more information on the events.

```actionscript
Message.service.smsManager.addEventListener( MessageSMSEvent.MESSAGE_SMS_CANCELLED, 	smsEventHandler );
Message.service.smsManager.addEventListener( MessageSMSEvent.MESSAGE_SMS_DELIVERED, 	smsEventHandler );
Message.service.smsManager.addEventListener( MessageSMSEvent.MESSAGE_SMS_RECEIVED, 		smsEventHandler );
Message.service.smsManager.addEventListener( MessageSMSEvent.MESSAGE_SMS_SENT, 			smsEventHandler );
Message.service.smsManager.addEventListener( MessageSMSEvent.MESSAGE_SMS_SENT_ERROR, 	smsEventHandler );


function smsEventHandler( event:MessageSMSEvent ):void
{
	trace( event.type +"::"+ event.details + "::"+event.sms.toString() );
}
```
