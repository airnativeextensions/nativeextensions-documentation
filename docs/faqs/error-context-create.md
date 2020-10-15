---
title: "Error: The native extension context could not be created"
# sidebar_label: FAQs
---


```
Error: The native extension context could not be created
    at com.distriqt.extension.vibration::Vibration()[/Users/marchbold/work/distriqt/svn/lib/extensions/vibration/trunk/actionscript/src/com/distriqt/extension/vibration/Vibration.as:65]
    at com.distriqt.extension.vibration::Vibration$/createInstance()[/Users/marchbold/work/distriqt/svn/lib/extensions/vibration/trunk/actionscript/src/com/distriqt/extension/vibration/Vibration.as:110]
    at com.distriqt.extension.vibration::Vibration$/get isSupported()[/Users/marchbold/work/distriqt/svn/lib/extensions/vibration/trunk/actionscript/src/com/distriqt/extension/vibration/Vibration.as:136]
```

If you receive an error such as the one above, then most likely the extension has been included but not packaged with your application. You'll need to double check the project settings:

```
Actionscript Build Packaging / [Platform] / Native Extensions / make sure the extension is checked
```

And ensure that you have correctly added the extension id to your application descriptor:

```xml
<?xml version="1.0" encoding="utf-8" ?>
<application xmlns="http://ns.adobe.com/air/application/26.0">

    <!-- OTHER DESCRIPTOR INFORMATION -->

    <extensions>
        <extensionID>com.distriqt.Vibration</extensionID>
    </extensions>

</application>
```


See the last step in the following tutorial for more information: [here](/docs/tutorials/getting-started)
