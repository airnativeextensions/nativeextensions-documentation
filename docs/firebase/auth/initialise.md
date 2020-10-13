---
title: Auth - Initialise
sidebar_label: Initialise
---




## Authentication State

The most important listener you will probably want to use is for the Authentication state change.

This event is dispatched whenever the state of the user's authentication changes, such as signing in or out.

```actionscript
FirebaseAuth.service.addEventListener( FirebaseAuthEvent.AUTHSTATE_CHANGED, authState_changedHandler );
```

Whenever this event is dispatched you can check the current sign in status using the `isSignedIn` function
as in the example event handler below:

```actionscript
private function authState_changedHandler( event:FirebaseAuthEvent ):void
{
	trace( "auth state changed: "+FirebaseAuth.service.isSignedIn() );
}
```

