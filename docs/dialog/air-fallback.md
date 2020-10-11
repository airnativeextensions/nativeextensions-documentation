---
title: AIR fallback
sidebar_label: AIR fallback
---

Some of the dialogs have been giving implementations for use in the AIR simulator. 
These are mainly designed for testing and currently only the following dialogs are supported:

- Toasts
- Alert dialog views created with an `AlertBuilder`

We will progressively be adding more of these dialogs, please feel free to request an implementation in github.

In order for these to display, you must inform the Dialog ANE of a container for the dialogs to be displayed. 
Generally this should either be the Stage or a container display object (such as the nativeOverlay property 
in Starling). For example in a simple AIR project you would need:

```actionscript
Dialog.service.root = stage;
```

or for Starling:

```
Dialog.service.root = Starling.current.nativeStage;
```

This will be ignored when on a real device.