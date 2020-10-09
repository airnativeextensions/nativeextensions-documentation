---
title: Get Events
sidebar_label: Get Events
---


The example below shows retrieving the list of events from yesterday until 2 days in the future.

```actionscript
//
// 	GET EVENTS
var startDate:Date = new Date();
startDate.date -= 1;
var endDate:Date = new Date();
endDate.date += 2;

var events:Array = Calendar.service.getEvents( startDate, endDate  );
```
