---
title: Contact Picker UI
sidebar_label: Contact Picker UI
---

This functionality allows you to display a native contact picker UI to allow the user to select a 
contact. If you require a user selection of a contact then this is often the best, fastest and 
simplest solution.

You should listen for 4 potential events from the picker:

- `CONTACT_SELECTED`: Dispatched when the user selected a contact
- `CONTACTPICKER_CANCEL`: Dispatched if the user cancelled the picker
- `CONTACTPICKER_CLOSED`: Dispatched after the picker is closed, this is dispatched after both a selected and a cancelled event
- `CONTACTPICKER_ERROR`: Dispatched if there was an error showing the picker. The picker will not be displayed if this error event is dispatched.


```actionscript
Contacts.service.addEventListener( ContactsEvent.CONTACT_SELECTED, 		contactSelectedHandler );
Contacts.service.addEventListener( ContactsEvent.CONTACTPICKER_CANCEL, 	contactPickerCancelHandler );
Contacts.service.addEventListener( ContactsEvent.CONTACTPICKER_CLOSED, 	contactPickerClosedHandler );
Contacts.service.addEventListener( ContactsEvent.CONTACTPICKER_ERROR, 	contactPickerErrorHandler );

if (!Contacts.service.showContactPicker())
{
	trace( "Access to contacts list denied by user" );
}
```

Then you can respond to the selection in the event handlers: 

```actionscript
private function contactSelectedHandler( event:ContactsEvent ):void
{
	trace("Contact selected");
	if (event.data)
	{
		var contact:Contact = event.data[0];
		
		trace("Got contact: " + contact.contactId);
		trace("Name: " + contact.fullName);
		trace("FName: " + contact.firstName);
		trace("Org: " + contact.organisation.name + " -- " + contact.organisation.title);
		for each (var p:Object in contact.phoneNumbers)
		{
			trace(p.label + " -- " + p.value);
		}
		for each (var e:Object in contact.emailAddresses)
		{
			trace(e.label + " -- " + e.value);
		}
	}
}

private function contactPickerCancelHandler( event:ContactsEvent ):void
{
	trace( "Picker cancelled" );
}

private function contactPickerClosedHandler( event:ContactsEvent ):void
{
	trace( "Picker closed" );
}

private function contactPickerErrorHandler( event:ContactsEvent ):void
{
	trace( "An error occurred with the picker: "+event.message );
}
```
