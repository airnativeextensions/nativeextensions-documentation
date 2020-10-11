---
title: Dialog Views and Builders
sidebar_label: Dialog Views and Builders
---


## Lifetime

The DialogView instances created using the builders are designed to be reused and as such when you 
call `create` resources are allocated to display the dialog view. Once you have finished using the 
dialog you should call `dispose` on the dialog to remove any allocated resources for the dialog.

There are two main ways to handle this process. The one demonstrated in most of the examples here 
shows calling `dispose` when we have finished using the dialog **i.e. in the closed event**. 

Using this method you could hold onto the `DialogView` instance and call `show` and `dismiss` as 
you require until you have finished using the dialog.

The second method is designed for a single use situation. In this method the resources are disposed 
as soon as the dialog is dismissed. To use this method you must pass `true` to the constructor of 
your dialog builder to specify the dialog should be disposed automatically when closed.

Dispose on close can be used to display a simple Alert without having to respond to the close event 
and dispose the resources yourself. The following example demonstrates this:

```actionscript
Dialog.service.create( 
		new AlertBuilder( true )
			.setTitle( "Alert" )
			.setMessage( "Test Message" )
			.addOption( "OK" )
			.build()
		).show();
```
