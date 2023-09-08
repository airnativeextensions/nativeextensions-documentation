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

