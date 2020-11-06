---
title: App Links - Incoming Links
sidebar_label: App Links - Incoming Links
---


:::caution
This is the legacy extension documentation. Find the new documentation [here](../facebookapi/)
:::

## Support Incoming Links to Your App

When people tap the Open / Play button on the invite or the Is Ready installation notification, 
they will be taken to your app. The URL defined in the App Link will be passed in. 


In order to support incoming links you need to add some additions to your application descriptor,
that will 



### iOS Info Additions

You'll need to add a custom url that you will use to open your application. In the following 
you would be able to open the application using the `distriqtTestApp://` url.

```xml
<key>CFBundleURLTypes</key>
<array>
	<dict>
		<key>CFBundleURLSchemes</key>
		<array>
			<string>fbXXXXXXXXXX</string>
			<string>distriqtTestApp</string>
		</array>
	</dict>
</array>
```

This should be added to the `InfoAdditions` node in your application descriptor.



### Android Manifest Additions

To respond to opening links for your custom URL scheme, add an intent-filter for that specific URL.

```xml
<intent-filter>
	<action android:name="android.intent.action.VIEW" />
	<category android:name="android.intent.category.DEFAULT" />
	<category android:name="android.intent.category.BROWSABLE" />
	<!-- Accepts URIs "distriqtTestApp://" -->
	<data android:scheme="distriqtTestApp" />
</intent-filter>
```

This should be added within the `application` node of your manifest additions.





## Create an App Link

You can use Facebook to host an App Link for you.

Go to the [Quick Start](https://developers.facebook.com/quickstarts/?platform=app-links-host) 
and fill out the "Enter App Data to Build Your App Link" section for iOS and Android. 

It's important to use the url scheme you entered into your application descriptor here.



## Listening for App Link Events

Your application will be notified of App Link openings using the `AppLinkEvent`. 

```actionscript
FacebookAPI.service.appLinks.addEventListener( AppLinkEvent.APP_LINK, appLinkHandler );
```

When this event is triggered it will contain details on the App Link in the event:

```actionscript
private function appLinkHandler( event:AppLinkEvent ):void 
{
	// event.appLink will contain the details on the App Link. If null the link could not be processed
	if (event.appLink != null)
	{
		trace( 
			JSON.stringify( 
				event.appLink.data 
			));
	}
}
```

If you wish to return to the application that referred your application you can call the
`openReferer` function and pass in the same App Link that was passed in the event:

```actionscript
FacebookAPI.service.appLinks.openReferer( appLink );
```





## Testing 

The easiest way to test, is to copy the url generated above and create a private "Group"
on Facebook with your testers. Post the link into the group and then access the group 
through the Facebook app on your device.

Clicking the link should open your application.


















## Testing Deferred Links

You can test a link by using the "Deep Link Tester" in the [Facebook Ads Helper](https://developers.facebook.com/tools/app-ads-helper/).

Select your application and go to the "Deep Link Tester" and click "Test Deep Link". 
Enter the url for your app eg `distriqtTestApp://link` and you'll get a notification in your 
Facebook application. 

You must be logged into the Facebook app on your device with your developer account in 
order for this to work.




