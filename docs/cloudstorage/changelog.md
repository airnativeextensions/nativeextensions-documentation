### 2026.05.25 [v7.1.0]

```
This update adds two major features to document storage:
- document metadata (including download and upload status)
- storage full events 


Document metadata (`Document.metadata`) includes a range of status information for the file, for example:

```json
{ 
    "downloadStatus": "current",
    "isDownloaded": true,
    "isStorageFull": true 
}
```

Storage full notifications can be handled through the `DocumentStoreEvent.ERROR` event:

```actionscript
CloudStorage.service.documentStore.addEventListener( DocumentStoreEvent.ERROR, ds_errorHandler );

function ds_errorHandler( event:DocumentStoreEvent ):void
{
	trace( "ds_errorHandler: " + event.error + " [" + event.errorCode + "]" + (event.errorDomain != null && event.errorDomain.length > 0 ? " {" + event.errorDomain + "}" : "") );
}
```

### Updates

feat(ios): add processing of document metadata and return with document events
feat(ios): add storage full handling when local saving succeeds but save to cloud fails (resolves https://github.com/airnativeextensions/ANE-CloudStorage/issues/16)
feat(ios): add general error event when cloud storage is full (resolves https://github.com/airnativeextensions/ANE-CloudStorage/issues/15)
```

### 2024.12.12 [v7.0.0]

```
## Major update 

In this update we have moved all the extensions to use the newer gradle dependencies process. 

### Updates

feat(android): move to gradle dependencies
```

### 2023.01.17 [v6.1.0]

```
feat(ios): Xcode 14 update, remove bitcode and add no-objc-msgsend-selector-stubs compiler flag 
```

### 2022.02.04 [v6.0.99]

```
Update air package descriptions
Update docs to use apm
```

### 2021.11.12 [v6.0.98]

```
Unity: Corrected getKeys method on Android implementation (not supported yet)
```

### 2021.09.24 [v6.0.97]

```
Added air package
```


### 2021.04.06 [v6.0.095]

```
Updated docs
```


### 2021.04.06 [v6.0.095]

```
Updated docs and reduced unity minimum version
```


### 2020.04.30 [v6.0.066]

```
Fixed crash in key value storage
```


### 2020.03.23 [v6.0.062]

```
Android X migration (resolves #12)
```


### 2020.01.22 [v5.0.056]

```
Unity Plugin release
```


### 2019.07.22 [v4.0.044]

```
Fixed issue with document deletion of an open document (resolves #8)
Android 64bit packaging support (resolves #11)
Removed application keys
```


### 2019.03.12 [v3.1.036]

```
Updated minimum iOS version to 8.0
Embedded iOS bitcode
```


### 2018.02.10 [v3.0.030]

```
Apple tvOS platform implementation
```


### 2017.11.10 [v2.1.020]

```
Updates for iOS 11
```


### 2017.07.10 [v2.0.015]

```
Updated for compatibility with new Core library (for Notifications/PushNotifications fix)
```


### 2016.12.23 [v2.0.014]

```
Updating documentation
```


### 2016.12.16 [v2.0.014]

```
Added document storage for synchronising files
```


###  2016.06.30

```
Release v1.0
```
