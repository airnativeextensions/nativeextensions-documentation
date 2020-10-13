---
title: Invites - Dynamic Links
sidebar_label: Dynamic Links
---

>
> **DEPRECATED**
>
> Please note that the Invites functionality has been removed from the latest Firebase SDK. 
> You should update your applications to use dynamic links directly in combination with your own share functionality.
> You can use the [Share ANE](https://airnativeextensions.com/extension/com.distriqt.Share) as a starting point.
>
> This documentation is only for legacy reference.
>

## Dynamic Links

As invites are built ontop of dynamic links the functionality of dynamic links had to be integrated into the Invites extension.

This means that you cannot include both extensions in the same project however all the dynamic links functionality is replicated in the invites extension.

Any functionality available through the `FirebaseDynamicLinks.service` is also available through `FirebaseInvites.service.dynamicLinks`.

For example, to create a dynamic link:


```actionscript
FirebaseInvites.service.dynamicLinks.addEventListener( ShortDynamicLinkEvent.LINK_CREATED, dynamicLinkCreatedHandler );
FirebaseInvites.service.dynamicLinks.addEventListener( ShortDynamicLinkEvent.ERROR, dynamicLinkErrorHandler );

var builder:DynamicLinkBuilder = new DynamicLinkBuilder()
		.setLink( "https://example.com" )
		.setDynamicLinkDomain( "abc123.app.goo.gl" )
		.setAndroidParameters( new AndroidParametersBuilder().build() )
		.setIosParameters( new IosParametersBuilder( "com.example.ios" ).build() );

FirebaseInvites.service.dynamicLinks.createShortDynamicLink( builder.build() );
```

The imports will stay the same:


```actionscript
import com.distriqt.extension.firebase.dynamiclinks.DynamicLink;
import com.distriqt.extension.firebase.dynamiclinks.builders.AndroidParametersBuilder;
import com.distriqt.extension.firebase.dynamiclinks.builders.DynamicLinkBuilder;
import com.distriqt.extension.firebase.dynamiclinks.builders.GoogleAnalyticsParametersBuilder;
import com.distriqt.extension.firebase.dynamiclinks.builders.IosParametersBuilder;
import com.distriqt.extension.firebase.dynamiclinks.builders.ItunesConnectAnalyticsParametersBuilder;
import com.distriqt.extension.firebase.dynamiclinks.builders.SocialMetaTagParametersBuilder;
import com.distriqt.extension.firebase.dynamiclinks.events.DynamicLinkEvent;
import com.distriqt.extension.firebase.dynamiclinks.events.ShortDynamicLinkEvent;
```


Similarly listening for links:

```actionscript
FirebaseInvites.service.dynamicLinks.addEventListener( DynamicLinkEvent.RECEIVED, dynamicLink_receivedHandler );

function dynamicLink_receivedHandler( event:DynamicLinkEvent ):void
{
	trace( "dynamicLink_receivedHandler(): " + event.link );
}
```

In this way you can still have access to all the normal dynamic links functionality with the Invites extension.