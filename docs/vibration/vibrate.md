---
title: Vibrate
sidebar_label: Vibrate
---

To make the device vibrate is a simple matter of calling the `vibrate` function.

```actionscript
Vibration.service.vibrate();
```


## Android 

On Android you have access to more control over the length and pattern of the vibration.

You can control the length of the vibration by passing the first parameter to the 
`vibrate` function. This parameter specifies the length of the vibration in milliseconds.

For example, vibrate for 1 second: 

```actionscript
Vibration.service.vibrate( 1000 );
```


You can set vibration patterns to control the length and gap between vibrations.
For example, the following sets a vibrate pattern on for 200 milliseconds then off for 500 twice:

```actionscript
Vibration.service.vibrate( 0, [0, 200, 500, 200, 500] );
```


The last parameter allows you to repeat the pattern, x number of times. 
The default `-1` will no repeat, and `0` will repeat indefinitely. 

The following example will vibrate with the pattern, continuously (until cancel is called)

```actionscript
Vibration.service.vibrate( 0, [0, 200, 500, 200, 500], 0 );
```


### Cancel 

You can cancel an active vibration by calling `cancel`:

```actionscript
Vibration.service.cancel();
```


## iOS 

On iOS all the parameters to `vibrate` are ignored and the function will 
produce exactly 0.4 seconds of vibration and 0.1 seconds of silence.

