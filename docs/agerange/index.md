---
title: AgeRange
hide_title: true
slug: /agerange/
---

![](images/hero.png)

>
> This extension is provided for **free**. If it helps you please consider sponsoring the developers to continue support and development of the extension:
>
> [:heart: Sponsor](https://github.com/sponsors/marchbold)
>


# AgeRange

The [AgeRange](https://airnativeextensions.com/extension/com.distriqt.AgeRange) extension gives you access to 
Google's *Play Age Signals API* and Apple's *Declared Age Range API* to request people to share their age range with your app.

---

Age-gating in applications has always required a careful balance between safety, privacy, and platform compliance. This extension introduces unified support for modern age-verification flows on both iOS and Android, giving developers a consistent and privacy-respecting way to deliver age-appropriate content without handling sensitive personal data.

On iOS 26, Apple’s new **DeclaredAgeRange** API enables apps to request an age range (for example 13+, 16+, or 18+) without ever asking for or storing a user’s birthdate. This allows developers to responsibly tailor features and content while aligning with Apple’s updated privacy and child-safety requirements.

On Android, the extension integrates Google Play’s new Play Age Signals API. This API allows apps to retrieve age-related signals, notify Google Play when major app changes require renewed parental approval, and receive alerts if prior approvals are revoked. These capabilities help developers meet compliance obligations in jurisdictions with age-verification laws—such as Texas, Utah, and Louisiana—while keeping full responsibility for ensuring adherence to all applicable regulations and Google Play policies.

Together, these platform-specific integrations allow developers to implement age-appropriate experiences across both ecosystems using one consistent extension, all while maintaining strong privacy protections and avoiding unnecessary collection of sensitive user data.

---

This extension gives you the tools to assess a user's age range and adapt your application appropriately.

We provide complete guides to get you up and running with age requests quickly and easily.


### Features

- Google's *Play Age Signals API* on Android;
- Apple's *Declared Age Range API* on iOS and macOS;
- Single API interface - your code works across supported platforms with no modifications
- Sample project code and ASDocs reference

As with all our extensions you get access to a year of support and updates as we are 
continually improving and updating the extensions for OS updates and feature requests.


## Documentation

The [documentation site](https://docs.airnativeextensions.com/docs/agerange) forms the best source of detailed documentation for the extension along with the [asdocs](https://docs.airnativeextensions.com/asdocs/agerange). 

Quick Example: 

```actionscript title="AIR"
var request:AgeRangeRequest = new AgeRangeRequest()
        .setAgeGates( 13, 16, 18 );

AgeRange.instance.requestAgeRange(
        request,
        function ( result:AgeRangeResult )
        {
            trace( "success" );
        },
        function ( error:Error )
        {
            trace( "ageRequest ERROR: " + error.message );
        }
);
```


![](images/promo.png)



