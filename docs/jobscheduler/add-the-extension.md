---
title: Add the Extension
sidebar_label: Add the Extension
---

First step is always to add the extension to your development environment. 
To do this use the tutorial located [here](/docs/tutorials/getting-started).



## Required ANEs

### Core ANE

The Core ANE is required by this ANE. You must include and package this extension in your application.

The Core ANE doesn't provide any functionality in itself but provides support libraries and frameworks used by our extensions.
It also includes some centralised code for some common actions that can cause issues if they are implemented in each individual extension.

You can access this extension here: [https://github.com/distriqt/ANE-Core](https://github.com/distriqt/ANE-Core).



## Android


### Manifest Additions 

Add the following additions to your manifest additions. 

In particular you need to add the `TerminateAppJobService` inside your application node. 

```xml
<application>

    <service
        android:name="com.distriqt.extension.jobscheduler.services.TerminateAppJobService"
        android:permission="android.permission.BIND_JOB_SERVICE"
        android:exported="true" />

</application>
```



