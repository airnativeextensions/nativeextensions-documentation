---
title: Multi Select
sidebar_label: Multi Select
---


A multi select dialog allows you to present a series of options to a user and allow the user to 
select or deselect several of the options. Each option is presented in the dialog with a 
check box indicating the selected state.

A multi select dialog is created by using a `MultiSelectBuilder`. The series of options is 
specified by calling `setValues` on the builder and passing an array of possible options 
or values along with an array of Boolean values indicating the selected state of each 
corresponding value.


```actionscript
var multiSelect:DialogView = Dialog.service.create( 
		new MultiSelectBuilder()
			.setTitle( "Options" )
			.setAcceptLabel( "OK" )
			.setCancelLabel( "Cancel" )
			.setValues( ["Vibration", "Rotation", "Fullscreen" ], [ true, true, false ] )
			.build()
		);
	
multiSelect.addEventListener( DialogViewEvent.CLOSED, multiSelect_closedHandler );
multiSelect.addEventListener( DialogViewEvent.CANCELLED, multiSelect_closedHandler );
multiSelect.addEventListener( DialogViewEvent.CHANGED, multiSelect_changedHandler );
multiSelect.show();

...

private function multiSelect_changedHandler( event:DialogViewEvent ):void
{
	trace( "multiSelect changed [ " + event.indexes.join(",") + " ] " + event.values.join(",") );
}

private function multiSelect_closedHandler( event:DialogViewEvent ):void
{
	trace( "multiSelect closed ("+event.index+") -> [ " + event.indexes.join(",") + " ] " + event.values.join(",") );
	var multiSelect:DialogView = DialogView(event.currentTarget);
	multiSelect.removeEventListener( DialogViewEvent.CLOSED, multiSelect_closedHandler );
	multiSelect.removeEventListener( DialogViewEvent.CANCELLED, multiSelect_closedHandler );
	multiSelect.removeEventListener( DialogViewEvent.CHANGED, multiSelect_changedHandler );
	multiSelect.dispose();
}
```