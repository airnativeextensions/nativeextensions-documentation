---
title: Capturing a Screenshot
sidebar_label: Capturing a Screenshot
---


You can use this extension to capture a screenshot of your application as bitmap data and subsequently use that data as you require. 

This is currently supported on iOS and Android API version 21 or higher. 

To capture a screenshot you simply call `captureScreenshot` and await completion. 

```actionscript
var success:Boolean = Image.service.captureScreenshot();
```

`captureScreenshot` may return `false` if the current platform is not supported or if a screenshot capture is currently in progress. You should avoid wherever possible capturing two screenshot simulataneously as this may have undesirable results.


Completion is indicated by either a success event `ImageEvent.SCREENSHOT_COMPLETE` or an error `ImageEvent.SCREENSHOT_ERROR`. 

```actionscript
Image.service.addEventListener( ImageEvent.SCREENSHOT_COMPLETE, screenshot_completeHandler );
Image.service.addEventListener( ImageEvent.SCREENSHOT_ERROR, screenshot_errorHandler );

var success:Boolean = Image.service.captureScreenshot();

function screenshot_completeHandler( event:ImageEvent ):void
{
    // event.bitmapData will contain the bitmap data of the screenshot
}

function screenshot_errorHandler( event:ImageEvent ):void
{
    // event.error will contain a description of the error
    // event.errorCode will contain a numeric code of the error
}
```


## iOS

On iOS your screenshot will be captured without any user interaction. It is not possible to get the current image of the status bar so only your application accessible content will be contained in the screenshot. 


## Android 

On Android, user permission is required to capture a screenshot. On calling `captureScreenshot` your user may be presented a permission dialog. If they accept then the screenshot will be captured and subsequent screenshots will not require interaction. If they deny the permission then the screenshot will fail with an error event and subsequent screenshot capture attempts will present the permission dialog again. 

![](images/android-capturescreenshot-permission.png)


