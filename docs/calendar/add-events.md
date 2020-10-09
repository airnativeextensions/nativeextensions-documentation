---
title: Add Events
sidebar_label: Add Events
---


Adding an event can be done silently or with a UI allowing the user to fill in additional information.

The following example creates an `EventObject` and sets the dates, associated alarm and 
recurrence settings, and then adds the event to the users calendar.


```actionscript
//	CREATE THE EVENT
var e:EventObject = new EventObject();
e.title = "Test title now";
e.startDate = new Date() ;
e.endDate = new Date();
e.startDate.minutes = e.startDate.minutes + 6;
e.endDate.hours = e.endDate.hours+1;

var a:EventAlarmObject = new EventAlarmObject();
a.offset = -1;
e.alarms.push( a );

var r:Recurrence = new Recurrence();
r.endCount = 5;
r.interval = 1;
r.frequency = Recurrence.FREQUENCY_DAILY;

e.recurrenceRules.push( r );

//
// ADD THE EVENT
Calendar.service.addEvent( e );
```


