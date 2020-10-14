---
title: Games - Game Request Dialog
sidebar_label: Games - Game Request Dialog
---


## Game Requests

Game requests give players a mechanism for inviting their friends to play a game. Requests are sent by a player to one or more friends, and always carry a call-to-action for the game. Recipients can be existing players or new players.


## Game Request Dialog

Game requests give players a mechanism for inviting their friends to play a game. 
Requests are sent by a player to one or more friends, and always carry a call-to-action 
for the game. Recipients can be existing players or new players.

Game requests can be used to attract new players or to re-engage existing players. 
Requests can be sent in two scenarios:

- The recipient is a friend of the sender and has not authenticated the game. This scenario is useful for invites.
- The recipient is a friend of the sender and has authenticated the game before. This scenario is useful for turn-based notifications, gifting, and asking for help.

Requests are sent while the sender is in-game and are surfaced to recipients in 
several places on Facebook. Requests are always private, and can only be seen 
by the recipient. While a single request can be sent to multiple recipients at 
once, the receiver of a request only ever sees details of the sender, and can 
never see either other recipients of the request.

![](images/gamerequest-example.png)

For more information see: https://developers.facebook.com/docs/games/requests

>
> In order to show the Game Request Dialog your Facebook app must be setup as a game [category](https://developers.facebook.com/docs/games/appcenter/categories).
> If not you will want to look into the App Invite Dialog.  
>


The Game Request Dialog is very similar to other dialogs in the Facebook API. 

You will use an `GameRequestContentBuilder` to construct the content to use
for the dialog and pass this to the `show` function.


## Builder

The builder `GameRequestContentBuilder` is a helper class that allows you to easily
construct the correct content parameters for the Game Request Dialog. 


```actionscript
var builder:GameRequestContentBuilder = new GameRequestContentBuilder()
	.setRecipients(["user-id"])
	.setMessage( "Come play this game with me" );
```


## Show

Once you have created the content builder you then pass the output from this builder to the 
`show` function of the `GameRequest` interface:

```actionscript
FacebookAPI.service.gameRequest.show( builder.build() );
```

This initiates the dialog and presents it to the user. You should check the response
of this function. It is a boolean value and indicates if the Game Request dialog construction
was initiated correctly. If will return `false` if the required dialog type isn't supported
or if the application isn't setup correctly.


## Events

There are three possible events dispatched after a call to `show`:

- `GameRequestEvent.DIALOG_COMPLETED`: when the game request was successfully completed
- `GameRequestEvent.DIALOG_CANCELLLED`: when the user cancelled the game request
- `GameRequestEvent.DIALOG_ERROR`: when an error occurred during the process


```actionscript
FacebookAPI.service.appInvite.addEventListener( GameRequestEvent.DIALOG_COMPLETED, gameRequestEventHandler );
FacebookAPI.service.appInvite.addEventListener( GameRequestEvent.DIALOG_CANCELLED, gameRequestEventHandler );
FacebookAPI.service.appInvite.addEventListener( GameRequestEvent.DIALOG_ERROR, gameRequestEventHandler );
```

And then your event handler:

```actionscript
private function gameRequestEventHandler( event:GameRequestEvent ):void 
{
}
```

> 
> Note that in some circumstances the completed event maybe dispatched even when the user
> cancelled the invite. This is an issue with the Facebook SDK and we will update as soon
> as they have made a fix available.
>
