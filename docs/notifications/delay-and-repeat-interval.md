---
title: Delay and Repeat Interval
sidebar_label: Delay and Repeat Interval
---

It is possible to schedule a notification to be delivered at a later date and also to apply 
a repeat interval to have the notification delivered repeatedly.

The particulars of these settings vary both on platform and version.

## Delay

You can set a notification to be displayed at a later date by setting the delay value of the notification. 
This indicates that the notification should be scheduled to be displayed at some point in the future.

For example, the following creates an notification that will be displayed 5 seconds in the future:

```actionscript
Notifications.service.notify(
	new NotificationBuilder()
		.setDelay( 5 ) // Show the notification 5 seconds in the future
		.setAlert( "Delayed Notification" )
		.setTitle( "Delayed Notification" )
		.setBody( "The body of the notification" )
		.build()
);
```

Or schedule a notification for 7am tomorrow:

```actionscript
var now:Date = new Date();
var fireDate:Date = new Date( now.year, now.month, now.date, 7, 0, 0 );
fireDate.date += 1; // tomorrow

Notifications.service.notify(
	new NotificationBuilder()
		.setFireDate( fireDate ) 
		.setAlert( "Delayed Notification" )
		.setTitle( "Delayed Notification" )
		.setBody( "The body of the notification" )
		.build()
);
```


>
> **Note**:
>
> On Android when a device is restarted or killed (force kill) the delayed/repeated notifications are 
> cleared from the Android AlarmManager. We have implemented two checks to handle these cases.
> 
> The first is upon device boot, as long as your application has been run once and has not been 
> force killed, the notifications will be restored at boot, as long as you have the boot permission 
> in your manifest.
>
> The second check is implemented in the register function. This is to account for the force kill 
> scenario when the user restarts your application, any previously scheduled notifications will be 
> restored at this point.
> 
> This should happen seemlessly as long as you have followed this guide and this information is more for your information.
> 



## Repeat Interval

You can set a repeat interval to have the notification repeatedly be displayed to the user. 
Available intervals are in the `NotificationRepeatInterval` class, and include, minute, hour, day, week etc.
Check the individual intervals for their availability on each of the platforms.

```actionscript
Notifications.service.notify(
	new NotificationBuilder()
		.setRepeatInterval( NotificationRepeatInterval.REPEAT_HOUR ) // Repeat the notification every hour 
		.setAlert( "Repeat Notification" )
		.setTitle( "Repeat Notification" )
		.setBody( "The body of the notification" )
		.build()
);
```

These notifications continue until you cancel them.




## Combining Delay and Repeat Intervals

You can use both the delay and repeat interval to create notifications that start repeating at some 
time in the future. 

For example, say we wanted to schedule a reminder every day at 7am, then we would use a `REPEAT_DAY` interval and set the `fireDate` to be at `7:00am`.

```actionscript
var now:Date = new Date();
var fireDate:Date = new Date( now.year, now.month, now.date, 7, 0, 0 );
fireDate.date += 1; // tomorrow

Notifications.service.notify(
	new NotificationBuilder()
		.setFireDate( fireDate ) 
		.setRepeatInterval( NotificationRepeatInterval.REPEAT_DAY ) 
		.setAlert( "Repeat Notification" )
		.setTitle( "Repeat Notification" )
		.setBody( "The body of the notification" )
		.build()
);
``` 


### iOS 10

With iOS 10 and higher, Apple have severly limited the ability to schedule **and** repeat notifications. 

Instead of being able to specify the first notification date and then a repeat interval we can only use the fire date to specify the details of the repeat interval. 

So we cannot specify an initial delay to the first notification occurence. If the above example was called before 7am then the first notification would occur today and not tomorrow on iOS 10+ device. The day specified in the fire date for the daily repeat interval will be ignored.  


The issue becomes more prevalent if you were attempting to set reminders for important events eg, remind your user to take their medication at 7am by setting a reminder every minute after 7am:

```actionscript
var now:Date = new Date();
var fireDate:Date = new Date( now.year, now.month, now.date, 7, 0, 0 );
fireDate.date += 1; // tomorrow

Notifications.service.notify(
	new NotificationBuilder()
		.setFireDate( fireDate ) 
		.setRepeatInterval( NotificationRepeatInterval.REPEAT_MINUTE ) 
		.setAlert( "Repeat Notification" )
		.setTitle( "Repeat Notification" )
		.setBody( "The body of the notification" )
		.build()
);
``` 

Instead of waiting until 7am tomorrow this alarm would immediately start occuring every minute. 


Please be aware of this limitation if you are combining delays and repeat intervals. 

> 
> If you are wanting to have consistent repeating notifications across platforms we suggest considering the repeat interval as the priority and the fire date and specifying the time components of the interval smaller than the repeat interval. 
>
> For example, create:
> - a daily notification at a particular time (hour / minute eg `07:00`)
> - an hourly notification at a particular minute (eg quarter past the hour, `:15`)
>

If you have any concerns or need some help on creating a specific repeating notification feel free to ask our support team.

