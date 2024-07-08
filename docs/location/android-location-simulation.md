---
title: Android Location Simulation
sidebar_label: Android Location Simulation
---

To test a location-aware app that uses Location Services, you don't need to move your device from place to place to generate location data. Instead, you can put Location Services into mock mode. In this mode, you can send mock Location objects to Location Services, which then sends them to location clients. In mock mode, Location Services also uses mock Location objects to trigger geofences. 


## Enable Developer Mode

The first thing you will need to do is enable developer mode on your device. If you haven't already done this you can follow our [guide](/docs/tutorials/android-device-debugging).


## Install a Mock Location application

Next you will need an application that informs the system to enter mock location mode and set the current mock location. There are many of these applications (and it's relatively easy to build your own). The one we have been using is simple and ad free called [FakeGPS](https://play.google.com/store/apps/details?id=com.lexa.fakegps&hl=en_US) however there are many applications available and you can use one that suits your needs.

Once you have installed one, go to the "Developer options" menu (`System / Developer options`) and locate the "Select mock location app" option. You should see the application you have installed listed there. Select it as the mock location app. 


## Simulating the Location

Once you have setup your application as the mock location app you should be able to launch it and use it to set the mock location. Opening your application should now show the mock location. 
