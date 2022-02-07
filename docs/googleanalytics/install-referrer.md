---
title: Install Referrer
sidebar_label: Install Referrer
---


You can use the install referrer to see which campaigns, websites, 
and other apps are referring users to Google Play Store to download your app.

The install referrer is a string passed to your application indicating 
the referal source your application was installed through. 

This is supported on Android only.



### Manifest additions

If you require access to the install referrer string then firstly make sure you 
have added the correct manifest additions, in particular the install referrer receiver:

```xml
<receiver android:name="com.distriqt.extension.googleanalytics.InstallReferrerReceiver">
	<intent-filter>
		<action android:name="com.android.vending.INSTALL_REFERRER" />
	</intent-filter>
</receiver>
```

Check the following for more details: [Add the Extension](add-the-extension.mdx) 


### Referrer string

Once installed you can access the referrer at any time using the `getInstallReferrer()` method.

```actionscript
var referrer:String = GoogleAnalytics.service.getInstallReferrer();
```

The referrer may be updated after you start your application if the referral intent 
is dispatched after your application starts up. In order to handle this situation 
you should also add a listener for the `InstallReferrerEvent.UPDATED` event.

```actionscript
GoogleAnalytics.service.addEventListener( InstallReferrerEvent.UPDATED, referrerUpdatedHandler );
```

Then in your handler:

```actionscript
private function referrerUpdatedHandler( event:InstallReferrerEvent ):void 
{
	trace( event.referrer );
}
```


### Testing 

You can use the following adb commands to test the referrer, just make sure to 
replace <code>air.com.distriqt.test</code> with the package of your application.

```
adb shell
am broadcast -a com.android.vending.INSTALL_REFERRER -n air.com.distriqt.test/com.distriqt.extension.googleanalytics.InstallReferrerReceiver --es "referrer" "utm_source=test_source\&amp;utm_medium=test_medium\&amp;utm_term=test_term\&amp;utm_content=test_content\&amp;utm_campaign=test_name"
```

Running this command will broadcast the `INSTALL_REFERRER` intent which will 
update the referrer in your application. You can edit the string at the end as 
you wish to try different referrer strings.

