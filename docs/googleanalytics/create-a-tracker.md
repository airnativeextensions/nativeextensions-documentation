---
title: Create a Tracker
sidebar_label: Create a Tracker
---


Creating and retrieving a Tracker use the same piece of code as shown below:

```actionscript
var tracker:Tracker = GoogleAnalytics.service.getTracker( "YOUR_TRACKING_ID" );

// Set a value that will be sent with every message
tracker.setValue( "&uid", "userIdString" );
```

You can create many Tracker instances as you require, however you should 
note that the first Tracker you create will be considered the default 
tracker and can be retrieved using `GoogleAnalytics.service.defaultTracker`.


