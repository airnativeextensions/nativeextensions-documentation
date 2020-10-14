---
title: Initialise Facebook App
sidebar_label: Initialise Facebook App
---

## Initialise the Facebook Application

The first step to use the Facebook API ANE is to inform the ANE of your Facebook Application ID.

This is a simple matter of calling `initialiseApp` and must be done after `init` is called but 
before any other functionality is used.


```actionscript
// Initialise the ANE with your Facebook App ID
FacebookAPI.service.initialiseApp( "YOUR_FACEBOOK_APP_ID" );
```

This will initialise the Facebook SDK internally and inform the SDK of your applicaiton id.
