---
title: Sign In
sidebar_label: Sign In
---


The following code demonstrates how to initiate a player sign in. You should perform the sign in 
action on some user input (button) in your game. The process is fairly straight forward, you call 
`signIn` and await the `GameServicesEvent.SIGN_IN_SUCCESS` or `GameServicesEvent.SIGN_IN_FAILED` 
events.

```actionscript
GameServices.service.addEventListener( GameServicesEvent.SIGN_IN_SUCCESS, 	signInSuccessHandler );
GameServices.service.addEventListener( GameServicesEvent.SIGN_IN_FAILED, 	signInFailedHandler );

if (!GameServices.service.isSignedIn())
{
	GameServices.service.signIn();
}
```

Then await the events:

```actionscript
function signInSuccessHandler( event:GameServicesEvent ):void
{
	var player:Player = GameServices.service.getPlayer();
	if (player != null)
	{
		trace( "player :: "+ "["+player.id+"]" +player.displayName + "(" + player.alias + ")" );
	}
	
	//
	// If you are using multiplayer functionality then this 
	// is the best time to register for notifications from
	// multiplayer game invitations and match updates.
	GameServices.service.register();
}

function signInFailedHandler( event:GameServicesEvent ):void
{
	// Handle the error
}
```


## Sign Out

You can sign out a user by calling the `signOut()` function.

```actionscript
GameServices.service.signOut();
```

When a user is signed out the extension will dispatch the `GameServicesEvent.SIGN_OUT_SUCCESS` event.


```actionscript
GameServices.service.addEventListener( GameServicesEvent.SIGN_OUT_SUCCESS, 	gameServices_signOutSuccessHandler );

function gameServices_signOutSuccessHandler( event:GameServicesEvent ):void
{
	// User signed out
}
```

There are also UI driven methods provided for the user to sign out, for example, the leaderboard UI provides the facility for a user to log out. When this occurs you will similarly receive the `GameServicesEvent.SIGN_OUT_SUCCESS` event. 

>
> It is very important that you handle these `GameServicesEvent.SIGN_OUT_SUCCESS` events to update your UI accordingly.
>

Once a user has signed out, `isSignedIn()` will return `false` and all user functionality will fail. 

:::note
Not all services support signing out programmatically. Google Play Games v2 doesn't support it and user's are suppose to manage this through the Games application.
:::



## Disconnect 

It is a requirement for most services that you provide a facility for a user to revoke or disconnect their account from your game. This means that if the player logs in at a later point, they will be required to authorise your application again for any additional permissions your application requests.

To disconnect your user, call the `disconnect()` function. 

```actionscript
if (GameServices.service.isSignedIn())
{
	GameServices.service.disconnect();
}
```

This process will also trigger the `GameServicesEvent.SIGN_OUT_SUCCESS` event indicating that the current user was signed out. 

Some services may not support this functionality and will return `false` (eg Game Center, Google Play Games v2), you may wish to attempt to sign out users on these platforms instead. For example:

```actionscript
if (GameServices.service.isSignedIn())
{
	if (!GameServices.service.disconnect())
	{
		GameServices.service.signOut();
	}
}
```


## Player Information

Once signed in you will be able to retrieve information about the player using the `loadPlayer()` function. 
This will load information into a `Player` object to give you information about the player such as `alias`, `displayName` and a player identifier (ID). 


```actionscript
GameServices.service.addEventListener( PlayerEvent.LOADED, loadPlayer_loadedHandler );
GameServices.service.addEventListener( PlayerEvent.ERROR, loadPlayer_errorHandler );
GameServices.service.loadPlayer();

function loadPlayer_loadedHandler( event:PlayerEvent ):void
{
	var player:Player = event.player;

	trace( "player :: "+ "["+player.id+"]" +player.displayName + "(" + player.alias + ")" );
}

function loadPlayer_errorHandler( event:PlayerEvent ):void
{
	trace( "loadPlayer_errorHandler(): " + event.error );
}
```	

:::caution
The `getPlayer()` function has been **deprecated** as the process to retrieve player information is now asynchronous. 
Using `getPlayer()` will only return the previously retrieved information and may be out of date or `null`. 
Calling it will trigger a load of the player information so it will become available shortly after.

```actionscript
var player:Player = GameServices.service.getPlayer();
```
:::


### Identifiers 

There are several identifiers that can be used to identify a player.

The simplest is the `id` field on the `Player` object. This identifier will be unique for a player for your game and will likely not represent the same player in another game. If you only need to identify users within your application then this is the best identifier to use. 

If you need to identify players across multiple games that you develop you will need to use the `teamPlayerId`. Services that support team identifiers will return an identifier that will be consistent across all games provided through your developer account (on iOS this mean using the same developer Team ID).


:::caution GameCenter
Versions prior to 8.4 used a now deprecated "playerId" value for the `id` field. If you need to compare identifiers from the legacy implementation you can use the `playerId` field. This value will be equivalent to the `id` field in versions 8.3 and earlier.
:::



### Images

The `Player` also contains image and icon / avatar urls, however as they may be represented as content providers on Android we don't suggest you attempt to access them directly instead use the `loadPlayerIcon()` function: 

```actionscript
GameServices.service.addEventListener( PlayerIconEvent.LOADED, playerIconLoadedHandler );
GameServices.service.addEventListener( PlayerIconEvent.ERROR,  playerIconErrorHandler );
					
GameServices.service.loadPlayerIcon( player );

function playerIconLoadedHandler( event:PlayerIconEvent ):void
{
	// event.icon will contain the BitmapData of the player's icon

	// Starling example
	var texture:Texture = Texture.fromBitmapData( event.icon );
}

private function playerIconErrorHandler( event:PlayerIconEvent ):void
{
	trace( "Error: " event.error );
}
```



## Advanced 

### Android

We highly recommend utilising the [Google Identity ANE](https://airnativeextensions.com/extension/com.distriqt.GoogleIdentity) for advanced sign-in options. It is much more complete, providing additional controls over the sign in process and user authentication options. If you are looking for additional scopes and permissions please utilise that ANE.

With Google Play Games if you require advanced user information such as requesting additional scopes you firstly setup the ANE with the `GoogleIdentityOptions.DEFAULT_GAMES_SIGN_IN` option:

```actionscript
var options:GoogleIdentityOptions = new GoogleIdentityOptionsBuilder( GoogleIdentityOptions.DEFAULT_GAMES_SIGN_IN )
		.requestProfile()
		.requestEmail()
		.setIOSClientID( Config.googlePlayClientID )
		.addScope( "additional/required/scope" )
		.build();

GoogleIdentity.service.setup( options );
```

Then use the Google Identity sign in call instead of the Game Services:

```actionscript
GoogleIdentity.service.addEventListener( GoogleIdentityEvent.SIGN_IN, signInHandler );

GoogleIdentity.service.signIn();


function signInHandler( event:GoogleIdentityEvent ):void 
{
	// Sign in complete
}
```

Once complete the `GameServices.service.isSignedIn()` will correctly return the status as though the Game Services ANE was used directly.



