---
title: Application ID
sidebar_label: Application ID
---


The application ID is the most important thing to set in the extension, an invalid value will take you to the wrong application, or fail altogether. This ID is unfortunately different on the different operating systems, it is generally related to an identifier in the particular stores. 


## Android

Under Android the value is the Java package name of your application.

### AIR 

With AIR the value is the application identifier defined in your application descriptor, preceeded by `air.`. So, for example the distriqt test application `com.distriqt.test` has a Google Play id of `air.com.distriqt.test`. 

A simple way to attain this value is to use the NativeApplication class as follows: 

```actionscript
var applicationId:String = "air." + NativeApplication.nativeApplication.applicationId;
```

There are exceptions to this however! If you have an invalid Java package name as your application ID then the AIR packager will change the id to be valid. For example, if your application has a package starting with a number `com.1invalid.example` will be changed. To confirm you should always make sure you supply the ID that you use in 
the Google Play console to setup your application in the Play Store.

Additionally note if you are using the `NO_ANDROID_FLAIR` flag you will not have the `air.` prefix mentioned above.

The default value uses the value from the NativeApplication applicationId variable, preceeded by `air.` which should be the valid id for your Android application in the Google Play store.



## iOS / tvOS / macOS

Under Apple the value is a little more complicated. It's the value of the Apple ID in your iTunes Connect application page. For example, the distriqt test application `com.distriqt.test` has an iOS Apple ID of `552872162`. 

> It may be different for your macOS and iOS applications.

It can also be found in the iTunes App Store link URL which will be of the form 
`https://itunes.apple.com/us/app/[APP_NAME]/id[APP_ID]`






## Automatic Setup 

The extension can also automatically retrieve the appropriate application id's information for you. This is done using either information about the application package or querying the applicable store for information.

This will most likely not work for a test application, where you may not yet have a valid application store entry for your application.

To retrieve the id's automatically simply call the `retrieveApplicationId()` function.

An error could result if the application is not yet in the app store or if the current application id does not match the one in the store.


### AIR 

```actionscript
ApplicationRater.service.retrieveApplicationId();
```

This will dispatch an event when the id is determined:

- `ApplicationIDEvent.RETRIEVED`: If the application id was retrieved correctly;
- `ApplicationIDEvent.ERROR`: If the application could not be identified.


For example:

```actionscript
ApplicationRater.service.addEventListener( 
    ApplicationIDEvent.RETRIEVED, retrievedHandler );
ApplicationRater.service.addEventListener( 
    ApplicationIDEvent.ERROR, errorHandler );
ApplicationRater.service.retrieveApplicationId();

function retrievedHandler( event:ApplicationIDEvent ):void 
{
    trace( event.applicationId );
}

function errorHandler( event:ApplicationIDEvent ):void 
{
    trace( "error: [" + event.errorCode + "] " + event.error )
}
```


### Unity


```csharp
ApplicationRater.Instance.RetrieveApplicationId();
```

This will dispatch an event when the id is determined:

- Retrieved: If the application id was retrieved correctly
	- `OnApplicationIDRetrieved` event
- Error: If the application could not be identified
	- `OnApplicationIDError` event


For example:

```csharp
ApplicationRater.Instance.OnApplicationIDRetrieved 
	+= OnApplicationIDRetrieved;
ApplicationRater.Instance.OnApplicationIDError 
	+= OnApplicationIDError;

ApplicationRater.Instance.RetrieveApplicationId();


void OnApplicationIDRetrieved(ApplicationIDEvent e)
{
	Debug.Log(e.applicationId);
}

void OnApplicationIDError(ApplicationIDEvent e)
{
	Debug.Log("error: [" + e.errorCode + "] " + e.error);
}
```



## Manual Setup

Manually setting the application id can be useful if you want to ensure the rating process is working during testing or other situations where you don't want to rely on the automatic retrieval. 

You can call the `setApplicationId()` function multiple times with the platform string (and store if required) specifying the platform for the `applicationId` so you won't have to determine the OS to set the correct ID. 

If you don't specify the platform then it is assumed you have determined to correct ID and it will overwrite any previous value.

You should pass the above id's to the extension as early as possible, preferably just after you 
initialise the extension as below:

```actionscript title="AIR"
ApplicationRater.service.setApplicationId( 
    "air.com.distriqt.test", ApplicationRater.IMPLEMENTATION_ANDROID );
ApplicationRater.service.setApplicationId( 
    "XXXXXXXXX", ApplicationRater.IMPLEMENTATION_IOS );
ApplicationRater.service.setApplicationId( 
    "YYYYYYYYY", ApplicationRater.IMPLEMENTATION_MACOS );
```

```csharp title="Unity"
ApplicationRater.Instance.SetApplicationId(
	"com.package.application", ApplicationRater.IMPLEMENTATION_ANDROID);
ApplicationRater.Instance.SetApplicationId(
	"XXXXXXXXX", ApplicationRater.IMPLEMENTATION_IOS);
ApplicationRater.Instance.SetApplicationId(
	"YYYYYYYYY", ApplicationRater.IMPLEMENTATION_MACOS);
```




## Using Automatic and Manual 

You can combine both these methods to provide a fallback in the cases where the automatic method fails especially for testing.

Doing the following will set the fallback application id's first and then attempt to correct them using the automatic method.

AIR:

```actionscript
// Set the default / fallback
ApplicationRater.service.setApplicationId( 
    "air.com.distriqt.test", ApplicationRater.IMPLEMENTATION_ANDROID );
ApplicationRater.service.setApplicationId( 
    "XXXXXXXXX", ApplicationRater.IMPLEMENTATION_IOS );
ApplicationRater.service.setApplicationId( 
    "YYYYYYYYY", ApplicationRater.IMPLEMENTATION_MACOS );

// Attempt automatic retrieval
ApplicationRater.service.retrieveApplicationId();
```


Unity:

```csharp
// Set the default / fallback
ApplicationRater.Instance.SetApplicationId(
	"com.package.application", ApplicationRater.IMPLEMENTATION_ANDROID);
ApplicationRater.Instance.SetApplicationId(
	"XXXXXXXXX", ApplicationRater.IMPLEMENTATION_IOS);
ApplicationRater.Instance.SetApplicationId(
	"YYYYYYYYY", ApplicationRater.IMPLEMENTATION_MACOS);

// Attempt automatic retrieval
ApplicationRater.Instance.RetrieveApplicationId();
```












