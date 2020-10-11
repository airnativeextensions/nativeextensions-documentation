---
title: Turn Based Multiplayer - Key Concepts
sidebar_label: Turn Based Multiplayer - Key Concepts
---


In a turn-based multiplayer game, a single shared state is passed between multiple players, 
and only one player has permission to modify the shared state at a time. Players take turns 
asynchronously according to an order of play determined by the game. Your game can use the 
turn-based multiplayer API provided by games services to manage the following tasks:

- Inviting players to join a match;
- Store participant and match state information;
- Send match invitation and turn notifications to players.


## Key Concepts

A turn-based match is a gaming session with multiple participants who take consecutive turns to update the game data during the match. 
Matches must be initiated by a player who is signed-in.

A turn-based multiplayer match contains these key properties:

- **Participants**: A user can become a participant in a turn-based match by initiating a match, joining a match by accepting an invitation, or being auto-matched into a game. Your game can retrieve the participant IDs for all players in a match.

- **Game data**: Game-specific data for this match. As a match progresses, the current player can modify and store the game data on Google's servers. The other participants can then retrieve and update this data on their turn. Your game must store the game data in an appropriate format for the device platform. For example, on Android, you must store this data in a byte array and the size of the data must not exceed 128 KB.

- **Match status**: A match can fall into one of the following states: `MATCH_STATUS_ACTIVE`, `MATCH_STATUS_AUTO_MATCHING`, `MATCH_STATUS_COMPLETE`, `MATCH_STATUS_CANCELED`, and `MATCH_STATUS_EXPIRED`.



## Participants

If your game runs on a mobile device, the turn-based multiplayer API provides a default player selection UI. The UI allows players to invite friends or select a number of auto-match opponents. This simplifies your UI coding but you can also choose to implement your own player selection UI.

The participants in a turn-based match can fall into one of these categories:

- **Initiating player**. An initiating player who starts a turn-based game can invite other players to join a match, or request to be auto-matched to random users. The initiating player can also request a mix of the two (for example, invite a specific friend, and get two auto-matched players).

- **Auto-matched players**. Auto-matched players do not receive notifications to join a match; from their perspective, it appears that they are the ones initiating the match. Auto-match players do not need to be socially connected to the other players.

- **Invited players**. Users who are invited to a match will receive invitation notifications on their device, as long their notification settings permit it. To learn more about how users can modify their notification settings by using the Google Play Games app, see Gaming with Google Play Games. Once the user accepts a match invitation, the user is joined to the match as a participant.

>
> Note: In general, when a participant leaves a match, another player cannot take that participant’s place. If a player joins by auto-matching but leaves without taking a turn immediately, games services considers that player to have abandoned the match and frees the auto-match slot for another player to join
>



## Turn-taking

The basic flow for turn-taking is as follows:

1. If the player initiated a match, check to see if the game data is null. If so, the client should initialize this data as needed by your game. For example, you might need to initialize the starting positions for players in a strategy game or initialize the first hand for players in a card game.
2. Let the current player perform their normal turn.
3. Update the match by calling `takeTurn()`. In your method call, pass in the following information:
  - The player to take the next turn.
4. Repeat steps 2-3 until the match is completed, or until the game ends some other way.


## Specifying the order of play

The order of play is determined by the design of your game. The turn-based multiplayer API provided by the games services allows your game to flexibly specify the order of play during a match.

When updating the match, your game can assign one of these players to take the next turn:

- The current player who just took a turn.
- Another player who has been invited to join the match, or who has already joined the match.
- An auto-match player who has not joined the match (if there are vacant auto-match slots open). In this case, the match is suspended until a player joins.

For example, in a 2-player turn-based match, your game might randomly pick one player to take the first turn, then subsequently switch to the other player for the next turn, and so on.


