---
title: Enabling Server-Side Access
sidebar_label: Enabling Server-Side Access
---


With the Sign-In procedure, your app authenticates the user on the client side only; in that case, you can access the Google APIs only while the user is actively using your app. If you want your servers to be able to make Google API calls on behalf of users—possibly while they are offline—your server requires an access token.


## Setup

If you require server side access then you will need to request the server auth code and provide the server client ids when you setup the extension.

The server client ids are created through the [Google API Console](https://console.developers.google.com/apis/credentials) by creating an OAuth 2.0 web application client ID for your backend server. If you have different servers for iOS and Android applications use the `setiOSServerClientID` and `setAndroidServerClientID` otherwise if you just have the one you can use `setServerClientID`.

```actionscript
var options:GoogleIdentityOptions = new GoogleIdentityOptionsBuilder()
    .requestEmail()
    .requestIdToken()
    .requestServerAuthCode()
	.setIOSClientID( IOS_CLIENT_ID )
    .setiOSServerClientID( IOS_SERVER_CLIENT_ID )
    .setAndroidServerClientID( ANDROID_SERVER_CLIENT_ID )
    .build();

GoogleIdentity.service.setup( options );
```

Ensure you add any additional scopes your backend server requires using the `addScope` function of the builder. 


>
> If you didn't configure `GoogleIdentityOptionsBuilder` with `requestServerAuthCode()`, your user's server auth code will return `null`.
>


## Sign In

Follow the normal process to [sign in](signing-in) and in your sign in success handler ensure you grab the user and the server auth code:

```actionscript
function signInHandler( event:GoogleIdentityEvent ):void
{
	trace( event.user.userID );
    trace( event.user.serverAuthCode );
}
```

You can then use a normal `URLRequest` to send this token to your server to identify your user:

```actionscript
var vars:URLVariables = new URLVariables();
vars.serverAuthCode = user.serverAuthCode;

var request:URLRequest = new URLRequest( YOUR_SERVER_URL );
request.data = vars;
request.method = URLRequestMethod.POST;

var loader:URLLoader = new URLLoader();
loader.addEventListener( Event.COMPLETE, loaderCompleteHandler );
loader.load( request );
```

(This is just intended as a quick example and is missing error handling)



## Exchange for Access Token

On your server you'll want to exchange the server auth code for an access token which can then be used to access the Google APIs on behalf of your user.

This process is beyond the scope of this documentation but you'll find information in the Google documentation:

- [Enabling Server-Side Access](https://developers.google.com/identity/sign-in/android/offline-access)

