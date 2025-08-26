---
title: Performance - Traces
sidebar_label: Traces
---

## Automatic Traces

A trace is a report of performance data captured between two points in time in your app. When installed, the Performance Monitoring SDK automatically provides the following types of traces:

App start traces, which measure the time between when the user opens the app and when the app is responsive.
App in background traces, which measure the time when the app is running in the background.
App in foreground traces, which measure the time when the app is running in the foreground and available to the user.

### Automatic Trace Definitions

| Trace Name | iOS | Android |
|---|---|---|
| App start | Starts when the application loads the first Object to memory and stops after the first successful run loop that occurs after the application receives the UIApplicationDidBecomeActiveNotification notification. | Starts when the app's FirebasePerfProvider ContentProvider completes its onCreate method and stops when the first activity's onResume() method is called. |
| App in background | Starts when the application receives the UIApplicationWillResignActiveNotification notification and stops when it receives the UIApplicationDidBecomeActiveNotification notification. | Starts when the last activity to leave the foreground has its onStop() method called and stops when the first activity to reach the foreground has its onResume() method called. |
| App in foreground | Starts when the application receives the UIApplicationDidBecomeActiveNotification notification and stops when it receives the UIApplicationWillResignActiveNotification notification. | Starts when the first activity to reach the foreground has its onResume() method called and stops when the last activity to leave the foreground has its onStop() method called. |



## Custom Traces

A custom trace is a report of performance data associated with some of the code in your app. 

You can have multiple custom traces in your app, and it is possible to have more than one custom trace running at a time. Each custom trace can have one or more counters to count performance-related events in your app, and those counters are associated with the traces that create them.

1.  Add the following imports:

```actionscript
import com.distriqt.extension.firebase.performance.FirebasePerformance;
import com.distriqt.extension.firebase.performance.metrics.Trace;
```

2. Just before the code where you want to start a trace in your app, add the following line of code to start a trace called `test_trace`:

```actionscript
var testTrace:Trace = FirebasePerformance.service.newTrace( "test_trace" );
testTrace.start();
```

3. _Optional_ To count performance-related events that occur in your app (such as cache hits and misses), add a line of code similar to the following each time that the event occurs, using a string other than `item_counter` to name that event if you are counting a different type of event:

```actionscript
testTrace.incrementCounter( "item_counter" );
```

4. Just after the code where you want to stop your trace, add the following line of code:

```actionscript
testTrace.stop();
```


### Attributes

To use custom attributes, add code to your app that defines the attribute and associates it with a specific custom code trace. You can set the custom attribute anytime between when the trace starts and when the trace stops.

Note the following:

- Names for custom attributes must meet the following requirements:
  - No leading or trailing whitespace, no leading underscore (_) character
  - No spaces
  - Max length is 32 characters
  - Allowed characters for the name are A-Z, a-z, and _.
- Each custom code trace can record up to 5 custom attributes.
- Please ensure that custom attributes do not contain any information that personally identifies an individual to Google.

To set an attribute:

```actionscript
testTrace.setAttribute( "experiment", "A" );
```

To read an attribute:

```actionscript
var experimentValue:String = testTrace.getAttribue( "experiment" );
```

To delete an attribute:

```actionscript
testTrace.removeAttribute( "experiment" );
```


## Check the Firebase console for Performance Monitoring results

Results should appear in the Performance Monitoring section of the Firebase console within 12 hours.

