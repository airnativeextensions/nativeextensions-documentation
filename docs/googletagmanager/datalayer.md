---
title: DataLayer
sidebar_label: DataLayer
---

## Pushing to the DataLayer

Google Tag Manager also provides a dataLayer, into which you can push information 
about your application that can be used to fire tags you have configured in the 
Google Tag Manager web interface.

Pushing events to the `dataLayer` allows you to separate your application code 
from tags you might want to fire in response to those events.

For example, instead of hard-coding Google Analytics screenview, you can push to 
the `dataLayer` and define your tracking tags via the Google Tag Manager web 
interface. This gives you the flexibility to modify that tag, or add additional 
tags that respond to screen events, without updating your application code.

The `data` object should be a series of key/value pairs and will be interpretted 
as `String` values. 



The following example demonstrates pushing an app view event onto the data layer:

```actionscript
var data:Object = {
	event:      "openScreen",
	screenName: "Home Screen"
};
 
GoogleTagManager.service.dataLayer.push( data );
```

