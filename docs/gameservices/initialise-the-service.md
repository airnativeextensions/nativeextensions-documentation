---
title: Initialise the Service
sidebar_label: Initialise the Service
---

This step initialises the platform using your game service settings. Initialising the service performs serveral things, notably:

- configures the extension to use the requested service;
- initialises any required configuration and connections to the service; 

You perform this initialisation by firstly constructing an instance of the `Service` class, setting the required service type and 
then passing this to the `initialiseService()` method.

This will then dispatch either:

- `GameServicesEvent.INITIALISED`: when the service is initialised successfully and game services are available;
- `GameServicesEvent.INITIALISE_ERROR`: when the service failed to initialise, check the error and message for help on resolving the issue;



```actionscript
var service:Service;


// CHANGE THIS TO INITIALISE YOUR REQUIRED SERVICE(S)

if (GameServices.service.isServiceSupported( Service.HUAWEI_GAME_SERVICE ))
{
	service = new Service( Service.HUAWEI_GAME_SERVICE );
}

else if (GameServices.service.isServiceSupported( Service.GOOGLE_PLAY_GAME_SERVICES ))
{
	service = new Service( Service.GOOGLE_PLAY_GAME_SERVICES );
}

else if (GameServices.service.isServiceSupported( Service.IOS_GAME_CENTER ))
{
	service = new Service( Service.IOS_GAME_CENTER );
}


GameServices.service.addEventListener( GameServicesEvent.INITIALISED, initialisedHandler );	
GameServices.service.addEventListener( GameServicesEvent.INITIALISE_ERROR, errorHandler );	

GameServices.service.initialiseService( service );



function initialisedHandler( event:GameServicesEvent ):void
{
	// The platform has been initialised ready for sign in functions
}

function gameServices_initialiseErrorHandler( event:GameServicesEvent ):void
{
	// An error occurred, try initialising the service again later 
	// Check the error code for developer errors and potentially network issues
}
```


