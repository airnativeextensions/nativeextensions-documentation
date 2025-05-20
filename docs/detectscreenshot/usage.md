---
title: Usage
sidebar_label: Usage
---


## Start detection


To start screenshot detection call the `start()` method. 

```actionscript
DetectScreenshot.instance.start();
```

This method will return `true` if the detection process has started correctly or `false` if it is not supported or you don't have authorisation.


```actionscript
if (DetectScreenshot.instance.start())
{
    trace( "detection started" );
}
```

When a screenshot is detected the extension will dispatch the `DetectScreenshotEvent.SCREENSHOT_DETECTED` event.


```actionscript
DetectScreenshot.instance.addEventListener( 
    DetectScreenshotEvent.SCREENSHOT_DETECTED, 
    onScreenshotDetected );

function onScreenshotDetected( event:DetectScreenshotEvent ):void
{
    trace( "onScreenshotDetected" );
}
```


:::note Platform Variations
On iOS the system provides a notification whenever a screenshot is taken. This means that the event is much more precise and reliable.

On Android there is no direct way to detect screenshots so instead this extension uses a common technique of observing the user's media library 
and watching for additions to places where screenshots are normally stored. This approach however requires [authorisation](authorisation) to read the user's media. 
:::



## Stop detection

Whenever your application no longer needs the screenshot detection functionality you can call the `stop()` method to stop the detection process:


```actionscript
DetectScreenshot.instance.stop();
```

For example you should do this whenever your application is minimised. 