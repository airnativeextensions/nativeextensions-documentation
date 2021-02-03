---
title: Windows WNS Payload
sidebar_label: Windows WNS Payload
---

The payload for the WNS notificaiton contains a Windows Toast XML structure.

There are a couple of important fields you will need to specify in order that the notification works correctly with the Push Notifications extension. 


The simplest structure is a simple text notification, containing a single line of text:

```xml
<toast launch='payload=PAYLOADFORTHENOTIFICATION'>
  <visual lang='en-US'>
    <binding template='ToastGeneric'>
    <text>Test Notification</text>
    </binding>
  </visual>
</toast>
```

The important thing to note in all notifications in the `launch` attribute of the root `toast` node. This must contain your payload.

You can either specify it as a url encoded parameters as above incuding the `payload` parameter, or if this isn't included the entire value of the `launch` attribute will be returned as the payload. We recommend the parameter approach as it matches up with actions.



### Text 

You can include multiple lines of text, each wrapped in a `text` node, eg:

```xml
<toast launch='payload=%7B%22test%22%3A%22value%22%7D'>
  <visual lang='en-US'>
    <binding template='ToastGeneric'>
    <text>Test Notification</text>
    <text>A notification sent via WNS</text>
    </binding>
  </visual>
</toast>
```

The first will be used as a title for the notification and subsequent lines will be used as the content of the notification.


### Images

To add an image to your notification add an `image` node to your `visual` component, alongside the `text` nodes.

```xml
<toast launch='payload=%7B%22test%22%3A%22value%22%7D'>
  <visual lang='en-US'>
    <binding template='ToastGeneric'>
    <image src='ms-appx:///assets/notifications/bigImage.png' placement='inline' />
    <text>Test Notification</text>
    <text>A notification sent via WNS</text>
    </binding>
  </visual>
</toast>
```

You can specify their `placement` as one of the following:

- `appLogoOverride`: Acts as a large icon for the notification, appearing beside the text;
- `inline`: Adds the image into the content of the notification;
- `hero`: Adds the image at the top of the notification as a "hero" image (only supported on recent versions of Windows);

Example:

```xml
<image src='https://airnativeextensions.com/images/extensions/icons/ane-pushnotifications-icon.png' placement='appLogoOverride' />
<image src='ms-appx:///assets/notifications/bigImage.png' placement='inline' />
<image src='ms-appx:///assets/notifications/bigImage3.png' placement='hero' />
```

The source of the notification as either a url or an application packaged asset.

To specify a url, use the complete url of the file as the `src` attribute.

```xml
<image src='https://airnativeextensions.com/images/extensions/icons/ane-pushnotifications-icon.png' placement='appLogoOverride' />
```


To specify a packaged asset, use the relative path to the asset in your application package, prefixed by `ms-appx:///`. For example to use an asset packaged as `assets/notifications/bigImage.png`, you would use `ms-appx:///assets/notifications/bigImage.png` as the `src`:

```xml
<image src='ms-appx:///assets/notifications/bigImage.png' placement='inline' />
```



### Actions

Actions are added to a notification in an `actions` node alongside the `visual` node:

```xml
<toast>
    <visual>
    </visual>
    <actions>
    </actions>
</toast>
```

![](images/windows-actions.png)

The `actions` node contains a series of `action` nodes, each specifying an action button the user can press.


```xml
<toast launch='payload=%7B%22test%22%3A%22value%22%7D'>
  <visual lang='en-US'>
    <binding template='ToastGeneric'>
    <text>Test Notification</text>
    </binding>
  </visual>
  <actions>
    <action 
        content='Accept' 
        activationType='foreground' 
        arguments='action=ACCEPT_IDENTIFIER&amp;payload=%7B%22test%22%3A%22value%22%2C%20%22action%22%3A%22accept%22%7D' />
  </actions>
</toast>
```

An action has the following attributes:
- `content`: The label on the action button;
- `activationType`: Must be `foreground`;
- `arguments`: The arguments need to be in a url encoded paramaters format in order that the extension can correctly process the user interaction with the action, and they must include:
  - `action`: The value being the identifier of the action returned in the `ACTION` event (`ACCEPT_IDENTIFER` in the above example);
  - `payload`: the payload of the notification returned in the `ACTION` event, this can be different or the same as the main notification payload in the `launch` parameter, but must be duplicated here. The above example contains a json string (url encoded):
      ```json
      { 
          "test": "value",
          "action": "accept"
      }
      ```



### Example

The following is an example of a payload containing all of the above features:


```xml
<toast launch='payload=%7B%22test%22%3A%22value%22%7D'>
  <visual lang='en-US'>
    <binding template='ToastGeneric'>
        <image src='https://airnativeextensions.com/images/extensions/icons/ane-pushnotifications-icon.png' placement='appLogoOverride' />
        <image src='ms-appx:///assets/notifications/bigImage.png' placement='inline' />
        <image src='ms-appx:///assets/notifications/bigImage3.png' placement='hero' />
        <text>Test Notification</text>
        <text>A notification sent via WNS</text>
    </binding>
  </visual>
  <actions>
    <action content='Accept' arguments='action=ACCEPT_IDENTIFIER&amp;payload=%7B%22test%22%3A%22value%22%2C%20%22action%22%3A%22accept%22%7D' activationType='foreground' />
    <action content='Delete' arguments='action=DELETE_IDENTIFIER&amp;payload=%7B%22test%22%3A%22value%22%2C%20%22action%22%3A%22delete%22%7D' activationType='foreground' />
  </actions>
</toast>
```



References: 

- https://docs.microsoft.com/en-us/windows/uwp/design/shell/tiles-and-notifications/adaptive-interactive-toasts
- https://docs.microsoft.com/en-au/uwp/schemas/tiles/toastschema/schema-root