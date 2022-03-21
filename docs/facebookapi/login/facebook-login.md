---
title: Facebook Login
sidebar_label: Facebook Login
---

In order to log a user in you will be calling the `logInWithConfiguration()` function and awaiting a login event. This function takes a `LoginConfiguration` instance as the parameter. The `LoginConfiguration` allows you to specify the required configuration for the login request, including permissions and login tracking.

The simplest version just specifies the array of permissions:

```actionscript
if (FacebookLogin.isSupported)
{
	FacebookLogin.instance.logInWithConfiguration( 
		new LoginConfiguration( [ "public_profile", "email" ] )
	);
}
```

For the prefined permissions you can see the constants defined in the [`FacebookPermissions` class](https://docs.airnativeextensions.com/asdocs/facebookapi/com/distriqt/extension/facebook/login/FacebookPermissions.html).

>
> As of April 24,2018, the `pubish_actions` permission has been removed. Please see the [Breaking Changes Changelog](https://developers.facebook.com/docs/graph-api/changelog/breaking-changes#login-4-24) for more details. To provide a way for your app users to share content to Facebook, you should use Facebook's [Sharing products](../share/overview.md) instead.
>


## Events

After calling `logInWithConfiguration()` one of the following events will be dispatched:

- `FacebookLoginEvent.SUCCESS`: The login was successful and the user is now logged in; 
- `FacebookLoginEvent.CANCEL`: The user cancelled the login process;
- `FacebookLoginErrorEvent.ERROR`: There was an error during login, check the event properties for details.

When the user is successully logged in you will have access to the access token and to the requested user details (profile, email etc).

The `FacebookLoginEvent` class on success contains:

- `accessToken`: An instance of `AccessToken` containing details about the token
- `profile`: An instance of `Profile` containing details about the current user
- `authToken`: An instance of `AuthenticationToken` containing details about the login request

The `profile` may be `null` if the profile information hasn't been retrieved or requested yet. Both will be `null` for a cancel event. The `accessToken` may be `null` if you have specified a limited tracking login.

For example:

```actionscript
FacebookLogin.instance.addEventListener( FacebookLoginEvent.SUCCESS, successHandler );
FacebookLogin.instance.addEventListener( FacebookLoginEvent.CANCEL, cancelHandler );
FacebookLogin.instance.addEventListener( FacebookLoginErrorEvent.ERROR, errorHandler );

FacebookLogin.instance.logInWithReadPermissions( [ "public_profile", "email" ] );


function successHandler( event:FacebookLoginEvent ):void
{
	trace( "successHandler()" );
	// You can now access the user
}

function cancelHandler( event:FacebookLoginEvent ):void
{
	trace( "cancelHandler()" );
}

function errorHandler( event:FacebookLoginErrorEvent ):void
{
	trace( "errorHandler() code :    " + event.errorID  );
	trace( "errorHandler() message : " + event.text  );
}
```


## Existing Login

You can check if your user is already logged in by calling the `isLoggedIn()` function. This will return `true` if your user is already logged in.

```actionscript
if (FacebookLogin.instance.isLoggedIn())
{
	// User logged in
}
```

You can also check for a valid access token, as this will only be available if the user is logged in:

```actionscript
var accessToken:AccessToken = FacebookLogin.instance.getAccessToken();
if (accessToken != null)
{
	// User logged in
}
```



## Logout

To logout the current user call the `logout()` function.

```actionscript
FacebookLogin.instance.logout();
```



## Permissions

When a person logs into your app via Facebook Login you can access a subset of that person's data stored on Facebook. Permissions are how you ask someone if you can access that data. A person's privacy settings combined with what you ask for will determine what you can access.

Permissions are strings that are passed along with a login request or an API call. Here are two examples of permissions:

- `email` - Access to a person's primary email address.
- `user_likes` - Access to the list of things a person likes.

You can get the list of granted and denied permissions at any time by using the current [`AccessToken`](access-token.md).


### When to ask for Permissions

During basic login, your app receives access to a person's public profile. To access additional profile information or to publish content to Facebook on their behalf, you need to request additional permissions, see [Permissions with Facebook Login](https://developers.facebook.com/docs/facebook-login/permissions/).

Your app should manage permissions as follows:

- Graph API Requests - Before you send Graph API requests, you should check for necessary permissions and request them if needed.

- Missing and Revoked Permissions - Your app needs to deal with missing or revoked permissions errors from Facebook such as by asking for permissions and retrying. See Error-Handling, iOS SDK.

- Timing Requests - You will get better conversion if you ask for permissions only when they are needed and provide functionality without requiring all permissions.

Permissions only need to be granted once per app, i.e. permissions granted on one platform are effectively granted on all the platforms your app supports.


### Revoked Permissions

People can also revoke permissions granted to your app in Facebook's interface at any time after they have logged in. It is important that your app regularly checks which permissions have been granted, especially when launching on a new platform. We provide methods for you to check what permissions are currently 
granted to your app.


### Request More Permissions

Use `FacebookLogin` to request additional permissions or request previously declined permissions using the same `logInWithReadPermission()` method. The SDK will see it's a re-request by the availability of the permissions in the current access token.




## Profile

Once the user is logged in you can get the user's details through the [`Profile`](http://docs.airnativeextensions.com/asdocs/facebookapi/com/distriqt/extension/facebook/login/Profile.html) (assuming you requested profile read permissions). 

```actionscript
var profile:Profile = FacebookLogin.instance.getProfile();
if (profile != null)
{
	trace( profile.name );
}
```

The [`Profile`](http://docs.airnativeextensions.com/asdocs/facebookapi/com/distriqt/extension/facebook/login/Profile.html) contains information about the user such as `firstName`, `lastName`, and `pictureUrl`.


### Profile Changes 

If you need to respond to changes in the user profile during the application session you can listen for the `FacebookProfileEvent.CHANGED` event. This event will be dispatched whenever the profile is updated.

```actionscript
FacebookLogin.instance.addEventListener( FacebookProfileEvent.CHANGED, profileChangedHandler );

function profileChangedHandler( event:FacebookProfileEvent ):void
{
	// Update profile information
}
```

This can also be useful during certain login scenarios where the profile may not be loaded initially but updated shortly after login. 


## Limited Login

Limited Login offers a login path that implements steps designed to prevent the fact that a person used Facebook to log in to your app from being used to target advertising or measure advertising effectiveness.

Limited Login returns an `AuthenticationToken` that wraps an OpenID Connect token. **The ID token cannot be used to request additional data using the Graph API, such as friends, photos, or pages. Doing so requires the use of classic Facebook Login.**

A successful login populates a global `AuthenticationToken` instance. You can provide a `nonce` for the login attempt that will be reflected in the return token. In addition, Limited Login populates a shared profile instance that contains the basic information including ID, name, profile picture, and email (if granted by the user).

To use a limited login you must set the login tracking to be `LoginTracking.LIMITED` in the `LoginConfiguration` instance when attempting login. (You will likely want to set a `nonce` value that you can use to validate the login serverside.)


```actionscript
var configuration:LoginConfiguration = new LoginConfiguration( [ "public_profile", "email" ] );

configuration.setLoginTracking( LoginTracking.LIMITED );
configuration.setNonce("123");


FacebookLogin.instance.logInWithConfiguration( configuration );
```

To retrieve the authentication token (OIDC token) you can call the `getAuthenticationToken()` function:


```as3
var token:AuthenticationToken = FacebookLogin.instance.getAuthenticationToken();

trace( token.token );
trace( token.nonce );
```

