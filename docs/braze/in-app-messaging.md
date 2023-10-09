---
title: In-App Messaging
sidebar_label: In-App Messaging
---

In-app messages help you get content to your users without interrupting their day with a push notification. Customized and tailored in-app messages enhance the user experience and help your audience get the most value from your app. With various layouts and customization tools to choose from, in-app messages engage your users more than ever before.



## Register

In order to receive in-app messages you must call `register()` in order to register the extension for the current application activity. This will now listen for in-app messages from Braze and automatically display them when they meet the conditions specified on the message.

```actionscript
Braze.instance.inAppMessaging.register();
```


If at any point you wish to stop receiving messages you can unregister by calling:

```actionscript
Braze.instance.inAppMessaging.unregister();
```


## Creating Messages

Messages are created completely through the [dashboard](https://dashboard-01.braze.eu/engagement/campaigns/campaigns). Follow the guides and documentation in the Braze documentation.



## Events

There are several events dispatched when an in-app message is received by your application:

- `BrazeInAppMessageEvent.BEFORE_DISPLAYED`: Dispatched when a message is received but before it is displayed
- `BrazeInAppMessageEvent.OPENED`: Dispatched when a message is opened and displayed to the user
- `BrazeInAppMessageEvent.BUTTON_CLICKED`: Dispatched when a button in the message is clicked
- `BrazeInAppMessageEvent.DISMISSED`: Dispatched when a message is dismissed


In your `BrazeInAppMessageEvent.BEFORE_DISPLAYED` event handler you must make a decision as to whether to display the message or not. You can also modify the content of the `InAppMessage` in this event handler as required.

Note: 

- if you don't add a `BrazeInAppMessageEvent.BEFORE_DISPLAYED` listener then the message will be displayed automatically;
- if you add a listener you must call `displayInAppMessage()` to display the message. 

For example:

```actionscript
function beforeDisplayedHandler( event:BrazeInAppMessageEvent ):void
{
    var iam:InAppMessage = event.message;

    // Modify message as required
    iam.message = iam.message
                        .replace( "USERNAME", "John" );

    // Display the message
    Braze.instance.inAppMessaging.displayInAppMessage( iam );
}
```


