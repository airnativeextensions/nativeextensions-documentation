---
title: Game Request Dialog
sidebar_label: Game Request Dialog
---

Game requests give players a mechanism for inviting their friends to play a game. Requests are sent by a player to one or more friends, and always carry a call-to-action for the game. Recipients can be existing players or new players.

Game requests can be used to attract new players or to re-engage existing players. Requests can be sent in two scenarios:

1. The recipient is a friend of the sender and has not authenticated the game. This scenario is useful for invites.
2. The recipient is a friend of the sender and has authenticated the game before. This scenario is useful for turn-based notifications and asking for help.

Requests are sent while the sender is in-game and are surfaced to recipients in several places on Facebook. Requests are always private, and can only be seen by the recipient. While a single request can be sent to multiple recipients at once, the receiver of a request only ever sees details of the sender, and can never see either other recipients of the request.

| ![](images/game-request-1.png) | 
| --- | 
| *An example Game Request surfaced on Facebook for Desktop.* |




## Show 

In order to show the game request dialog you must first create a content object that is used to populate the request. You will use the `GameRequestContentBuilder` class to build your content, for example:

```actionscript 
var builder:GameRequestContentBuilder = new GameRequestContentBuilder()
            .setMessage( "Come play this game with me" );
```

You must at least specify the message.

You can also specify other content with the builder such as specific recipients if you have used the graph api to get user ids.


```actionscript 
var builder:GameRequestContentBuilder = new GameRequestContentBuilder()
            .setMessage( "Come play this game with me" )
            .setRecipients( [ "user_id_1", "user_id_2" ] );
```


Once you have your content simply call the `show()` function at the appropriate time in your application with the content:


```actionscript
FacebookGamingServices.instance.gameRequestDialog.show( builder.build() );
```


The extension will dispatch an event based on the response from the dialog:

- `GameRequestDialogEvent.COMPLETE`: Dispatched when the dialog was closed and the user completed the process;
- `GameRequestDialogEvent.CANCEL`: Dispatched if the dialog was cancelled by the user;
- `GameRequestDialogEvent.ERROR`: Dispatched if there was an error, the `errorMessage` of the event will contain more details;



```actionscript
FacebookGamingServices.instance.gameRequestDialog.addEventListener( GameRequestDialogEvent.COMPLETE, completeHandler );
FacebookGamingServices.instance.gameRequestDialog.addEventListener( GameRequestDialogEvent.CANCEL, cancelHandler );
FacebookGamingServices.instance.gameRequestDialog.addEventListener( GameRequestDialogEvent.ERROR, errorHandler );
					

function completeHandler( event:GameRequestDialogEvent ):void
{
    trace( "completeHandler()" );
}
		
function cancelHandler( event:GameRequestDialogEvent ):void
{
	trace( "cancelHandler()" );
}
		
function errorHandler( event:GameRequestDialogEvent ):void
{
	trace( "errorHandler() " + event.errorMessage );
}
```

