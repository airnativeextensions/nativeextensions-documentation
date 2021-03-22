---
title: Alarm Manager
sidebar_label: Alarm Manager
---


The Alarm Manager functionality allows you to use the Android Alarm manager to set your application to receive events
at a particular time. It also allows you to launch your application into the foreground if you require. 


## Android: Manifest Additions

There are some manifest additions required for this functionality, add the following to your manifest.
There are two receivers and an activity required. 
The first receiver is required to restore alarms after a reboot and the second to actually receive the alarms.


```xml
<manifest android:installLocation="auto">
	<uses-permission android:name="android.permission.INTERNET"/>
	<uses-permission android:name="android.permission.WAKE_LOCK" />
	<uses-permission android:name="android.permission.RECEIVE_BOOT_COMPLETED" />
	
	<application>
		<receiver android:enabled="true" android:name="com.distriqt.extension.application.receivers.ApplicationStartupReceiver" android:permission="android.permission.RECEIVE_BOOT_COMPLETED">
			<intent-filter>
				<action android:name="android.intent.action.BOOT_COMPLETED" />
				<category android:name="android.intent.category.DEFAULT" />
			</intent-filter>
		</receiver>
		
		<receiver android:name="com.distriqt.extension.application.alarms.AlarmReceiver" android:enabled="true" />
		<activity android:name="com.distriqt.extension.application.alarms.AlarmActivity" android:theme="@android:style/Theme.Translucent.NoTitleBar" />
		
	</application>
		
</manifest>
```


## Checking Availability

You should check whether the alarm manager functionality is available on the current device
before attempting to use any of the functions below. 

```actionscript
if (Application.service.alarmManager.isSupported) 
{
	// AlarmManager functionality is available
}
```

The Alarm Manager will not be available on some platforms eg iOS does not currently support this functionality. 


## Register for Events

Next you will need to do is add an event listener for the alarm events and register for the events.
The `AlarmEvent.ALARM` is dispatched whenever an alarm occurs. 

Calling `register()` will not only register for alarms but also check if the application was launched from an alarm,
so an alarm event may be dispatched immediately after a call to this function. 

```actionscript
Application.service.alarmManager.addEventListener( AlarmEvent.ALARM, alarmHandler );
Application.service.alarmManager.register();

...

private function alarmHandler( event:AlarmEvent ):void
{
	trace( "alarmHandler: ["+event.id+ "] "+event.data );
}
```


## Creating an Alarm

To create an Alarm you use the `setAlarm` function of the `AlarmManager` and an `AlarmBuilder`.

The `AlarmBuilder` is a helper class giving you the easy ability to setup an alarm correctly. 

You can pass a String as the data of the alarm that will be returned in the alarm event. 
This can be used to distinguish which alarm occurred in your application. 
We suggest using an stringified JSON Object as below.

```actionscript
var data:Object = {};
data.id = Math.floor(100*Math.random());
data.message = "a distriqt alarm";

var timestamp:Number = new Date().time + 10000 ;

Application.service.alarmManager.setAlarm( 
	new AlarmBuilder()
		.setId( data.id )
		.setTime( timestamp )
		.setData( JSON.stringify( data ))
		.setWillLaunchApplication()
		.build()
);
```


## Cancelling an Alarm

### Cancel by ID

The simplest way to cancel an alarm is to cancel the alarm by the ID of the alarm:

```actionscript
Application.service.alarmManager.cancelAlarmById( id );
```

This id should be the same as the id passed to your `AlarmBuilder.setId( )` call.


### Cancel by Alarm 

You can also cancel an alarm using the `Alarm` object that you previously built
and passing that to the `cancelAlarm` function.

```actionscript
Application.service.alarmManager.cancelAlarm( alarm );
```

This `alarm` object can either be stored from the setAlarm call or reconstructed using 
an `AlarmBuilder` with **exactly the same parameters** as used previously. For example
matching the call above:

```actionscript
Application.service.alarmManager.cancelAlarm(
	new AlarmBuilder()
		.setId( data.id )
		.setTime( timestamp )
		.setData( JSON.stringify( data ))
		.setWillLaunchApplication()
		.build()
);
```


## Cancel All Alarms

To cancel all previously set alarms, simply call the `cancelAllAlarms` function.

```actionscript
Application.service.alarmManager.cancelAllAlarms();
```


