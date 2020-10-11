---
title: Auth Utilities
sidebar_label: Auth Utilities
---


AuthUtil provides static utility methods to:

- Acquire ClientLogin, OAuth2, ID, or offline access tokens for Google accounts;
- Identity Verification Signature for Game Center;


## Service Configuration

### Google Play Game Services

In order to retrieve the server authorisation tokens you need to include the server client id in your service configuration. 

```actionscript
var service:Service;
if (GameServices.service.isServiceSupported( Service.GOOGLE_PLAY_GAME_SERVICES ))
{
	service = new Service( Service.GOOGLE_PLAY_GAME_SERVICES );
	service.serverClientId = "googlePlayServerClientID";
}
```

>
>The server client id for Google Play Game Services is the **Web application** Client ID and will be of the form `XXXXXXXXXXXX-yyyyyyyyyyyyyyyyyyyyyyyyyyyyy.apps.googleusercontent.com`.
>


>
> **Note**: We highly recommend utilising the [Google Identity ANE](https://airnativeextensions.com/extension/com.distriqt.GoogleIdentity) for advanced sign-in options. It is much more complete, providing additional controls over the sign in process and user authentication options. If you are looking for additional scopes and permissions please utilise that ANE.
>



### Game Center

Nothing additional is required.



## Get Authorisation Token

You may wish to perform actions on behalf of a user using an API query or other such service.
This will generally require a token or authorisation to be consumed by some other service 
on behalf of a specified user account. 

To retrieve a token you call the `getToken` function with the scopes you require. The scopes 
define how the token can be consumed, ie. the services that you will have access to. 

For example:

```actionscript
if (GameServices.service.authUtil.isSupported)
{
	GameServices.service.authUtil.addEventListener( AuthUtilEvent.AUTH_TOKEN_SUCCESS, authTokenSuccessHandler );
	GameServices.service.authUtil.addEventListener( AuthUtilEvent.AUTH_TOKEN_ERROR, authTokenErrorHandler );
	
	GameServices.service.authUtil.getToken();
}
```

Then your event handlers:

```actionscript
private function authTokenSuccessHandler( event:AuthUtilEvent ):void
{
	trace( "AUTH UTIL TOKEN: " + JSON.stringify( event.data ));
}

private function authTokenErrorHandler( event:AuthUtilEvent ):void
{
	trace( "AUTH UTIL ERROR: " + event.data );
}
```


### Google Play Game Services

With Google Play Game Services this process will retrieve the current Google user's **Server Auth Code** and the **ID Token** from the `GoogleSignInAccount`.

If available the following will be returned in the `event.data` object:

- `authCode`: A one-time server auth code to send to your web server which can be exchanged for access token and sometimes refresh token if server client id is provided in your service
- `idToken`: An ID token that you can send to your server if server client id is provided in your service

You will get an error event if you haven't specified the `serverClientId` in your service.

>
> Once you have the auth code you can send the server auth code to your backend server to exchange for access and refresh tokens. 
> Use the access token to call the Google Play Games Services API on behalf of the player and, optionally, store the refresh token to acquire a new access token when the access token expires.
>


### Game Center

For GameCenter this returns the **Identity Verification Signature** from the `generateIdentityVerificationSignatureWithCompletionHandler` function. 

The following will be returned in the `event.data` object:

- `url`: The URL for the public encryption key
- `salt`: A random NSString used to compute the hash and keep it randomized (Base64 encoded)
- `signature` The verification signature data generated (Base64 encoded)
- `timestamp`: The date and time that the signature was created


[More information](http://developer.apple.com/reference/gamekit/gklocalplayer/1515407-generateidentityverificationsign).





