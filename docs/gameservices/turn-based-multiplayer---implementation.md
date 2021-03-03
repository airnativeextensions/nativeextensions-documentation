---
title: Turn Based Multiplayer - Implementation
sidebar_label: Implementation
---

Sections:

- [Creating a Match](#creating-a-match)
- [Loading Matches](#loading-matches)
- [Match Data](#match-data)
- [Taking Turns](#taking-turns)
- [Match Updates](#match-updates)
- [Leaving a Match](#leaving-a-match)
- [Completing a Match](#completing-a-match)



## Creating a match

### Player Selection

The process of creating a match works slightly differently on the platforms however the 
best cross-platform way to create a match is to first call `displayCreateMatchUI`. 

This will display some form of UI that will ask the user to select players to invite,
and then end in a create match event.

This call allows a few options for you to guide how many players, minimum, maximum and 
whether auto matching is allowed, through the `PlayerSelectionOptions` class.


```actionscript
var options:PlayerSelectionOptions = new PlayerSelectionOptions();
options.minPlayers = 1;
options.maxPlayers = 3;
options.allowAutomatch = false;

GameServices.service.turnBasedMultiplayer.displayCreateMatchUI( options );
```

This will then dispatch one of the following events:

- `TurnBasedMultiplayerEvent.CREATEMATCH_UI_SUCCESS`: Dispatched when the player selects oponents for the match
- `TurnBasedMultiplayerEvent.CREATEMATCH_UI_ERROR`: Dispatched if there was an error during the create match UI
- `TurnBasedMultiplayerEvent.CREATEMATCH_UI_CANCEL`: Dispatched when the player cancels the create match UI
- `TurnBasedMatchEvent.CREATE_SUCCESS`: Dispatched when the match is created

```actionscript
GameServices.service.turnBasedMultiplayer.addEventListener( TurnBasedMultiplayerEvent.CREATEMATCH_UI_SUCCESS, createMatchUISuccessHandler );
GameServices.service.turnBasedMultiplayer.addEventListener( TurnBasedMultiplayerEvent.CREATEMATCH_UI_CANCEL, createMatchUICancelHandler );
GameServices.service.turnBasedMultiplayer.addEventListener( TurnBasedMultiplayerEvent.CREATEMATCH_UI_ERROR, createMatchUIErrorHandler );

GameServices.service.turnBasedMultiplayer.addEventListener( TurnBasedMatchEvent.CREATE_SUCCESS, matchCreateHandler );
```


### Create Match

You can handle the cancel and errors as your application requires. The success event will contain
information about the selected players and allow you to create a match:

```actionscript
function createMatchUISuccessHandler( event:TurnBasedMultiplayerEvent ):void
{
	//
	//	This event is fired when the create match ui is completed and we need
	//	to manually call create match.
	//
	//	This is not needed on GameCenter as you will immediately get a CREATE_SUCCESS  
	//	event.
	
	var config:TurnBasedMatchConfig = event.data;
	message( " --- INVITED PLAYERS" );
	for each (var id:String in config.invitedPlayers)
		message( " P: " + id );
	message( " --- " );
	
	GameServices.service.turnBasedMultiplayer.createMatch( config );
}
```

Then when the match is created you will receive the `TurnBasedMatchEvent.CREATE_SUCCESS` event
which will contain the `TurnBasedMatch` reference for the match: 

```actionscript
function matchCreateHandler( event:TurnBasedMatchEvent ):void 
{
	//	You should store the match for usage in your game
	// 	This forms the main interface for turn based matches.
	var match:TurnBasedMatch = event.match;
}
```

At this point it is good practice to initialise the `match` with some initial game data.
The `match` object contains a `data` ByteArray that you use to store information about
the game state. 

```actionscript
// Use match.data to write some initial data state
```


### Taking the first turn

Once you have created the match you can now have your player take their first turn
executing your game play as you see fit. The result of the players actions should 
be then written to the match data and then you should call `takeTurn` specifying 
the next participant. See Taking Turns for more information on using `takeTurn`.

**It is very important that your player takes the first turn.** 

Until the player takes the first turn the match will not be in a state that will 
trigger notifications to other players and they won't receive invitations to the game or match.





## Loading Matches

To load matches currently in progress for the current player you can call the `loadMatches`
function.

```actionscript
GameServices.service.turnBasedMultiplayer.loadMatches();
```

You can also specify loading matches that are in a particular turn status for the player
by passing an array of statuses to the loadMatches call. For example, to load all matches
that it is currently the players turn:

```actionscript
GameServices.service.turnBasedMultiplayer.loadMatches( [ TurnBasedMatchStatus.MATCH_TURN_STATUS_MY_TURN ] );
```

The call will dispatch an event when complete, being either:

- `TurnBasedMultiplayerEvent.LOADMATCHES_SUCCESS`: When successful. The event will contain the loaded matches
- `TurnBasedMultiplayerEvent.LOADMATCHES_FAILED`: If an error occurred.


```actionscript
GameServices.service.turnBasedMultiplayer.addEventListener( TurnBasedMultiplayerEvent.LOADMATCHES_SUCCESS, loadMatchesSuccessHandler );
GameServices.service.turnBasedMultiplayer.addEventListener( TurnBasedMultiplayerEvent.LOADMATCHES_FAILED, loadMatchesFailedHandler );
```

On success the matches are available through the event payload. You can immediately start
using these match objects, listening for updates or taking turns as required.

```actionscript
function loadMatchesSuccessHandler( event:TurnBasedMultiplayerEvent ):void 
{
	for each (var match:TurnBasedMatch in event.data)
	{
		message( "MATCH :: ["+match.matchId+"] "+match.status );
		
		// Display matches to user or process as required by your application
	}
}
```







## Match Data

The match data is a `ByteArray` object that you can use as requried to store data,
however it is size limited so you should take efforts to minimise the size of the 
data required by your game. 

Some general strategies of encoding the data include:

- **Encode only player actions**: In this design, your match data simply consists of the moves made by the players. For example, in chess, you know that white goes first, moves always alternate, and a piece moves from one board position to another. This makes it easy for you to encode each move as the starting and ending position of the piece moved. The rest of the data (who made the moves) can be completely inferred. When your game loads the match data, it quickly replays the moves to generate the current board position.
This strategy works best for games with a small number of possible kinds of actions and a small number of moves per match. Also, with this model, it is very possible for your game to replay the moves in its user interface, allowing players to see exactly what moves other opponents made to get the board into the new state. Showing a player these moves makes it very easy for a player to understand how the game got to the current state.

- **Encode only the current state of the match**: For very complex games, the actual state required to encode the game could be very large. In this case, you may need to encode the current state of the match without worrying about the actions that generated that match data. This is particularly true for very complex games where the list of moves might grow too large to fit in the available storage space. This strategy is recommended as a last resort. Players lose all context of what happened on previous turns of the match. For games with long timeouts between turns, players may grow bored or frustrated if they cannot remember the state of a match they were playing. This is particularly true when players participate in multiple matches simultaneously.

- **Encode the current state of the match and a set of recent player actions**: This is a hybrid strategy that borrows elements from the other two strategies. Essentially, the match data stored on Game Center consists of a recent snapshot of the match plus other data that encodes recent actions since that last snapshot was taken. When the data that records the actions grows too large, your game replays some of those moves to update the match snapshot and then deletes those moves from its list of actions.


The size of the match data is limited to:

- 64kb on Game Center
- 128kb on Google Play Games 





## Taking Turns

To take a turn you will be updating the data in the `match` object and then calling
`takeTurn` specifying the next participant.

The next participant can be any of the participants in the match which are available
through the `match.participants` array of `Participant` objects or you can specify 
null if you wish for an auto matched player to take the next turn.

```actionscript
// Update the match data
match.data.writeInt(  ... );

// Determine your next player based on your game rules
var next:Participant = ...;

// Call takeTurn to end the turn and move play to next participant
match.takeTurn( next );
```


The local player will also be indexed in the match participants so it is sometimes
useful to find the index of the local player in the participants.

```actionscript
var localPlayer:Player = GameServices.service.getPlayer();

for (var j:int = 0; j < match.participants.length; ++j)
{
	if (Participant(match.participants[j]).player.id == localPlayer.id)
	{
		localPlayerIndex = j;
	}
}
```

So for example your game might just iterate through the participants in turn
order:

```actionscript
//	Take the next player in the participants 
var nextIndex:int = (localPlayerIndex + 1 >= match.participants.length) ? 0 : localPlayerIndex + 1 ;

// If this is an auto-match game, then there may only be one player, in which case
// 	you will want to pass a mull value for the next participant allowing an auto match
//	player to take their turn.

var next:Participant = null;
if (nextIndex != localPlayerIndex)
	next = _match.participants[ nextIndex ];
```

The call to `takeTurn` will dispatch an event on completion:

- `TurnBasedMatchEvent.TAKETURN_SUCCESS`: If the call is successful
- `TurnBasedMatchEvent.TAKETURN_FAILED`: If there was an error taking the turn, you should try the call again later.






## Match Updates

When another participant changes the state of the match your application will
receive the `MATCH_UPDATED` event. 

```actionscript
GameServices.service.turnBasedMultiplayer.addEventListener( TurnBasedMatchEvent.MATCH_UPDATED, matchUpdatedHandler );
```

When you receive this event you should update your application with the match in the event
The updated `match` will contain the latest match status and data.

```actionscript
function matchUpdatedHandler( event:TurnBasedMatchEvent ):void 
{
	updateMatch( event.match );
}
```

For example:

```actionscript
function updateMatch( match:TurnBasedMatch ):void
{
	// Clear out the old match reference if you are holding onto one
	if (_match)
	{
		_match.removeEventListener( TurnBasedMatchEvent.TAKETURN_SUCCESS, match_takeTurnSuccessHandler );
		// ... 
	}

	// Update with the new reference
	_match = match;
	if (_match)
	{
		_match.addEventListener( TurnBasedMatchEvent.TAKETURN_SUCCESS, match_takeTurnSuccessHandler );
		// ...

		// You should now process the match state checking if the status has changed 
		// and the turn status to see which player is now active
		processMatchState();
	}
}
```

If you have multiple matches you should also use the `matchId` to distinguish between
the different matches in progress. 






## Leaving a Match

If a player wishes to leave a match you should call `leaveMatchDuringTurn` if it is the 
players turn or `leaveMatch` if not. If it is the players turn it is important that 
you call `leaveMatchDuringTurn` and specify the player that will take the next turn
based on your game logic, so that the match may continue for the other players.

```actionscript
if (match.turnStatus == TurnBasedMatchStatus.MATCH_TURN_STATUS_MY_TURN)
{
	// Determine the next participant based on your game logic
	var next:Participant = ...;
	
	match.leaveMatchDuringTurn( next );
}
else
{
	match.leaveMatch();
}
```

Calling these functions will result in one of the following events:

 - `TurnBasedMatchEvent.LEAVE_SUCCESS`: Dispatched if the leave call was successful and the player is no longer an active participant.
 - `TurnBasedMatchEvent.LEAVE_FAILED`: Dispatched if the leave call failed. Check the error for details.





## Completing a Match

Completing or finishing a match involves calling `finishMatch` and specifying the result.
This should be called by the player taking the last turn in the match and call this method
instead of `takeTurn`. 

The result of the match is specified by an Array of `ParticipantResult` objects for each
of the participants in the match that require a result. If there is simply a winner, then 
you can use a single `ParticipantResult` in this Array.


```actionscript
var winner:ParticipantResult = new ParticipantResult();
winner.result       = ParticipantResult.MATCH_RESULT_WIN;
winner.participant  = ...; // Participant from match.participants array that has won
winner.placing      = 1;

match.finishMatch( [ winner ] );
```

The call to `finishMatch` will dispatch one of the following events:

- `TurnBasedMatchEvent.FINISH_SUCCESS`: Dispatched when `finishMatch` is successful 
- `TurnBasedMatchEvent.FINISH_FAILED`: Dispatched when `finishMatch` has failed, you should attempt the call again later 

```actionscript
match.addEventListener( TurnBasedMatchEvent.FINISH_SUCCESS, finishSuccessHandler );

function finishSuccessHandler( event:TurnBasedMatchEvent ):void 
{
	// Match will now be complete
}
```








