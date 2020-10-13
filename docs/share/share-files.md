---
title: Share Files
sidebar_label: Share Files
---

There are two operations regarding files exposed by this ANE, referred to as sharing a file (`shareFile`) and opening a file (`showOpenIn`).

Both of these will display a list of applications however they are subtly different.

The major difference here is that sharing just attaches the file to an activity whereas opening will actually pass the file data for opening. 
You will probably want to use the open method in most cases, however feel free to experiment with the different methods
to see which suits your requirements better.

To distinguish these methods you should consider `shareFile` to be used to send a file to someone, via mail, message etc 
whereas `showOpenIn` is used to open a file in an application, for playback, editing or even to post to social networks.


## Sharing a File

Displaying an action to share a file is simply a process of calling `shareFile` with the path of the file you wish to share. 
You control which applications are displayed in the share dialog by setting the `mimeType`. 
The system will then only display applications that can handle that type of file.

On iOS this uses the `UIActivityViewController` to display a list of services that support the supplied data.

```actionscript
Share.service.addEventListener( ShareEvent.COMPLETE,	share_shareHandler );
Share.service.addEventListener( ShareEvent.CANCELLED,	share_shareHandler );
Share.service.addEventListener( ShareEvent.FAILED,  	share_shareHandler );
Share.service.addEventListener( ShareEvent.CLOSED,  	share_shareHandler );

// Here we have packaged a file "TestDocument.pdf" in an "assets" folder in our AS application project
var path:String = File.applicationDirectory.nativePath + File.separator + "assets" + File.separator + "TestDocument.pdf";

Share.service.shareFile( path, "TestDocument.pdf", "application/pdf" );
```

```actionscript
private function share_shareHandler( event:ShareEvent ):void
{
	trace( event.type + "::" + event.activityType + "::" + event.error );
}
```


## Opening a File

Similarly to "Sharing a File", opening a file can be used to pass a file to another application, for opening, 
editting or posting to a social network. The major difference here is that sharing just attaches the file to 
an activity whereas opening will actually pass the file data for opening. 

Generally this operation gives better functionality than the share file.

On iOS this uses the `UIDocumentInteractionController` to display a list of applications that can open the specified file.

```actionscript
var path:String = File.applicationDirectory.nativePath + File.separator + "assets" + File.separator + "TestDocument.pdf";

Share.service.showOpenIn( path, "TestDocument.pdf", "application/pdf" );
```


The below shows an example of opening an `igo` (instagram only file) and setting the packageName and UTI to limit the applications
displayed to only be Instagram. We also use the `isApplicationInstalled` to check that Instagram is installed.
More on this function in the [Launch Applications](launch-applications) section.

```actionscript
if (Share.service.isApplicationInstalled( "com.instagram.android", "instagram://app" ))
{
	var instagramImage:File = File.applicationStorageDirectory.resolvePath( "assets/instagram.igo" );
	
	var options:ShareOptions = new ShareOptions();
	options.packageName = "com.instagram.android";
	options.UTI = "com.instagram.photo";
	
	Share.service.showOpenIn( instagramImage.nativePath, "", "image/*", options );
}
```