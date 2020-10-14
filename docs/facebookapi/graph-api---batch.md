---
title: Graph API - Batch
sidebar_label: Graph API - Batch
---

## Graph API Batch

If you have several requests you wish to batch together you can use the `GraphAPIRequestBatchBuilder` to create a batch request.

To create a batch, firstly create your `GraphAPIRequest` instances as normal:

```actionscript
var request1:GraphAPIRequest = new GraphAPIRequestBuilder()
		.setPath('/me')
		.setMethod('GET')
		.addFields(["first_name","gender","picture.width(160).height(160)" ])
		.build();

var request2:GraphAPIRequest = new GraphAPIRequestBuilder()
		.setPath('/me/friends')
		.setMethod('GET')
		.addParameter("limit", 200 )
		.addFields(["id","first_name","installed","picture.width(160).height(160)" ])
		.build();
```

Then construct the `GraphAPIRequestBatch` using a `GraphAPIRequestBatchBuilder`:


```actionscript
var batch:GraphAPIRequestBatch = new GraphAPIRequestBatchBuilder()
	.addRequest( request1 )
	.addRequest( request2 )
	.build();
```

Then call `makeBatchRequest()` with your `GraphAPIRequestBatch` instance:

```actionscript
FacebookAPI.service.graphAPI.makeBatchRequest( batch );
```


### Events

You can add event listeners to the request objects to process the return data from each individual request, as you would for a single request:

```actionscript
request1.addEventListener( GraphAPIRequestEvent.COMPLETE, request1_completeHandler );
request1.addEventListener( GraphAPIRequestEvent.ERROR, request1_errorHandler );
request2.addEventListener( GraphAPIRequestEvent.COMPLETE, request2_completeHandler );
request2.addEventListener( GraphAPIRequestEvent.ERROR, request2_errorHandler );

function request1_completeHandler( event:GraphAPIRequestEvent ):void 
{
	// event.data will contain the Facebook response
}

function request1_errorHandler( event:GraphAPIRequestEvent ):void 
{
	// event.errorCode and event.errorMessage will contain details on the error
}

function request2_completeHandler( event:GraphAPIRequestEvent ):void 
{
	// event.data will contain the Facebook response
}

function request2_errorHandler( event:GraphAPIRequestEvent ):void 
{
	// event.errorCode and event.errorMessage will contain details on the error
}
```

Additionally you can listen for a `GraphAPIRequestEvent.BATCH_COMPLETE` event to be notified when all the requests have been completed.

```actionscript
batch.addEventListener( GraphAPIRequestEvent.BATCH_COMPLETE, batch_completeHandler );
				
function batch_completeHandler( event:GraphAPIRequestEvent ):void
{
	trace( "batch complete" );
}
```

You should make sure to add these listeners before the call to `makeBatchRequest()`.


## Callbacks

As an alternative to events, you can add callbacks to the requests as you do with a normal `GraphAPIRequest`:

```actionscript
var request1:GraphAPIRequest = new GraphAPIRequestBuilder()
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

Additionally you can add a completion callback to the `GraphAPIRequestBatch` object:

```actionscript
var batch:GraphAPIRequestBatch = new GraphAPIRequestBatchBuilder()
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
