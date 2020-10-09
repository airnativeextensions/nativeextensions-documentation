---
title: Connecting
sidebar_label: Connecting
---

## Creating a connection between devices

For a bluetooth connection there must be a 'server' or a listener and a 'client' or connector. 
One device must create a listening connection to accept incoming connections and another device
 must connect to this device.

Each connection has a unique uuid that you should share between your application. A listener 
and a client must have the same uuid in order to initiate a connection.

The simplest way to handle this is to create a listener on both devices and only connect from 
the device initiating the connection.




