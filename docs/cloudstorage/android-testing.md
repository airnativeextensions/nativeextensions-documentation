---
title: Android Testing
sidebar_label: Android Testing
---


The implemented backup manager works automatically without user interaction and saves and restores the registered shared preferences associated with the user. Simply change and save shared preferences under the file name which you registered your application with.

If you want to test the save and restore operation via the `adb` shell command you can use the following commands.


To schedule a backup and then run the backup process:

```
adb shell bmgr backup air.com.distriqt.test
adb shell bmgr run
```


To restore a backup:

```
adb shell bmgr restore air.com.distriqt.test
```
