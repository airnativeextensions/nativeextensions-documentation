---
title: Sharing - Share API
sidebar_label: Sharing - Share API
---

:::caution
This is the legacy extension documentation. Find the new documentation [here](../facebookapi/)
:::

## Share API

The Share API allows you to perform similar things to the Share Dialog however instead of using the Facebook dialogs you can create your own interface for sharing,and post directly with this API. You will need to:

- Build a custom interface 
- Add Facebook Login to your app
- Request the publish_actions permission
- Create your content to post using one of the content builders
- Post to the API


### Creating Content

Create content as you do for the Share and Message Dialogs using the builders, as outlined in the [Share Content](sharing---content) section.

For example, to create a link to share:

```actionscript
var builder:ShareLinkContentBuilder = new ShareLinkContentBuilder()
	.setContentTitle("FacebookAPI ANE")
	.setContentDescription("This link was shared using the distriqt FacebookAPI ANE" )
	.setContentUrl("https://airnativeextensions.com/extension/com.distriqt.FacebookAPI");
```


### Share 

Once you have created your content you post this to Facebook by using the `ShareAPI`, `share` function:

```actionscript
var success:Boolean = FacebookAPI.service.shareAPI.share( builder.build() );
```

This may return `false` if the content isn't valid or cannot be shared via the ShareAPI.

If started successfully the ShareAPI will dispatch an event when the post is complete, similar to the ShareDialog process.

- `ShareAPIEvent.COMPLETED`: when the share was successfully completed
- `ShareAPIEvent.CANCELLLED`: when the share was cancelled
- `ShareAPIEvent.ERROR`: when an error occurred during the process

```actionscript
FacebookAPI.service.shareAPI.addEventListener( ShareAPIEvent.COMPLETED, shareAPIEventHandler );
FacebookAPI.service.shareAPI.addEventListener( ShareAPIEvent.CANCELLED, shareAPIEventHandler );
FacebookAPI.service.shareAPI.addEventListener( ShareAPIEvent.ERROR, shareAPIEventHandler );
```

And then your event handler:

```actionscript
function shareAPIEventHandler( event:ShareAPIEvent ):void 
{
	// If successful event.postId will contain the post identifier
	if (event.postId != null) 
	{
		trace( "postId="+event.postId);
	}
}
```


