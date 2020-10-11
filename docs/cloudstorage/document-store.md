---
title: Document Store
sidebar_label: Document Store
---


Make sure you have added the entitlements to your application descriptor before attempting to 
use the document store. See the section: [Add the Extension](add-the-extension).

> 
> Note: **Document storage is not supported on Apple's tvOS or through the Unity plugin**
>


## Checking Support

You should check if the document store functionality is supported on the current platform by using
the `isSupported` flag. This will determine if the current platform (Android, iOS, tvOS etc) supports
the document storage functionality.


```actionscript
if (CloudStorage.service.documentStore.isSupported)
{
	// The documentStore functionality is supported on the current platform
}
```

Certain platforms, such as tvOS will return false for this value. 



## Setup the store

To start you must call setup on the document store. This initialises the store to be ready for 
document handling and makes sure that the services are available.

You can either pass a specific Ubiquity Container ID or an empty string to use the first container 
ID in your entitlements.


```actionscript
CloudStorage.service.documentStore.addEventListener( DocumentStoreStateEvent.INITIALISED, ds_initialisedHandler );
CloudStorage.service.documentStore.addEventListener( DocumentStoreStateEvent.CHANGE, ds_stateChangeHandler );

CloudStorage.service.documentStore.addEventListener( DocumentStoreEvent.FILES_DID_CHANGE, ds_filesDidChangeHandler );
CloudStorage.service.documentStore.addEventListener( DocumentStoreEvent.CONFLICT, ds_conflictHandler );

CloudStorage.service.documentStore.setup();
```

Once you have called `setup` you can check if the document store is available for use by checking
the `isAvailable` flag:


```actionscript
if (CloudStorage.service.documentStore.isAvailable)
{
	// Can use storage
}
```


The events that are dispatched here represent different events occurring in the store:


```actionscript
private function ds_initialisedHandler( event:DocumentStoreStateEvent ):void
{
	trace( "ds_initialisedHandler: " + event.available + ":"+event.containerUrl );
	trace( event.token );
}

private function ds_stateChangeHandler( event:DocumentStoreStateEvent ):void
{
	trace( "ds_stateChangeHandler: " + event.available + ":"+event.containerUrl );
	
	// Should check for user change here storing the current value of the token
	trace( event.token );
}

private function ds_filesDidChangeHandler( event:DocumentStoreEvent ):void
{
	trace( "ds_filesDidChangeHandler" );
	for each (var document:Document in event.documents)
	{
		trace( "changed: "+document.filename );
	}
}

private function ds_conflictHandler( event:DocumentStoreEvent ):void
{
	trace( "ds_conflictHandler" );
	// See handling conflicts later
}
```


## List Documents

Once you have setup the store you can query the available documents by calling `listDocuments`.

```actionscript
if (CloudStorage.service.documentStore.isAvailable)
{
	var documents:Vector.<Document> = CloudStorage.service.documentStore.listDocuments();
	
	for each (var document:Document in documents)
	{
		trace( "document: "+document.filename +" ["+document.url+"]" );
	}
	
	// Store for other actions
	_documents = documents;
}
```





## Update

If you wish, you can force an update of the current files by calling `update`. 

```actionscript
var success:Boolean = CloudStorage.service.documentStore.update();
```


## Load a Document 

Once you have retrieved the list of files that are available you will most likely want to 
load the data of the document. This is done by calling `loadDocument` passing the document's 
filename that you wish to load:

```actionscript
CloudStorage.service.documentStore.addEventListener( DocumentEvent.LOAD_COMPLETE, document_loadCompleteHandler );
CloudStorage.service.documentStore.addEventListener( DocumentEvent.LOAD_ERROR, document_loadErrorHandler );

var success:Boolean = CloudStorage.service.documentStore.loadDocument( document.filename );
```

If this call succeeds you will receive one of the load events. In the following we are loading 
a text file and attempt to trace the contents of the file.

```actionscript
private function document_loadCompleteHandler( event:DocumentEvent ):void
{
	trace( "document_loadCompleteHandler" );

	CloudStorage.service.documentStore.removeEventListener( DocumentEvent.LOAD_COMPLETE, document_loadCompleteHandler );
	CloudStorage.service.documentStore.removeEventListener( DocumentEvent.LOAD_ERROR, document_loadErrorHandler );
	
	if (event.document && event.document.data)
	{
		trace( "document.data["+event.document.data.length+"] : "+event.document.modifiedDate.toLocaleString() );
		try {
			trace( event.document.data.readUTFBytes( event.document.data.length ));
		} catch (e:Error) {}
	}
}

private function document_loadErrorHandler( event:DocumentEvent ):void
{
	trace( "document_loadErrorHandler: " + event.error );

	CloudStorage.service.documentStore.removeEventListener( DocumentEvent.LOAD_COMPLETE, document_loadCompleteHandler );
	CloudStorage.service.documentStore.removeEventListener( DocumentEvent.LOAD_ERROR, document_loadErrorHandler );
}
```


