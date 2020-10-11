---
title: Text View Alert
sidebar_label: Text View Alert
---

The Text View Alert is very similar to the basic Alert with text inputs except it contains 
a single text input allowing multiple lines of text. 

It is created using the `TextViewAlertBuilder`.

The dialog is a modal dialog that can display a title, a message and 2 actions.

```actionscript
var textViewAlert:DialogView = Dialog.service.create( 
	new TextViewAlertBuilder()
	.setTitle( "Enter some text" )
	.setMessage( "Please enter some multiline text" )
	.addOption( "OK", DialogAction.STYLE_POSITIVE, 0 )
	.build()
);
textViewAlert.addEventListener( DialogViewEvent.CLOSED, textViewAlert_closedHandler );
textViewAlert.show();

...

private function textViewAlert_closedHandler( event:DialogViewEvent ):void
{
	trace( "text view closed: " + event.index +"::"+ event.values.join(",") );
	var alert:DialogView = DialogView(event.currentTarget);
	alert.removeEventListener( DialogViewEvent.CLOSED, alert_closedHandler );
	alert.dispose();
}
```
