---
title: Tags
sidebar_label: Tags
---


Tags are used by some services to assign variables to a user. This can then be used by the service to selective send notifications or to substitute variables in a notification to provide highly customised interactions with your users.

For example, you could send a notification with your user's name and current stage they are on in your game:

```
Hello Josh! We just improved our controls, come back and see if you can beat level 10!
```

by setting tags such as:

```
name: "Josh"
current_stage: "10"
```


## Support

Once you have setup your service you can query `canSendTags` to find out whether the current service supports tags. This allows you to react to cases where the user has push notifications but no tag support (eg with APNS).

```actionscript
if (PushNotifications.service.canSendTags)
{
	// Can subscribe to topics
}
```


## Send Tags

To assign a tag value to a user call the `sendTag` function with the tag name and the value to assign for the current user:

```actionscript
PushNotifications.service.sendTag( "name", "Josh" );
```

You can send multiple tags at the same time by sending an object:

```actionscript
PushNotificaitons.service.sendTags( 
    {
        name: "Josh",
        current_stage: "10"
    }
);
```


## Get Tags

To retrieve a list of tags that have been set on the user call the `getTags` function.

```actionscript
PushNotifications.service.getTags();
```

This function will return `true` if the retrieval was started successfully and will subsequently dispatch a `TagEvent.GET_TAGS_COMPLETE` when the tags have been retrieved from the service.


```actionscript
PushNotifications.service.addEventListener( TagEvent.GET_TAGS_COMPLETE, getTags_completeHandler );
PushNotifications.service.getTags();				

function getTags_completeHandler( event:TagEvent ):void
{
    trace( JSON.stringify( event.tags ) );
}
```

The event will have a `tags` object property which will contain all the tag key/value pairs.



## Delete Tags

To delete a tag call the `deleteTag` function with the name of the tag to delete:

```actionscript
PushNotifications.service.deleteTag( "current_level" );
```

You can also delete multiple tags simultaneously using the `deleteTags` function:

```actionscript
PushNotifications.service.deleteTags( [ "name", "current_level" ] );
```


