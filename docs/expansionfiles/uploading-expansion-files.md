---
title: Uploading Expansion Files
sidebar_label: Uploading Expansion Files
---


Each time you upload an APK using the Google Play Developer Console, you have the 
option to add one or two expansion files to the APK. Each file can be up to 2GB 
and it can be any format you choose, but we recommend you use a compressed file to 
conserve bandwidth during the download. Conceptually, each expansion file plays a 
different role:

- The main expansion file is the primary expansion file for additional resources required by your application.
- The patch expansion file is optional and intended for small updates to the main expansion file.

Each expansion file you upload can be any format you choose (ZIP, PDF, MP4, etc.). 
Regardless of the file type, Google Play considers them opaque binary blobs and 
renames the files using the following scheme:

```
[main|patch].<expansion-version>.<package-name>.obb
```

The simplest way to add resources is to create a zip package of your assets and 
use the Zip utils to extract these to a location your application can access. 
However the better way is to create an OBB file which you can "mount" and then 
access the files directly. See later for more information on creating OBB files 
using the JOBB tool.

You upload this file alongside an APK update. You must take note of the type 
(main / patch), version and the files byte size to use in the next step.

