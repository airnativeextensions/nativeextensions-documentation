---
title: Saved Games - Conflicts
sidebar_label: Conflicts
---

## Detecting Conflicts

When using the Saved Games service in your game, it is possible for multiple devices to perform reads and writes on the same saved game. In the event that a device temporarily loses its network connection and later reconnects, this might cause data conflicts whereby the saved game stored on a player's local device is out-of-sync with the remote version stored in service's servers. The Saved Games services provides a conflict resolution mechanism that presents both sets of conflicting saved games at read-time and lets you implement a resolution strategy that is appropriate for your game.

When the games service detects a data conflict, it notifies your game during a saved game operation (open, create, save etc) by dispatching a `SavedGamesEvent.CONFLICT` event.

You should make sure you add a listener for this event before attempting any saved game operation.

```actionscript
GameServices.service.savedGames.addEventListener( SavedGamesEvent.CONFLICT, conflictHandler );


function conflictHandler( event:SavedGamesEvent ):void
{
    // Handle the conflict here

    // event.conflictId identifies this conflict 
}
```

The conflict event willl contain two versions of the saved game in the `data` Array:

- The most-up-to-date version known by the service to be accurate (`event.data[0]`); and
- A modified version detected on one of the player's devices that contains conflicting content or metadata (`event.data[1]`). This may not be the same as the version that you tried to save.

It will also contain the `conflictId` which identifies this conflict occurrance and is required to resolve this conflict.



## Resolving Conflicts

Your game must decide how to resolve the conflict by picking one of the provided versions or merging the data of the two saved game versions.

Once you have assembled the resolved version of the save game you call `resolveConflict` to resolve the conflict on the saved game with the conflict id and the resolved saved game as parameters:

```actionscript
GameServices.service.savedGames.resolveConflict( conflictId, resolvedGame );
```

The following snippet shows and example of how your game might handle a saved game conflict by selecting the most recent saved game as the final version to save:

```actionscript
function conflictHandler( event:SavedGameEvent ):void 
{
    var savedGameA:SavedGame = event.data[0];
    var savedGameB:SavedGame = event.data[1];

    var resolvedGame:SavedGame = savedGameA.modified > savedGameB.modified ? savedGameA : savedGameB;        
    GameServices.service.savedGames.resolveConflict( event.conflictId, resolvedGame );
}
```



This call will result in either a `SavedGamesEvent.CONFLICT_RESOLVE_SUCCESS` or a `SavedGamesEvent.CONFLICT_RESOLVE_ERROR` event. 

```actionscript
GameServices.service.savedGames.addEventListener( SavedGamesEvent.CONFLICT_RESOLVE_SUCCESS, resolveSuccessHandler );
GameServices.service.savedGames.addEventListener( SavedGamesEvent.CONFLICT_RESOLVE_ERROR, resolveErrorHandler );


function resolveSuccessHandler( event:SavedGamesEvent ):void 
{
    // The conflict was resolved and you can resume normal loading/saving etc.
}

function resolveErrorHandler( event:SavedGamesEvent ):void 
{
    // The conflict wasn't resolved and will be encountered on the next saved games operation again
}
```


>
> Be aware that the call to resolve a conflict may itself dispatch another `SavedGamesEvent.CONFLICT` event, if for some reason there were a series of conflicts awaiting resolution. 
>
> Simply ensure that your conflict handler is never removed and always available to handle conflict resolutions.
>


