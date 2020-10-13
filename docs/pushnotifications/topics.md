---
title: Topics
sidebar_label: Topics
---

Some services support subscribing to "topics".

This allows your server to send a message to multiple devices that have opted in to a particular topic. 

Based on the publish/subscribe model, topic messaging supports unlimited subscriptions per app. 
The app server sends messages with payloads to the topic, and the service handles the message 
routing and delivers the message reliably to the right devices. For example, users of a weather 
forecasting app could opt in to a "severe weather alerts" topic and receive notifications of 
storms threatening specified areas.


Developers can choose any topic name that matches the regular expression, "[a-zA-Z0-9-_.~%]+"



## Support

Once you have setup your service you can query `canSubscribeToTopics` to find out whether
the current service supports topics. This allows you to react to cases where the user has 
push notifications but no topic support (eg with APNS).

```actionscript
if (PushNotifications.service.canSubscribeToTopics)
{
	// Can subscribe to topics
}
```



## Subscribe to a topic

Subscrbing to a topic is as simple as calling `subscribeToTopic` with your topic name.

For example

```actionscript
PushNotifications.service.subscribeToTopic( "news" );
```

This function returns the success of the operation, a success does not ensure the topic
was subscribed, only that the request to subscribe was made.

>
> Note: 
>
> Once you have called subscribe it may take several hours for the topic to appear in your
> service console. Do not expect the topic to be created instantly.
>



## Unsubscribe from a topic

Similarly unsubscribing involves calling `unsubscribeFromTopic` with your topic name.


```actionscript
PushNotifications.service.unsubscribeFromTopic( "news" );
```

