---
title: Telephony
sidebar_label: Telephony
---

Provides access to information about the telephony services on the user's device.


## Network Operator

You can retrieve the name of the network operator on the user's device. 

This string is provided by the carrier and formatted for presentation to the user. The value does not change if the user is roaming; it always represents the provider with whom the user has an account.

```actionscript
var networkOperator:String = NetworkInfo.service.telephony.getNetworkOperatorName();
```

If you configure a device for a carrier and then remove the SIM card, this property retains the name of the carrier.

If the device was never configured for a carrier it will return an empty string.


