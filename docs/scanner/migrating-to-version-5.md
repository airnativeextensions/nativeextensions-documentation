---
title: Migrating to version 5
sidebar_label: Migrating to version 5
---

Version 5 brings several new features including:
    - Displaying the camera preview in a viewport;


With these new features we have cleaned up the API and refactored several of the methods.


## Options

Most notably the old `ScannerOptions` class has been broken up into several options classes controlling different aspects of the process:

- `ScannerOptions` : Now only contains options to control the scanning algorithm (eg symbologies);
- `ActivityOptons`: Contains all the view elements and text that is used in the fullscreen scanning activity (which was the only method in the previous versions);
- `CameraOptions`: Contains options for configuring the camera such as whether to use the front or rear camera;
- `ViewportOptions` (NEW): Contains options for configuring the viewport implementation;

These classes are used in the start scanning methods, used to initiate the scanning process.


## Scanning

There are now 2 approaches to use to create your scanning interface. 

- `startScanActivity()`: This method is equivalent to the old `startScan()` method but with the new options;
- `startScanInViewport()`: Allows you to launch a camera preview contained to a viewport within your application;


### Migrating 

If you wish to continue using the previous full screen activity method the `startScan()` method has been removed and you should now use `startScanActivity()`. 

So you may have something like the following code:

```actionscript
var options:ScannerOptions = new ScannerOptions();
options.singleResult = true;

Scanner.service.startScan( options );
```

This should become:

```actionscript
var uiOptions:ActivityOptions = new ActivityOptions();
uiOptions.singleResult = false;

var scanOptions:ScannerOptions = new ScannerOptions();

var cameraOptions:CameraOptions = new CameraOptions();

Scanner.service.startScanActivity(
    uiOptions,
    scanOptions,
    cameraOptions
);
```

You can pass `null` for any of these options if you just wish to use the defaults. eg the above is the equivalent of:

```actionscript
var uiOptions:ActivityOptions = new ActivityOptions();
uiOptions.singleResult = false;

Scanner.service.startScanActivity( uiOptions );
```


## Events

The events are mainly the same except that the code found results are no longer directly attached to the Event object, but contained within a `ScanResult` instance.

So the following code: 

```actionscript
Scanner.service.addEventListener( ScannerEvent.CODE_FOUND, codeFoundHandler );

function codeFoundHandler( event:ScannerEvent ):void 
{
    trace( event.data );
    trace( event.symbologyType );
}
```

becomes:

```actionscript
Scanner.service.addEventListener( ScannerEvent.CODE_FOUND, codeFoundHandler );

function codeFoundHandler( event:ScannerEvent ):void 
{
    trace( event.result.data );
    trace( event.result.symbologyType );
}
```



