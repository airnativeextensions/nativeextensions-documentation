---
title: Contact Images
sidebar_label: Contact Images
---


A contact image is a `BitmapData` object attached to the `Contact` instance. There is no size restriction
on these images and they can be a decent sized image or could be as small as an icon.

```actionscript
contact.image;
```

Contact images can be retrieved as part of the contact list retrieval however we suggest you don't 
use this method as it may lead to a very large memory load in your application.

To load all the contact images:

```actionscript
Contacts.service.getContactListAsync( true ); 
```

Instead we advise that you only load the images of the contacts you require, using the second
paramter to the `getContactDetails` function to indicate you wish to load the image:

```actionscript
Contacts.service.getContactDetails( contactId, true );
```

Additionally you can use the `getContactImage` function to directly load the `BitmapData` image
for the specified contact:

```actionscript
var image:BitmapData = Contacts.service.getContactImage( contactId );
```
