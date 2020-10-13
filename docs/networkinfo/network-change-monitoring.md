---
title: Network Change Monitoring
sidebar_label: Network Change Monitoring
---

To monitor network changes you add a listener for the `NetworkInfoEvent.CHANGE` 
event and then handle the change in your event handler.


```actionscript
NetworkInfo.networkInfo.addEventListener( 
		NetworkInfoEvent.CHANGE,
		networkChangeHandler 
	);
```


```actionscript
private function networkChangeHandler( event:NetworkInfoEvent ):void
{
	trace( "isReachable=" + NetworkInfo.networkInfo.isReachable() );
	trace( "isWWAN=" + NetworkInfo.networkInfo.isWWAN() );
}
```