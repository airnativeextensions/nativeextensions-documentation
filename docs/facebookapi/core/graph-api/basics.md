---
title: Basics 
sidebar_label: Basics
---

The Graph API implementation involves several classes. A builder class `GraphRequestBuilder`
is used to create a `GraphRequest` which is then passed to the `makeRequest` function
to actually perform the request.

The simplest example of this is retrieving the current user's information:

```actionscript
var request:GraphRequest = new GraphRequestBuilder()
	.setPath( "/me" )
	.build();

Facebook.instance.graphAPI.makeRequest( request );
```

## Events

A `GraphRequest` will dispatch status events indicating the completion or failure of the 
request:

- `GraphRequestEvent.COMPLETE`: dispatched on successful completion
- `GraphRequestEvent.ERROR`: dispatched if there was an error

```actionscript
request.addEventListener( GraphRequestEvent.COMPLETE, request_completeHandler );
request.addEventListener( GraphRequestEvent.ERROR, request_errorHandler );
```

```actionscript
function request_completeHandler( event:GraphRequestEvent ):void 
{
	// event.data will contain the Facebook response
	trace( JSON.stringify(event.data) );
}

function request_errorHandler( event:GraphRequestEvent ):void 
{
	// event.errorCode and event.errorMessage will contain details on the error
	trace( event.errorMessage );
}
```


## Callbacks

As an alternative to events, you can add a callback function to a request:

```actionscript
var request:GraphRequest = new GraphRequestBuilder()
	.setPath( "/me" )
	.setCompleteCallback(
			function( data:Object ):void 
			{
				log( "request complete: " + JSON.stringify(data) );
			}
	)
	.setErrorCallback(
			function( code:int, message:String ):void 
			{
				log( "request error: " + code + "::"+ message );
			}
	)
	.build();
```

These functions must be of the specific format above, i.e. for the complete callback:

```actionscript
function( data:Object ):void 
{
	// process completion data
}
```

And the error callback:

```actionscript
function( errorCode:int, errorMessage:String ):void 
{
	// process request error
}
```


## Builder

The `GraphRequestBuilder` is your main interface to constructing requests.

You must specify at least the Graph API endpoint you wish to query using the `setPath` function.


### Fields and Parameters

Most commands will have a list of optional parameters and/or fields. For example, the `/me` 
endpoint you can use the fields to add additional information you wish to retrieve. If you
have requested the email permission for example, you can add the `"email"` field to return the 
users email address. To add a field use the `addField` or `addFields` function on the builder:

```actionscript
new GraphRequestBuilder()
	.setPath( "/me" )
	.addField( "email" )
	.build();
```


Parameters are often additional information passed along with the request, for example a 
link passed along with a post request. To add a parameter use the `addParameter` function 
on the builder:

```actionscript
new GraphRequestBuilder()
	.setPath( "/me/feed" )
	.setMethod( GraphRequestBuilder.METHOD_POST )
	.addParameter( "link", "https://airnativeextensions.com" )
	.build();
```


### Image Data

If you wish to add image data to a post you can use the `setImage` function:

```actionscript
new GraphRequestBuilder()
	.setPath( "/me/photos" )
	.setMethod( GraphRequestBuilder.METHOD_POST )
	.setImage( yourBitmapData )
	.addParameter( "message", "Image posted through the Graph API from the Facebook API ANE" )
	.build();
```


