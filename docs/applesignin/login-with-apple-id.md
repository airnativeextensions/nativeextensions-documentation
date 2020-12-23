---
title: Login with Apple Id
sidebar_label: Login with Apple Id
---



## Login 

To initiate login call the `loginWithAppleId()` function:

```actionscript
AppleSignIn.instance.loginWithAppleId();
```

This will initiate the sign in process and present the "Sign In with Apple" UI.


## Options

You can pass a few options to the login function allowing you to control some aspects of the process. Mainly whether the email and full name of the user should be requested.

This is done by passing an instance of the `AppleSignInOptions` to the `loginWithAppleId()` function.

For example, to request both the email and full name scopes:

```actionscript
var options:AppleSignInOptions = new AppleSignInOptions()
        .setRequestedScopes([
                AppleSignInScopes.FULL_NAME,
                AppleSignInScopes.EMAIL
                            ]);

AppleSignIn.instance.loginWithAppleId( options );
```

### iOS 

>
> Important: To sign in with an Apple account, users must:
> 
> - Have an Apple ID with two-factor authentication (2FA) enabled.
> - Be signed in to iCloud on an Apple device.
>
> See [How to use Sign in with Apple](https://support.apple.com/en-us/HT210318). You will also need to meet these requirements to test your integration with Sign In with Apple.
>



### Android

If you are deploying to Android as well then you will need to provide your Service ID (client id) and redirect url in the options.

For example:

```actionscript
var options:AppleSignInOptions = new AppleSignInOptions()
        .setRequestedScopes([
                AppleSignInScopes.FULL_NAME,
                AppleSignInScopes.EMAIL
                            ])
        .setClientId( "com.distriqt.test.applesignin" )
        .setRedirectUrl( "https://auth.distriqt.com/appleoauth" )
;
```

The client id is the identifier used to create your **Service ID** in the apple developer console.

The redirect url is one of the urls you entered when creating your **Service ID** that you intend to use for this login request.

*These values are ignored on iOS.*


## Events

During the login process you will receive one of the following events:

- `AppleSignInEvent.SUCCESS`: Upon successfully authentication;
- `AppleSignInErrorEvent.ERROR`: If an error occurred during login;

You should listen for both of these events and handle accordingly.

```actionscript
AppleSignIn.instance.addEventListener( AppleSignInErrorEvent.ERROR, errorHandler );
AppleSignIn.instance.addEventListener( AppleSignInEvent.SUCCESS, successHandler );

function successHandler( event:AppleSignInEvent ):void
{
    trace( "user: " + event.appleIdCredential.user );
    trace( "identityToken: " + event.appleIdCredential.identityToken );
    trace( "authorizationCode: " + event.appleIdCredential.authorizationCode );
    trace( "raw Nonce: " + event.rawNonce );
}

function errorHandler( event:AppleSignInErrorEvent ):void
{
    trace( "errorHandler(): [" + event.errorID + "] :: " + event.text  );
}
```

You can access the "nonce" used to initiate this authorisation request in the success handler via the `event.rawNonce` property. This can be used to further authenticate with services such as Firebase. 



## User Revoke

The user can revoke the authentication through their apple account. You can listen for a revoke event which will be dispatched if the authentication is ever revoked by the user:

```actionscript
AppleSignIn.instance.addEventListener( AppleSignInEvent.REVOKED, revokedHandler );


function revokedHandler( event:AppleSignInEvent ):void
{
    // User revoked authentication
}
```



## Example


```actionscript
AppleSignIn.instance.addEventListener( AppleSignInErrorEvent.ERROR, errorHandler );
AppleSignIn.instance.addEventListener( AppleSignInEvent.SUCCESS, successHandler );

var options:AppleSignInOptions = new AppleSignInOptions()
        .setRequestedScopes([
                AppleSignInScopes.FULL_NAME,
                AppleSignInScopes.EMAIL
                            ])
        .setClientId( "com.distriqt.test.applesignin" )
        .setRedirectUrl( "https://auth.distriqt.com/appleoauth" );

AppleSignIn.instance.loginWithAppleId( options );



function successHandler( event:AppleSignInEvent ):void
{
    trace( "user: " + event.appleIdCredential.user );
    trace( "identityToken: " + event.appleIdCredential.identityToken );
    trace( "authorizationCode: " + event.appleIdCredential.authorizationCode );
}

function errorHandler( event:AppleSignInErrorEvent ):void
{
    trace( "errorHandler(): [" + event.errorID + "] :: " + event.text  );
}
```


## Android 

With Android the process uses a webview and the OAuth web login.

In order to successfully complete this process you need to setup a server that will exchange the authorisation code for the identity token and user.

There are a few differences with this process that you should be aware of as it will affect how you implement login on Android.

- User's name components are only returned the first time they log in.


