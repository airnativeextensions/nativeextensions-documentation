---
title: Retrieving the Contact List
sidebar_label: Retrieving the Contact List
---

There are several ways to access the contact list. As the list is quite large and detailed a full 
(extended) contact list request returning all of the available contacts and details on each can be 
quite slow, so while we have provided this functionality we do not suggest using it.

Instead our suggested method is to retrieve the basic contact list, which only retrieves a subset 
of the contact details, which you can then query individually for the full details.

The example below shows retrieving the list of contacts and then querying one for detailed information.


```actionscript
// Before here we have already requested access and performed initialisation

Contacts.service.addEventListener( ContactsEvent.GET_CONTACTS, contacts_getContactsHandler );
Contacts.service.addEventListener( ContactsEvent.GET_CONTACTS_ERROR, contacts_getContactsErrorHandler );

Contacts.service.getContactListAsync();

...

private function contacts_getContactsHandler( event:ContactsEvent ):void
{
	// event.data is an Array of Contact objects only with basic details

	var randomIndex:int = Math.floor( Math.random() * contacts.length );
	var randomContact:Contact = contacts[ randomIndex ];
	
	var contactWithDetails:Contact = Contacts.service.getContactDetails( randomContact.contactId );
		
}

private function contacts_getContactsErrorHandler( event:ContactsEvent ):void
{
	trace( "ERROR::" + event.message );
}
```


## Extended List

If you wish, you can load the extended contact list using the `getContactListExtendedAsync` function. 
This loads all of the contacts and all their details (and if specified all their images).

```actionscript
Contacts.service.addEventListener( ContactsEvent.GET_CONTACTS_EXTENDED, contacts_getContactsExtendedHandler );
Contacts.service.addEventListener( ContactsEvent.GET_CONTACTS_ERROR, contacts_getContactsErrorHandler );

Contacts.service.getContactListExtendedAsync();

...

private function contacts_getContactsExtendedHandler( event:ContactsEvent ):void
{
	trace( "getContactListExtendedAsync(): Retrieved " + event.data.length + " contacts" );
}

private function contacts_getContactsErrorHandler( event:ContactsEvent ):void
{
	trace( "ERROR::" + event.message );
}
```

>
> Note: While all attempts have been made to reduce the load of this call there are still situations 
> which will take a while to return so we suggest using this method with care. A large contact list 
> will not be a quick query and the conversion to AS3 objects may take a noticable time.
>


## Modified Contacts

You can retrieve a list of contacts that have been modified by the user since a particular date. 
This is particularly useful if you are attempting to maintain some sort of synchronisation between
several data sources.

To do this, simply provide the date from which you wish to retrieve the modified contacts to the 
`getContactListModifiedSince` function, as below:


```actionscript
Contacts.service.addEventListener( ContactsEvent.GET_CONTACTS_MODIFIED, contacts_getContactsModifiedHandler );

var success:Boolean = Contacts.service.getContactListModifiedSince( new Date( 2015, 9, 1 ) );

...

private function contacts_getContactsModifiedHandler( event:ContactsEvent ):void
{
	// event.data will contain an array of Contact objects that have been modified
}
```




## JSON

Retrieving the contact list as JSON, this method retrieves the extended contact list again however 
it will be faster than `getContactListExtendedAsync` as we aren't creating a `Contact` object for each 
contact. Instead we are just returning a json formatted string.  


```actionscript
Contacts.service.addEventListener( ContactsJSONEvent.GET_CONTACTS_JSON, contacts_getContactsJSONHandler );
					
Contacts.service.getContactListAsJSON();

...

private function contacts_getContactsJSONHandler( event:ContactsJSONEvent ):void
{
	trace( event.json );
}
```

### Modified Since as JSON

Similarly you can retrieve the modified since list as JSON

```actionscript 
Contacts.service.addEventListener( ContactsJSONEvent.GET_CONTACTS_MODIFIED_JSON, contacts_getContactsModifiedJSONHandler );

var success:Boolean = Contacts.service.getContactListModifiedSinceAsJSON( new Date( 2015, 9, 1 ) );

...

private function contacts_getContactsModifiedJSONHandler( event:ContactsJSONEvent ):void
{
	trace( event.json );
}
```