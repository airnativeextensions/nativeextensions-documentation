---
title: Events
sidebar_label: Events
---

When the application is running the application will receive region and ranging events directly. 
Region exit events can take up to a minute, however an entry event should be quick (~1 second).

The application will also receive region and ranging events when in the background as long as:

- The application has been run at least once since device restart
- The user did not kill the application directly (by quitting the process, not just dismissing it)

If the device has been put to sleep the entry events may take a little longer but they will 
still be received. The ranging events will also not neccessarily be as consistent as when the 
application is running in the foreground.


