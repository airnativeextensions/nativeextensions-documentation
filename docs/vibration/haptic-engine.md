---
title: Haptic Engine
sidebar_label: Haptic Engine
---

Compose and play haptic patterns to customize your app’s feedback.

Use haptics to engage users physically, with tactile feedback that gets attention and reinforces actions.

Your app can play custom haptic patterns crafted from basic building blocks called haptic events (`HapticEvent`). Events can be transient, like the feedback you get from toggling a switch, or continuous, like the vibration or sound from a ringtone. You can use transient and continuous patterns independently, or build your pattern from precise combinations of the two. 



## Support

You should check whether the current device supports the haptic engine by checking the `isSupported` property on the `HapticEngine` instance.


```actionscript title="AIR"
if (Vibration.service.hapticEngine.isSupported)
{
    // Haptic Engine is supported
}
```

```csharp title="Unity"
if (Vibration.Instance.HapticEngine.IsSupported)
{
    // Haptic Engine is supported
}
```

If it is not supported you should fall back to other feedback methods, such as simple vibrations.

>
>   Haptic Engine is only supported on iOS currently
>


## Create a player

To create a player call the `createAdvancedPlayer()` method passing in your pattern and initial params.


>
> Currently the parameters to this method including the pattern are ignored. 
> A haptic player with a single continuous pattern containing intensity and sharpness parameters will be created.
>  


```actionscript title="AIR"
var pattern:HapticPattern = new HapticPattern(); 

var player:HapticAdvancedPlayer 
    = Vibration.service.hapticEngine.createAdvancedPlayer( pattern );
```

```csharp title="Unity"
HapticPattern pattern = new HapticPattern();

HapticAdvancedPlayer player 
    = Vibration.Instance.HapticEngine.createAdvancedPlayer(pattern);
```



## Control 

To start the haptic call the `start()` method on the `HapticAdvancedPlayer` instance.

```actionscript title="AIR"
player.start();
```

```csharp title="Unity"
player.Start();
```

To stop the player, call the `stop()` method.

```actionscript title="AIR"
player.stop();
```

```csharp title="Unity"
player.Stop();
```


## Updating

To update a continuous haptic pattern with new dynamic parameters, call the `sendParameters()` method passing in the new dynamic paramaters.


```actionscript title="AIR"
player.sendParameters(
        new HapticDynamicParams()
                .setParameter( HapticDynamicParams.INTENSITY, 0.4 )
                .setParameter( HapticDynamicParams.SHARPNESS, 0.2 )
);
```

```csharp title="Unity"
player?.SendParameters(
        new HapticDynamicParams()
            .SetParameter(HapticDynamicParams.INTENSITY, 0.4)
            .SetParameter(HapticDynamicParams.SHARPNESS, 0.2)
        );
```


## Events 

The haptic engine may be stopped at any time due to external factors such as an incoming phone call or the application being minimised. 

When this occurs any of your players will become invalid and you should dispose them and recreate them before responding to user feedback again.

```actionscript title="AIR"
Vibration.service.hapticEngine.addEventListener(
        HapticEngineEvent.STOPPED,
        hapticEngineStoppedHandler
);

function hapticEngineStoppedHandler( event:HapticEngineEvent ):void 
{
    // This indicates the engine has stopped and all players must be recreated
    if (player != null) player.dispose();
    player = null;

    // You should not recreate until needed again as this may be in the background now.
}
```

```csharp title="Unity"
Vibration.Instance.HapticEngine.OnStopped += HapticEngine_OnStopped;

void HapticEngine_OnStopped(HapticEngineEvent e)
{
    // This indicates the engine has stopped and all players must be recreated
    _player?.Dispose();
    _player = null;

    // You should not recreate until needed again as this may be in the background now.
}
```


Additionally each individual player will complete it's pattern playback after an amount of time. When this occurs the complete event will be dispatched allowing you to start the player again if you wish to continue haptic feedback.


```actionscript title="AIR"
_player.addEventListener( HapticPlayerEvent.COMPLETE, playerCompleteHandler );
_player.start();

function playerCompleteHandler( event:HapticPlayerEvent ):void
{
    _player.start();
}
```

```csharp title="Unity"
_player.OnComplete += player_OnComplete;
_player.Start();

void player_OnComplete(HapticPlayerEvent e)
{
    _player?.Start();
}
```




## Constructing a Pattern

Not available yet









