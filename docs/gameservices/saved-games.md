---
title: Saved Games
sidebar_label: Usage
---


The Saved Games service gives you a convenient way to save your players' game progression to the game 
service servers. Your game can retrieve the saved game data to allow returning players to continue a 
game at their last save point from any device.

The Saved Games service makes it possible to synchronize a player's game data across multiple devices. 
For example, you can use the Saved Games service to allow a player to start a game on their phone, and 
then continue playing on a tablet without losing any of their progress. This service can also be used 
to ensure that a player's game play continues from where it left off even if their device is lost, 
destroyed, or traded in for a newer model.

Before getting started with Saved Games you must make sure that you enable them in your service configuration. 
This is necessary to ensure the service is initialised with the correct scopes and that your user is asked 
for the correct permissions when signing in.


```actionscript
var service:Service = new Service( Service.GOOGLE_PLAY_GAME_SERVICES );
service.enableSavedGames = true;

GameServices.service.initialiseService( service );
```

You can also check the `isSupported` flag to ensure the current user has saved game functionality available:

```actionscript
if (GameServices.service.savedGames.isSupported)
{
	// Saved games functionality is available
}
```

The `SavedGame` class contains a series of game metadata along with a data `ByteArray` representing the 
actual saved data. Certain operations, such as opening, will return the saved data however most will only 
return the metadata, reducing server data loads to particular operations.




## Loading Saved Games

The most common starting point is to load a list of available save games. You do this by calling 
`loadSavedGames()` and listening for the `SavedGamesEvent.LOAD_SUCCESS` and `SavedGamesEvent.LOAD_ERROR` 
events.

To retrieve all saved games for the currently signed-in player:

```actionscript
GameServices.service.savedGames.addEventListener( SavedGamesEvent.LOAD_ERROR, loadErrorHandler );
GameServices.service.savedGames.addEventListener( SavedGamesEvent.LOAD_SUCCESS, loadSuccessHandler );

GameServices.service.savedGames.loadSavedGames();
```

Then in your handlers:

```actionscript
function loadSuccessHandler( event:SavedGamesEvent ):void
{
	for each (var s:SavedGame in event.data)
	{
		trace( "GAME: ["+ s.uniqueName +"] "+s.description );
	}
}

function loadErrorHandler( event:SavedGamesEvent ):void
{
	trace( "SAVED GAMES LOAD ERROR" + event.data );
}
```


The boolean option allows you to force a refresh of the locally cached content. Generally
you should leave this to false and allow Play Games to automatically update the games, 
however there are times when you need force a refresh of the current content.


## Opening Saved Games

Once you have a list of the saved games you can load the data for a particular saved game by 
calling `openGame`. This will open the save game and retrieve any saved data associated, 
refreshing from the server if required.


```actionscript
var savedGame:SavedGame = ...; // You should use a reference from the loadSavedGames call here

GameServices.service.savedGames.addEventListener( SavedGamesEvent.OPEN_SUCCESS, savedGamesOpenSuccessHandler );

GameServices.service.savedGames.openGame( savedGame );
```

```actionscript
function savedGamesOpenSuccessHandler( event:SavedGamesEvent ):void
{
	// Here event.data should be an array of one SavedGame representing the loaded game.
	// It will have loaded saved game data
	for each (var s:SavedGame in event.data)
	{
		trace( "GAME: ["+ s.uniqueName +"] "+s.description + " :: " + s.data.toString());
	}
}
```

There are also 3 error events that can occur when opening a file:

- `OPEN_NOT_FOUND`: This is dispatched in the unusual situation where you have specified a saved 
	game that doesn't exist. If you use a save game reference from the load saved games call this 
	should never happen.
- `OPEN_FAILED`: Dispatched when the data could not be loaded at this time, perhaps from a network error
- `OPEN_ERROR`: Dispatched if an error occurred retrieve


## Creating Saved Games

If you need to create a new saved game, either because this is the first time a user is playing 
your game or if you have allowed them to create multiple save games, you will need to call `createGame`.


```actionscript
var uniqueName:String = ...; // Some unique name to reference the created save game

GameServices.service.savedGames.addEventListener( SavedGamesEvent.CREATE_SUCCESS, savedGamesCreateSuccessHandler );
GameServices.service.savedGames.addEventListener( SavedGamesEvent.CREATE_ERROR, savedGamesCreateErrorHandler );

GameServices.service.savedGames.createGame( uniqueName );
```

```actionscript
function savedGamesCreateSuccessHandler( event:SavedGamesEvent ):void
{
	// Successfully created a save game
	var sg:SavedGame = SavedGame( event.data[0] );
	//
	//	Good point to initialise the data 
	sg.data.writeUTFBytes( "asdf" );
	
	//
	//	Until we save the game it won't actually be stored 
	GameServices.service.savedGames.saveGame( sg );
}

function savedGamesCreateErrorHandler( event:SavedGamesEvent ):void
{
	trace( "Error creating saved game: " + event.data );
}
```


## Updating Saved Games

Saving data to the saved game involves firstly updating the ByteArray and then passing the updated 
`SavedGame` object to the saved game. The data can be any format you require and is saved as binary 
data. It is your applications responsibility to format and parse the data contained in a saved game.

Generally you should keep this data as small as possible however Play Games support up to 3Mb and 
Game Center is only limited by the users' iCloud available space.


```actionscript
var savedGame:SavedGame = ...; // This should be the currently opened user saved game

// Some game data
var data:String = "<game><a>data</a><b>"+Math.random().toPrecision(5)+"</b></game>";

// Change the description of the saved game
savedGame.description = "Saved game " + String( 1000 * Math.random());

// Write the new data
savedGame.data.clear();
savedGame.data.writeUTFBytes( data );
savedGame.data.position = 0;

GameServices.service.savedGames.addEventListener( SavedGamesEvent.SAVE_SUCCESS, savedGamesSaveSuccessHandler );
GameServices.service.savedGames.addEventListener( SavedGamesEvent.SAVE_ERROR, savedGamesSaveErrorHandler );

GameServices.service.savedGames.saveGame( savedGame );
```

The events will tell us the success or failure of the save:

```actionscript
function savedGamesSaveSuccessHandler( event:SavedGamesEvent ):void
{
	trace( "SAVE SUCCESS" );
}

function savedGamesSaveErrorHandler( event:SavedGamesEvent ):void
{
	trace( "SAVE ERROR: "+event.data );
}
```


## Deleting Saved Games

Deleting a saved game is simply a process of calling deleteGame and passing a valid SavedGame object.

```actionscript
var savedGame:SavedGame = ...; // This should be a reference to a saved from returned from a load or open

GameServices.service.savedGames.addEventListener( SavedGamesEvent.DELETE_SUCCESS, savedGamesDeleteSuccessHandler );
GameServices.service.savedGames.addEventListener( SavedGamesEvent.DELETE_ERROR, savedGamesDeleteErrorHandler );

GameServices.service.savedGames.deleteGame( savedGame );


function savedGamesDeleteSuccessHandler( event:SavedGamesEvent ):void
{
	trace( "SAVE SUCCESS" );
}

function savedGamesDeleteErrorHandler( event:SavedGamesEvent ):void
{
	trace( "SAVE ERROR: "+event.data );
}
```













## Saved Games UI

To simplify your development, the Saved Games API provides a default Saved Games selection user 
interface (UI) that you can use out-of-the-box. The Saved Games selection UI allows players to 
create a new saved game, view details about existing saved games, and load previous saved games.


```actionscript
GameServices.service.savedGames.displaySavedGamesUI( "Saved Games" );


```

