---
title: User Data
sidebar_label: User Data
---

Some services attach some information to the user that can be retrieved and may be necessary to validate receipts.

Currently this is supported on the following services:
  - Amazon 


You retrieve this data by using the `getUserData()` function and listening for the response.

This function will return `false` if user data is not supported with the current service.


```actionscript
var success:Boolean = InAppBilling.service.getUserData();
if (!success)
{
    // User data not supported
}
```

If it returns `true`, then one of two events will be dispatched:

- `UserDataEvent.GET_SUCCESS`: Indicates the user data was successfully retrieved;
- `UserDataEvent.GET_FAILED`: Indicates there was a failure when retrieving the data;


```actionscript
InAppBilling.service.addEventListener( UserDataEvent.GET_SUCCESS, getUserData_successHandler );
InAppBilling.service.addEventListener( UserDataEvent.GET_FAILED, getUserData_failedHandler );

InAppBilling.service.getUserData();


function getUserData_successHandler( event:UserDataEvent ):void
{
    // Success
    trace( "USER ID: " + event.userData.userId );
}

function getUserData_failedHandler( event:UserDataEvent ):void
{
    // Failure handler - retry after a delay or inform user of the issue
}
```

