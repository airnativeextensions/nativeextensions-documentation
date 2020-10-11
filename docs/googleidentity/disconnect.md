---
title: Disconnect
sidebar_label: Disconnect
---

Google's [developer policies](https://developers.google.com/+/policies) also require you to 
provide the ability for a user to disconnect your application from their account. This means 
your app must provide a way to delete the association between your app and their account. 
By adding this capability to your app, you can respond to the event and trigger any appropriate 
logic such as deleting any information you have stored about the user.

```actionscript
GoogleIdentity.service.addEventListener( GoogleIdentityEvent.DISCONNECT, disconnectHandler );

GoogleIdentity.service.disconnect();
```


```actionscript
private function disconnectHandler( event:GoogleIdentityEvent ):void
{
	trace( event.type );
}
```


