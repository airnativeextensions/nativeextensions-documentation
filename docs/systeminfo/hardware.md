---
title: Hardware
sidebar_label: Hardware
---

The information about the device hardware is available through the `hardware` property. This includes information such as the name and brand of the device along with architecture and model information.


```actionscript
trace( "DEVICE INFO ============================" );
trace( " name:         " + SystemInfo.instance.hardware.name );
trace( " brand:        " + SystemInfo.instance.hardware.brand );
trace( " manufacturer: " + SystemInfo.instance.hardware.manufacturer );
trace( " device:       " + SystemInfo.instance.hardware.device );
trace( " model:        " + SystemInfo.instance.hardware.model );
trace( " architecture: " + SystemInfo.instance.hardware.architecture );
trace( " product:      " + SystemInfo.instance.hardware.product );
```

## Examples

### macOS

The output from an Apple Mac Studio:

```
DEVICE INFO ============================
 name:         tyr
 brand:        Apple
 manufacturer: Apple
 device:       Mac
 model:        Mac Studio
 architecture: arm64
 product:      Mac13,1
```

### Windows

The output from an ASUS laptop:

```
DEVICE INFO ============================
 name:         ULLR
 brand:        ASUSTeK COMPUTER INC.
 manufacturer: ASUSTeK COMPUTER INC.
 device:       ROG Zephyrus G14 GA403WP_GA403WP
 model:        ROG Zephyrus G14 GA403WP_GA403WP
 architecture: x64
 product:      x64-based PC
```
