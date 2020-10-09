---
title: Get User Credentials
sidebar_label: Get User Credentials
---


>
> This has proved highly unreliable on iOS and we currently don't recommend using this process. It seems to commonly return an error even though everything seems correct. We are waiting for feedback / updates from Apple on this
>
> Instead we recommend implementing a server to perform authentication checks using the auth code / tokens.
>

## State

You can check the user credential state by calling the `getCredentialStateForUser()` and passing the "user" received when authentication succeeded.

>
> Note: This is supported on **iOS only**
>

The user value is the `AppleIdCredential.user` property and you should store this value as an identifier for your user.

```actionscript
AppleSignIn.instance.getCredentialStateForUser( user );
```


## Events 

Calling `getCredentialStateForUser()` will dispatch one of two events:

- `AppleSignInEvent.GET_CREDENTIAL_STATE_SUCCESS`: If the credential state was successfully ;
- `AppleSignInErrorEvent.GET_CREDENTIAL_STATE_ERROR`: If an error occurred;


```actionscript
AppleSignIn.instance.addEventListener( AppleSignInEvent.GET_CREDENTIAL_STATE_SUCCESS, getCredentials_successHandler );
AppleSignIn.instance.addEventListener( AppleSignInErrorEvent.GET_CREDENTIAL_STATE_ERROR, getCredentials_errorHandler );

AppleSignIn.instance.getCredentialStateForUser( user );


function getCredentials_successHandler( event:AppleSignInEvent ):void
{
    trace( "getCredentials_successHandler(): " + event.state );
}

function getCredentials_errorHandler( event:AppleSignInErrorEvent ):void
{
    trace( "getCredentials_errorHandler(): [" + event.errorID + "] :: " + event.text  );
} 
```


## Returned State

The value of the `state` property in the returned event will be one of the `AppleIDCredentialState` defined values:

- `AppleIDCredentialState.REVOKED` : The user ID was revoked by the user;
- `AppleIDCredentialState.AUTHORIZED` : The user ID is in good state;
- `AppleIDCredentialState.NOT_FOUND` : The user ID was not found;

