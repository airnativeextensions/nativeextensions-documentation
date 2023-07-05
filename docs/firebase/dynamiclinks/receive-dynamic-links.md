---
title: DynamicLinks - Receive Dynamic Links
sidebar_label: Receive Dynamic Links
---

## Receive Dynamic Links

Receiving dynamic links is simply a matter of listening for the `DynamicLinkEvent.RECEIVED` event.

When you add a listener for this event the extension will check for any dynamic links
that may have started your application and dispatch them, so you should be prepared to  
receive an event shortly after adding the listener:

```actionscript
FirebaseDynamicLinks.service.addEventListener( DynamicLinkEvent.RECEIVED, dynamicLink_receivedHandler );
```

The `DynamicLinkEvent` contains a `data` parameter which will be an instance of the `PendingDynamicLinkData` class. The `PendingDynamicLinkData` contains information about the link including the `link` parameter and additional information such as the `matchType`.



```actionscript
function dynamicLink_receivedHandler( event:DynamicLinkEvent ):void
{
	trace( "dynamicLink_receivedHandler(): " + event.data.link );
}
```



## Initialising Core callbacks

In order to receive events from start up you will need to ensure you call `Core.init()` before initialising any of the Firebase functionality.   



