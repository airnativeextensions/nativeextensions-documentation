---
title: Scanning
sidebar_label: Scanning
---


## Tags

NFC tags come in a wide array of technologies and can also have data written to them in many different ways. Android and iOS has the most support for the NDEF standard, which is defined by the [NFC Forum](https://nfc-forum.org/home).

NDEF data is encapsulated inside a message (`NdefMessage`) that contains one or more records (`NdefRecord`). Each NDEF record must be well-formed according to the specification of the type of record that you want to create.


## Events

Your application will get notified about NFC tag detection events via the `NFCEvent`. The most relevant event is the `NFCEvent.ACTION_NDEF_DISCOVERED` which is dispatched whenever an applicable NDEF NFC tag is detected.

The `NFCEvent` will contain a `Tag` object in the `tag` variable. This contains all the information available about the detected tag, including `NdefMessage`s and `NdefRecord`s contained in the tag. 

```actionscript
NFC.service.addEventListener( NFCEvent.ACTION_NDEF_DISCOVERED, discoveredHandler );

function discoveredHandler( event:NFCEvent ):void
{
    trace( "discovered: ["+event.type+"] " + event.tag.toString() );
    for each (var message:NdefMessage in event.tag.messages)
    {
        for each (var record:NdefRecord in message.records)
        {
            trace( "\t"+record.toString() + "::"+record.payload.toString() +" url:"+record.url );
        }
    }
}
```


## Android

### Introduction

Reading NDEF data from an NFC tag is handled with the tag dispatch system, which analyzes discovered NFC tags, appropriately categorizes the data, and starts an application that is interested in the categorized data. An application that wants to handle the scanned NFC tag can declare an intent filter and request to handle the data.

Android-powered devices are usually looking for NFC tags when the screen is unlocked, unless NFC is disabled in the device's Settings menu. When an Android-powered device discovers an NFC tag, the desired behavior is to have the most appropriate activity handle the intent without asking the user what application to use. Because devices scan NFC tags at a very short range, it is likely that making users manually select an activity would force them to move the device away from the tag and break the connection. You should develop your activity to only handle the NFC tags that your activity cares about to prevent the Activity Chooser from appearing.

To help you with this goal, Android provides a special tag dispatch system that analyzes scanned NFC tags, parses them, and tries to locate applications that are interested in the scanned data. It does this by:

- Parsing the NFC tag and figuring out the MIME type or a URI that identifies the data payload in the tag.
- Encapsulating the MIME type or URI and the payload into an intent. These first two steps are described in [How NFC tags are mapped to MIME types and URIs](https://developer.android.com/guide/topics/connectivity/nfc/nfc.html#ndef).
- Starts an activity based on the intent. This is described in [How NFC Tags are Dispatched to Applications](https://developer.android.com/guide/topics/connectivity/nfc/nfc.html#dispatching).



### Application Dispatch

The extension provides an activity that you can use to inform your AIR application about the NFC tag. You should still construct your intent filters in your manifest additions in order to correctly start this activity and launch your application when a tag of interest is detected by Android.

In order to get your application to automatically launch and handle NFC tags without having to be running you need to add the `NFCActionActivity` to your applications Android manifest additions and apply the appropriate filters for your application.


Some examples of intent filters are below. 


An NDEF record with a url pointing to `https://airnativeextensions.com`:

```xml
<activity android:name="com.distriqt.extension.nfc.activities.NFCActionActivity" android:theme="@android:style/Theme.Translucent.NoTitleBar" >
    <intent-filter>
        <action android:name="android.nfc.action.NDEF_DISCOVERED"/>
        <category android:name="android.intent.category.DEFAULT"/>
        <data android:scheme="https"
                android:host="airnativeextensions.com"
        />
    </intent-filter>
</application>
```

An NDEF record with a plain text:

```xml
<activity android:name="com.distriqt.extension.nfc.activities.NFCActionActivity" android:theme="@android:style/Theme.Translucent.NoTitleBar" >
    <intent-filter>
        <action android:name="android.nfc.action.NDEF_DISCOVERED"/>
        <category android:name="android.intent.category.DEFAULT"/>
        <data android:mimeType="text/plain" />
    </intent-filter>
</application>
```

>
> Note: You can add multiple `intent-filter` nodes to the `activity` to register for several different tag types.
>

### Foreground Dispatch

If you don't require your application to be launched from a tag, but instead just need active foreground scanning, (reading tags while your application is active in the foreground) you can use the foreground dispatch method.

This involves calling the `registerForegroundDispatch()` method to register your application for NFC tag detection at runtime.

Similar to the intent filters above, you need to specify the urls or mimetypes that are relevant to your application. This is done through setting the options in an instance of the `ScanOptions` class.

```actionscript
var options:ScanOptions = new ScanOptions();
options.urls.push( "https://airnativeextensions.com" );  

NFC.service.registerForegroundDispatch( options );
```



## iOS

### Introduction

iOS NFC reading is available as an active foreground activity from iOS 11 and as a background / system level activity from iOS 12.


### Background Dispatch 

On iPhones that support background tag reading, the system scans for and reads NFC data without requiring users to scan tags using an app. The system displays a pop-up notification each time it reads a new tag. After the user taps the notification, the system delivers the tag data to the appropriate app. If the iPhone is locked, the system prompts the user to unlock the phone before providing the tag data to the app.

>
> **Note**
> iPhone XS and later support background tag reading.
>

After the device scans an NFC tag while in background tag reading mode, the system inspects the tag’s NDEF message for a URI record by looking for an payload object with the following property values:

- typeNameFormat equal to `NFCTypeNameFormatNFCWellKnown`
- type equal to `“U”`

If the NDEF message contains more than one URI record, the system uses the first one. The URI record must contain either a universal link or a supported URL scheme.

>
> You cannot use a custom URL to launch your application, this only works with a predefined set of url schemes mainly for web urls, email, sms etc.
>

For tags that contain universal links, the system presents a notification and then launches (or brings to the foreground) the app associated with the universal link after the user taps the notification. (This will happen if the application is in the foreground as well, ie. notification will appear and you will receive an event if the user taps the notification)

![](images/ios-nfc-scan-notification.png)

The system sends the NDEF message to the app and the extension receives it. When you call `checkStartupData()` the `NFCEvent` will be dispatched, following the same process as Android. 
If there are no installed apps associated with the universal link, the system opens the link in Safari.


In order for this to work you must setup a universal link for your application and included the domain in the `com.apple.developer.associated-domains` entitlements section of your iphone additions. (See [Add the Extension](add-the-extension) for more details).





### Foreground Dispatch

To initiate reading tags on iOS you call the `registerForegroundDispatch()` method. There are no filtering methods on iOS so any NDEF formatted tags will be detected and events dispatched to your application, and any options provided (as in the Android case) will be ignored.

```actionscript
NFC.service.registerForegroundDispatch();
```

While scanning on iOS the following dialog will be presented to your user: 

![](images/ios_scanning_dialog.png)



You can customise the message displayed in this dialog by setting the `message` in the options passed to `registerForegroundDispatch()`:

```actionscript
var options:ScanOptions = new ScanOptions();
options.message = "Hold your device near the item to learn more about it.";

NFC.service.registerForegroundDispatch( options );
```


