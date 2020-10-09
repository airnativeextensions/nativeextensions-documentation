---
title: Device Information - Operating System
sidebar_label: Device Information - Operating System
---


## Operating System

You can also use the device functionality to retrieve information about the operating system 
running on the device. This includes information such as the name and version of the OS.

This allows you to customise your application based on the simpler operating system  
rather than particular device models or manufacturers. 


```actionscript
trace( "OPERATING SYSTEM =======================" );
trace( " name:         " + Application.service.device.os.name );
trace( " type:         " + Application.service.device.os.type );
trace( " version:      " + Application.service.device.os.version );
trace( " API Level:    " + Application.service.device.os.api_level );
```