## Save a Document

Now that you have a loaded document you can modify the data in the file by changing the data contained in the 
document's `data`. Once you have modified the content, call `saveDocument` to write the contents of the doucment
to the document store.

For example, in the following we create a string with a random number and write that to the document: 

```actionscript
var content:String =  "TEST SOME STRING WRITING "+String(Math.floor(Math.random()*100000));e

_documents[0].data = new ByteArray();
_documents[0].data.writeUTFBytes( content );

CloudStorage.service.documentStore.addEventListener( DocumentEvent.SAVE_COMPLETE, document_saveCompleteHandler );
CloudStorage.service.documentStore.addEventListener( DocumentEvent.SAVE_ERROR, document_saveErrorHandler );

CloudStorage.service.documentStore.saveDocument( _documents[0] );
```

Again you will receive either a complete or error event, depending on the success of the save.

```actionscript
private function document_saveCompleteHandler( event:DocumentEvent ):void
{
	trace( "document_saveCompleteHandler" );
	
	CloudStorage.service.documentStore.removeEventListener( DocumentEvent.SAVE_COMPLETE, document_saveCompleteHandler );
	CloudStorage.service.documentStore.removeEventListener( DocumentEvent.SAVE_ERROR, document_saveErrorHandler );
}

private function document_saveErrorHandler( event:DocumentEvent ):void
{
	trace( "document_saveErrorHandler" );
	
	CloudStorage.service.documentStore.removeEventListener( DocumentEvent.SAVE_COMPLETE, document_saveCompleteHandler );
	CloudStorage.service.documentStore.removeEventListener( DocumentEvent.SAVE_ERROR, document_saveErrorHandler );
}
```



## Create a Document 

To create a new document you can simply create an instance of the `Document` class 
passing in your data and then call `saveDocument`. This will create a new file 
where appropriate and return the normal save success / error events.

```actionscript
var document:Document = new Document();
document.filename = "test.txt";
document.data = new ByteArray();
document.data.writeUTFBytes( "TEST SOME STRING WRITING" );

CloudStorage.service.documentStore.addEventListener( DocumentEvent.SAVE_COMPLETE, document_createCompleteHandler );
CloudStorage.service.documentStore.addEventListener( DocumentEvent.SAVE_ERROR, document_createErrorHandler );

CloudStorage.service.documentStore.saveDocument( document );
```



If you wish to create the document in a folder, you can add a folder name to the `filename` of the document.

```actionscript
document.filename = "folder/test.txt";
```



## Delete a Document

To delete a document call `deleteDocument` with the filename of the document to delete.

```actionscript
CloudStorage.service.documentStore.addEventListener( DocumentEvent.DELETE_COMPLETE, document_deleteCompleteHandler );
CloudStorage.service.documentStore.addEventListener( DocumentEvent.DELETE_ERROR, document_deleteErrorHandler );

CloudStorage.service.documentStore.deleteDocument( _documents[0].filename );
```

```actionscript
private function document_deleteCompleteHandler( event:DocumentEvent ):void
{
	trace( "document_deleteCompleteHandler" );
	
	CloudStorage.service.documentStore.removeEventListener( DocumentEvent.DELETE_COMPLETE, document_deleteCompleteHandler );
	CloudStorage.service.documentStore.removeEventListener( DocumentEvent.DELETE_ERROR, document_deleteErrorHandler );
}

private function document_deleteErrorHandler( event:DocumentEvent ):void
{
	trace( "document_deleteErrorHandler" );
	
	CloudStorage.service.documentStore.removeEventListener( DocumentEvent.DELETE_COMPLETE, document_deleteCompleteHandler );
	CloudStorage.service.documentStore.removeEventListener( DocumentEvent.DELETE_ERROR, document_deleteErrorHandler );
}
```



## Handling conflicts


Conflicts can (and will) occur when devices save to the same file simulataneously and cannot be resolved by iCloud.

You must listen for the conflict event and process each conflict. The event contains a list of documents that are 
in a conflicted state and you must use `getConflictingVersionsForDocument` to get the versions of the file and then
decide which is the valid version and resolve the conflict with that version of the file, calling `resolveConflictWithVersion`.

The following iterates over the conflicts and blindly resolves the conflict with the first version of the file. 

```actionscript
private function ds_conflictHandler( event:DocumentStoreEvent ):void
{
	trace( "ds_conflictHandler" );	
	for each (var document:Document in event.documents)
	{
		trace( "conflict: "+document.filename );
		var versions:Array = CloudStorage.service.documentStore.getConflictingVersionsForDocument( document );
		CloudStorage.service.documentStore.resolveConflictWithVersion( document, versions[0] );
	}
}
```

> **You should not use this in production! We just are using this to demonstrate the function calls.**