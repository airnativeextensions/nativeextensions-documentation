---
title: Geocoding
sidebar_label: Geocoding
---


Geocoding is the process of transforming a street address or other description of a location into a (latitude, longitude) coordinate. Reverse geocoding is the process of transforming a (latitude, longitude) coordinate into a (partial) address. The amount of detail in a reverse geocoded location description may vary, for example one might contain the full street address of the closest building, while another might contain only a city name and postal code.


Geocoding is provided through the `Location.service.geocoder` variable which is an instance of the `Geocoder` interface. 



## Support

Not every device will support geocoding. Android devices require a backend service that is not included in the core android framework, however most of the major handset providers do provide this.

In order to determine if geocoding is available you should check the `isSupported` flag.

```actionscript
if (Location.service.geocoder.isSupported)
{
    // Geocoding supported
}
```

If geocoding returns false you should not expect any of the other functionality of the Geocoder implementation to function.


### Windows 

Windows geocoding uses the Azure Maps service and requires you to set the service authentication token before making requests.

Set the Azure Maps subscription key before using geocoding:

```actionscript
// Set Azure Maps subscription key before using geocoding
Location.service.geocoder.setServiceToken("YOUR_AZURE_MAPS_SUBSCRIPTION_KEY");
```

For Windows (Azure Maps):

- Sign in to the Azure Portal: https://portal.azure.com/
- Click "Create a resource" and search for "Azure Maps"
- Create an Azure Maps account and choose either Gen2 or Gen1 S0 for the free tier
- Once deployed, go to the resource
- In the left menu, click "Authentication" under Settings
- Copy the Primary Key. This is your subscription key

:::info Pricing
At the time of publishing:
- Free tier (Gen1 S0) includes 250,000 transactions/month. 
- Gen2 pay-as-you-go includes 1,000 free transactions/month, then around $0.50 per 1,000 transactions.

Please confirm the details when enabling maps to make sure it suits your requirements.
:::


## Reverse Geocoding

Reverse-geocoding requests take a latitude and longitude value and find a user-readable address.

This is done by using the `getFromLocation()` function and passing the latitude and longitude of interest. 

This function will return either `true` or `false` indicating whether the operation was started successfully.
You also need to pass in a `maxResults` value, indicating the maximum number of results you wish to be returned. 


```actionscript
var success:Boolean = Location.service.geocoder.getFromLocation( -27.493222, 152.9912969, 5 );
```


Calling `getFromLocation()` will result in an event being dispatch when the geocoding is complete:

- `GeocoderEvent.GET_FROM_LOCATION_COMPLETE`: Dispatched when the call has completed and geocoding results are available


When the complete event is dispatched the event will contain the array of geocoded addresses. An address is represented by the `Address` class:

```actionscript
Location.service.geocoder.addEventListener( GeocoderEvent.GET_FROM_LOCATION_COMPLETE, completeHandler );
Location.service.geocoder.getFromLocation( -27.493222, 152.9912969, 5 );

function completeHandler( event:GeocoderEvent ):void 
{
    for each (var address:Address in event.addresses)
    {
        for (var i:int = 0; i < address.addressLines.length; i ++)
        {
            message( "ADDRESS: " + address.addressLines[i] );
        }
        message( "ADDRESS: locality : " + address.locality );
        message( "ADDRESS: postCode : " + address.postCode );
        message( "ADDRESS: country  : " + address.countryName );
    }
}
```



## Forward Geocoding

Forward-geocoding requests take a user-readable address and find the corresponding latitude and longitude value. Forward-geocoding requests may also return additional information about the specified location, such as a point of interest or building at that location.


This is done by using the `getFromLocationName()` function and passing the string description of the location. 

This function will return either `true` or `false` indicating whether the operation was started successfully.
You also need to pass in a `maxResults` value, indicating the maximum number of results you wish to be returned. 


```actionscript
var success:Boolean = Location.service.geocoder.getFromLocationName( "Parliament Dr, Canberra ACT 2600", 5 );
```


Calling `getFromLocation()` will result in an event being dispatch when the geocoding is complete:

- `GeocoderEvent.GET_FROM_LOCATION_NAME_COMPLETE`: Dispatched when the call has completed and geocoding results are available


When the complete event is dispatched the event will contain the array of geocoded addresses. An address is represented by the `Address` class:

```actionscript
Location.service.geocoder.addEventListener( GeocoderEvent.GET_FROM_LOCATION_NAME_COMPLETE, completeHandler );
Location.service.geocoder.getFromLocationName( "Parliament Dr, Canberra ACT 2600", 5 );

function completeHandler( event:GeocoderEvent ):void 
{
    for each (var address:Address in event.addresses)
    {
        for (var i:int = 0; i < address.addressLines.length; i ++)
        {
            message( "ADDRESS: " + address.addressLines[i] );
        }
        message( "ADDRESS: locality : " + address.locality );
        message( "ADDRESS: postCode : " + address.postCode );
        message( "ADDRESS: country  : " + address.countryName );
    }
}
```


