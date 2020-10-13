---
title: Scanning
sidebar_label: Scanning
---

## Start Scan

Once you have setup your application and gained permission to access the camera, 
then starting the scanner is simply a matter of calling startScan. You can provide 
a range of options here, in the first parameter with an instance of the `ScannerOptions` class.


### Example 

For example the following code sets the scanner to only scan one result and then close.

```actionscript
Scanner.service.addEventListener( ScannerEvent.CODE_FOUND, codeFoundHandler );
Scanner.service.addEventListener( ScannerEvent.CANCELLED, cancelledHandler );

var options:ScannerOptions = new ScannerOptions();
options.singleResult = true;

Scanner.service.startScan( options );
```

Example event handlers:

```actionscript
private function cancelledHandler( event:ScannerEvent ):void
{
}

private function codeFoundHandler( event:ScannerEvent ):void
{
	trace( "code found: " + event.data + "["+event.orientation+"] :: (" + event.bounds.toString() + ")"  );
}
```