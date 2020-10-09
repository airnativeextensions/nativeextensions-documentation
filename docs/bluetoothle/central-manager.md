---
title: Central Manager
sidebar_label: Central Manager
---

## Acting as a Central

In this section we describe how to operate as a central and scan, read, write and subscribe to peripherals.

Here you will be shown how to:

  - [Discovering Peripherals](#discovering-peripherals)
  - [Connecting to a Peripheral](#connecting-to-a-peripheral)
  - [Discovering Services and Characteristics of a Connected Peripheral](#discovering-services-and-characteristics-of-a-connected-peripheral)
  - [Retrieving the Value of a Characteristic](#retrieving-the-value-of-a-characteristic)
  - [Subscribing to a Characteristic](#subscribing-to-a-characteristic)
  - [Unsubscribing from a Characteristic](#unsubscribing-from-a-characteristic)
  - [Writing the Value of a Characteristic](#writing-the-value-of-a-characteristic)


### Discovering Peripherals

The most common first task for a central is to scan for advertising peripherals. 
As advertising is the main way peripherals announce their presence. You can discover 
any advertising peripherals by starting a scan using the `scanForPeripherals` function.


```actionscript
BluetoothLE.service.centralManager.addEventListener( PeripheralEvent.DISCOVERED, central_peripheralDiscoveredHandler );

if (!BluetoothLE.service.centralManager.scanForPeripherals())
{
	// There was an error starting to scan, check the state of the adapter!
}
```

Then when peripherals are discovered you will receive the `PeripheralEvent.DISCOVERED` event:


```actionscript
private function central_peripheralDiscoveredHandler( event:PeripheralEvent ):void
{
	// event.peripheral will contain a Peripheral object with information about the Peripheral
	trace( "peripheral discovered: "+ event.peripheral.name );
}
```

Most likely in a real world situation you would provide the first parameter to the 
`scanForPeripherals` function. This first parameter is an array of service uuids which 
should be scanned for as generally you are wanting to discover devices with a certain feature 
/ service. If you do not provide it (as in the above example) then all discovered peripherals 
will be returned.


### Connecting to a Peripheral

Once you have discovered a peripheral and made the decision to interact with it you will need 
to connect to the peripheral. When connecting you need to use an object retrieved through a 
discovered event, passing it to the `BluetoothLE.service.centralManager.connect` function.

The connect function may then cause several events to be dispatched:

- `PeripheralEvent.CONNECT`: when connection was successfully made
- `PeripheralEvent.CONNECT_FAIL`: when the connection failed
- `PeripheralEvent.DISCONNECT`: this may be dispatched later (after a connect event) if the connection is left idle.

For example:

```actionscript
var activePeripheral:Peripheral = null;

BluetoothLE.service.centralManager.addEventListener( PeripheralEvent.DISCOVERED, central_peripheralDiscoveredHandler );
BluetoothLE.service.centralManager.addEventListener( PeripheralEvent.CONNECT, central_peripheralConnectHandler );
BluetoothLE.service.centralManager.addEventListener( PeripheralEvent.CONNECT_FAIL, central_peripheralConnectFailHandler );
BluetoothLE.service.centralManager.addEventListener( PeripheralEvent.DISCONNECT, central_peripheralDisconnectHandler );

BluetoothLE.service.centralManager.scanForPeripherals();

...

private function central_peripheralDiscoveredHandler( event:PeripheralEvent ):void
{
	trace( "connecting to peripheral: "+ event.peripheral.name );
	
	// You should make some decision about whether this peripheral is the one you wish to connect to
	//	either store the peripheral and ask the user or determine by services available 
	
	// For this example we are just going to blindly connect to every discovered peripheral
	BluetoothLE.service.centralManager.connect( event.peripheral );
}

private function central_peripheralConnectHandler( event:PeripheralEvent ):void
{
	trace( "peripheral connected: "+ event.peripheral.toString() );	
	// Store the peripheral for further interaction
	activePeripheral = event.peripheral;
}

private function central_peripheralConnectFailHandler( event:PeripheralEvent ):void
{
	trace( "peripheral connect fail: "+ event.peripheral.name );	
	activePeripheral = null;
}

private function central_peripheralDisconnectHandler( event:PeripheralEvent ):void
{
	trace( "peripheral disconnect: "+ event.peripheral.name );	
	activePeripheral = null;
}
```


### Discovering Services and Characteristics of a Connected Peripheral

After you have established a connection to a peripheral, you can begin to explore its data. 
The first step in exploring what a peripheral has to offer is discovering its available services. 
To do this you add listeners to the `Peripheral` object and call `discoverServices`.

Similar to `scanForPeripherals` the discovery process can take an array of uuids to limit the 
services returned to be services of interest to your application. The following example uses 
the default of an empty array to discover all avaliable services of the peripheral

When this process completes successfully the `PeripheralEvent.DISCOVER_SERVICES` will be 
dispatched with a Peripheral object that contains a populated `Peripheral.services` array of 
`Service` objects.

Each service contains a list of `Characteristic`s. You can consider a `Characteristic` as a data value, 
which has properties, permissions and a value represented as a `ByteArray`. Similarly to services 
you can discover the Characteristics of a `Service` on a `Peripheral` by calling the 
`discoverCharacteristics` function. This function similarly dispatches the 
`PeripheralEvent.DISCOVER_CHARACTERISTICS` event when completed.

In the following snippet we discover all of the available services on a previously connected 
Peripheral and then proceed to discover the characteristics of the first service.

```actionscript
var peripheral:Peripheral = ...; // This snippet assumes you have a connected 'peripheral' object.
var service:Service = null;

peripheral.addEventListener( PeripheralEvent.DISCOVER_SERVICES, peripheral_discoverServicesHandler );
peripheral.addEventListener( PeripheralEvent.DISCOVER_CHARACTERISTICS, peripheral_discoverCharacteristicsHandler );

peripheral.discoverServices();
```

Then in the event handler lets iterate through the services and discover the characteristics of 
the first available Service.

```actionscript
private function peripheral_discoverServicesHandler( event:PeripheralEvent ):void
{
	trace( "peripheral discover services: " + event.peripheral.name );
	if (event.peripheral.services.length > 0)
	{
		for each (var service:Service in event.peripheral.services)
		{
			trace( "service: "+ service.uuid );
		}
		// As an example discover the characteristics of the first available service
		peripheral.discoverCharacteristics( peripheral.services[0] );
	}
}

private function peripheral_discoverCharacteristicsHandler( event:PeripheralEvent ):void
{
	trace( "peripheral discover characteristics: " + event.peripheral.name );
	for each (var service:Service in event.peripheral.services)
	{
		trace( "service: "+ service.uuid );
		for each (var ch:Characteristic in service.characteristics)
		{
			trace( "characteristic: "+ch.uuid );
		}
	}
}
```

### Retrieving the Value of a Characteristic

A characteristic contains a single value that represents more information about a peripheral's service. 
For example, a temperature measurement characteristic of a health thermometer service may have a value 
that indicates a temperature in Celsius. You can retrieve the value of a characteristic by reading it 
directly or by subscribing to it.

After you have found a characteristic of a service that you are interested in, you can read the 
characteristic's value by calling the `readValueForCharacteristic` and waiting for the 
`CharacteristicEvent.UPDATE` event.

```actionscript
var peripheral:Peripheral = ...; // Previously connected Peripheral
var characteristic:Characteristic = ...; // Discovered Characteristic of interest

peripheral.addEventListener( CharacteristicEvent.UPDATE, peripheral_characteristic_updatedHandler );
peripheral.addEventListener( CharacteristicEvent.UPDATE_ERROR, peripheral_characteristic_errorHandler );

peripheral.readValueForCharacteristic( characteristic );

...

private function peripheral_characteristic_updatedHandler( event:CharacteristicEvent ):void
{
	trace( "peripheral characteristic updated: " + event.characteristic.uuid );
	trace( "value="+ event.characteristic.value.readUTFBytes( event.characteristic.value.length )  );
}

private function peripheral_characteristic_errorHandler( event:CharacteristicEvent ):void
{
	trace( "peripheral characteristic error: [" + event.errorCode +"] "+event.error );
}
```


### Subscribing to a Characteristic

Though reading the value of a characteristic using the `readValueForCharacteristic` method can be 
effective for some use cases, it is not the most efficient way to retrieve a value that changes. 
For most characteristic values that change—for instance, your heart rate at any given time — you 
should retrieve them by subscribing to them. When you subscribe to a characteristic's value, you 
receive an event from the peripheral when the value changes.

You can subscribe to the value of a characteristic that you are interested in by calling the 
`subscribeToCharacteristic` function and passing the characteristic you are interested in. When you 
attempt to subscribe to a characteristic's value, the `CharacteristicEvent.SUBSCRIBE` event will 
be dispatched indicating you will now receive `CharacteristicEvent.UPDATE` events whenever the 
value of the Characteristic changes. If the subscription request fails for any reason the 
`CharacteristicEvent.SUBSCRIBE_ERROR` will be dispatched.

After you have successfully subscribed to a characteristic's value, the peripheral device 
notifies your app when the value has changed. Each time the value changes the 
`CharacteristicEvent.UPDATE` event will be dispatched.


```actionscript
var peripheral:Peripheral = ...; // Previously connected Peripheral
var characteristic:Characteristic = ...; // Discovered Characteristic of interest

peripheral.addEventListener( CharacteristicEvent.UPDATE, peripheral_characteristic_updatedHandler );
peripheral.addEventListener( CharacteristicEvent.UPDATE_ERROR, peripheral_characteristic_errorHandler );
peripheral.addEventListener( CharacteristicEvent.SUBSCRIBE, peripheral_characteristic_subscribeHandler );
peripheral.addEventListener( CharacteristicEvent.SUBSCRIBE_ERROR, peripheral_characteristic_subscribeErrorHandler );
peripheral.addEventListener( CharacteristicEvent.UNSUBSCRIBE, peripheral_characteristic_unsubscribeHandler );

if (!peripheral.subscribeToCharacteristic( characteristic ))
{
	// error starting subscription process 
}
```

Once subscribed you will start receiving update events:

```actionscript
private function peripheral_characteristic_updatedHandler( event:CharacteristicEvent ):void
{
	trace( "peripheral characteristic updated: " + event.characteristic.uuid );
	trace( "value="+ event.characteristic.value.readUTFBytes( event.characteristic.value.length )  );
}

private function peripheral_characteristic_errorHandler( event:CharacteristicEvent ):void
{
	trace( "peripheral characteristic error: [" + event.errorCode +"] "+event.error );
}

private function peripheral_characteristic_subscribeHandler( event:CharacteristicEvent ):void
{
	trace( "peripheral characteristic subscribe: " + event.peripheral.name );
}		

private function peripheral_characteristic_subscribeErrorHandler( event:CharacteristicEvent ):void
{
	trace( "peripheral characteristic error: [" + event.errorCode +"] "+event.error );
}		

private function peripheral_characteristic_unsubscribeHandler( event:CharacteristicEvent ):void
{
	trace( "peripheral characteristic unsubscribe: " + event.peripheral.name );
}
```

### Unsubscribing from a Characteristic

If you wish to later unsubscribe from a characteristic you can call the `unsubscribeToCharacteristic` 
with the same `Characteristic` and the `CharacteristicEvent.UNSUBSCRIBE` will be dispatched when 
this is completed.

```actionscript
peripheral.addEventListener( CharacteristicEvent.UNSUBSCRIBE, peripheral_characteristic_unsubscribeHandler );

peripheral.unsubscribeToCharacteristic( characteristic );
```

```actionscript
private function peripheral_characteristic_unsubscribeHandler( event:CharacteristicEvent ):void
{
	trace( "peripheral characteristic unsubscribe: " + event.peripheral.name );
}
```

### Writing the Value of a Characteristic

For some use cases, it makes sense to write the value of a characteristic. If a characteristic's 
value is writeable, you can write its value with some data (a ByteArray) by calling 
`writeValueForCharacteristic` function on a `Peripheral` and providing the `Characteristic` to 
write and the new value.

```actionscript
// These variables for peripheral and characteristic should have 
// previously been obtained through scanning and discovery functionality 
var peripheral:Peripheral = ...;
var characteristic:Characteristic = ...;

peripheral.addEventListener( CharacteristicEvent.WRITE_SUCCESS, peripheral_characteristic_writeHandler );
peripheral.addEventListener( CharacteristicEvent.WRITE_ERROR, peripheral_characteristic_writeErrorHandler );
			
// Some data to write
var value:ByteArray = new ByteArray();
value.writeUTFBytes( "some_data_value" );

var success:Boolean = peripheral.writeValueForCharacteristic( characteristic, value );
```

You will receive either a success or an error event:

```actionscript
private function peripheral_characteristic_writeHandler( event:CharacteristicEvent ):void
{
	trace( "peripheral characteristic write: " + event.peripheral.name );
}

private function peripheral_characteristic_writeErrorHandler( event:CharacteristicEvent ):void
{
	trace( "peripheral characteristic error: [" + event.errorCode +"] "+event.error );
}	
```

Characteristics may only allow certain types of writes to be performed on their value.
To determine which types of writes are permitted to a characteristic's value, you access 
the relevant properties of the `Characteristic.properties` array. The possible values are 
defined in the `Characteristic` class `PROPERTY_*` definitions.





