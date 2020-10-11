---
title: JOBB Files
sidebar_label: JOBB Files
---

## Creating an OBB file using the JOBB tool

Using the JOBB tool to create an OBB file is probably the best way to provide 
expansion files. Using this method you can package a directory of files into a 
single OBB file and then use the utilities in this extension to virtually access 
the files directly in the package without having to extract the files to another 
location as is generally required with a ZIP file.

The first thing to do is to create a top level directory that will become the 
root level of the package when mounted on the device. The name of this directory 
is arbitrary and will not be used anywhere except in the command to create the 
OBB file. Anything you place in this directory will be packaged into the OBB 
file. In the following examples we have used the directory name assets.

The jobb tool is part of the Android SDK and you will need to get a recent 
version of the SDK installed on your machine to start. If you don't add the 
SDK tools directory to your path you will need to replace the jobb command 
in any of the examples below with the full path to your sdk installation.

You will need to gather some information about this file before you create it. 
You must know :

- your application's package name: air.com.distriqt.test
- your application's current Android version: 1001003
  - This is displayed in the Play Developer console under your APK and is directly related to the version in your application descriptor
- whether this will be a main or a patch expansion file: main

You can then run the command as below:

```
jobb -d assets -o main.1001003.air.com.distriqt.test.obb -pn air.com.distriqt.test -pv 1001003
```

There is one additional option that you may find useful, which is to set an 
encryption key or secretKey. This is used to encrypt your OBB file and is 
then used by your application to decrypt when you mount the OBB file. It is 
another level of protection on your content if you require it. When you mount 
your OBB file later you will need to pass this same key to the mount function.

```
jobb -d assets -o main.1001003.air.com.distriqt.test.obb -k secretKey -pn air.com.distriqt.test -pv 1001003
```

Further information can be found in the JOBB tool documentation:

>
> Tip: If when using the JOBB tool you are getting an "java.io.IOException: FAT Full" 
> error, then try adding more files into your folder. It seems the tool can have 
> issue with a small amount of data.
>


