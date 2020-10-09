---
title: Peripheral Manager
sidebar_label: Peripheral Manager
---

## Acting as a Peripheral

In the last section, you learned how to perform the most common types of Bluetooth 
low energy tasks from the central side. Here we will go through how to perform the 
common Bluetooth low energy tasks from the peripheral side. The code-based examples 
that follow will assist you in developing your app to implement the peripheral role 
on your local device. Specifically, you will learn how to:

- [Set Up Services and Characteristics](#set-up-services-and-characteristics)
- [Publish Services and Characteristics](#publish-services-and-characteristics)
- [Advertise Services](#advertise-services)
- [Read and Write Requests](#read-and-write-requests)
- [Update Subscribed Centrals](#update-subscribed-centrals)


### Set Up Services and Characteristics

The first step is to create an array of `Service`'s, each with an array of available 
`Characteristic`'s. You can consider a `Service` as a group of data values or 
`Characteristic`s. Each `Service` and `Characteristic` is uniquely defined by a `UUID`.

Though not all UUIDs that identify a service or characteristic are predefined by the 
Bluetooth Special Interest Group (SIG), Bluetooth SIG has defined and published a 
number of commonly used UUIDs that have been shortened to 16-bits for convenience. 
For example, Bluetooth SIG has predefined the 16-bit UUID that identifies a heart 
rate service as 180D. This UUID is shortened from its equivalent 128-bit UUID, 
0000180D-0000-1000-8000-00805F9B34FB, which is based on the Bluetooth base UUID 
that is defined in the Bluetooth 4.0 specification, Volume 3, Part F, Section 3.2.1. 
When you use a predefined 16-bit UUID, the extension prefills the rest of 128-bit 
UUID with the Bluetooth base UUID

You may have services and characteristics that are not identified by predefined 
Bluetooth UUIDs. If you do, you need to generate your own 128-bit UUIDs to identify them.

Use the command-line utility uuidgen to easily generate 128-bit UUIDs. To get started, 
open a window in Terminal. Next, for each service and characteristic that you need 
to identify with a UUID, type uuidgen on the command line to receive a unique 128-bit 
value in the form of an ASCII string that is punctuated by hyphens, 
as in the following example:

```
$ uuidgen
90753043-6E40-4590-AFF6-5B48F6412E2F
```

You can then use this UUID to create your own Service and Characteristic objects.

```actionscript
var characteristic:Characteristic = new Characteristic( "E95E787B-9C88-4A8D-9A33-BA63EBC4A3A3" );
						
var service:Service = new Service();
service.uuid = "90753043-6E40-4590-AFF6-5B48F6412E2F";
service.characteristics.push( characteristic );
```

### Publish Services and Characteristics

Once you have created your `Service`'s and `Characteristic`'s you will then need to 
publish these services to add them to the device's database of services and 
characteristics. This task involves calling the `addService` function of the `peripheralManager`. 
At this time it is also important to note the `removeAllServices` function which can 
be used to ensure that you don't add duplicate services at each launch of your application.

```actionscript
var characteristic:Characteristic = new Characteristic( "E95E787B-9C88-4A8D-9A33-BA63EBC4A3A3" );
						
var service:Service = new Service();
service.uuid = "90753043-6E40-4590-AFF6-5B48F6412E2F";
service.characteristics.push( characteristic );

BluetoothLE.service.peripheralManager.addEventListener( PeripheralManagerEvent.SERVICE_ADD, peripheral_serviceAddHandler );
BluetoothLE.service.peripheralManager.addEventListener( PeripheralManagerEvent.SERVICE_ADD_ERROR, peripheral_serviceAddErrorHandler );
	
// Remove all to prevent duplicate services (this only removes services added by this application)
BluetoothLE.service.peripheralManager.removeAllServices();
BluetoothLE.service.peripheralManager.addService( service );
```

You will receive a success or failure event from the addService call:

```actionscript
private function peripheral_serviceAddHandler( event:PeripheralManagerEvent ):void
{
	trace( "peripheral manager service added" );
}

private function peripheral_serviceAddErrorHandler( event:PeripheralManagerEvent ):void
{
	trace( "peripheral manager service add error" );
}
```

>
> Note: After you publish a service and any of its associated characteristics to 
> the peripheral's database, the service is cached and you can no longer make 
> changes to it.
>


### Advertise Services

When you have published your services and characteristics to your device's database 
of services and characteristics, you are ready to start advertising some of them 
to any centrals that may be listening. To start advertising call the 
`startAdvertising` function on the `peripheralManager`. The first parameter is a 
local name to advertise for the device and the second parameter is a vector array 
of `Service` objects to advertise.


```actionscript
var service:Service = ...; // A previously created and published service

BluetoothLE.service.peripheralManager.addEventListener( PeripheralManagerEvent.START_ADVERTISING, peripheral_startAdvertisingHandler );

BluetoothLE.service.peripheralManager.startAdvertising( "distriqt", new <Service>[ service ] );
```

When you start advertising some of the data on your local peripheral, the peripheral 
manager dispatches the `PeripheralManagerEvent.START_ADVERTISING` event. Advertising 
behavior is also affected when your app is in the background. You must make sure you 
have correctly added the application descriptor additions to have permission to 
advertise when in the background.

```actionscript
private function peripheral_startAdvertisingHandler( event:PeripheralManagerEvent ):void
{
	trace( "peripheral manager start advertising" );
}
```

Once you begin advertising data, remote centrals can discover and initiate a connection with you.



### Read and Write Requests

After you are connected to one or more remote centrals, you may begin receiving read 
or write requests from them. When you do, be sure to respond to those requests in an 
appropriate manner. The following examples describe how to handle such requests.

When a connected central requests to read the value of one of your characteristics, 
the peripheral manager dispatches the `RequestEvent.READ` event. The `RequestEvent` has 
a number of properties that you can use to fulfill the request.

When you receive a read request you should make sure that the characteristic in 
your device's database matches the one that the remote central specified in the 
original read request. If the characteristics match the next step is to make sure 
that the read request isn't asking to read from an index position that is outside 
the bounds of your characteristic's value. If the offset is invalid you should 
respond with the `Request.INVALID_OFFSET` flag as in the example below.

Assuming the request's offset is verified you can use the `respondToRequest` function 
on the `peripheralManager` to send the data to the central. You should respect the 
read offset and send the `Request.SUCCESS` flag and the requested data, as in the 
example below.

Firstly add a listener for read requests:

```actionscript
var characteristic:Characteristic = ...; // Some characteristic you have created and added to a published service

BluetoothLE.service.peripheralManager.addEventListener( RequestEvent.READ, peripheral_readRequestHandler );
```

Then process these read requests when received:

```actionscript
private function peripheral_readRequestHandler( event:RequestEvent ):void
{
	//
	//	Read requests will only have one object in the requests event
	
	var request:Request = event.requests[0];
	
	trace( "peripheral manager: read request: " + request.characteristic.uuid );

	//
	//	Handle the read request by first checking the UUID and then responding with the requested data.
	// 	You need to make sure you correctly handle the offset variable as illustrated below
	
	if (request.characteristic.uuid == characteristic.uuid)
	{
		if (request.offset > characteristic.value.length)
		{
			BluetoothLE.service.peripheralManager.respondToRequest( request, Request.INVALID_OFFSET );
		}
		else
		{
			characteristic.value.position = 0;
			
			var data:ByteArray = new ByteArray();
			data.writeBytes( characteristic.value, request.offset, (characteristic.value.length - request.offset) );
			
			BluetoothLE.service.peripheralManager.respondToRequest( request, Request.SUCCESS, data );
		}
	}
}
```
>
> Note: If the characteristics' UUIDs do not match, or if the read can not be 
> completed for any other reason, you should not attempt to fulfill the request. 
> Instead, you should call the `respondToRequest` function immediately with the 
> appropriate result flag from the `Request` class.
>

Handling write requests from a connected central is also straightforward. 
When a connected central sends a request to write the value of one or more 
of your characteristics, the peripheral manager dispatches the 
`RequestEvent.WRITE` event. With a write event the event may contain more 
than one requests and you must process each request and call 
`respondToRequest` **only once**. Be sure to take into account the request's 
offset property when writing the value of your characteristic

Add the write request listener:

```actionscript
var characteristic:Characteristic = ...; // Some characteristic you have created and added to a published service

BluetoothLE.service.peripheralManager.addEventListener( RequestEvent.WRITE, peripheral_writeRequestHandler );
```

Then handle the request:

```actionscript
private function peripheral_writeRequestHandler( event:RequestEvent ):void
{
	trace( "peripheral manager: write request: " + event.requests.length );

	//
	//	Write requests may have several requests and you should process each one
	//	before calling respondToRequest. You only need to call respondToRequest once
	//	with the first request in the array
	for each (var request:Request in event.requests)
	{
		trace( "peripheral manager: write request: " + request.characteristic.uuid +" :: [" + request.offset +"] "+ request.value.readUTFBytes( request.value.length ) );
		
		if (request.characteristic.uuid == characteristic.uuid)
		{
			if (request.offset + request.value.length > MAX_VALUE_LENGTH)
			{
				BluetoothLE.service.peripheralManager.respondToRequest( request, Request.INVALID_OFFSET );
				return;
			}
			else
			{
				if (characteristic.value == null) characteristic.value = new ByteArray();
				characteristic.value.position = 0;
				characteristic.value.writeBytes( request.value, request.offset );
			}
		}
	}
	
	BluetoothLE.service.peripheralManager.respondToRequest( event.requests[0], Request.SUCCESS );
}
```

>
> You need to call `respondToRequest` **exactly once** per dispatched `RequestEvent` 
> no matter how many requests the event contains.
>


### Update Subscribed Centrals

Often, connected centrals will subscribe to one or more of your characteristic 
values. When they do, you are responsible for sending them notifications when 
the value of characteristic they subscribed to changes.

When a connected central subscribes to the value of one of your characteristics, 
the peripheral manager dispatches the `CentralEvent.SUBSCRIBE` event and 
similarly the `CentralEvent.UNSUBSCRIBE` when the central unsubscribes. 
You should use these events as a cue to start/stop sending the updated values 
to centrals.

Make sure you are listening for the events:

```actionscript
var characteristic:Characteristic = ...; // Some characteristic you have created and added to a published service

BluetoothLE.service.peripheralManager.addEventListener( CentralEvent.SUBSCRIBE, peripheral_central_subscribeHandler );
BluetoothLE.service.peripheralManager.addEventListener( CentralEvent.UNSUBSCRIBE, peripheral_central_unsubscribeHandler );
```

Then process the subscription and unsubscription:

```actionscript
private function peripheral_central_subscribeHandler( event:CentralEvent ):void
{
	trace( "peripheral manager: central subscribe: " + event.central.uuid  );
	
	// You should use this to track whether you should be periodically sending updates
	// For the moment we'll just show as an example sending an update immediately
	
	var value:ByteArray = new ByteArray();
	value.writeUTFBytes( "some_updated_value" );
	
	BluetoothLE.service.peripheralManager.updateValue( characteristic, value );
}

private function peripheral_central_unsubscribeHandler( event:CentralEvent ):void
{
	trace( "peripheral manager: central unsubscribe: " + event.central.uuid  );
	// If there are no other centrals subscribed you can stop periodically sending updates
}
```

The `updateValue` function returns a Boolean value that indicates whether 
the update was successfully sent to the subscribed centrals. If the underlying 
queue that is used to transmit the updated value is full, the method returns 
`false` and you should wait and try again later.



