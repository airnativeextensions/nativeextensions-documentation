---
title: Operating System
sidebar_label: Operating System
---


The information about the operating system is available through the `os` property. This includes information such as the name and version of the OS.

This allows you to customise your application based on the simpler operating system rather than particular device models or manufacturers. 


```actionscript
trace( "OPERATING SYSTEM =======================" );
trace( " name:          " + SystemInfo.instance.os.name );
trace( " type:          " + SystemInfo.instance.os.type );
trace( " version:       " + SystemInfo.instance.os.version );
trace( " API Level:     " + SystemInfo.instance.os.apiLevel );
```

## Examples

Here are some example outputs from the operating system information.

### Android 

```
 name:          Android
 type:          android
 version:       16
 API Level:     36
```

### iOS

```
 name:          iOS
 type:          iOS
 version:       26.1
 API Level:     0
```

### macOS 

```
 name:          tyr
 type:          macOS
 version:       Version 15.7.2 (Build 24G325)
 API Level:     0
```

### Windows 

```
 name:          Microsoft Windows 11 Pro
 type:          windows
 version:       10.0.26200.0
 API Level:     26200
```
