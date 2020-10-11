---
title: Signing In
sidebar_label: Signing In
---


Signing in and out is a simple process of adding a series of listeners and then calling the 
`signIn` method. You will then receive either a `GoogleIdentityEvent.SIGN_IN` or a 
`GoogleIdentityEvent.ERROR` depending on the success of the sign in operation.

```actionscript
GoogleIdentity.service.addEventListener( GoogleIdentityEvent.SIGN_IN, signInHandler );
GoogleIdentity.service.addEventListener( GoogleIdentityEvent.ERROR, errorHandler );

GoogleIdentity.service.signIn();
```

On successful sign in the event.user property will contain user information:

```actionscript
function signInHandler( event:GoogleIdentityEvent ):void
{
	trace( event.user.userID );
}

function errorHandler( event:GoogleIdentityEvent ):void
{
	trace( event.errorCode + "::" + event.error );
}
```




## Sign In Silently

When your application starts up it can be good practice to attempt to sign in your user automatically if they have previously signed in.
A silent sign in allows you to achieve this by attempt to access stored credentials and signing in the user again, without any user interface being presented.

Signing in silently is exactly the same as the normal sign in process above, except you'll call `signInSilently` instead and the sign in will fail if the user hasn't recently signed in using the UI.

```actionscript
GoogleIdentity.service.addEventListener( GoogleIdentityEvent.SIGN_IN, signInHandler );
GoogleIdentity.service.addEventListener( GoogleIdentityEvent.ERROR, errorHandler );

GoogleIdentity.service.signInSilently();

function signInHandler( event:GoogleIdentityEvent ):void
{
	trace( event.user.userID );
}

function errorHandler( event:GoogleIdentityEvent ):void
{
	trace( event.errorCode + "::" + event.error );
}
```




## Sign out

Signing out is a call to the `signOut` function and the appropriate event listener.

```actionscript
GoogleIdentity.service.addEventListener( GoogleIdentityEvent.SIGN_OUT, signOutHandler );

GoogleIdentity.service.signOut();
```

```actionscript
function signOutHandler( event:GoogleIdentityEvent ):void
{
	trace( event.type );
}
```

