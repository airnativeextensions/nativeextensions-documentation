---
title: Centrals and Peripherals
sidebar_label: Centrals and Peripherals
---


In Bluetooth low energy communication, there are two key players: the central and the peripheral. 
Each player has a different role to play in Bluetooth low energy communication.

- A peripheral typically has data that is needed by other devices.
- A central typically uses the information served up by a peripheral to accomplish some task.

Peripherals make their presence known by advertising the data they have over the air. 
Centrals, on the other hand, can scan for peripherals that might have data they're interested in. 
When a central discovers such a peripheral, the central can request to connect with the peripheral 
and begin exploring and interacting with the peripheral's data. The peripheral is then responsible 
for responding to the central in appropriate ways.

Corresponding funtionality is grouped into the two managers accessible through the native extension:

- `BluetoothLE.service.centralManager` exposes the functionality to act as a central
- `BluetoothLE.service.peripheralManager` exposes the functionality to act as a peripheral

