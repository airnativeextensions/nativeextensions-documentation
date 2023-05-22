---
title: Initialisation
sidebar_label: Initialisation
---

In order to access a printer you must first initialise an `EposPrinter` instance via the `initPrinterWithOptions()` method.

This method takes an instance of the `EposPrinterOptions` class as a parameter which specified the printer series and language.


```actionscript
var printer:EposPrinter = 
    Epos.instance.initPrinterWithOptions(
            new EposPrinterOptions()
                    .setPrinterSeries( EposPrinterOptions.TM_T88VII )
                    .setLang( EposPrinterOptions.MODEL_ANK )
    );
```

The `EposPrinter` instance will now form your main access to the printer.



## Connecting 

You will next need to connect to the printer by specifying a target for the `EposPrinter` instance:


```actionscript
printer.connect( "TCP:192.168.1.209", EposFlags.PARAM_DEFAULT );
```

The first parameter is the target string and it specifies the method of connecting to the printer. The connection method varies according to the system configuration.

- TM Printer Models: `<connection type>:<identifier>`

| I/F | Connection type | Identifier | Example |
| --- | --- | --- | --- |
| Wi-Fi/Ethernet | `"TCP"` | IP address in IPv4 format, MAC address or Printer host name | `"TCP:192.168.192.168"` |
| Bluetooth | `"BT"` | BD address | `"BT:00:22:15:7D:70:9C"` |
| USB | `"USB"` | USB Serial number, Omitted | `"USB:000000000000000000"` `"USB:"` |
| Bluetooth Low Energy | `"BLE"` | Bluetooth Low Energy BD address | `"BLE:00:22:15:7D:70:9C"` |

For further variations and explanation refer to the Epos documentation


