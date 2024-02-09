---
title: Usage 
sidebar_label: Usage
---


To print you will need to construct a `Printer` and relevant settings object, then call `printPDF` passing the path to the pdf file you need to print.


## Printer

To construct a `Printer` object you must create a `Printer` instance and set the model, connection channel and address.


```actionscript
var printer:Printer = new Printer()
    .setModel( PrinterModel.QL_710W )
    .setChannel( Channel.WIFI )
    .setAddress( "10.1.1.1" );
```

The value set for the address will be dependent on the connection channel you use:

- `Channel.WIFI`: Pass the IP address of the printer;
- `Channel.BLUETOOTH`: Pass the MAC address of the printer;
- `Channel.BLUETOOTH_LOW_ENERGY`: Pass the bluetooth local name of the printer;


## Settings

Once you have created your `Printer` you must create a `PrintSettings` to match the printer type.

Eg for a `QL_XXXX` you must create a `QLPrintSettings` instance, `PJ_XXX` create a `PJPrintSettings` etc.

Each of the settings classes have slightly different options but they match with the options available in the brother sdk documentation, for example, following on from the `QL_710W` printer we created above we can set the label size and cut options:

```actionscript
var settings:QLPrintSettings = new QLPrintSettings()
    .setLabelSize( LabelSize.QL_RollW12 )
    .setAutoCut( true );
```


## Print 

Once we have created these two objects we can call `printPDF` with these parameters and the path to the file to be printed:


```actionscript
var pdfFile:File = File.applicationStorageDirectory.resolvePath( "samples/sample_0.pdf" );

var success:Boolean = BrotherSDK.instance.printPDF(
        pdfFile.nativePath,
        printer,
        settings
);
```

`printPDF` will return `true` if the print process was started successfully. It may return `false` if the file doesn't exist or there was an issue creating the channel for the printer connection.


This process may dispatch the following events:

- `BrotherSDKEvent.COMPLETE`: Dispatched when the print process was completed
- `BrotherSDKEvent.ERROR`: Dispatched if there was an error during the print process, errors can including connection failure, settings error (paper size, margins etc), or printer status errors. Details will be contained in the event.


```actionscript
BrotherSDK.instance.addEventListener( BrotherSDKEvent.COMPLETE, brotherSDK_completeHandler );
BrotherSDK.instance.addEventListener( BrotherSDKEvent.ERROR, brotherSDK_errorHandler );

function brotherSDK_completeHandler( event:BrotherSDKEvent ):void
{
    // printing complete
}

function brotherSDK_errorHandler( event:BrotherSDKEvent ):void
{
    // printing error occurred
    trace( "[" + event.errorCode + "] " + event.message );
}
```



## Search

You can search for paired bluetooth printers by using the `startSearchBluetoothPrinter()` method. 
This method will return the bluetooth printers which are already paired with the mobile device.

Results are returned either through the callback function:

```actionscript 
BrotherSDK.instance.startSearchBluetoothPrinter(
        function ( printers:Vector.<Printer> ):void
        {
            for each (var printer:Printer in printers)
            {
                trace( printer.toString() );
            }
        }
);
```

Or via an event:

```actionscript
BrotherSDK.instance.addEventListener( BrotherSDKSearchEvent.RESULT, searchResultHandler );
BrotherSDK.instance.startSearchBluetoothPrinter();

function searchResultHandler( event:BrotherSDKSearchEvent ):void
{
    for each (var printer:Printer in event.printers)
    {
        trace( printer.toString() );
    }
}
```


