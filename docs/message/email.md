---
title: Email
sidebar_label: Email
---

## Sending an Email

Sending an email is a simple task of calling the sendMail function, specifying the subject, body and recipients. If you wish you can also using the sendMailWithOptions function to send more complex data, including:

- CC and BCC recipients;
- file attachments; and
- HTML content;

The following example shows the supported HTML content:

```actionscript
if (Message.isMailSupported)
{
	var email:String = "emailaddress@test.com";
	var subject:String = "Sending HTML email from AIR using the distriqt Message ANE";
	
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
		
	Message.service.sendMailWithOptions( 
		subject, 
		body, 
		email, 
		"",
		"",
		[],
		true
	);
}
```



### Attachments




