---
title: Load a WebP File
sidebar_label: Load a WebP File
---

If you have access to a WebP file you can use the `loadWebPBitmapData` function 
to read the file and use the `BitmapData` to display the image.

```actionscript
// Find a file packaged with the application
var file:File = File.applicationDirectory.resolvePath( "image.webp" );
var bd:BitmapData = WebP.service.loadWebPBitmapData( path.url );
```
