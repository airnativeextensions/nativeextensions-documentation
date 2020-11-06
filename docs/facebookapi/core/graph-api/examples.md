---
title: Examples
sidebar_label: Examples
---

Some examples of using the Graph API


## Get Current User Info

Requires the `"email"` permission.

```actionscript
var request:GraphRequest = new GraphRequestBuilder()
	.setPath( "/me" )
	.addField( "email" )
	.addField( "name" )
	.build();

Facebook.instance.graphAPI.makeRequest( request );
```


## Get User Permissions

```actionscript
new GraphRequestBuilder()
	.setPath( "/me/permissions" )
	.build();
```


## Get User Friends

Requires the `"user_friends"` permission.

```actionscript
var request:GraphRequest = new GraphRequestBuilder()
	.setPath( "/me/friends" )
	.addField( "name" )
	.build();
```


## Post Status Update

Requires the `"publish_actions"` permission.

```actionscript
new GraphRequestBuilder()
	.setPath( "/me/feed" )
	.setMethod( METHOD_POST )
	.addParameter( "message", message )
	.build();
```


## Posting a Link

Requires the `"publish_actions"` permission.

```actionscript
var request:GraphRequest = new GraphRequestBuilder()
	.setPath( "/me/feed" )
	.setMethod( GraphRequestBuilder.METHOD_POST )
	.addParameter( "link", "https://airnativeextensions.com" )
	.addParameter( "caption", "Posted through the Graph API from the Facebook API ANE" )
	.build();

Facebook.instance.graphAPI.makeRequest( request );
```


## Posting an Image

Requires the `"publish_actions"` permission.

```actionscript
var request:GraphRequest = new GraphRequestBuilder()
	.setPath( "/me/photos" )
	.setMethod( GraphRequestBuilder.METHOD_POST )
	.setImage( _image.bitmapData )
	.addParameter( "message", "Image posted through the Graph API from the Facebook API ANE" )
	.build();

Facebook.instance.graphAPI.makeRequest( request );
```

