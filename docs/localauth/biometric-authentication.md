---
title: Biometric Authentication
sidebar_label: Biometric Authentication
---


## Checking for support

You should check if the current device supports authentication by biometrics by calling the 
`canAuthenticateWithBiometryType` function:

```actionscript
if (LocalAuth.service.canAuthenticateWithBiometryType())
{
	// Biometric authentication is available
}
```

You can also check for the individual biometry types, for example, to check if fingerprint authentication is available:

```actionscript
if (LocalAuth.service.canAuthenticateWithBiometryType( BiometryType.FINGERPRINT ))
{
	// Fingerprint authentication is available
}
```

This function checks a range of conditions to ensure that you can use biometric authentication 
on the user's device including:

- user has set a passcode
- user has scanned some fingerprints
- you have set appropriate permissions (manifest additions)



:::note
Most devices support fingerprint **or** face biometric authentication and not both. 
:::


## Authenticating

Authenticating via fingerprint is as simple as calling the `authenticateWithBiometryType` function 
and registering your event listeners.

The `authenticateWithBiometryType` function requires a `reason` which is a message that 
will be displayed to the user to explain the reason you are asking for authentication.


```actionscript
LocalAuth.service.addEventListener( LocalAuthEvent.AUTH_SUCCESS, authSuccessHandler );
LocalAuth.service.addEventListener( LocalAuthEvent.AUTH_FAILED, authFailedHandler );

LocalAuth.service.authenticateWithBiometryType( "Unlock access to locked feature" );
```

Then in your event listeners:

```actionscript
function authSuccessHandler( event:LocalAuthEvent ):void 
{
	trace( "localAuth_authSuccessHandler" );
}

function authFailedHandler( event:LocalAuthEvent ):void 
{
	trace( "localAuth_authFailedHandler: " + event.errorCode + "::" +event.message  );
}
```

The `AUTH_SUCCESS` event will be fired only if the user successfully authenticates using 
their fingerprint.

In all other cases the `AUTH_FAILED` event is dispatched and you should respond by processing
the errorCode appropriately. The error codes are defined in the `LocalAuthError` class.
For example if the user cancels the authentication the `LocalAuthError.USER_CANCEL` code 
will be returned.

An important code to process is the `LocalAuthError.USER_FALLBACK`. This is received when the
user has pressed the **Enter Password** option in the dialog after failing to scan a fingerprint
once. You should respect this decision and provide the ability for the user to authenticate 
using your normal method.

You can also specify the biometry type to be used if you require:

```actionscript
LocalAuth.service.authenticateWithBiometryType( 
	"Unlock access to locked feature", 
	BiometryType.FINGERPRINT 
);
```

:::note
Specifying the biometry type may return `false` when the biometry type is not supported 
:::



## Cancel Authentication

If you wish to programatically cancel the authentication process 
you can call `cancelAuthenticate`.

```actionscript
LocalAuth.service.cancelAuthenticate();
```

After calling this you should receive an `AUTH_FAILED` event to indicate the failure of the authentication process (if an authentication process was occurring at the time).
