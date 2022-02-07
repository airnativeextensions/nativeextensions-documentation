---
title: Authenticate with a backend server
sidebar_label: Authenticate with a backend server
---


If you use Google Sign-In with an app or site that communicates with a backend server, you might need to identify the currently signed-in user on the server. To do so securely, after a user successfully signs in, send the user's ID token to your server using HTTPS. Then, on the server, verify the integrity of the ID token and use the user information contained in the token to establish a session or create a new account.


:::warning
Do not accept plain user IDs, such as those you can get with the `GoogleSignInAccount.getId()` method, on your backend server. A modified client application can send arbitrary user IDs to your server to impersonate users, so you must instead use verifiable ID tokens to securely get the user IDs of signed-in users on the server side.
:::



## Setup


If you plan on identifying your user with your server you will need to request the id token and provide the server client ids when you setup the extension.

The server client ids are created through the [Google API Console](https://console.developers.google.com/apis/credentials) by creating an OAuth 2.0 web application client ID for your backend server. If you have different servers for iOS and Android applications use the `setiOSServerClientID` and `setAndroidServerClientID` otherwise if you just have the one you can use `setServerClientID`.


```actionscript
var options:GoogleIdentityOptions = new GoogleIdentityOptionsBuilder()
    .requestEmail()
    .requestIdToken()
	.setIOSClientID( IOS_CLIENT_ID )
    .setiOSServerClientID( IOS_SERVER_CLIENT_ID )
    .setAndroidServerClientID( ANDROID_SERVER_CLIENT_ID )
    .build();

GoogleIdentity.service.setup( options );
```

>
> If you didn't configure `GoogleIdentityOptionsBuilder` with `requestIdToken()`, your user's id token will return null or an empty string.
>


## Sign In

Follow the normal process to [sign in](signing-in.md) and in your sign in success handler ensure you grab the user and the id token:

```actionscript
function signInHandler( event:GoogleIdentityEvent ):void
{
	trace( event.user.userID );
    trace( event.user.authentication.idToken );
}
```

You can then use a normal `URLRequest` to send this token to your server to identify your user:

```actionscript
var vars:URLVariables = new URLVariables();
vars.idToken = user.authentication.idToken;

var request:URLRequest = new URLRequest( YOUR_SERVER_URL );
request.data = vars;
request.method = URLRequestMethod.POST;

var loader:URLLoader = new URLLoader();
loader.addEventListener( Event.COMPLETE, loaderCompleteHandler );
loader.load( request );
```

(This is just intended as a quick example and is missing error handling)


## Verify 

After you receive the ID token by HTTPS POST, you must verify the integrity of the token. To verify that the token is valid, ensure that the following criteria are satisfied:

- The ID token is properly signed by Google. Use Google's public keys (available in [JWK](https://www.googleapis.com/oauth2/v3/certs) or [PEM](https://www.googleapis.com/oauth2/v1/certs) format) to verify the token's signature. These keys are regularly rotated; examine the `Cache-Control` header in the response to determine when you should retrieve them again.
- The value of `aud` in the ID token is equal to one of your app's client IDs. This check is necessary to prevent ID tokens issued to a malicious app being used to access data about the same user on your app's backend server.
- The value of `iss` in the ID token is equal to `accounts.google.com` or `https://accounts.google.com`.
- The expiry time (`exp`) of the ID token has not passed.
- If you want to restrict access to only members of your G Suite domain, verify that the ID token has an `hd` claim that matches your G Suite domain name.

Rather than writing your own code to perform these verification steps, we strongly recommend using a Google API client library for your platform, or calling our `tokeninfo` validation endpoint.


Further information:

- [Using a Google API Client Library](https://developers.google.com/identity/sign-in/android/backend-auth#using-a-google-api-client-library)
- [Google API Client Libraries](https://developers.google.com/api-client-library/)




