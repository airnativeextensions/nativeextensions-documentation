---
title: Email
sidebar_label: Email
---

## Support

You can check whether the current user can send emails using the `isMailSupported` call.

This performs some basic checks as to whether the user can send an email.

```actionscript
if (Share.service.email.isMailSupported)
{
	// You should be able to send an email
}
```


- On Apple devices this checks that the user has an email account setup in the settings.
- On Android devices this checks that there is an email client application installed.


## Simple Email

Sending an email is a simple task of calling the `sendMail()` function, specifying the subject, body and recipients.

```actionscript
var email:String = "emailaddress@test.com";
var subject:String = "Sending HTML email from AIR using the distriqt Message ANE";
var body:String = "The body content of the email";

Share.service.email.sendMail( 
	subject, 
	body, 
	email
);
```


## Send Email with Options

 You can use the `sendMailWithOptions()` function to send more complex data, including:

- CC and BCC recipients;
- file attachments; and
- HTML content;


If you wish to send html content you can set the `isHTML` flag in the `sendMailWithOptions()` function to true and the extension will attempt to use the body text as html.

The following example shows the supported HTML content:

```actionscript
var email:String = "emailaddress@test.com";
var subject:String = "Sending HTML email from AIR using the distriqt Message ANE";
var ccRecipients:String = "";
var bccRecipients:String = "";

var body:String = 
		"<div>"+
		"<p>This HTML email was sent using the distriqt <b>Message ANE</b></p>"+
		"A link: <a href='http://airnativeextensions.com'>airnativeextensions.com</a>"+
		"<br/>" +
		"Block: <blockquote>Some quote</blockquote>"+
		"<br/>" +
		"Bold: <b>This text should be bold</b>"+
		"<br/>" +
		"Italic: <i>This text should be italic</i>"+
		"<br/>" +
		"Colour: <font color='#ff0000'>This text should be red</font>"+
		"<div/>" ;

Share.service.email.sendMailWithOptions( 
		subject, 
		body, 
		email, 
		ccRecipients,
		bccRecipients,
		[],             // Attachments (see next section)
		true            // isHTML flag
	);
```

>
> HTML content can depend on the client the user has installed. As this can vary greatly (on Android in particular) the HTML content functionality can have unexpected results in clients that don't respect or accept html content.
>
> Our extension uses the underlying standard method to format and flag the content as html however there are still cases you may encounter issues. We highly recommend you throughly test this feature to make sure it suits your needs.
> 


### Attachments

You can specify an `Array` of `Attachment` objects each representing a file to attach to the email.

You create an attachment using the constructor and passing the native path to the file and we suggest passing a mime type.

```actionscript
var attachmentImage:File = File.applicationStorage.resolvePath( "image.jpg" );

var attachment:Attachment = new Attachment( attachmentFile.nativePath, "image/jpg" );
```

Then you pass your attachments to the send mail function in an `Array`:

```
var attachments:Array = [ attachment ];

Share.service.email.sendMailWithOptions( 
		subject, 
		body, 
		email, 
		"",
		"",
		attachments
	);
```

