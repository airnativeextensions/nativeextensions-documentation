---
title: Targeting
sidebar_label: Targeting
---

This guide explains how to provide targeting information to an ad request.



## RequestConfiguration

`RequestConfiguration` is an object that collects targeting information to be applied globally. 

To update the request configuration retrieve the current configuration and perform any desired updates as follows:


```actionscript
var requestConfiguration:RequestConfiguration = Adverts.service.getRequestConfiguration();

requestConfiguration.setTagForChildDirectedTreatment( 
        RequestConfiguration.TAG_FOR_CHILD_DIRECTED_TREATMENT_FALSE
);

Adverts.service.setRequestConfiguration( requestConfiguration );
```



### Child-directed setting

For purposes of the [Children's Online Privacy Protection Act (COPPA)](http://business.ftc.gov/privacy-and-security/children%27s-privacy), there is a setting called "tag for child-directed treatment". By setting this tag, you certify that this notification is accurate and you are authorized to act on behalf of the owner of the app. You understand that abuse of this setting may result in termination of your Google account.

> Note: It may take some time for this designation to take effect in applicable Google services.

As an app developer, you can indicate whether you want Google to treat your content as child-directed when you make an ad request. If you indicate that you want Google to treat your content as child-directed, we take steps to disable IBA and remarketing ads. 

- Call `setTagForChildDirectedTreatment()` with `TAG_FOR_CHILD_DIRECTED_TREATMENT_TRUE` to indicate that you want your content treated as child-directed for purposes of COPPA.
- Call `setTagForChildDirectedTreatment()` with `TAG_FOR_CHILD_DIRECTED_TREATMENT_FALSE` to indicate that you don't want your content treated as child-directed for purposes of COPPA.
- Call `setTagForChildDirectedTreatment()` with `TAG_FOR_CHILD_DIRECTED_TREATMENT_UNSPECIFIED` if you do not wish to indicate how you would like your content treated with respect to COPPA in ad requests.

The following example indicates that you want your content treated as child-directed for purposes of COPPA:

```actionscript
var requestConfiguration:RequestConfiguration = Adverts.service.getRequestConfiguration()
        .setTagForChildDirectedTreatment( RequestConfiguration.TAG_FOR_CHILD_DIRECTED_TREATMENT_TRUE )
;
Adverts.service.setRequestConfiguration( requestConfiguration );
```


### Users under the age of consent

You can mark your ad requests to receive treatment for users in the European Economic Area (EEA) under the age of consent. This feature is designed to help facilitate compliance with the [General Data Protection Regulation (GDPR)](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32016R0679). Note that you may have other legal obligations under GDPR. Please review the European Union’s guidance and consult with your own legal counsel. Please remember that Google's tools are designed to facilitate compliance and do not relieve any particular publisher of its obligations under the law. [Learn more about how the GDPR affects publishers](https://support.google.com/admob/answer/7666366).

When using this feature, a Tag For Users under the Age of Consent in Europe (TFUA) parameter will be included in the ad request. This parameter disables personalized advertising, including remarketing, for that specific ad request. It also disables requests to third-party ad vendors, such as ad measurement pixels and third-party ad servers.

Like child-directed settings, there is a method in `RequestConfiguration` for setting the TFUA parameter: `setTagForUnderAgeOfConsent`, with the following options:

- Call `setTagForUnderAgeOfConsent()` with `TAG_FOR_UNDER_AGE_OF_CONSENT_TRUE` to indicate that you want the ad request to receive treatment for users in the European Economic Area (EEA) under the age of consent.
- Call `setTagForUnderAgeOfConsent()` with `TAG_FOR_UNDER_AGE_OF_CONSENT_FALSE` to indicate that you want the ad request to not receive treatment for users in the European Economic Area (EEA) under the age of consent.
- Call `setTagForUnderAgeOfConsent()` with `TAG_FOR_UNDER_AGE_OF_CONSENT_UNSPECIFIED` to indicate that you have not specified whether the ad request should receive treatment for users in the European Economic Area (EEA) under the age of consent.

The following example indicates that you want TFUA included in your ad request:

```actionscript
var requestConfiguration:RequestConfiguration = Adverts.service.getRequestConfiguration()
        .setTagForUnderAgeOfConsent( RequestConfiguration.TAG_FOR_UNDER_AGE_OF_CONSENT_TRUE )
;
Adverts.service.setRequestConfiguration( requestConfiguration );
```

The tags to enable the Child-directed setting and `setTagForUnderAgeOfConsent` should not both simultaneously be set to true. If they are, the child-directed setting takes precedence.




### Ad content filtering

Apps can set a maximum ad content rating for their ad requests using the `setMaxAdContentRating()` function. AdMob ads returned have a content rating at or below that level. The possible values for this network extra are based on digital content label classifications, and should be one of the following values:

- `RequestConfiguration.MAX_AD_CONTENT_RATING_G`
- `RequestConfiguration.MAX_AD_CONTENT_RATING_PG`
- `RequestConfiguration.MAX_AD_CONTENT_RATING_T`
- `RequestConfiguration.MAX_AD_CONTENT_RATING_MA`

The following code configures an `RequestConfiguration` object to specify that ad content returned should correspond to a digital content label designation no higher than G:

```actionscript
var requestConfiguration:RequestConfiguration = Adverts.service.getRequestConfiguration()
        .setMaxAdContentRating( RequestConfiguration.MAX_AD_CONTENT_RATING_G )
;
Adverts.service.setRequestConfiguration( requestConfiguration );
```

>
> Note: Content rating filter settings specified via the SDK will override any settings configured using the AdMob UI.
>


## Ad request

The AdRequest object collects targeting information to be sent with an ad request.


### Consent from European Users

:::caution
This is legacy information, you should look into the [User Messaging Platform](user-messaging-platform) for the current approach that automatically applies this information
:::

Under the Google [EU User Consent Policy](https://www.google.com/about/company/user-consent-policy.html), you must make certain disclosures to your users in the European Economic Area (EEA) and obtain their consent to use cookies or other local storage, where legally required, and to use personal data (such as AdID) to serve ads. This policy reflects the requirements of the EU ePrivacy Directive and the General Data Protection Regulation (GDPR). To support publishers in meeting their duties under this policy, Google offers a Consent SDK.

Ads served by Google can be categorized as personalized or non-personalized, both requiring consent from users in the EEA. By default, ad requests to Google serve personalized ads, with ad selection based on the user's previously collected data. Google also supports configuring ad requests to serve non-personalized ads. [Learn more about personalized and non-personalized ads.](https://support.google.com/admob/answer/7676680)


You should ensure that somewhere in your application you ask for consent from your users to serve personalised ads. Once you have retrieved this response from your user if they have denied consent then ensure you pass it to your `AdRequest`s.

The default behavior of the Google Mobile Ads SDK is to serve personalized ads. If a user has consented to receive only non-personalized ads, you can configure an `AdRequest` object with the following code to specify that only non-personalized ads should be returned:

```actionscript
var request:AdRequest = new AdRequestBuilder()
        .nonPersonalisedAds( true )
        .build();
```

You must add this to all your `AdRequest`s.


Further information:
  - [Google EU User Consent Policy](https://www.google.com/about/company/user-consent-policy.html)





