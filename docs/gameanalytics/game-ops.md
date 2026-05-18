---
title: Game Ops
sidebar_label: Game Ops
---

## Remote Configs

GameAnalytics offers the option to setup remote configs in your dashboard that can be changed on the whim without needing to release a new version of the game. The remote configs are a custom set of key-pair values.

Using a callback function:

```actionscript
// Function callback style
GameAnalytics.instance.addRemoteConfigsListener(function ():void
{
    trace( "Remote configs updated" );
});
```

Using events: 

```actionscript
// Event style
GameAnalytics.instance.addEventListener(RemoteConfigsEvent.UPDATED, function (event:RemoteConfigsEvent):void
{
    trace( "Remote configs updated (event)" );
});
```

To manual check if Remote Configs is ready (has been populated with values) you can call this:

```actionscript
if(GameAnalytics.instance.isRemoteConfigsReady())
{
    // the remote configs is ready, add your code here
}
```

To get values out of a populated Remote Configs use the following methods:

```actionscript
var value:String = GameAnalytics.instance.getRemoteConfigsValueAsString( "key" );
```

```actionscript
var valueWithCustomDefaultValue:String = GameAnalytics.instance.getRemoteConfigsValueAsString( "key", "default" );
```

You can also retrieve a raw value of the configs:

```actionscript
var rawConfigs:String = GameAnalytics.instance.getRemoteConfigsContentAsString();
```

## A/B Testing

To get the value of A/B testing id or variant id use the following methods:

```actionscript
// A/B testing id
var abTestingId:String = GameAnalytics.instance.getABTestingId();

// A/B testing variant id
var abTestingVariantId:String = GameAnalytics.instance.getABTestingVariantId();
```

### Custom Dimensions

Custom Dimensions allow you to annotate events with additional contextual information. These dimensions can help you segment players based on criteria specific to your game, which you can then use to filter, group and compare metrics in your analysis.

Common use cases:

- Segmenting players by type or player class (e.g. Warrior, Mage)
- Identifying feature usage (e.g. did a player enter a specific level or tutorial)
- Marking special campaigns or live-ops events


GameAnalytics support the use of 3 custom dimensions:

- Custom01
- Custom02
- Custom03

During the game it is possible to set the active value for each custom dimension dynamically. Once a dimension is set it will be persisted across sessions/game-start and automatically be added to all event categories. Remember you have to set the custom dimensions before initialzing the SDK (but after setting the available custom dimensions) to be able to add the dimensions to the first session start event.

Setting each custom dimension:

```actionscript
GameAnalytics.instance.setCustomDimension01("ninja");
GameAnalytics.instance.setCustomDimension02("dolphin");
GameAnalytics.instance.setCustomDimension03("horde");
```

To reset a set custom dimension simply set it to empty string or null:

```actionscript
GameAnalytics.instance.setCustomDimension01("");
GameAnalytics.instance.setCustomDimension02(null);
GameAnalytics.instance.setCustomDimension03("");
```

| Field           | Type   | Description                                                                                                             | Example |
| --------------- | ------ | ----------------------------------------------------------------------------------------------------------------------- | ------- |
| customDimension | String | One of the available dimension values set in the configuration phase. Will persist cross session. Set to null to reset. | `ninja` |
