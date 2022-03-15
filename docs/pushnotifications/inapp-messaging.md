---
title: InApp Messaging
sidebar_label: InApp Messaging
---


In-App Messaging helps you engage your app's active users by sending them targeted, contextual messages that encourage them to use key app features.

This messaging approach doesn't push notifications to the device, instead they are displayed at certain contextual moments in your application. 

They generally are highly customisable and importantly they **don't rely on push notification authorisation** so you can send these messages to devices that have denied push notifications. 


The In-App Messaging functionality is provided through the `InAppMessaging` singleton accessed via `PushNotifications.service.inAppMessaging`.


## Setup

You must [setup your service](setup-your-service.md) before attempting to access In-App Messaging. Any attempts to access it before calling setup will fail.


## Support

>
> Note: Only some services support In-App Messaging and generally require additional setup to the main push notification service. Check the documentation for the services to confirm that this is supported and that you have performed any additional integration steps.
>

You can check whether the current service supports InApp Messaging by checking the `isSupported` flag:

```actionscript
if (PushNotifications.service.inAppMessaging.isSupported)
{
    // Current service supports In-App Messaging
}
```


## Handle User Interaction

The most important step is listening to the `InAppMessagingEvent.SELECTED` event that is dispatched whenever a user interacts with an In-App Message.


```actionscript
PushNotifications.service.inAppMessaging.addEventListener( 
    InAppMessagingEvent.SELECTED, 
    selectedHandler 
);
```

This event will contain details about the In-App Message that the user interacted with. We suggest you add this event listener early in your application, immediately after setting up your application.

There are two main pieces of data attached to this event:

- `action`: A `InAppMessageAction` instance containing common In-App Message information representing the user's action (eg the button they clicked). In-App Message services generally include a `name` for the action (this can be the text on the button or a name associated with the action) and a `url` as a payload for the action. 
- `data`: An `Object` instance containing service specific data associated with the message. The content here depends on the service but will contain any additional information that the service provides. For example, with Firebase In-App Messaging this will contain the campaign name, campaign information and message type. 


```actionscript
function inappmessaging_selectedHandler( event:InAppMessagingEvent ):void
{
    trace( "inappmessage selected" );
    trace( "    action: " + event.action.name + ":" + event.action.url );
    trace( "    data: " + event.data == null ? "null" : JSON.stringify(event.data) );
}
```



## Trigger in-app messages programmatically

Some services will allow you to trigger events programmatically when certain events occur in your application.

You trigger these events in your application by calling the `addTrigger()` method and passing the appropriate event name for your service defined trigger and a `value` string (if applicable).

```actionscript
PushNotifications.service.inAppMessaging
    .addTrigger( "exampleTrigger", "optional value" );
```

>
> Note: Services that don't support this process with return `false` 
>
> ```actionscript
> var success:Boolean = PushNotifications.service.inAppMessaging.addTrigger( "exampleTrigger" );
> if (!success)
> { 
>    // manual event triggering not supported
> }
>


## Temporarily disable in-app messages

By default, In-App Messaging renders messages whenever a triggering condition is satisfied, regardless of an app's current state. If you'd like to suppress message displays for any reason, for example to avoid interrupting a sequence of payment processing screens, you can do that with the SDK's `messageDisplaySuppressed()` method:

```actionscript
PushNotifications.service.inAppMessaging.messageDisplaySuppressed( true );
```

Passing `true` to the method prevents In-App Messaging from displaying messages, while `false` reenables message display. 

>
> Note: Services that don't support this process with return `false` 
>


## Enable opt-out message delivery


