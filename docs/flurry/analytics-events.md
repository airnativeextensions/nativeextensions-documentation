---
title: Analytics Events
sidebar_label: Analytics Events
---

Logging events is as simple as calling the logEvent function with an event name and an object 
representing any properties you'd like to attach to this event. In the example below we log a 
screen click and use the coordinates of the click as properties. The properties must be simple 
data types that can be converted into strings.

```actionscript
Flurry.service.analytics.logEvent( "click", { x: event.stageX, y: event.stageY } );
```


## Example

Simple example of initialisation and logging a startup event.

```actionscript
try
{
	Flurry.init( "APPLICATION_KEY" );
	
	trace( "Flurry Supported:     " + Flurry.isSupported );
	if (Flurry.isSupported)
	{
		trace( "Flurry Version:       " + Flurry.service.version );
		trace( "Flurry Agent Version: " + Flurry.service.analytics.getFlurryAgentVersion() );

		Flurry.service.analytics.initialiseWithKeys( "IOS_FLURRY_KEY", "ANDROID_FLURRY_KEY" );
		Flurry.service.analytics.startSession();
		Flurry.service.analytics.logEvent( "startup" );
	}
}
catch (e:Error)
{
	trace( "ERROR::"+e.message );
}
```
