---
title: Log events and variables
sidebar_label: Log events and variables
---

Tag Manager uses events, parameters, and user properties logged by the Google Analytics for Firebase SDK to trigger and build tags you've configured in Google Tag Manager.

Read the [Firebase developer documentation](/docs/firebase/core/analytics) for instructions on how to log events and set user properties.


## Configure variables in Tag Manager

To capture the value of event parameters and user properties for use in Google Tag Manager, you can configure variables in the Tag Manager interface.

For example, you could log the following custom event in your app:

```actionscript
Firebase.service.analytics.logEvent(
        new EventObject()
                .setName( "share_image" )
                .setParams( {
                                "image_name": "test.png",
                                "full_text" : "test image share"
                            } )
);
```

Then, you could configure new Event Parameter variables in Tag Manager as follows to capture the image_name and full_text parameter values:

- **Variable Name**: Image Name
- **Variable Type**: Event Parameter
- **Event Parameter Key Name**: `image_name`

and:

- **Variable Name**: Full Text
- **Variable Type**: Event Parameter
- **Event Parameter Key Name**: `full_text`


Similarly, you could set the following user property in your app:

```actionscript
Firebase.service.analytics.setUserProperty(
        "favourite_food",
        "carrot"
);
```

Then, you could configure a new Firebase User Property variable in Google Tag Manager to capture the `favourite_food` value:

- **Variable Name**: Favourite Food
- **Variable Type**: Firebase User Property
- **Event Parameter Key Name**: `favourite_food`


For more information refer to the [Google Tag Manager documentation](https://developers.google.com/tag-platform/tag-manager/mobile).  