---
title: Application State Events
sidebar_label: Application State Events
---


The AIR standard ACTIVATE and DEACTIVATE events will inform your application when the AIR application loses focus. This is often used to stop application rendering and other operations that you wish to perform when your application enters the background or returns to the foreground.

However these events will not completely inform you of when your application enters the background or foreground, as these events can be triggered when other elements are overlaid on your application, such as dialogs or even the iOS control center. In these cases generally you don't want to deactivate your application as your application is still running in the foreground.

Instead if you wish to only monitor when your application enters the background either by being minimised or by the device being closed you can use the `ApplicationStateEvent`s.

- `ApplicationStateEvent.BACKGROUND`: This event is dispatched when your application enters the background rather than a deactivated state
  - This has the advantage over the `Event.DEACTIVATE` event (including the normal AIR Event) that it isn't dispatched when a dialog or another activity is launched from your application, where the AIR stage may lose focus but your application is still in the foreground.
- `ApplicationStateEvent.FOREGROUND`: This event is dispatched when your application returns from a background state and enters the foreground  
  - This has the advantage over the `Event.ACTIVATE` event that it isn't dispatched when your AIR stage gains focus after a dialog or other activity was closed. Instead it is only dispatched if your application was minimised and is now returning to the foreground.


There are also ACTIVATE and DEACTIVATE events here to be able to monitor the complete lifecycle from a single location:

- `ApplicationStateEvent.ACTIVATE`:
  - Similar to the standard AIR `Event.ACTIVATE` event
- `ApplicationStateEvent.DEACTIVATE`: Dispatched when the application is deactivated. 
  - This is an alternative of the AIR `Event.DEACTIVATE` which will contain more information about whether the application screen was turned off in the deactivation process.




## Android 

On Android there are a few manifest additions to add to be able to correctly monitor your entire application state.

The following will need to be added into the `<application>` node of your manifest additions.
You will need to replace `APPLICATION_PACKAGE` with your AIR applications Java package name. Generally this is your application id prefixed with `air.`.


```xml
<!-- APPLICATION STATE EVENTS -->
<provider
	android:name="androidx.startup.InitializationProvider"
	android:authorities="APPLICATION_PACKAGE.androidx-startup"
	android:exported="false" >
	<meta-data
		android:name="androidx.lifecycle.ProcessLifecycleInitializer"
		android:value="androidx.startup" />
</provider>
```




## Usage

Listening for the events is a very simple process, simply add the event listener to the Application singleton.


```actionscript
Application.service.addEventListener( ApplicationStateEvent.ACTIVATE, stateEventHandler );
Application.service.addEventListener( ApplicationStateEvent.DEACTIVATE, stateEventHandler );
Application.service.addEventListener( ApplicationStateEvent.FOREGROUND, stateEventHandler );
Application.service.addEventListener( ApplicationStateEvent.BACKGROUND, stateEventHandler );

function stateEventHandler( event:ApplicationStateEvent ):void
{
    trace( event.type + "::" + event.code );

    if (event.type == ApplicationStateEvent.BACKGROUND)
    {
        // Your application is in the background
    }
    
    if (event.type == ApplicationStateEvent.FOREGROUND)
    {
        // Your application is in the foreground
    }

} 
```







