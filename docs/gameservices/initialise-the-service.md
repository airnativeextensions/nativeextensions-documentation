---
title: Initialise the Service
sidebar_label: Initialise the Service
---

This step initialises the platform using your game service settings


```actionscript
var service:Service;
if (GameServices.service.isServiceSupported( Service.GOOGLE_PLAY_GAME_SERVICES ))
{
	service = new Service( Service.GOOGLE_PLAY_GAME_SERVICES );
}

else if (GameServices.service.isServiceSupported( Service.IOS_GAME_CENTER ))
{
	service = new Service( Service.IOS_GAME_CENTER );
}

GameServices.service.addEventListener( GameServicesEvent.INITIALISED, initialisedHandler );	
GameServices.service.initialiseService( service );
```

Then in your event handler:

```actionscript
function initialisedHandler( event:GameServicesEvent ):void
{
	// The platform has been initialised ready for sign in functions
}
```
