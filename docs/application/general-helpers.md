---
title: General Helpers
sidebar_label: General Helpers
---

This section details the available ANE work arounds for current issues 
with Adobe AIR


## Android Black Screen 

While developing Android applications you may have run into an issue where 
the screen doesn't correctly render after an deactivate / activate cycle, 
for example, when another activity was launched and returned for your application.

This is quite common on Android 4.x when using Starling / Stage 3D 

- http://forum.starling-framework.org/topic/starling-turns-into-black-screen
- http://forum.starling-framework.org/topic/maybe-context-loss
- http://forum.starling-framework.org/topic/resuming-using-eventactivate

These appear to be related to context loss however often they are not and for 
some reason the rendering of the 3D content just hasn't correctly resumed.

There are many hacks and solutions around, eg using a native extension to 
start and finish another activity:

- http://forum.starling-framework.org/topic/ane-fix-for-blackblank-screen-bug-when-returning-to-air-android-apps

however we found these to be a bit hacky.

Our solution is clean and will only result in a small delay of resuming from
the activate event. It simply clears the AIR application and forces it to 
start rendering again.

We have used this in several applications with great success so we hope it 
works for your application.


### Usage

To apply this fix, simply call the following in your application where 
you wish to apply the fix:

```actionscript
Application.service.blackScreenHelper();
```

Generally this is best placed in your applications `ACTIVATE` handler.
However it is important to only call this after the AIR application is initialised 
so **do not call it on the first `ACTIVATE` event**, however any subsequent 
`ACTIVATE` events will be fine. 

We normally use a flag to only call it when an activate event was preceeded 
by a deactivate event, eg:

```actionscript
private var _deactivated:Boolean = false;

private function deactivateHandler( event:Event ):void 
{
	_deactivated = true;
}

private function activateHandler( event:Event ):void 
{
	if (_deactivated)
	{
		_deactivated = false;
		Application.service.blackScreenHelper();
	}
}
```


## Starling Context Loss Overlay

This functionality gives you the ability to add a screenshot over the application 
while you rebuild a context loss or something similar. 

The functionality simply allows you to add a bitmap overlay over the AIR application

```actionscript
overlay = Starling.current.stage.drawToBitmapData();
			
Application.service.addBitmapOverlay( overlay );
```


To remove the overlay:

```actionscript
Application.service.removeBitmapOverlay();
```



## AIR Android SDK 28 Back Button

>
> If you are using AIR 33 latest release or higher this issue has been fixed.
>

AIR for Android when targeting SDK 28 caused an issue where the back button Keyboard Event failed to be dispatched.

This affects AIR 32 and early releases of AIR 33 from Harman when setting the target SDK to 28.

```xml
<uses-sdk android:targetSdkVersion="28" />
```


This can be resolved by calling the following early in your application:

```actionscript
Application.service.backButtonHelper();
```

Then the back button event should dispatch correctly:

```actionscript
NativeApplication.nativeApplication.addEventListener( KeyboardEvent.KEY_DOWN, keyDownHandler );

function keyDownHandler( event:KeyboardEvent ):void
{
	trace( event.keyCode );
	if (event.keyCode == Keyboard.BACK)
	{
		event.preventDefault();
	}
}
```


