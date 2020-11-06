---
title: Graph API - Examples
sidebar_label: Graph API - Examples
---

:::caution
This is the legacy extension documentation. Find the new documentation [here](../facebookapi/)
:::

Some examples of using the Graph API


## Get Current User Info

Requires the `"email"` permission.

```actionscript
var request:GraphAPIRequest = new GraphAPIRequestBuilder()
	.setPath( "/me" )
	.addField( "email" )
	.addField( "name" )
	.build();

FacebookAPI.service.graphAPI.makeRequest( request );
```


## Get User Permissions

```actionscript
new GraphAPIRequestBuilder()
	.setPath( "/me/permissions" )
	.build();
```


## Get User Friends

Requires the `"user_friends"` permission.

```actionscript
var request:GraphAPIRequest = new GraphAPIRequestBuilder()
	.setPath( "/me/friends" )
	.addField( "name" )
	.build();
```


## Post Status Update

Requires the `"publish_actions"` permission.

```actionscript
new GraphAPIRequestBuilder()
	.setPath( "/me/feed" )
	.setMethod( METHOD_POST )
	.addParameter( "message", message )
	.build();
```


## Posting a Link

Requires the `"publish_actions"` permission.

```actionscript
var request:GraphAPIRequest = new GraphAPIRequestBuilder()
	.setPath( "/me/feed" )
	.setMethod( GraphAPIRequestBuilder.METHOD_POST )
	.addParameter( "link", "https://airnativeextensions.com" )
	.addParameter( "caption", "Posted through the Graph API from the Facebook API ANE" )
	.build();

FacebookAPI.service.graphAPI.makeRequest( request );
```


## Posting an Image

Requires the `"publish_actions"` permission.

```actionscript
var request:GraphAPIRequest = new GraphAPIRequestBuilder()
	.setPath( "/me/photos" )
	.setMethod( GraphAPIRequestBuilder.METHOD_POST )
	.setImage( _image.bitmapData )
	.addParameter( "message", "Image posted through the Graph API from the Facebook API ANE" )
	.build();

FacebookAPI.service.graphAPI.makeRequest( request );
```

