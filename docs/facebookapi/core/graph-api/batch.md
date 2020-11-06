---
title: Batch
sidebar_label: Batch
---

If you have several requests you wish to batch together you can use the `GraphRequestBatchBuilder` to create a batch request.

To create a batch, firstly create your `GraphRequest` instances as normal:

```actionscript
var request1:GraphRequest = new GraphRequestBuilder()
		.setPath('/me')
		.setMethod('GET')
		.addFields(["first_name","gender","picture.width(160).height(160)" ])
		.build();

var request2:GraphRequest = new GraphRequestBuilder()
		.setPath('/me/friends')
		.setMethod('GET')
		.addParameter("limit", 200 )
		.addFields(["id","first_name","installed","picture.width(160).height(160)" ])
		.build();
```

Then construct the `GraphRequestBatch` using a `GraphRequestBatchBuilder`:


```actionscript
var batch:GraphRequestBatch = new GraphRequestBatchBuilder()
	.addRequest( request1 )
	.addRequest( request2 )
	.build();
```

Then call `makeBatchRequest()` with your `GraphRequestBatch` instance:

```actionscript
Facebook.instance.graphAPI.makeBatchRequest( batch );
```


## Events

You can add event listeners to the request objects to process the return data from each individual request, as you would for a single request:

```actionscript
request1.addEventListener( GraphRequestEvent.COMPLETE, request1_completeHandler );
request1.addEventListener( GraphRequestEvent.ERROR, request1_errorHandler );
request2.addEventListener( GraphRequestEvent.COMPLETE, request2_completeHandler );
request2.addEventListener( GraphRequestEvent.ERROR, request2_errorHandler );

function request1_completeHandler( event:GraphRequestEvent ):void 
{
	// event.data will contain the Facebook response
}

function request1_errorHandler( event:GraphRequestEvent ):void 
{
	// event.errorCode and event.errorMessage will contain details on the error
}

function request2_completeHandler( event:GraphRequestEvent ):void 
{
	// event.data will contain the Facebook response
}

function request2_errorHandler( event:GraphRequestEvent ):void 
{
	// event.errorCode and event.errorMessage will contain details on the error
}
```

Additionally you can listen for a `GraphRequestEvent.BATCH_COMPLETE` event to be notified when all the requests have been completed.

```actionscript
batch.addEventListener( GraphRequestEvent.BATCH_COMPLETE, batch_completeHandler );
				
function batch_completeHandler( event:GraphRequestEvent ):void
{
	trace( "batch complete" );
}
```

You should make sure to add these listeners before the call to `makeBatchRequest()`.


## Callbacks

As an alternative to events, you can add callbacks to the requests as you do with a normal `GraphRequest`:

```actionscript
var request1:GraphRequest = new GraphRequestBuilder()
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

Additionally you can add a completion callback to the `GraphRequestBatch` object:

```actionscript
var batch:GraphRequestBatch = new GraphRequestBatchBuilder()
	.addRequest( request1 )
	.addRequest( request2 )
	.addRequest( request3 )
	.setCompleteCallback(
			function():void
			{
				log( "batch complete" );
			}
	)
	.build();
```
