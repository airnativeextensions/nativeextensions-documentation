---
title: Login - Facebook Login
sidebar_label: Login - Facebook Login
---

:::caution
This is the legacy extension documentation. Find the new documentation [here](../facebookapi/)
:::

## Login 

You should now be ready to begin using the FacebookAPI extension after calling `initialiseApp`

In order to log a user in you will be creating a session and then monitoring the session state 
using event handlers. To start you will call the `createSession` function and passing 
in the required permissions and options.


```actionscript
if (FacebookAPI.isSupported)
{
	var permissions:Array = [ "public_profile", "email" ];
	var readOnly:Boolean = true;

	FacebookAPI.service.createSession( permissions, readOnly );
}
```


In order to respond to session events we should add some event handlers, to handle the 
`FacebookAPISessionEvent` events. 

The `FacebookAPISessionEvent` contains information about the current session, 
including the access token and profile information, along with any errors that 
may have occurred.

This class contains:

- `accessToken`: An instance of `AccessToken` containing details about the token
- `profile`: An instance of `Profile` containing details about the current user

These may be `null` if the user isn't logged in or if profile information hasn't been retrieved yet.


In this example we will use a single event handler for all the events:

```actionscript
FacebookAPI.service.addEventListener( FacebookAPISessionEvent.SESSION_OPENED, facebook_sessionHandler );
FacebookAPI.service.addEventListener( FacebookAPISessionEvent.SESSION_INFO, facebook_sessionHandler );  
FacebookAPI.service.addEventListener( FacebookAPISessionEvent.SESSION_OPEN_ERROR, facebook_sessionHandler );
FacebookAPI.service.addEventListener( FacebookAPISessionEvent.SESSION_OPEN_DISABLED, facebook_sessionHandler );
FacebookAPI.service.addEventListener( FacebookAPISessionEvent.SESSION_OPEN_CANCELLED, facebook_sessionHandler );
```

Then in your handler:

```actionscript
function facebook_sessionHandler( event:FacebookAPISessionEvent ):void
{
	switch (event.type)
	{
		case FacebookAPISessionEvent.SESSION_OPENED:
			// A session was opened successfully and you will have an access token
			trace("User ID:         " + event.accessToken.userId );
			trace("Expiration date: " + event.accessToken.expirationTimestamp );
			trace("Permissions:     " + event.accessToken.permissions.join(", "));
			trace("Access token:    " + event.accessToken.token);
			break;
		
		case FacebookAPISessionEvent.SESSION_INFO:
			// More information about the user's session/profile is available
			trace( "User name: " + event.profile.name );
			break;
		
		case FacebookAPISessionEvent.SESSION_OPEN_ERROR:
			// Triggered when a login error occurred
			trace("Session open error: " + event.errorMessage);
			break;
		
		case FacebookAPISessionEvent.SESSION_OPEN_DISABLED:
			// Triggered when the user has disabled Facebook login for your application in iOS settings
			trace("Session login is disabled");
			break;
		
		case FacebookAPISessionEvent.SESSION_OPEN_CANCELLED:
			// Triggered when the user cancels the sign-in process from Facebook
			trace("User cancelled sign-in");
			break;

	}
}
```


## Logout

To logout the current user call the `closeSession` function.

```actionscript
FacebookAPI.service.closeSession();
```

This function will dispatch one of two events, either a success or a failure:

```actionscript
FacebookAPI.service.addEventListener( FacebookAPISessionEvent.SESSION_CLOSED, facebook_sessionHandler );
FacebookAPI.service.addEventListener( FacebookAPISessionEvent.SESSION_CLOSE_ERROR, facebook_sessionHandler );
```

And extending the handler above:

```actionscript
	...

		case FacebookAPISessionEvent.SESSION_CLOSED:
			// The session was closed
			trace("Session closed");
			break;

		case FacebookAPISessionEvent.SESSION_CLOSE_ERROR:
			// An error occurred when closing the session
			trace( "There was an error closing the session" );
			break;

	...
```


## Permissions

When a person logs into your app via Facebook Login you can access a subset 
of that person's data stored on Facebook. Permissions are how you ask someone 
if you can access that data. A person's privacy settings combined with what 
you ask for will determine what you can access.

Permissions are strings that are passed along with a login request or an API 
call. Here are two examples of permissions:

- `email` - Access to a person's primary email address.
- `user_likes` - Access to the list of things a person likes.

You can get the list of granted and denied permissions at any time by using 
the current [`AccessToken`](login---access-token).


### When to ask for Permissions

Your app can ask for additional permissions at any time, even after a person 
logs in for the first time. For example, the `publish_actions` permission 
lets you post to a person's Facebook Timeline. It's recommended you ask for 
this permission only when a person is ready to publish a story to Facebook. 
When you ask for new permissions, the person using your app will be asked 
about those new permissions and has the ability to opt out. For more information, 
see [Optimizing Permissions Requests](https://developers.facebook.com/docs/facebook-login/permissions/requesting-and-revoking/#optimizing).

Permissions only need to be granted once per app, i.e. permissions granted 
on one platform are effectively granted on all the platforms your app supports.


### Revoked Permissions

People can also revoke permissions granted to your app in Facebook's interface 
at any time after they have logged in. It is important that your app regularly 
checks which permissions have been granted, especially when launching on a new 
platform. We provide methods for you to check what permissions are currently 
granted to your app.






## Request permissions

If you need to change the permissions of a logged in user you can use the 
`requestPermissions` function. This function is very similar to the `createSession`
function, it requires an array of permission strings.

This will present another Facebook dialog requesting the new permissions.

```actionscript
var permissions:Array = [ "public_profile", "user_friends", "email", "user_about_me" ];
				
FacebookAPI.service.requestPermissions( permissions, true );
``` 

If you require publishing / write permissions make sure you set the second parameter 
to `false`. This specifies that you are requesting write permissions.


>
> Note: Facebook does not allow requesting read and write permissions in the 
> same request so you should initially request your read permissions and then
> at some later point (normally just before you are going to perform a write)
> request the write permissions.
>


Calling `requestPermissions` will result in one of the `FacebookAPISessionEvent`s

```actionscript
FacebookAPI.service.addEventListener( FacebookAPISessionEvent.REQUEST_PERMISSIONS_COMPLETED, requestPermissionsHandler );
FacebookAPI.service.addEventListener( FacebookAPISessionEvent.REQUEST_PERMISSIONS_CANCELLED, requestPermissionsHandler );
FacebookAPI.service.addEventListener( FacebookAPISessionEvent.REQUEST_PERMISSIONS_ERROR, requestPermissionsHandler );
```

Similar to the other events in the handler you will have access to the new access token:

```actionscript
function requestPermissionsHandler( event:FacebookAPISessionEvent ):void 
{
	switch (event.type)
	{
		case FacebookAPISessionEvent.REQUEST_PERMISSIONS_COMPLETED:
			trace("User ID:         " + event.accessToken.userId );
			trace("Expiration date: " + event.accessToken.expirationTimestamp );
			trace("Permissions:     " + event.accessToken.permissions.join(", "));
			trace("Access token:    " + event.accessToken.token);
			break;

		case FacebookAPISessionEvent.REQUEST_PERMISSIONS_CANCELLED:
			// User cancelled the request
			break;

		case FacebookAPISessionEvent.REQUEST_PERMISSIONS_ERROR:
			// There was an error
			trace( "ERROR: "+ event.errorMessage );
			break;
	}
} 
```

