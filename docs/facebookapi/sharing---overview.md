---
title: Sharing - Overview
sidebar_label: Sharing - Overview
---

## Sharing

Sharing is a simple way of letting people bring content from your website or 
mobile app to Facebook. Sharing is triggered when someone clicks a social 
plugin like the Share or Send button. This launches the corresponding Share 
or Message dialog. 


## Share Dialog

The Share Dialog is an easy way to let people share content without having 
them to log into your app or grant any permissions. It works on web, Android 
and iOS.

People can share the following kinds of content to Facebook:

- Links - Most content is a URL which references an HTML page. To provide the most relevant information, you should mark up your page with Facebook-specific meta tags. See [A Guide to Sharing for Webmasters](https://developers.facebook.com/docs/sharing/webmasters).

- Photos - Directly upload one or more user-generated photos.

- Videos - Directly upload a user-generated video.

- Multimedia - Directly upload a combination of photos and videos.

- [Open Graph Stories](https://developers.facebook.com/docs/sharing/opengraph) - Use Open Graph actions and objects to create rich stories through a strongly-typed API.



## Message Dialog 

Use the Message dialog to let people privately share content to Messenger. 
Like the Share dialog, it's a native sharing component that doesn't require 
you to implement Facebook Login or request publish_actions permission.


## iOS Integration

iOS 6+ includes a native share sheet that lets people post status updates, 
photos, videos and links to Facebook and includes support for setting the 
audience for the post and tagging the post with a location. You cannot share 
Open Graph Stories with the share sheet. The Facebook SDK supports the use 
of this native controller; beginning with V4.5 of the Facebook SDK, this
experience is what people will see in most cases when you call the Facebook 
Share Dialog.

Use of the iOS share sheet is subject to [Facebook Platform Policy](https://developers.facebook.com/policy/#control), 
including section 2.3 which states that apps may not pre-fill in the 
context of the share sheet. This means apps may not pre-fill the share 
sheet's initialText field with content that wasn't entered by the user 
of the app.


