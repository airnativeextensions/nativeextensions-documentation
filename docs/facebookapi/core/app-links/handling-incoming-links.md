---
title: Handling Incoming Links
sidebar_label: Handling Incoming Links
---

When someone taps a link posted from your app or taps the app attribution in an Open Graph story posted from your app in Facebook, they may be presented with the option to open your content in your  app. Alternatively, they may be immediately directed to your app.

To ensure an engaging user experience, you should process the incoming link when your app is activated and direct the person to the object featured in the story they're coming from.


## Receiving App Links

Your app will receive a link where `url` is the incoming URL based on a custom scheme that you have defined for your app. You'll also receive an al_applink_data query parameter with JSON encoded content.

```json
url?al_applink_data=
  {
    "target_url": "{the-target-url}",
    "extras": {
        "fb_app_id": {your-fb-app-id},
        "fb_access_token": "{your-access-token}]",
        "fb_expires_in": "3600"
    },
    "referer_app_link": {
        "url": "{your-fb-app-back-link}",
        "app_name": "Facebook"
    }
  }
```

Where `fb_access_token` and `fb_expires_in` are only available if the person has authenticated with Facebook in your app.


## Handling App Links

Your application will be notified of App Link openings using the `AppLinkEvent`. 

```actionscript
FacebookCore.instance.appLinks.addEventListener( AppLinkEvent.APP_LINK, appLinkHandler );
```

When this event is triggered it will contain details on the App Link in the event:

```actionscript
private function appLinkHandler( event:AppLinkEvent ):void 
{
  // event.appLink will contain the details on the App Link. 
  // If null the link could not be processed
  if (event.appLink != null)
  {
    trace( 
      JSON.stringify( 
        event.appLink.data 
      ));
  }
}
```


## Startup

At startup the extension will check for app links as soon as you initialise the Core extension. You should ensure that you have added the listener for the  `AppLinkEvent.APP_LINK` before calling `initialise()`.

For example:

```actionscript
// Add the listener
Facebook.instance.appLinks.addEventListener( AppLinkEvent.APP_LINK, appLinkHandler );

// Call initialise
Facebook.instance.initialise();


// Handle any links
function appLinkHandler( event:AppLinkEvent ):void 
{
  trace( "APPLINK: " + event.appLink.dataJSON );
}
```

After startup, events may be dispatched when your application is activated from a link.



## App Link Return-to-Referer View

If you wish to return to the application that referred your application you can call the
`openReferer` function and pass in the same App Link that was passed in the event:

```actionscript
FacebookCore.instance.appLinks.openReferer( appLink );
```







## Testing 

The easiest way to test, is to copy the url of your app link and create a private "Group" on Facebook with your testers. Post the link into the group and then access the group through the Facebook app on your device.

Clicking the link should open your application.



## Testing Deferred Links

You can test a link by using the "Deep Link Tester" in the [Facebook Ads Helper](https://developers.facebook.com/tools/app-ads-helper/).

Select your application and go to the "Deep Link Tester" and click "Test Deep Link". 

Enter the url for your app eg `distriqtTestApp://link` and you'll get a notification in your Facebook application. 

You must be logged into the Facebook app on your device with your developer account in order for this to work.



