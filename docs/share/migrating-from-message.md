---
title: Migrating from Message
sidebar_label: Migrating from Message
---


From version 5.0, we have added all of the Message ANE functionality to this ANE and will eventually be deprecating the Message ANE in favour of this Share ANE.

The functionality between the Message and Share ANEs seemed to overlap too much so we decided to reduce overheads involved for developers and combine the two ANEs into the Share ANE.


In order to migrate from the Message ANE to the Share ANE you'll need to update the email and sms functionality separately. This guide is assuming you will be removing the Message ANE, in favour of the functionality in the Share ANE. 


Firstly, remove the Message ANE from your build.



## Email functionality

Email functionality in the Share ANE is accessed through the `Share.service.email` accessor, so:

```actionscript
if (Message.isMailSupported)
{
    Message.service.sendMail( ... );
}
```

becomes:

```actionscript
if (Share.service.email.isMailSupported)
{
    Share.service.email.sendMail( ... );
}
```

Similarly for `sendMailWithOptions()`.

Some refactoring has also been done on the associated classes:

- Attachments: `com.distriqt.extension.message.MessageAttachment` -> `com.distriqt.extension.share.email.Attachment`
- Events: 
  - `com.distriqt.extension.message.events.MessageEvent` -> `com.distriqt.extension.share.events.EmailEvent`




## SMS Functionality

SMS functionality in the Share ANE is accessed through the `Share.service.sms` accessor, so:

```actionscript
if (Message.service.smsManager.isSMSSupported)
{
    Message.service.smsManager.sendSMS( ... );
}
```

becomes:

```actionscript
if (Share.service.sms.isSMSSupported)
{
    Share.service.sms.sendSMS( ... );
}
```

Similarly for `sendSMSWithUI()`, `getSubscriptions()`, `authorisationStatus()`, and `requestAuthorisation()`.


Some refactoring has also been done on the associated classes:

- SMS Object: `com.distriqt.extension.message.objects.SMS` -> `com.distriqt.extension.share.sms.SMS`
- Events: 
  - `com.distriqt.extension.message.events.MessageSMSEvent` -> `com.distriqt.extension.share.events.SMSEvent`
  - `com.distriqt.extension.message.events.AuthorisationEvent` -> `com.distriqt.extension.share.events.AuthorisationEvent`


## Share Functionality

The share functionality from the Message ANE has been removed completely as it already existed in the Share ANE.



## iOS

No changes to the info additions are required.


## Android 

Remove the `MessageFileProvider` (the `ShareFileProvider` will be used instead now):

```xml
<provider
    android:name="com.distriqt.extension.message.content.MessageFileProvider"
    android:authorities="APPLICATION_ID.messagefileprovider"
    android:grantUriPermissions="true"
    android:exported="false">
    <meta-data
        android:name="android.support.FILE_PROVIDER_PATHS"
        android:resource="@xml/distriqt_message_paths" />
</provider>
```

Change the package name of the `AuthorisationActivity` as below (`message` > `share`):

```xml
<activity android:name="com.distriqt.extension.share.permissions.AuthorisationActivity" android:theme="@android:style/Theme.Translucent.NoTitleBar" />
```

If you are using SMS receiver functionality, remove the `MessageSMSReceiver` and add the following:

```xml
<receiver android:name="com.distriqt.extension.share.receivers.SMSReceiver" android:exported="true" > 
    <intent-filter android:priority="1000"> 
        <action android:name="android.provider.Telephony.SMS_RECEIVED" />
    </intent-filter> 
</receiver>
```



