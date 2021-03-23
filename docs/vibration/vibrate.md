---
title: Vibrate
sidebar_label: Vibrate
---

To make the device vibrate is a simple matter of calling the `vibrate` function.

```actionscript title="AIR"
Vibration.service.vibrate();
```

```csharp title="Unity"
Vibration.Instance.Vibrate();
```

## Android 

On Android you have access to more control over the length and pattern of the vibration.

You can control the length of the vibration by passing the first parameter to the 
`vibrate` function. This parameter specifies the length of the vibration in milliseconds.

For example, vibrate for 1 second: 

```actionscript title="AIR"
Vibration.service.vibrate( 1000 );
```

```csharp title="Unity"
Vibration.Instance.Vibrate(1000);
```

You can set vibration patterns to control the length and gap between vibrations.
For example, the following sets a vibrate pattern on for 200 milliseconds then off for 500 twice:

```actionscript title="AIR"
Vibration.service.vibrate( 0, [0, 200, 500, 200, 500] );
```

```csharp title="Unity"
Vibration.Instance.Vibrate( 0, new long[] { 0, 200, 500, 200, 500 } );
```


The last parameter allows you to repeat the pattern. The value is the index into the pattern array at which to repeat. The default `-1` will not repeat the pattern, and `0` will repeat the complete pattern. 

The following example will vibrate with the pattern, repeating the entire pattern:

```actionscript title="AIR"
Vibration.service.vibrate( 0, [0, 200, 500, 200, 500], 0 );
```

```csharp title="Unity"
Vibration.Instance.Vibrate( 0, new long[] { 0, 200, 500, 200, 500 }, 0 );
```

If you are repeating the pattern you must call `cancel()` to stop the vibration.


### Cancel 

You can cancel an active vibration by calling `cancel`:

```actionscript title="AIR"
Vibration.service.cancel();
```

```csharp title="Unity"
Vibration.Instance.Cancel();
```


## iOS 

On iOS all the parameters to `vibrate` are ignored and the function will 
produce exactly 0.4 seconds of vibration and 0.1 seconds of silence.

