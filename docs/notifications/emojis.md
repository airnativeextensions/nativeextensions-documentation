---
title: Emojis
sidebar_label: Emojis
---

You can use emojis that are part of Unicode in your notifications wherever the extended unicode character sets are supported, which includes modern Android and iOS releases.

To include them in your text there are several methods.


### HTML Entities

The most reliable is using HTML entities:

```actionscript
Notifications.service.notify(
    new NotificationBuilder()
        .setAlert( "&#x1F601; The alert text" )
        .build()
);
```

In the above case the "Smiley face" emoji has been specified by it's hex code as a HTML entity `&#x1F601;`.

As there are no issues with the encoding of the file or string at any point this method is the most reliable method to display emojis. Other method may fail under different circumstances, such as loading data from a file encoded differently.



### Direct encoding / escaping

You can directly paste a unicode character (or escape sequence) into your code and you should expect it to work

```actionscript
Notifications.service.notify(
    new NotificationBuilder()
        .setAlert( "\u2702 it out!" )
        .build()
);
```

However there are issues with this method whenever any of the files (or filesystems) used are saved in a format (encoding) not supporting the unicode characters. This means this method requires careful management of the encodings in use. 

