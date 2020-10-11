---
title: Containers
sidebar_label: Containers
---

## Loading a Container

The process for opening a container is fairly straight forward, simply involves 
calling `openContainer` with the required container Id and then waiting for the 
`ContainerEvent.AVAILABLE` event.

```actionscript
var container:Container;

GoogleTagManager.service.addEventListener( ContainerEvent.AVAILABLE, containerAvailableHandler );
GoogleTagManager.service.openContainer( CONTAINER_ID );
```

Then wait for the available event:

```actionscript
private function containerAvailableHandler( event:ContainerEvent ):void
{
	trace( "Container Available" );
	
	container = event.container;
	container.addEventListener( ContainerEvent.REFRESH,        container_refreshHandler );
	container.addEventListener( ContainerEvent.REFRESH_BEGIN,  container_refreshBeginHandler );
	container.addEventListener( ContainerEvent.REFRESH_FAILED, container_refreshFailedHandler );
}
```

Once the container is available you should store a reference to the container 
and listen for `ContainerEvent.REFRESH` events to update your application 
whenever the container's data updates.


Note, there may be certain situations where the open container call fails. In which case
the `ContainerEvent.ERROR` will be dispatched. You should listen for this event as well and 
handle appropriately, perhaps trying to open the container again at some later point.


```actionscript
GoogleTagManager.service.addEventListener( ContainerEvent.ERROR, errorHandler );

function errorHandler( event:ContainerEvent ):void 
{
	// Handle error - either disable tag functionality or retry later
}
```


## Retrieving Variables (Macros) from a Container

Retrieving information from the container is a simple process of calling the `stringForKey` function. 
This function will return the stored variable or macro value as a `String` value, or will return an 
empty string (`""`) if there was an error.

```actionscript
var value:String = container.stringForKey( "some_variable_or_macro_name" );
trace( container.containerId+": ["+key+"] = " + value );
```



## Refreshing a Container

Refreshing a container should only be done very occasionally, perhaps only once or twice a day. 
You should listen for the `ContainerEvent.REFRESH` events from a container (as shown above) 
and then call the `refresh` function. 

The following code continues on from the previous snippets, you must first have opened and 
stored your `container`.


```actionscript
container.addEventListener( ContainerEvent.REFRESH,        container_refreshHandler );
container.addEventListener( ContainerEvent.REFRESH_BEGIN,  container_refreshBeginHandler );
container.addEventListener( ContainerEvent.REFRESH_FAILED, container_refreshFailedHandler );

container.refresh();
```

```actionscript
private function container_refreshHandler( event:ContainerEvent ):void
{
	trace( "Container refreshed" );
}

private function container_refreshBeginHandler( event:ContainerEvent ):void
{
	trace( "Container refresh begin..." );
}

private function container_refreshFailedHandler( event:ContainerEvent ):void
{
	trace( "Container refresh FAILED" );
}
```







