---
title: Application Lifecycle Events
sidebar_label: Application Lifecycle Events
---


The AIR standard ACTIVATE and DEACTIVATE events will inform your application when the AIR application loses focus. This is often used to stop application rendering and other operations that you wish to perform when your application enters the background or returns to the foreground.

However these events will not completely inform you of when your application enters the background or foreground, as these events can be triggered when other elements are overlaid on your application, such as dialogs or even the iOS control center. In these cases generally you don't want to deactivate your application as your application is still running in the foreground.

Instead if you wish to only monitor when your application enters the background either by being minimised or by the device being closed you can use the `AppLifecycleEvent`s.

- `AppLifecycleEvent.BACKGROUND`: This event is dispatched when your application enters the background rather than a deactivated state
  - This has the advantage over the `Event.DEACTIVATE` event (including the normal AIR Event) that it isn't dispatched when a dialog or another activity is launched from your application, where the AIR stage may lose focus but your application is still in the foreground.
- `AppLifecycleEvent.FOREGROUND`: This event is dispatched when your application returns from a background state and enters the foreground  
  - This has the advantage over the `Event.ACTIVATE` event that it isn't dispatched when your AIR stage gains focus after a dialog or other activity was closed. Instead it is only dispatched if your application was minimised and is now returning to the foreground.


There are also ACTIVATE and DEACTIVATE events here to be able to monitor the complete lifecycle from a single location:

- `AppLifecycleEvent.ACTIVATE`:
  - Similar to the standard AIR `Event.ACTIVATE` event
- `AppLifecycleEvent.DEACTIVATE`: Dispatched when the application is deactivated. 
  - This is an alternative of the AIR `Event.DEACTIVATE` which will contain more information about whether the application screen was turned off in the deactivation process.




## Usage

Listening for the events is a very simple process, simply add the event listener to the Application singleton.


```actionscript
AppLifecycle.service.addEventListener( AppLifecycleEvent.ACTIVATE, stateEventHandler );
AppLifecycle.service.addEventListener( AppLifecycleEvent.DEACTIVATE, stateEventHandler );
AppLifecycle.service.addEventListener( AppLifecycleEvent.FOREGROUND, stateEventHandler );
AppLifecycle.service.addEventListener( AppLifecycleEvent.BACKGROUND, stateEventHandler );

function stateEventHandler( event:AppLifecycleEvent ):void
{
    trace( event.type + "::" + event.code );

    if (event.type == AppLifecycleEvent.BACKGROUND)
    {
        // Your application is in the background
    }
    
    if (event.type == AppLifecycleEvent.FOREGROUND)
    {
        // Your application is in the foreground
    }

} 
```







