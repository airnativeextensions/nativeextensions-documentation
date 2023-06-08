---
title: Authorisation
sidebar_label: Authorisation
---






## Request Authorisation

In order to access the user's health data you must first request authorisation.


To request access call the `requestAuthorisation()` method:


```actionscript
Health.instance.requestAuthorisation(
        new <HealthType> [],
        new <HealthType> [ HealthType.STEP_COUNT ],
        function ( success:Boolean, error:Error ):void
        {
            trace( "requestAuthorisation:complete( " + success + " )" );
        }
);
```

The first parameter is a `Vector.<HealthType>` reqpresenting the write / share types you require access to and the second is similarly for the read types. 

The third parameter is a callback function that will be called once the authorisation process is complete. It must be of the form `function( success:Boolean, error:Error ):void`.





## Authorisation Status

You can check the authorisation status by calling the `authorisationStatus()` method. 


```actionscript
Health.instance.authorisationStatus(
        HealthType.STEP_COUNT,
        function( status:String ):void
        {
            trace( "authorisationStatus: " + status );
        }
);
```

The first parameter is the `HealthType` you wish to query and the second is a callback function that will be called once the authorisation status has been determined (if possible). This function takes one parameter being the status string as defined in the `AuthorisationStatus` class.


:::note
On iOS there are certain limitations around the data this will return. Particularly Apple has decided not to return the read status for health data. 
Instead they suggest you request access whenever you require it and only attempt a read after you have successfully completed that process.
:::



