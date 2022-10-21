---
title: Usage
sidebar_label: Usage
---


## Native Logging

Logging to the native logs can be useful when debugging your application when in a live environment. Logs will be output along with other native logs and make it easier to determine the cause of an issue if interacting with other native processes.

To log an entry to the native log use the `log()` method:

```actionscript
Debug.service.log( "some message", "TAG (optional)" );
```
