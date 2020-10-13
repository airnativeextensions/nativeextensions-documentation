---
title: Simple Share
sidebar_label: Simple Share
---

Displaying an action to share text, image data or/and URL is simply a process of calling share with data you wish to share.
An action dialog will be displayed with a list of applications that will accept the content for sharing. 
This generally includes applications like: Messaging, Email, Twitter, Facebook.


```actionscript
[Embed("assets/image.png")]
public var TestImage:Class;

...

Core.init();
if (Share.isSupported)
{
	Share.service.addEventListener( ShareEvent.COMPLETE,	share_shareHandler );
	Share.service.addEventListener( ShareEvent.CANCELLED,	share_shareHandler );
	Share.service.addEventListener( ShareEvent.FAILED,  	share_shareHandler );
	Share.service.addEventListener( ShareEvent.CLOSED,  	share_shareHandler );
	
	// Here we have embedded an image "assets/image.png" in our application (above)
	var image:Bitmap = new TestImage() as Bitmap;
	
	Share.service.share( "some text", image.bitmapData, "http://airnativeextensions.com" );
}
 
...
 
private function share_shareHandler( event:ShareEvent ):void
{
	trace( event.type + "::" + event.activityType + "::" + event.error );
}
```
