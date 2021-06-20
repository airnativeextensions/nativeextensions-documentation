---
title: Reader Mode
sidebar_label: Reader Mode
---

Reader mode can be used to active scan for tags and read them multiple times. This is useful in the cases where the data changes on the tag so you may need to re-read it at a later point. 

:::info
It is important to note that using reader mode may interfere with the other NFC operations of the device, disabling any peer-to-peer (Android Beam) and card-emulation modes of the NFC adapter on this device.
:::


## Start scanning

To initiate reader mode call `enableReaderMode()`:


```actionscript title="AIR"
NFC.service.enableReaderMode();
```

```csharp title="Unity"
NFC.Instance.EnableReaderMode();
```


While active any detected tags will dispatch a `NFCEvent.ACTION_NDEF_DISCOVERED` event:

```actionscript title="AIR"
NFC.service.addEventListener( NFCEvent.ACTION_NDEF_DISCOVERED, discoveredHandler );

function discoveredHandler( event:NFCEvent ):void
{
    // ndef tag detected
}
```

```csharp title="Unity"
NFC.Instance.OnNdefDiscovered += Instance_OnNdefDiscovered;

void Instance_OnNdefDiscovered(NFCEvent e)
{
    // ndef tag detected
}
```


## Stop scanning

You should make sure to disable reader mode once you have completed scanning by calling `disableReaderMode()`:


```actionscript title="AIR"
NFC.service.disableReaderMode();
```

```csharp title="Unity"
NFC.Instance.DisableReaderMode();
```


## Restart scanning

If you have scanned a tag and wish to re-read it, you will need to call `restart()` to invalidate any scanned tags and rescan them:

```actionscript title="AIR"
NFC.service.restart();
```

```csharp title="Unity"
NFC.Instance.Restart();
```

If a tag scanned previously is still within range then another `NFCEvent.ACTION_NDEF_DISCOVERED` event will be dispatched with the latest payload data.

