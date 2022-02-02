---
title: Adapter State
sidebar_label: Adapter State
---

## Checking the adapter state

The next step is to check the state of the adapter, i.e. check whether the Bluetooth 
adapter is turned on and whether the user has granted your application permission. 
You must also take into account that the user may turn off Bluetooth at any time so 
you should listen for the `STATE_CHANGED` event and react accordingly. Any scanning will 
be stopped and you'll have to restart this once the adapter state changes again.

The values of the state property are defined in the `BluetoothLEState` class.

On iOS we cannot turn the adapter through code, instead you have to prompt the user, 
requesting they turn on Bluetooth.


```actionscript
BluetoothLE.service.addEventListener( BluetoothLEEvent.STATE_CHANGED, stateChangedHandler );

switch (BluetoothLE.service.state)
{
	case BluetoothLEState.STATE_ON:	
		// We can use the Bluetooth LE functions
		break;
		
	case BluetoothLEState.STATE_OFF:
	case BluetoothLEState.STATE_RESETTING:	
	case BluetoothLEState.STATE_UNAUTHORISED:	
	case BluetoothLEState.STATE_UNSUPPORTED:	
	case BluetoothLEState.STATE_UNKNOWN:
		// All of these indicate the Bluetooth LE is not available
}


function stateChangedHandler( event:BluetoothLEEvent ):void
{
	trace( "stateChangedHandler(): "+BluetoothLE.service.state );
}
```



