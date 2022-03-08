---
title: Turn Based Multiplayer - Invitations
sidebar_label: Invitations
---


Invitations are received when the player is invited to play a multiplayer game. 

As invitations are not specific to turn based multiplayer you will mostly be dealing 
with the main GameServices instance (`GameServices.service`) here.

Invitations can be for either real-time or turn-based multiplayer games. 
(Currently only turn-based matches are supported.)


Invitations are supported by Google Play Services only. 
Invitations on Game Center are handled through the Game Center UI.




## Loading invitations

You can load all the invitations that a player has received by calling `loadInvites`.   

```actionscript
GameServices.service.loadInvites();
```

This call will dispatch one of the following events defined in the `com.distriqt.extension.gameservices.events.MultiplayerEvent` class:

- `MultiplayerEvent.LOADINVITES_SUCCESS`: When successful and the invitations are available for processing
- `MultiplayerEvent.LOADINVITES_FAILED`: If loading the invitations failed
- `MultiplayerEvent.LOADINVITES_NOT_SUPPORTED`: This is dispatched when the current service doesn't support loading of invitations. You should treat this as a success and display an alternative interface to your user


On success you will have an array of `Invitation` objects (`com.distriqt.extension.gameservices.multiplayer.Invitation`):

```actionscript
private function gameServices_loadInvitesSuccessHandler( event:MultiplayerEvent ):void
{
	for each (var invitation:Invitation in event.data)
	{
		trace( "INVITE: ["+invitation.id+"] from:"+invitation.inviter.displayName );
	}
}
```

You can handle these invites in your UI as you require and accept or deny them 
depending on your users input.




## Receiving Invites

While you application is running you can actively receive invitations by listening for the 
`MultiplayerEvent.INVITATION_RECEIVED` event. This is dispatched whenever an invitation
is received by the game service.

```actionscript
GameServices.service.addEventListener( MultiplayerEvent.INVITATION_RECEIVED, invitationReceivedHandler );
```

You should handle this similarly to the load invitations:

```actionscript
private function invitationReceivedHandler( event:MultiplayerEvent ):void 
{
	var invitation:Invitation = Invitation(event.data);

	trace( "INVITE: ["+invitation.id+"] from:"+invitation.inviter.displayName );
}
```




## Accepting Invites

Accepting an invitation must be done through the correct handler.

You can ascertain the type of the invitation through the `invitation.type` variable
which can be either `INVITATION_TYPE_REAL_TIME` or `INVITATION_TYPE_TURN_BASED`.


### Turn Based Invites

Accepting a turn based match uses the `GameServices.service.turnBasedMultiplayer.acceptInvitation`
function which will accept an available invitation to start a match.

```actionscript
GameServices.service.turnBasedMultiplayer.acceptInvitation( invite );
```

If successful the player will receive a new match object to play this game.

- `TurnBasedMatchEvent.ACCEPTINVITATION_SUCCESS`: If successful the event will contain the match object
- `TurnBasedMatchEvent.ACCEPTINVITATION_FAILED`: Dispatched if there was an error while accepting an invitation

```actionscript
GameServices.service.turnBasedMultiplayer.addEventListener( TurnBasedMatchEvent.ACCEPTINVITATION_SUCCESS, acceptInvitationSuccessHandler );
```

```actionscript
private function acceptInvitationSuccessHandler( event:TurnBasedMatchEvent ):void 
{
	// event.match will contain the match object
}
```

You can now process the match object: [Add Turn-based Multplayer Support](turn-based-multiplayer---implementation.md)





## Decline Invites

If your player doesn't wish to accept the invite and play the match, they can
decline the invitation using the `declineInvitation` function.

```actionscript
GameServices.service.turnBasedMultiplayer.declineInvitation( invite );
```








