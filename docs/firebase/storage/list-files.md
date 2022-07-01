---
title: Storage - List Files
sidebar_label: List Files
---

Cloud Storage for Firebase allows you to list the contents of your Cloud Storage bucket. The SDKs return both the items and the prefixes of objects under the current Cloud Storage reference.

Projects that use the List API require Cloud Storage for Firebase Rules version 2. If you have an existing Firebase project, follow the steps in the [Security Rules Guide](https://firebase.google.com/docs/storage/security/core-syntax).

:::note
The List API is only allowed for Rules version 2. In Rules version 2, allow read is the shorthand for allow get, list.
:::



## List all files

You can use `listAll()` to fetch all results for a directory. This is best used for small directories as all results are buffered in memory. The operation also may not return a consistent snapshot if objects are added or removed during the process.


```actionscript
var ref:StorageReference = FirebaseStorage.service.getReference();
ref.addEventListener( StorageReferenceListEvent.SUCCESS, listSuccessHandler );
ref.addEventListener( StorageReferenceListEvent.ERROR, listErrorHandler );
ref.listAll();


function listSuccessHandler( event:StorageReferenceListEvent ):void 
{
    // Contains a list of "prefixes" - similar concept to sub directories 
    for each (var prefix:String in event.prefixes)
    {
    }

    // Contains a list of "items" - each represents a storage item (or file)
    for each (var item:String in event.items)
    {
        // Can retrieve a reference to the file as below:
        var ref:StorageReference = FirebaseStorage.service.getReference( item );
    }
}
```


## Paginate list results

The `list()` API places a limit on the number of results it returns. `list()` provides a consistent pageview and exposes a `pageToken` that allows control over when to fetch additional results.

```actionscript
var ref:StorageReference = FirebaseStorage.service.getReference();
ref.addEventListener( StorageReferenceListEvent.SUCCESS, listSuccessHandler );
ref.addEventListener( StorageReferenceListEvent.ERROR, listErrorHandler );
ref.list( 10 );


function listSuccessHandler( event:StorageReferenceListEvent ):void 
{
    // Process page of results - similar to listAll, this contains "prefixes" and "items"
    // ...

    // Recurse onto next page 
    if (event.pageToken)
    {
        // Continue pagination by calling list again with the pageToken
        ref.list( 10, event.pageToken );
    }
}
```

The `pageToken` encodes the path and version of the last item returned in the previous result. In a subsequent request using the `pageToken`, items that come after the pageToken are shown


## Handle Errors

`list()` and `listAll()` fail if you haven't upgraded the Security Rules to version 2. Upgrade your Security Rules if you see this error:

```
Listing objects in a bucket is disallowed for rules_version = "1".
Please update storage security rules to rules_version = "2" to use list.
```

Other possible errors may indicate the user does not have the right permission. More information on errors can be found in the [Handle Errors](https://firebase.google.com/docs/storage/web/handle-errors).


```actionscript
function listErrorHandler( event:StorageReferenceListEvent ):void 
{
    trace( event.errorMessage );
}
```
