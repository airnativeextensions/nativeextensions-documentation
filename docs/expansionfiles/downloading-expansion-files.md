---
title: Downloading Expansion Files
sidebar_label: Downloading Expansion Files
---


Once you have setup the Expansion Files ANE you should provide information about 
your expansion files. This is done by creating an ExpansionFile object and passing 
it to the ANE's `addExpansionFile` function.

You can then check if the files have already been downloaded using the 
`expansionFilesDelivered` function. This returns `true` if the files have been 
downloaded either as part of the install from Google Play or in a previous run 
of the application. If the files haven't been downloaded you should start the 
download process and wait for the `ExpansionFilesEvent.COMPLETE` event to process 
the files.

> 
> Note: `expansionFilesDelivered` will check the file size of the downloaded 
> file to the filesize you have specified so it is very important that you 
> create your `ExpansionFile` with the exact size of the file you have uploaded
> to the Play Store. If you don't then this will always return `false` and may
> incorrectly download your file on every launch.
>

The following example shows the major events in this process and the suggested 
method of checking for the existence of expansion files.


```actionscript
public static const BASE64_PUBLIC_KEY	: String = "YOUR_LICENSING_PUBLIC_KEY";
public static const SALT		: Vector.<int> = Vector.<int>( [ 1, 43, -12, -1, 54, 98, -100, -12, 43, 2, -8, -4, 9, 5, -106, -108, -33, 45, -1, 84 ]); 
```


```actionscript
ExpansionFiles.service.setup( BASE64_PUBLIC_KEY, SALT );

ExpansionFiles.service.addEventListener( ExpansionFilesEvent.CONNECTED,     connectedHandler );
ExpansionFiles.service.addEventListener( ExpansionFilesEvent.STATE_CHANGED, stateChangedHandler );
ExpansionFiles.service.addEventListener( ProgressEvent.PROGRESS,            progressHandler );
ExpansionFiles.service.addEventListener( ExpansionFilesEvent.COMPLETE,      completeHandler );

// Add the details of your expansion file(s)
var expansionFile:ExpansionFile = new ExpansionFile( ExpansionFile.MAIN, 1001002, 233017 );
ExpansionFiles.service.addExpansionFile( expansionFile );

// Check if the files have been delivered / downloaded already
if (!ExpansionFiles.service.expansionFilesDelivered())
{
	// Start the downloading
	ExpansionFiles.service.download();
}
else
{
	// Already have expansion files - use as required
}
```


```actionscript
private function connectedHandler( event:ExpansionFilesEvent ):void
{
	trace( "connectedHandler()" );
}

private function stateChangedHandler( event:ExpansionFilesEvent ):void
{
	trace( "stateChangedHandler(): " + event.state );
}

private function completeHandler( event:ExpansionFilesEvent ):void
{
	trace( "completeHandler()" );
	// Read your expansion files
}

private function progressHandler( event:ProgressEvent ):void
{
	trace( "progressHandler( " + event.progress.toString() + " )" );	
}
```